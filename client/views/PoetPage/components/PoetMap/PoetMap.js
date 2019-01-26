import React from 'react'

import './poet-map.scss'

class PoetMap extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из карты поэта'
      },
      'en': {
        title: 'Hello from poet map'
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
      <div className="poet-map">
        <h1>{currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetMap
