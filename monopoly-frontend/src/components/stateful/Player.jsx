import React from 'react'

export default class Player extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        this.appendToGo(i+1)
      }
    }, 250);
  }

  appendToGo = (playerId) => {
    let go = document.getElementsByName('1')[0].children[1]
    let gamePiece = document.querySelector(`#playerIcon${playerId}`)
    go.appendChild(gamePiece)
  }

  moveGamePiece = (currentSquareId, newSquareId, playerId) => {
    // will update currentPosition
    // will change gamePiece
    let currentSquare = document.querySelector(`#${currentSquareId}`)
    let newSquare = document.querySelector(`#${newSquareId}`)
    let gamePiece = document.querySelector(`#playerIcon${playerId}`)

    console.log(this.players.currentPosition)
  }

  render() {
    return (
      <>
        {this.props.players.map((player, idx) => {
          console.log(player)
          return (
            <>
              <div id={`playerIcon${idx+1}`} key={idx}>
                {idx+1}
              </div>
            </>
          )
        })}
      </>
    )
  }
}
