import $ from 'jquery';
import { browserHistory } from 'react-router'

// export const VERIFY_AUTH = 'VERIFY_AUTH';
//
// export const verify_auth = () => {
//
// }

export const verifyAuthAsync = () => (dispatch) => {
  console.log('Verifying...')

  $.ajax({
    url: '/auth/verify',
    type: 'GET',
    error(data){
      console.log(data);
      browserHistory.push('/signin');
    }
  })
}
