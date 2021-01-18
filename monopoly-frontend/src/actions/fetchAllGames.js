import BASE_URL from '../index'

export const fetchAllGames = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}/all_games`)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'LOAD_ALL', games: jsonResponse})
    })
  }
}