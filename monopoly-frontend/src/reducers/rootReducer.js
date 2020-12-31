import {combineReducers} from 'redux'
import gameSquareReducer from './gameSquareReducer'
import setupReducer from './setupReducer'

const rootReducer = combineReducers({
  gameSquares: gameSquareReducer,
  setup: setupReducer
})

export default rootReducer