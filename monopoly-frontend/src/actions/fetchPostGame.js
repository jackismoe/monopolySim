import BASE_URL from '../index'

export const fetchPostGame = (settings) => {
  return (dispatch) => {
    dispatch({type: 'LOAD_GAME'})
    fetch(`${BASE_URL}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        settings: settings
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'CREATE_GAME', game: jsonResponse})
    })
  }
}