import React from 'react'

import './poet-photo.scss'

class PoetPhoto extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из фото поэта',
      },
      'en': {
        title: 'Hello from poet photo',
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
    const { lang, imgName } = this.props
    const currentContent = content[lang]
    const img = require(`../../../../assets/img/${imgName}`)

    return (
      <div className="poet-photo">
        <h1>{currentContent.title}</h1>
        <img src={img} />
      </div>
    )
  }
}

export default PoetPhoto
