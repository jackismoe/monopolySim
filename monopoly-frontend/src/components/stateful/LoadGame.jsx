import React from 'react'

export default class LoadGame extends React.Component {

  constructor() {
    super()
    this.state = {
      games: []
    }
  }
  render() {
    debugger
    return (
      <div className='load'>    
      <h1>Previous Games</h1>
        <ul>
        </ul>
      </div>
    )
  }
}
