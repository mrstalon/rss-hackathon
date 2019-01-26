import React from 'react'

import './poet-works-list.scss'

class PoetWorksList extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из списка произведений поэта'
      },
      'en': {
        title: 'Hello from poet works list'
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
      <div className="poet-works-list">
        <h1>{currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetWorksList