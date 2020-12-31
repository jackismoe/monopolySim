import BASE_URL from '../index'

export const fetchPostPlayer = (settings) => {
  return (dispatch) => {
    dispatch({type: 'LOAD_PLAYER'})
    fetch(`${BASE_URL}/players`, {
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
      dispatch({type: 'ADD_PLAYER', player: jsonResponse})
      console.log(jsonResponse)
    })
  }
}