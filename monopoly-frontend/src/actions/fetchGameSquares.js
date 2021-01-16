import BASE_URL from '../index'

export const fetchGameSquares = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}/game_squares`)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'ADD_GAMESQUARES', squares: jsonResponse})
    })
  }
}