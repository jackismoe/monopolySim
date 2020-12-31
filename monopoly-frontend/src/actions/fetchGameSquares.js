import BASE_URL from '../index'

export const fetchGameSquares = () => {
  return (dispatch) => {
    dispatch({type: 'LOAD_GAMESQUARES'})
    fetch(`${BASE_URL}/game_squares`)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'ADD_GAMESQUARES', squares: jsonResponse})
      console.log(jsonResponse)
    })
  }
}