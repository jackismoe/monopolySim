import React from 'react'
export default class Player extends React.Component { 
  static currentPlayer = 1

  componentDidMount() {
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        this.appendToGo(i)
      }
    }, 250);
  }
  
  static movePlayerPiece = (rollTotal, allPlayers) => {
    let player = allPlayers.filter(player => player.id == Player.currentPlayer)[0]
    player.currentPosition += rollTotal

    if (player.currentPosition > 40) {
      let spacesFromGo = player.currentPosition - 40
      player.currentPosition = 0
      player.currentPosition += spacesFromGo
    }

    let playerIcon = document.querySelector(`#playerIcon${player.id}`) 
    let squareToMoveTo = document.getElementsByName(`${player.currentPosition}`)[0]

    squareToMoveTo.appendChild(playerIcon)

    if (Player.currentPlayer < 4) {
      Player.currentPlayer++
    } else {
      Player.currentPlayer = 1
    }
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
              <div id={`playerIcon${idx+1}`} key={idx}></div>
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