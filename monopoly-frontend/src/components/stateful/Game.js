import React from 'react'
import {connect} from 'react-redux'
import PlayerInfo from '../stateless/PlayerInfo'
import GameSquare from '../stateless/GameSquare'
import Player from '../stateless/Player'
import VentureCards from '../stateless/VentureCards'
import SharkCards from '../stateless/SharkCards'
import {fetchGameSquares} from '../../actions/fetchGameSquares'
import {fetchPlayers} from '../../actions/fetchPlayers'
import {fetchVenture} from '../../actions/fetchVenture'
import {fetchShark} from '../../actions/fetchShark'
import {saveGame} from '../../actions/saveGame'


class Game extends React.Component {
  componentDidMount() {
    this.props.fetchGameSquares()
    this.props.fetchPlayers()
    this.props.fetchVenture()
    this.props.fetchShark()
    this.props.fetchAllGames()
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
      <div>
        <div className='gameBoard'>
          <GameSquare squares={this.props.squares}/>
          {/* <Dice players={this.props.players}/> */}
          <VentureCards/>
          <SharkCards/>
          <Player players={this.props.players} ventureCards={this.props.ventureCards} sharkCards={this.props.sharkCards} saveGame={() => this.saveGame()}/>
        </div>
        <PlayerInfo players={this.props.players}/>
        <button className='saveButton' onClick={this.saveGame}>Save Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameId: state.gameId,
    squares: state.squares,
    players: state.players,
    ventureCards: state.ventureCards,
    sharkCards: state.sharkCards,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares()),
    fetchPlayers: () => dispatch(fetchPlayers()),
    fetchVenture: () => dispatch(fetchVenture()),
    fetchShark: () => dispatch(fetchShark()),
    saveGame: (currentGame) => dispatch(saveGame(currentGame))
  }
}

Game.defaultProps = {
  squares: [],
  players: [],
  loading: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)