import React from 'react'
import Player from '../stateful/Player'

export default class Dice extends React.Component {
  roll = () => {
    let firstDie = document.querySelector('.firstNumber')
    let secondDie = document.querySelector('.secondNumber')

    let firstNumber = Math.floor((Math.random() * 6) + 1)
    let secondNumber = Math.floor((Math.random() * 6) + 1)
    
    firstDie.innerText = firstNumber
    secondDie.innerText = secondNumber

    let total = firstNumber + secondNumber
    Player.movePlayerPiece(total, this.props.players)
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