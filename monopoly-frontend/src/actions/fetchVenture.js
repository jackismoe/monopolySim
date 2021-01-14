import BASE_URL from '../index'

export const fetchVenture = () => {
  return (dispatch) => {
    dispatch({type: 'LOAD_VENTURE'})
    fetch(`${BASE_URL}/venture_fund_cards`)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse)
      dispatch({type: 'ADD_VENTURE', ventureCards: jsonResponse})
    })
  }
}