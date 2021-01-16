import BASE_URL from '../index'

export const fetchShark = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}/shark_tank_cards`)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse)
      dispatch({type: 'ADD_SHARK', sharkCards: jsonResponse})
    })
  }
}