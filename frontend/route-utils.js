import store from './store/store';
import loginAsync from './actions/login-actions';

export const login = () => {store.dispatch(loginAsync())};
