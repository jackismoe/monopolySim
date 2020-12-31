import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class GameBoard extends React.Component {
  render() {
    return (
      <>
        <div className='gameBoard'>
          {this.props.gameSquares.map((square) => <div key={uuidv4()} id={square.id} name={square.name} className='square'>{square.name}</div>)}
        </div>
        <div id='playerContainer'>

        </div>
      </>
    )
  }
}