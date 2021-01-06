import React from 'react'
import {connect} from 'react-redux'
import PlayerInfo from './components/stateful/PlayerInfo'
import GameSquare from './components/stateful/GameSquare'
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
        {console.log(this.props.squares)}   
        {console.log(this.props.players)}
        <div className='gameBoard'>
          <GameSquare squares={this.props.squares}/>
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