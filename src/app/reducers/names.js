const initState = {
  data: {},
  isLoading: false
}

const MainReducer = (state = initState, action) => {
  switch(action.type) {

    case 'FETCHED':
      return {
        ...state,
        isLoading: false,
        name: action.name
      }

    case 'FETCHING':
      return {
        ...state.date,
        isLoading: true
      }

    default:
      return state
  }
}


export default MainReducer;