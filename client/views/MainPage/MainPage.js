import React from 'react'

import './main-page.scss'

import Header from './components/Header/Header'
import DailyPoet from './components/DailyTopPoet/DailyTopPoet'
import TeamContacts from './components/TeamContacts/TeamContacts'

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <DailyPoet />
        <TeamContacts />
      </div>
    )
  }
}

export default MainPage