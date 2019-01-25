import { createStore, combineReducers } from 'redux'

import langInfo from './lang-info/lang-info'

const reducer = combineReducers({
  langInfo
})

const store = createStore(reducer)

export default store