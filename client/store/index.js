import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import langInfo from './lang-info/lang-info'
import choosedPoetId from './choosed-poet-id'

const reducer = combineReducers({
  langInfo,
  choosedPoetId
})

const store = createStore(reducer, applyMiddleware(logger))

export default store