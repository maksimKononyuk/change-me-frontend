/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { connectRouter } from 'connected-react-router';
import history from 'utils/history';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import login from './modules/login';
import profileEdit from './modules/profileEdit';
import uiReducer from './modules/ui';
import authReducer from './modules/auth';
import initval from './modules/initForm';
import chatdReducer from '../containers/Pages/Chat/reducers/chatReducer';
import contactReducer from '../containers/Pages/Contact/reducers/contactReducer';

const persistConfig = {
  key: 'dandelion',
  storage,
  whitelist: ['ui'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['isAuthenticated', 'email', 'phone'],
};

/**
 * Creates the main reducer with the dynamically injected ones
 */
function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    login,
    ui: uiReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    initval,
    language: languageProviderReducer,
    router: connectRouter(history),
    profileEdit,

    ...injectedReducers,
    chat: chatdReducer,
    contact: contactReducer,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}

export { createReducer, persistConfig };
