const gameReducer = (state = {squares: [], players: [], loading: false}, action) => {
  switch (action.type) {
    case "ADD_GAMESQUARES":
      return {
        ...state,
        squares: action.squares,
        loading: false
      }
    case "LOAD_GAMESQUARES":
      return {
        ...state,
        squares: [...state.squares],
        loading: true
      }
    default:
      return state
  }
}

export default gameReducer