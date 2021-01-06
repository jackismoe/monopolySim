import React from 'react'

export default class PlayerInfo extends React.Component {
  render() {
    return(
      this.props.players.map((player, idx) => {
        return(
          <div>
            <h2>{player.name}</h2>
            <h4>{player.cash}</h4>
          </div>
        )
      })
    )
  }
}