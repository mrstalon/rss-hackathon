import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './search-button.scss'

class SearchButton extends React.Component {
  state = {
    content: {
      en: {
        searchButton: 'Find poet'
      },
      ru: {
        searchButton: 'Найти поэта'
      },
      by: {
        searchButton: 'Знайсці паэта'
      }
    }
  }

  redirect = () => {
    const { history } = this.props
    history.push('/search')
  }
  
  render() {
    const { redirect } = this
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]
    const searchImg = require(`../../../../../../../../assets/img/search-icon.png`)

    return (
      <div className="search-button-container">
        <button onClick={redirect} className="desctop-search-button">{currentContent.searchButton}</button>
        <button onClick={redirect} className="mobile-search-button">
          <img src={searchImg} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default withRouter(connect(mapStateToProps)(SearchButton))
