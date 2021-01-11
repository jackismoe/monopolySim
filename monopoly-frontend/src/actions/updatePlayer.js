import BASE_URL from '..index'

export const updatePlayer = (player, gameId) => {
  return (dispatch) => {
    dispatch({type: 'UPDATING'})
    fetch(`${BASE_URL}/games`)
  }
}