const gameReducer = (state = {squares: [], players: [], loading: false}, action) => {
  switch (action.type) {
    case "LOAD_GAMESQUARES":
      return {
        ...state,
        squares: [...state.squares],
        loading: true
      }
    case "ADD_GAMESQUARES":
      return {
        ...state,
        squares: action.squares,
        loading: false
      }
    case 'LOAD_GAME':
      return {
        ...state,
        players: [...state.players]
      }
    case 'CREATE_GAME':
      return {
      }
    default:
      return state
  }
}

export default gameReducer