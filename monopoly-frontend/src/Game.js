import React from 'react'
import {connect} from 'react-redux'
import GameBoard from './components/stateless/GameBoard'
import PlayerInfo from './components/stateful/PlayerInfo'

class Game extends React.Component {

  render() {
    return(
      <>
        {/* <GameBoard/>
        <PlayerInfo/> */}
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



export default connect(mapStateToProps, null)(Game)