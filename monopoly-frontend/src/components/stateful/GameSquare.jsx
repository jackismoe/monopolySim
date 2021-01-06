import React from 'react'
import {fetchGameSquares} from '../../actions/fetchGameSquares'
import {connect} from 'react-redux'

class GameSquare extends React.Component {

  render() {
    return(
      <>
        {this.props.squares.map((square, idx) => {
          return (
            <div key={idx}>
              {square.name}
            </div>
          )
        })}
      </>
    )
  }
}


const mapDipatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares())
  }
}

export default GameSquare