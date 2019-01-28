import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from '../views/MainPage/MainPage'
import SearchPage from '../views/SearchPage/SearchPage'
import PoetPage from '../views/PoetPage/PoetPage'

import NavBar from '../views/MainPage/components/Header/components/NavBar'

function Router() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/search" component={SearchPage} />
          <Route path="/poet" component={PoetPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
