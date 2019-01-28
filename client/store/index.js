import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import langInfo from './lang-info/lang-info'
import choosedPoetId from './choosed-poet-id'
import topPoetId from './daily-top-poet-id'

const reducer = combineReducers({
  langInfo,
  choosedPoetId,
  topPoetId
})

const store = createStore(reducer, applyMiddleware(logger))

export default store