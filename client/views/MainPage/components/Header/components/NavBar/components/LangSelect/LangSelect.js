import React from 'react'
import { connect } from 'react-redux'

import './lang-select.scss'

import { changeLanguage } from '../../../../../../../../actions/lang'

class LangSelect extends React.Component {
  state = {
    choosedLang: 'ru'
  }

  handleLangChange = (event) => {
    const newLang = event.target.value
    this.setState({ choosedLang: newLang })
    this.props.dispatch(changeLanguage(newLang))
  }

  render() {
    const { handleLangChange } = this
    const { choosedLang } = this.state

    return (
      <select className="lang-select" value={choosedLang} onChange={handleLangChange}>
        <option value="ru">Ru</option>
        <option value="by">By</option>
        <option value="en">En</option>
      </select>
    )
  }
}

export default connect(null)(LangSelect)
