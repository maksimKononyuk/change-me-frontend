import { useDispatch, useSelector } from 'react-redux';
import {
  loginAction,
  logoutAction,
  setEmailAction,
  setPhoneAction,
  getInitializeAction,
  setLoadingAction,
} from 'dan-redux/actions/authActions';
import axios from '../utils/axios';
// import axios from "dan-utils/axios";
// redux

// ----------------------------------------------------------------------

// TODO: Поправить функция валидности токена
// const isValidToken = (accessToken) => {
//   if (!accessToken) {
//     return false;
//   }
//   const decoded = jwtDecode(accessToken);
//   const currentTime = Date.now() / 1000;

//   return decoded.exp > currentTime;
// };
const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

function getInitialize(dispatch) {
  return async () => {
    console.log('GET INITIALIZE');
    dispatch(setLoadingAction(true));
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      // TODO: Возможно сюда вставить функционал флага remember me
      if (accessToken) {
        setSession(accessToken);
        const response = await axios.get('auth/user');
        const user = response.data;
        dispatch(getInitializeAction({ user, isAuthenticated: true }));

        return;
      }
      dispatch(getInitializeAction({ user: null, isAuthenticated: false }));
    } catch (e) {
      console.error(e);
      dispatch(getInitializeAction({ user: null, isAuthenticated: false }));
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
}

function register(dispatch) {
  return async ({ email, phone, roleId }) => {
    await axios.post('auth/register', {
      ...(email ? { email } : { phone }),
      role_id: roleId,
    });

    if (email) {
      dispatch(setEmailAction(email));
      return;
    }
    dispatch(setPhoneAction(phone));
  };
}

function login(dispatch) {
  return async ({ email, password, phone, rememberMe = false }) => {
    setSession(null);
    // TODO: Реализовать авторизацию
    // TODO: Добавить сохранение флага запоминания

    const response = await axios.post('auth/login', {
      ...(email ? { email } : { phone }),
      password,
      // TODO: Исправить device name
      device: 'Asus',
    });

    const { access_token: accessToken, user } = response.data;
    // TODO: Добавить логику rememberMe
    setSession(accessToken);
    dispatch(loginAction(user));
  };
}

function resetPassword(dispatch) {
  return async ({ email, phone }) => {
    await axios.post('auth/login', {
      ...(email ? { email } : { phone }),
      // TODO: Исправить device name
      device: 'Asus',
    });

    if (email) {
      dispatch(setEmailAction(email));
      return;
    }
    dispatch(setPhoneAction(phone));
  };
}

function logout(dispatch) {
  return async () => {
    try {
      console.log('LOGOUT');

      dispatch(logoutAction);

      await axios.get('auth/user/logout?from_all_devices=1');
    } catch (exc) {
      console.error(exc);
    } finally {
      setSession(null);
    }
  };
}

export default function useAuth() {
  const dispatch = useDispatch();
  const { user, isLoading, isAuthenticated, email, phone } = useSelector(
    (state) => state.auth
  );

  return {
    email,
    phone,

    user,

    // Если пользователь не авторизован выставляется ID клиента
    roleId: user?.role?.id || 4,

    isLoading,
    isAuthenticated,

    getInitialize: getInitialize(dispatch),

    register: register(dispatch),

    resetPassword: resetPassword(dispatch),

    login: login(dispatch),

    logout: logout(dispatch),
  };
}
