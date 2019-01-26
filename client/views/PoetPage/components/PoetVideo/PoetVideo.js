import React from 'react'

import './poet-video.scss'

class PoetVideo extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из видео поэта'
      },
      'en': {
        title: 'Hello from poet video'
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
      <div className="poet-video">
        <h1>{currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetVideo