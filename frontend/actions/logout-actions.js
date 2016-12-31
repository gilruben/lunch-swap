import $ from 'jquery';
import {browserHistory} from 'react-router';

export const LOG_OUT = 'LOG_OUT';

export const log_out = () => ({
  type: LOG_OUT
})


//When this function is ran, it will destroy the users session and clear
//their login state
export const logoutAsync = () => (dispatch) => {

  $.ajax({
    url: '/auth/logout',
    type: 'POST'
  })
  .done((data) => {
    dispatch(log_out());
    browserHistory.push('/signin');
  })
}
