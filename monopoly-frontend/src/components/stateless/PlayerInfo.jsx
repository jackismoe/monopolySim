import React from 'react'

export default class PlayerInfo extends React.Component {
  render() {
    return(
      <div className='playerInfoContainer'>
        {this.props.players && this.props.players.map((player, idx) => {
          return(
            <div key={idx} className={`player${idx+1}`}>
              <h2>{player.name}</h2>
              <h4>${player.cash}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

PlayerInfo.defaultProps = {
  players: []
}