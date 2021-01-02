import React from 'react'
import {fetchGameSquares} from '../../actions/fetchGameSquares'
import {connect} from 'react-redux'
class GameSquare extends React.Component {

  render() {
    return(
      <div>square</div>
    )
  }
}


const mapDipatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares())
  }
}