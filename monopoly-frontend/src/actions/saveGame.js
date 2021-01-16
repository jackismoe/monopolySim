import BASE_URL from '../index'

export const saveGame = (currentGame) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/games/${currentGame.gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentGame: currentGame
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'SAVE_GAME', game: jsonResponse})
    })
  }
}