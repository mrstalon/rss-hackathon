import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from '../views/MainPage/MainPage'
import SearchPage from '../views/SearchPage/SearchPage'
import PoetPage from '../views/PoetPage/PoetPage'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/search" component={SearchPage} />
        <Route path="/poet" component={PoetPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
