import $ from 'jquery';
import store from './store/store';

export const verifySignedIn = (nextState, replace, cb) => {

}

export const verify = (nextState, replace, cb, route) => {
  if(!route) route = '/signin';

  $.ajax({
    url: '/auth/verify',
    type: 'GET'
  })
  .fail((data) => {
    replace(route);
    cb();

    return data;
  })
  .done((data) => {
    cb();
  })

};
