import React from 'react'
import {v4 as uuid} from "uuid"; import {connect} from 'react-redux'

class GameSquare extends React.Component {

  static saveGame() {
    debugger
  }

  render() {
    // eslint-disable-next-line
    const middleNine = this.props.squares.filter(square => square.spaceNumber == 12|| square.spaceNumber == 13|| square.spaceNumber == 14|| square.spaceNumber == 15|| square.spaceNumber == 16|| square.spaceNumber == 17|| square.spaceNumber == 18|| square.spaceNumber == 19|| square.spaceNumber == 20|| square.spaceNumber == 32|| square.spaceNumber == 33|| square.spaceNumber == 34|| square.spaceNumber == 35|| square.spaceNumber == 36|| square.spaceNumber == 37|| square.spaceNumber == 38|| square.spaceNumber == 39|| square.spaceNumber == 40)
    const topRow = this.props.squares.filter(square => square.spaceNumber > 20 && square.spaceNumber < 32)
    const bottomRow = this.props.squares.filter(square => square.spaceNumber < 12)

    return(
      <>
        <div className='topRow'>
        {topRow.map(square => {
          return (
            <div key={uuid()} id={square.name} name={square.spaceNumber} className='space'>
              <p>{square.name}</p>
              <div id='playerSlot' className='playerSlot'></div>
            </div>
          )
        })}
        </div>
        <div className='middleNine'>
          {middleNine.map(square => {
            return (
              <div key={uuid()} id={square.name} name={square.spaceNumber} className='space'>
                <p>{square.name}</p>
                <div id='playerSlot' className='playerSlot'></div>
              </div>
            )
          })}
        </div>
        <div className='bottomRow'>
          {bottomRow.map(square => {
            return (
              <div key={uuid()} id={square.name} name={square.spaceNumber} className='space'>
                <p>{square.name}</p>
                <div id='playerSlot' className='playerSlot'></div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

GameSquare.defaultProps = {
  squares: []
}

export default GameSquare