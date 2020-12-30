import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import './index.css';
import App from './App';

// const store = createStore(__, applyMiddleware(thunk))

ReactDOM.render(
  // <Provider>    
    <App />
  // </Provider>, 
  ,document.getElementById('root')
);
