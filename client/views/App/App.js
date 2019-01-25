import React from 'react'
import { Provider } from 'react-redux'

import Router from 'router/Router'
import store from '../../store/index'

import './app.scss'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
