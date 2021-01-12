import BASE_URL from '../index'

export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch({type: 'LOAD_PLAYERS'})
    fetch(`${BASE_URL}/games`)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'ADD_PLAYERS', game: jsonResponse})
    })
  }
}