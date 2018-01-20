const initState = {
  message: 'Init message'
}

const SecondReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SECOND':
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}


export default SecondReducer;