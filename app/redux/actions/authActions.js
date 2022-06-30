import * as types from '../constants/authConstants';

export const setLoadingAction = (isLoading) => ({
  type: types.SET_LOADING,
  isLoading,
});

export const getInitializeAction = ({ isAuthenticated, user }) => ({
  type: types.GET_INITIALIZE,
  isAuthenticated,
  user,
});

export const loginAction = (user) => ({
  type: types.LOGIN,
  user,
});

export const updateUserAction = (user) => ({
  type: types.UPDATE_USER,
  user,
});

export const setPhoneAction = (phone) => ({
  type: types.SET_PHONE,
  phone,
});

export const setEmailAction = (email) => ({
  type: types.SET_EMAIL,
  email,
});

export const logoutAction = { type: types.LOGOUT };
