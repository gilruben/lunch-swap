const LOG_IN = 'LOG_IN';

const log_in = () => ({
    type: LOG_IN,
    payload: {
      userId: 'gilruben'
    },
    meta: {
      transition: (prevState, nextState, action) => ({
          pathname: `/logged-in/${action.payload.userId}`
      })
    }
})

export {LOG_IN, log_in}
