import React from 'react'
import {connect} from 'react-redux'
import PlayerInfo from './components/stateful/PlayerInfo'
import GameSquare from './components/stateful/GameSquare'
import Player from './components/stateful/Player'
import Dice from './components/stateless/Dice'
import VentureCards from './components/stateless/VentureCards'
import SharkCards from './components/stateless/SharkCards'
import {fetchGameSquares} from './actions/fetchGameSquares'
import {fetchPlayers} from './actions/fetchPlayers'

class Game extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchGameSquares()
      this.props.fetchPlayers()
    }, 0);
  }
  
  render() {
    return(
      <>
        <div className='gameBoard'>
          <GameSquare squares={this.props.squares}/>
          <Dice players={this.props.players}/>
          <VentureCards/>
          <SharkCards/>
          <Player players={this.props.players}/>
        </div>
        <PlayerInfo players={this.props.players}/>
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