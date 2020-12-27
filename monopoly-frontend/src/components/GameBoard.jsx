import React from 'react'
import GameSquares from './GameSquares'
import VentureCards from './VentureCards'
import SharkCards from './SharkCards'
import Dice from './Dice'
import PlayerIcon from './PlayerIcon'

export default class GameBoard extends React.Component {
  render() {
    return(
      <>
      <br></br>
        <GameSquares/>
        <VentureCards/>
        <SharkCards/>
        <Dice/>
        <PlayerIcon/>
      <br></br>
      </>
    )
  }
}