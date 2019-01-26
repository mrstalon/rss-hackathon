import React from 'react'

import './poet-biography.scss'

class PoetBiography extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из биографии поэта'
      },
      'en': {
        title: 'Hello from poet biography'
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
      <div className="poet-biography">
        <h1>{currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetBiography
