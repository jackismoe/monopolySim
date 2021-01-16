import React from 'react'
import BASE_URL from '../index'

export default class LoadGame extends React.Component {


  fetchGames = async () => {
    const response = await fetch(`${BASE_URL}/all_games`)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    this.setState({
      games: jsonResponse
    })

    // jsonResponse.map(game => {
    //     <div id='previousGame'>
    //       <h2>{game.id}</h2>
    //       <h4>{game.startingCash}</h4>
    //       <p>{game.playerOne}</p>
    //       <p>{game.playerTwo}</p>
    //       <p>{game.playerThree}</p>
    //       <p>{game.playerFour}</p>
    //     </div>
    // })
  }

  constructor() {
    super()
    this.state = {
      games: []
    }
  }

  render() {
    return (
    <ul>
    </ul>
    )
  }
}