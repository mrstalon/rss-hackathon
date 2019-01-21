import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from '../views/MainPage'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
