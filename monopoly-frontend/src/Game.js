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
import {saveGame} from './actions/saveGame'
import {BASE_URL} from './index'

class Game extends React.Component {
  componentDidMount() {
    this.props.fetchGameSquares()
    this.props.fetchPlayers()
  }

  saveGame = () => {
    let currentGame = {
      gameId: this.props.gameId,
      players: this.props.players, 
      squares: this.props.squares,
    }
    this.props.saveGame(currentGame)
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
        <button className='saveButton' onClick={this.saveGame}>Save Game</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameId: state.gameId,
    squares: state.squares,
    players: state.players,
    loading: state.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares()),
    fetchPlayers: () => dispatch(fetchPlayers()),
    saveGame: (currentGame) => dispatch(saveGame(currentGame))
  }
}

Game.defaultProps = {
  squares: [],
  players: [],
  loading: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)