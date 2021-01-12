import React from 'react'
import {v4 as uuid} from "uuid"

export default class Player extends React.Component { 
  
  static movePlayerPiece = (rollTotal, allPlayers) => {
    // eslint-disable-next-line
    let currentPlayer = allPlayers.filter(player => player.isTurn == true)[0]
    currentPlayer.currentPosition += rollTotal
    
    if (currentPlayer.currentPosition > 40) {
      let spacesFromGo = currentPlayer.currentPosition - 40
      currentPlayer.currentPosition = 0
      currentPlayer.currentPosition += spacesFromGo
    }
    
    let playerIcon = document.querySelector(`#playerIcon${currentPlayer.id}`) 
    let squareToMoveTo = document.getElementsByName(`${currentPlayer.currentPosition}`)[0]
    
    squareToMoveTo.appendChild(playerIcon)

    let nextPlayer
    if (currentPlayer.id !== 4) {
      nextPlayer = allPlayers.find(player => player.id == (currentPlayer.id + 1))
    } else {
      nextPlayer = allPlayers.find(player => player.id == 1)
    }

    currentPlayer.isTurn = false
    nextPlayer.isTurn = true
  }
  
  appendToGo = (playerId) => {
    let goPlayerSlot = document.getElementsByName('1')[0].children[1]
    let gamePiece = document.querySelector(`#playerIcon${playerId}`)
    goPlayerSlot.appendChild(gamePiece)
  }
  
  render() {
    return (
      <>
        {this.props.players && this.props.players.map((player, idx) => {
          return (
            <>
              <div id={`playerIcon${idx+1}`} key={uuid()}></div>
            </>
          )
        })}
      </>
    )
  }
}

Player.defaultProps = { 
  players: []
}

// const mapStateToProps = state => {
//   return {
//     players: state.players,
//   }
// }