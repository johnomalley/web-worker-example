import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import pi from './pi'

const logger = createLogger()

export default () =>
  createStore(combineReducers({pi}), applyMiddleware(thunk, logger))
