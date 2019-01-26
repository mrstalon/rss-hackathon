import React from 'react'
import { connect } from 'react-redux'

import './search-page.scss'

class SearchPage extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из страницы поиска'
      },
      'en': {
        title: 'Hello from search page'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: null
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <div className="search-page">
        <h1>{currentContent.title}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(SearchPage)