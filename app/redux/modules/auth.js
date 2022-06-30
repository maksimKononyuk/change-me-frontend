import produce from 'immer';
import {
  LOGIN,
  LOGOUT,
  SET_EMAIL,
  SET_PHONE,
  GET_INITIALIZE,
  SET_LOADING,
  UPDATE_USER,
} from '../constants/authConstants';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  email: null,
  phone: null,
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action = {}) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING:
        draft.isLoading = action.isLoading;
        break;

      case GET_INITIALIZE:
        draft.isAuthenticated = action.isAuthenticated;
        draft.user = action.user;
        break;

      case SET_EMAIL:
        draft.email = action.email;
        break;
      case SET_PHONE:
        draft.phone = action.phone;
        break;

      case LOGIN:
        draft.user = action.user;
        draft.isAuthenticated = true;
        break;

      case UPDATE_USER:
        draft.user = action.user;
        break;

      case LOGOUT:
        draft.user = null;
        draft.isAuthenticated = false;
        break;
      default:
        break;
    }
  });

export default authReducer;
