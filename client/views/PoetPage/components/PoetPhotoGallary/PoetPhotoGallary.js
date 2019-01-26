import React from 'react'

import './poet-photo-gallary.scss'

class PoetPhotoGallary extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из галереи поэта'
      },
      'en': {
        title: 'Hello from poet gallary'
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
      <div className="poet-photo-gallary">
        <h1>{currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetPhotoGallary