const gameReducer = (state = {squares: [], players: [], loading: false}, action) => {
  switch (action.type) {
    case "LOAD_GAMESQUARES":
      return {
        ...state,
        squares: [],
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
        players: []
      }
    case 'CREATE_GAME':
      return {
      }
    case 'LOAD_PLAYERS':
      return {
        ...state,
        players: [...state.players]
      }
    case 'ADD_PLAYERS':
      return {
        ...state,
        players: [action.players.playerOne, action.players.playerTwo, action.players.playerThree, action.players.playerFour]
      }
    default:
      return state
  }
}

export default gameReducer