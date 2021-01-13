import React from 'react'
import {v4 as uuid} from "uuid"

export default class Player extends React.Component { 

  appendToGo = (playerId) => {
    for (let x = 1; x <= 4; x ++) {
      let goPlayerSlot = document.getElementsByName('1')[0].children[1]
      let gamePiece = document.querySelector(`#playerIcon${playerId}`)
      goPlayerSlot.appendChild(gamePiece)
    }
  }
  appendForLoop = () => {
    for (let x = 1; x <= 4; x ++) {
      this.appendToGo(x)
    }
  }
  componentDidMount() {
    setTimeout(this.appendForLoop, 100)
  }

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

    this.handleMove(currentPlayer, currentPlayer.currentPosition)
    currentPlayer.isTurn = false
    nextPlayer.isTurn = true
  }


  static handleMove = (currentPlayer, currentSpace) => {
    switch (currentSpace) {
      case 3||18||34:
        this.drawVenture()
        break
      case 8||23||37:
        this.drawShark()
        break
      case 21:
        console.log('freeParking')
        // take money and add it to player
        break
      case 31:
        console.log('goToJail')
        // send player to space #11 for three turns
        break
      case 1:
        console.log('go')
        // if player lands here give them $200
        break
      case 5:
        console.log('incomeTax')
        // pay 10% of total income, or $200, whichever is higher
        break
      case 11:
        console.log('justVisting')
        break
      case 39:
        console.log('luxuryTax')
        //
        break
      default:
        window.confirm('This space is available. Would you like to buy it?')
    }
  }

  static drawVenture() {
    console.log('venture')
  }

  static drawShark() {
    console.log('shark')
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