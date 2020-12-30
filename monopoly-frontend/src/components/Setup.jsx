import React from 'react'

class Setup extends React.Component {
  
  constructor() {
    super()
    this.state = {
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      startingCash: 0
    }
  }

  handleNameInputChange = event => {
    switch (event.target.id) {
      case 'player1':
        this.setState({
          ...this.state,
          player1: event.target.value
        })
      break
      case 'player2':
        this.setState({
          ...this.state,
          player2: event.target.value
        })
      break
      case 'player3':
        this.setState({
          ...this.state,
          player3: event.target.value
        })
      break
      case 'player4':
        this.setState({
          ...this.state,
          player4: event.target.value
        })
      break
      default:
        return this.state
    }
  }

  chooseStartingCash = event => {
    this.setState({
      ...this.state,
      startingCash: parseInt(event.target.value)
    })
    console.log(this.state)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // player 1 will be you
    // other players will be 'ghosts'
    // only player 1 will be prompted to login
  }



  render() {
    return(
      <>
        <form className='setupForm' onSubmit={this.handleOnSubmit}>
          <label>Please Enter Player Names</label><br/>
            <input onChange={this.handleNameInputChange} id='player1' placeholder='jec' type='text'/><br/>
            <input onChange={this.handleNameInputChange} id='player2' placeholder='ren' type='text'/><br/>
            <input onChange={this.handleNameInputChange} id='player3' placeholder='ruby' type='text'/><br/>
            <input onChange={this.handleNameInputChange} id='player4' placeholder='blue' type='text'/><br/>
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

export default Setup