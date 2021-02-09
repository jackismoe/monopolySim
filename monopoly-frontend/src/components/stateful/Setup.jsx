import React from 'react'
import {connect} from 'react-redux'
import {fetchPostGame} from '../../actions/fetchPostGame'
import {fetchGameSquares} from '../../actions/fetchGameSquares'
import {fetchAllGames} from '../../actions/fetchAllGames'
import {Link} from 'react-router-dom'

class Setup extends React.Component {

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.fetchGameSquares()
    let settings = {
      player: [event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value],
      cash: parseInt(event.target[4].value)
    }
    this.props.fetchPostGame(settings)
    setTimeout(() => {
      this.props.history.push('/play')  
    }, 1000);
  }

  render() {
    
    debugger
    return(
      <>
        <form className='setupForm' onSubmit={this.handleOnSubmit}>
          <label>Please Enter Player Names</label><br/>
            <input onChange={this.handleOnChange} id='player1' placeholder='jec' type='text'/><br/>
            <input onChange={this.handleOnChange} id='player2' placeholder='ren' type='text'/><br/>
            <input onChange={this.handleOnChange} id='player3' placeholder='ruby' type='text'/><br/>
            <input onChange={this.handleOnChange} id='player4' placeholder='blue' type='text'/><br/>
          <label>Please Choose Your Starting Cash</label><br/>
            <select onChange={this.chooseStartingCash}>
              <option>1500</option>
              <option>2500</option>
              <option>5000</option>
              <option>10000</option>
            </select><br/>
          <input type='submit'/>
        </form>
        <br/>
        <Link to={{
          pathname: '/load',
          state: {
            games: this.props.games
          }
        }}>Load Previous Game</Link>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.player,
    cash: state.cash,
    games: state.allGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostGame: (state) => dispatch(fetchPostGame(state)),
    fetchGameSquares: () => dispatch(fetchGameSquares()),
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
