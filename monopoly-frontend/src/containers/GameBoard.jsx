import React from 'react'


export default class GameBoard extends React.Component {

  componentDidMount() {
    // show loading screen during fetches
    console.log('will fetch gamesquares')
    console.log('will fetch venture')
    console.log('will fetch shark')
    console.log('will fetch players')
  }


  render() {
    return(
      <div>
        <p>dis my gameboard</p>
        <p>need gamesquares</p>
        <p>need venture</p>
        <p>need sharks</p>
        <p>need dice</p>
        <h2>PlayerContainer</h2>
      </div>
    )
  }
}