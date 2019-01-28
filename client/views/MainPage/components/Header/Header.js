import React from 'react'

import './header.scss'

import HeaderContent from './components/HeaderContent'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <HeaderContent />
      </header>
    )
  }
}

export default Header