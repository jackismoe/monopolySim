import React from 'react'
import {connect} from 'react-redux'
import {fetchGameSquares} from './actions/fetchGameSquares'
import GameBoard from './components/stateless/GameBoard'

class Game extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchGameSquares()
  }

  render() {
    return(
      <>
        <GameBoard gameSquares={this.props.squares}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    squares: state.squares,
    loading: state.loading
  }
}

const mapDipatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares()),
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Game)