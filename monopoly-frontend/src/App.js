import React from 'react'
import GameBoard from './components/GameBoard'
import PlayerInfo from './components/PlayerInfo'
import HighScores from './components/HighScores'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <HighScores/>
        <GameBoard/>
        <PlayerInfo/>
      </div>
    )
  }
}