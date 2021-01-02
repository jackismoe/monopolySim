import React from 'react'

export default class PlayerInfo extends React.Component {
  
  componentDidMount() {
    console.log(this.props.players())
  }

  render() {
    return(
      <div>PlayerInfo</div>
    )
  }
}