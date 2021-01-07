import React from 'react'
import {connect} from 'react-redux'

class GameSquare extends React.Component {

  render() {
    const middleNine = this.props.squares.filter(square => square.spaceNumber == 12|| square.spaceNumber == 13|| square.spaceNumber == 14|| square.spaceNumber == 15|| square.spaceNumber == 16|| square.spaceNumber == 17|| square.spaceNumber == 18|| square.spaceNumber == 19|| square.spaceNumber == 20|| square.spaceNumber == 32|| square.spaceNumber == 33|| square.spaceNumber == 34|| square.spaceNumber == 35|| square.spaceNumber == 36|| square.spaceNumber == 37|| square.spaceNumber == 38|| square.spaceNumber == 39|| square.spaceNumber == 40)
    const topRow = this.props.squares.filter(square => square.spaceNumber > 20 && square.spaceNumber < 32)
    const bottomRow = this.props.squares.filter(square => square.spaceNumber < 12)

    return(
      <>
        <div className='topRow'>
        {topRow.map(square => {
          return (
            <div id={square.spaceNumber} name={square.name} className='space'>
              <p>{square.name}</p>
            </div>
          )
        })}
        </div>
        <div className='middleNine'>
          {middleNine.map(square => {
            return (
              <div id={square.spaceNumber} name={square.name} className='space'>
                <p>{square.name}</p>
              </div>
            )
          })}
        </div>
        <div className='bottomRow'>
          {bottomRow.map(square => {
            return (
              <div id={square.spaceNumber} name={square.name} className='space'>
                <p>{square.name}</p>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default GameSquare