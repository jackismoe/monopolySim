import React from 'react'
import {connect} from 'react-redux'
import {fetchPostPlayer} from '../actions/fetchPostPlayer'

class Setup extends React.Component {

  constructor() {
    super()
    this.state = {
      player: [],
      cash: 0
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({
      player: [event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value],
      cash: parseInt(event.target[4].value)
    })
    this.props.fetchPostPlayer(this.props.state)
  }

  render() {
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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.player,
    cash: state.startingCash
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostPlayer: (state) => dispatch(fetchPostPlayer(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
// export default Setup