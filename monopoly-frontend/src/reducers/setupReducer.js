const setupReducer = (state = {players: [], loading: false}, action) => {
  switch (action.type) {
    case 'LOAD_PLAYER':
      return {
        ...state,
        players: [...state.player],
        loading: true
      }
    case "ADD_PLAYER":
      return {
        ...state,
        player: [...state.player, action.player],
        loading: false
      }
    default:
      return state
  }
}

export default setupReducer