import React from 'react'
import { withRouter } from 'react-router-dom'

import './nav-bar.scss'

import SearchButton from './components/SearchButton'
import LangSelect from './components/LangSelect'

class NavBar extends React.Component {
  redirectToMainPage = () => {
    this.props.history.push('/')
  }

  render() {
    const { redirectToMainPage } = this
    const logo = require('../../../../../../assets/img/logo.png')

    return (
      <nav className="nav-bar">
        <img className="nav-bar__logo" src={logo} onClick={redirectToMainPage}/>
        <div className="auth-bar">
          <SearchButton />
          <LangSelect />
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)
