import React from 'react'

import './poet-map.scss'

class PoetMap extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Привет из карты поэта'
      },
      en: {
        title: 'Hello from poet map'
      }
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
      <div className="poet__map--container">
        <h2 className="poet__map--title">Места деятельности</h2>
      </div>
    )
  }
}

export default PoetMap
