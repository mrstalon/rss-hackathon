import React from 'react'

import './nav-bar.scss'

import SearchButton from './components/SearchButton'
import LangSelect from './components/LangSelect'

class NavBar extends React.Component {
  render() {
    const logo = require('../../../../../../assets/img/logo.png')

    return (
      <nav className="nav-bar">
        <img className="nav-bar__logo" src={logo} />
        <div className="auth-bar">
          <SearchButton />
          <LangSelect />
        </div>
      </nav>
    )
  }
}



export default NavBar
