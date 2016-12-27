import {browserHistory} from 'react-router';
import $ from 'jquery';

export const LOG_IN = 'LOG_IN';

export const log_in = (payload) => ({
    type: LOG_IN,
    payload: payload
})

export const loginAsync = (loginInfo) => (dispatch) => {
  $.ajax({
    url: '/auth/login',
    type: 'POST',
    data: loginInfo,
    error(data){
      //console.log('responseJSON: ',data.responseJSON.loginMsg)
      dispatch(log_in(data.responseJSON));
    }
  }).done((data) => {
    dispatch(log_in(data));
    browserHistory.push('/findfood');
  })
}
