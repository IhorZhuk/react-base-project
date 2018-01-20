const initState = {
  message: 'Init mesage'
}

const MainReducer = (state = initState, action) => {
  switch(action.type) {
    case 'MAIN':
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}


export default MainReducer;