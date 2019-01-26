import React from 'react'
import { connect } from 'react-redux'

import './header.scss'

class Header extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из хэдера сайта'
      },
      'en': {
        title: 'Hello from header'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: {
      title: 'Привет из хэдера сайта'
    }
  }

  render() {
    const { lang } = this.props
    const { content } = this.state
    const currentContent = content[lang]

    return (
      <header className="header">
        <h1>{currentContent.title}</h1>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(Header)