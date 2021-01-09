import React from 'react'
import Player from '../stateful/Player'

export default class Dice extends React.Component {
  currentPlayer = 1

  roll = () => {
    let firstDie = document.querySelector('.firstNumber')
    let secondDie = document.querySelector('.secondNumber')

    let firstNumber = Math.floor((Math.random() * 6) + 1)
    let secondNumber = Math.floor((Math.random() * 6) + 1)
    
    firstDie.innerText = firstNumber
    secondDie.innerText = secondNumber

    let total = firstNumber + secondNumber
    this.movePlayerPiece(total)
  }

  movePlayerPiece = (rollTotal) => {
    let player = this.props.players.filter(player => player.id == this.currentPlayer)[0]
    player.currentPosition += rollTotal

    if (player.currentPosition > 40) {
      let spacesFromGo = player.currentPosition - 40
      player.currentPosition = 0
      player.currentPosition += spacesFromGo
    }

    let playerIcon = document.querySelector(`#playerIcon${player.id}`)
    let squareToMoveTo = document.getElementsByName(`${player.currentPosition}`)[0]

    squareToMoveTo.appendChild(playerIcon)

    if (this.currentPlayer < 4) {
      this.currentPlayer++
    } else {
      this.currentPlayer = 1
    }
  }

  render() {
    return(
      <div id='dice' className='dice'>
        <div className='firstNumber'></div>
        <div className='secondNumber'></div>
        <button onClick={this.roll}>Roll</button>
      </div>
    )
  }
}