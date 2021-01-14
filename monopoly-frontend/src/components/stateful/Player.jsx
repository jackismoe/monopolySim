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


  handleMove = (currentPlayer, currentSpace) => {
    debugger
    //   case 21:
    //     console.log('freeParking')
    //     // take money and add it to player
    //     break
    //   case 31:
    //     console.log('goToJail')
    //     // send player to space #11 for three turns
    //     break
    //   case 1:
    //     console.log('go')
    //     // if player lands here give them $200
    //     break
    //   case 5:
    //     console.log('incomeTax')
    //     // pay 10% of total income, or $200, whichever is higher
    //     break
    //   case 11:
    //     console.log('justVisting')
    //     break
    //   case 39:
    //     console.log('luxuryTax')
    //     break
    //   default:
    //     window.confirm('This space is available. Would you like to buy it?')
    // }

    if (((currentSpace == 3)||(currentSpace == 18)||(currentSpace == 34))) {
      this.draw(this.props.ventureCards)
    } else if ((currentSpace == 8)||(currentSpace == 23)||(currentSpace == 37)) {
      this.draw(this.props.sharkCards)
    }// for all other spaces
  }

  draw(deck) {    
    const sortDeck = (deck) => {
      let sortedDeck = deck.filter(card => card.drawn == false)
      if (sortedDeck.length == 0) {
        console.log('->SHUFFLE<-')
        deck.map(card => card.drawn = false)
        sortDeck(deck)
      } else {
        selectCard(sortedDeck)
      }
    }
    
    const selectCard = (deck) => {
      let cardToDraw = Math.floor((Math.random() * 16) + 1)
      let drawnCard = deck.find(card => card.id == cardToDraw)
      console.log(cardToDraw)
      if ((drawnCard == undefined) || (drawnCard.drawn == true)) {
        selectCard(deck)
      } else {
        handleCard(drawnCard)
        drawnCard.drawn = true
      }
    }

    const handleCard = (card) => {
      console.log(card)
      switch (card) {
        case card.desc.includes('Advance To Go'):
          // send player to go
          //
            break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      //   case card.desc.includes(''):
      //       break
      // }
    }

    sortDeck(deck)
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
        <div id='dice' className='dice'>
          <div className='firstNumber'></div>
          <div className='secondNumber'></div>
          <button onClick={this.roll}>Roll</button>
        </div>
      </>
    )
  }
}

Player.defaultProps = { 
  players: []
}