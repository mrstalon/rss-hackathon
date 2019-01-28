import React from 'react'

import './main-page.scss'

import Header from './components/Header/Header'
import DailyPoet from './components/DailyTopPoet/DailyTopPoet'
import TeamDescription from './components/TeamDescription/TeamDescription'

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <DailyPoet />
        <TeamDescription />
      </div>
    )
  }
}

export default MainPage