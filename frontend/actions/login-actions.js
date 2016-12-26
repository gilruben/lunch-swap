export const LOG_IN = 'LOG_IN';

export const log_in = (isVerified) => ({
    type: LOG_IN,
    payload: isVerified
})

export const loginAsync = (loginInfo) => (dispatch) => {
  $.ajax({
    url: '/auth/signin',
    type: 'POST',
    data: loginInfo
  }).done(() => {
    dispatch(log_in(data))
  })
}
