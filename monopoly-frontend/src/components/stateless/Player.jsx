import React from 'react'
import {v4 as uuid} from "uuid"

export default class Player extends React.Component { 

  roll = () => {
    let firstDie = document.querySelector('.firstNumber')
    let secondDie = document.querySelector('.secondNumber')

    let firstNumber = Math.floor((Math.random() * 6) + 1)
    let secondNumber = Math.floor((Math.random() * 6) + 1)
    
    firstDie.innerText = firstNumber
    secondDie.innerText = secondNumber

    let total = firstNumber + secondNumber
    this.movePlayerPiece(total, this.props.players)
  }

  movePlayerPiece = (rollTotal, allPlayers) => {
    // eslint-disable-next-line

    let currentPlayer = allPlayers.filter(player => (player.isTurn == true) && (player.gameId == allPlayers[0].gameId)  )[0]

    const actuallyMoveThePiece = () => {
      currentPlayer.currentPosition += rollTotal
      
      if (currentPlayer.currentPosition > 40) {
        let spacesFromGo = currentPlayer.currentPosition - 40
        currentPlayer.currentPosition = 0
        currentPlayer.currentPosition += spacesFromGo
      }

      let playerIcon = document.querySelector(`#playerIcon${currentPlayer.playerId}`) 
      let squareToMoveTo = document.getElementsByName(`${currentPlayer.currentPosition}`)[0]
      
      squareToMoveTo.appendChild(playerIcon)

      let nextPlayer
      if (currentPlayer.playerId !== 4) {
        nextPlayer = allPlayers.find(player => player.playerId == (currentPlayer.playerId + 1))
      } else {
        nextPlayer = allPlayers.find(player => player.playerId == 1)
      }
      
      this.handleMove(currentPlayer, currentPlayer.currentPosition)
      currentPlayer.isTurn = false
      nextPlayer.isTurn = true
    }

    if ((currentPlayer.currentPosition == 11) && (currentPlayer.turnsToSkip > 0)) {
      alert('You are in jail')
      currentPlayer.turnsToSkip -= 1
    } else {
      actuallyMoveThePiece()
    }
  }


  handleMove = (currentPlayer, currentSpace) => {
    if (((currentSpace == 3)||(currentSpace == 18)||(currentSpace == 34))) {
      this.draw(this.props.ventureCards, currentPlayer)
    } else if ((currentSpace == 8)||(currentSpace == 23)||(currentSpace == 37)) {
      this.draw(this.props.sharkCards, currentPlayer)
    }
    // for all other spaces
    this.props.saveGame()
  }

  draw(deck, currentPlayer) { 
    const sortDeck = (deck, currentPlayer) => {
      let sortedDeck = deck.filter(card => card.drawn == false)
      if (sortedDeck.length == 0) {
        console.log('->SHUFFLE<-')
        deck.map(card => card.drawn = false)
        sortDeck(deck, currentPlayer)
      } else {
        selectCard(sortedDeck, currentPlayer)
      }
    }
    
    const selectCard = (deck, currentPlayer) => {
      let cardToDraw = Math.floor((Math.random() * 16) + 1)
      let drawnCard = deck.find(card => card.id == cardToDraw)
      console.log(cardToDraw)
      if ((drawnCard == undefined) || (drawnCard.drawn == true)) {
        selectCard(deck, currentPlayer)
      } else {
        handleCard(drawnCard, currentPlayer)
        drawnCard.drawn = true
      }
    }

    const handleCard = (card, currentPlayer) => {
      console.log(card)
      console.log(currentPlayer)
      const playerIcon = document.getElementById(`playerIcon${currentPlayer.playerId}`)

    // venture
    if (card.id == 1) {
      console.log('advance to go')
      currentPlayer.currentPosition = 1
      currentPlayer.cash += 200

      let go = document.getElementsByName('1')[0]
      go.appendChild(playerIcon)
    }
    if (card.id == 5) {
      console.log('get out of jail free')
      if (card.deck == 'ventureFund') {
        currentPlayer.vfJailCard = true
      }
      if (card.deck == 'sharkTank') {
        currentPlayer.stJailCard = true
      }
    }
    if (card.id == 6) {
      console.log('go to jail')
      
      if ((!!currentPlayer.vfJailCard) || (!!currentPlayer.stJailCard)) {
        if (card.deck == 'ventureFund') {
          currentPlayer.vfJailCard = false
        }
        if (card.deck == 'sharkTank') {
          currentPlayer.stJailCard = false
        }
        alert('You have used your get out of jail free card')
      } else {
        currentPlayer.currentPosition = 11
        currentPlayer.turnsToSkip = 3

        let jail = document.getElementsByName('11')[0]
        jail.appendChild(playerIcon)
        alert('You are in jail for three turns')
      }
    }
      if (card.deck == 'ventureFund') {
        if (card.id == 2) {
          console.log('Bank error in your favor')
        }
        if (card.id == 3) {
          console.log("Doctor's fees")
        }
        if (card.id == 4) {
          console.log('From sale of stock')
        }
        if (card.id == 7) {
          console.log('Grand Opera Night')
        }
        if (card.id == 8) {
          console.log('Holiday Funds Mature.')
        }
        if (card.id == 9) {
          console.log('Income tax refund')
        }
        if (card.id == 10) {
          console.log("It's your birthday")
        }
        if (card.id == 11) {
          console.log('Life insurance matures')
        }
        if (card.id == 12) {
          console.log('Hospital Fees')
        }
        if (card.id == 13) {
          console.log('School fees')
        }
        if (card.id == 14) {
          console.log('Receive $25 consultancy fee')
        }
        if (card.id == 15) {
          console.log('You have won second prize in a beauty contest')
        }
        if (card.id == 16) {
          console.log('You inherit $100')
        }
      }
    // sharks
      if (card.deck == 'sharkTank') {
        if (card.id == 2) {
          console.log('Advance to illinoisAve')
        }
        if (card.id == 3) {
          console.log("Advance to stCharlesPlace")
        }
        if (card.id == 4) {
          console.log('Advance token to nearest utility')
        }
        if (card.id == 7) {
          console.log('Advance token to nearest railRoad')
        }
        if (card.id == 8) {
          console.log('Banks pays you dividend of $50')
        }
        if (card.id == 9) {
          console.log('Go back three spaces')
        }
        if (card.id == 10) {
          console.log("Make general repairs")
        }
        if (card.id == 11) {
          console.log('Pay poor tax of $15.')
        }
        if (card.id == 12) {
          console.log('Take a trip to reading railRoad')
        }
        if (card.id == 13) {
          console.log('Take a walk on the boardWalk.')
        }
        if (card.id == 14) {
          console.log('You have been elected chairman of the board')
        }
        if (card.id == 15) {
          console.log('Your building loan matures')
        }
        if (card.id == 16) {
          console.log('You have won a crossword competition')
        }      
      }

    }
    sortDeck(deck, currentPlayer)
  }

  
    
  render() {
    return (
      <div>
        {this.props.players && this.props.players.map((player, idx) => {
          return (
            <div>
              <div id={`playerIcon${idx+1}`} key={uuid()}></div>
            </div>
          )
        })}
        <div id='dice' className='dice'>
          <div className='firstNumber'></div>
          <div className='secondNumber'></div>
          <button onClick={this.roll}>Roll</button>
        </div>
      </div>
    )
  }
}

Player.defaultProps = { 
  players: []
}
