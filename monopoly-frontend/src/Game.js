import React from 'react'
import {connect} from 'react-redux'
import GameBoard from './components/stateless/GameBoard'
import PlayerInfo from './components/stateful/PlayerInfo'
import {fetchGameSquares} from './actions/fetchGameSquares'
import {fetchPlayers} from './actions/fetchPlayers'

class Game extends React.Component {
  componentDidMount() {
    this.props.fetchGameSquares()
    this.props.fetchPlayers()
  }

  render() {
    return(
      <>
        <GameBoard gameSquares={this.props.squares}/>
        <PlayerInfo players={this.props.fetchPlayers}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    squares: state.squares,
    players: state.players,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares()),
    fetchPlayers: () => dispatch(fetchPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)