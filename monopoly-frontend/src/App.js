import React from 'react'
import {connect} from 'react-redux'
import Setup from './components/Setup.jsx'
import {fetchGameSquares} from './actions/fetchGameSquares'

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchGameSquares()
  }

  render() {
    console.log(this.props.squares)
    return(
      <>
        <Setup/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    squares: state.squares,
    loading: state.loading
  }
}

const mapDipatchToProps = dispatch => {
  return {
    fetchGameSquares: () => dispatch(fetchGameSquares())
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(App)