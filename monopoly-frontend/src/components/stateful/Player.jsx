import React from 'react'

export default class Player extends React.Component {
  static currentPlayer = 1
  static moveGamePiece = (spaces) => {
    console.log(this.props.players.filter((player, idx) => idx == Player.currentPlayer -1))
    // let newSquare = document.querySelector(`#${this.currentPlayer}`)
    // let gamePiece = document.querySelector(`#playerIcon${this.currentPlayer}`)
  }
  
  componentDidMount() {
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        this.appendToGo(i)
      }
    }, 250);
  }

  appendToGo = (playerId) => {
    let go = document.getElementsByName('1')[0].children[1]
    let gamePiece = document.querySelector(`#playerIcon${playerId}`)
    go.appendChild(gamePiece)
  }


  render() {
    return (
      <>
        {this.props.players.map((player, idx) => {
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
