import React from 'react'
import {connect} from 'react-redux'
import PlayerInfo from './components/stateful/PlayerInfo'
import GameSquare from './components/stateful/GameSquare'
import Player from './components/stateful/Player'
import {fetchGameSquares} from './actions/fetchGameSquares'
import {fetchPlayers} from './actions/fetchPlayers'

class Game extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchGameSquares()
      this.props.fetchPlayers()
    }, 75);
    
  }

  render() {
    return(
      <>
        {console.log(this.props.squares)}   
        {console.log(this.props.players)}
        <div className='gameBoard'>
          <GameSquare squares={this.props.squares}/>
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