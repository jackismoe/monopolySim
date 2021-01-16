import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Setup from './components/Setup';
import LoadGame from './components/LoadGame'
import Nav from './components/stateless/Nav'
import './index.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import gameReducer from './reducers/gameReducer'

const BASE_URL = 'http://localhost:3001'
const store = createStore(gameReducer, applyMiddleware(thunk))

export default BASE_URL

ReactDOM.render(
  <Provider store={store}>
    <Nav/>
    <Router>
      <Route exact path='/' component={Setup}/>
      <Route exact path='/play' component={Game}/>
      <Route exact path='/load' component={LoadGame}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);


document.addEventListener('DOMContentLoaded', () => {
  
})