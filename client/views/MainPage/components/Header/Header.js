import React from 'react'

import './header.scss'

import NavBar from './components/NavBar'
import HeaderContent from './components/HeaderContent'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {/* <NavBar /> */}
        <HeaderContent />
      </header>
    )
  }
}

export default Header