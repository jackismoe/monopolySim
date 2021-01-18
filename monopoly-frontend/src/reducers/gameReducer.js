const gameReducer = (state = {allGames: [], squares: [], players: [], ventureCards: [], sharkCards: []}, action) => {
  switch (action.type) {
    case "ADD_GAMESQUARES":
      return {
        ...state,
        squares: action.squares,
        loading: false
      }
    case 'CREATE_GAME':
      return {
        ...state,
        gameId: action.game.id
      }
    case 'ADD_PLAYERS':
      return {
        ...state,
        players: [action.game.playerOne, action.game.playerTwo, action.game.playerThree, action.game.playerFour],
        gameId: action.game.playerOne.gameId
      }
    case 'ADD_VENTURE':
      return {
        ...state,
        ventureCards: action.ventureCards
      }
    case 'ADD_SHARK':
      return {
        ...state,
        sharkCards: action.sharkCards
      }      
    case 'SAVE_GAME':
    case 'LOAD_ALL':
      return {
        ...state,
        allGames: action.games
      }

    // eslint-disable-next-line
    default:
      return state
  }
}

export default gameReducer