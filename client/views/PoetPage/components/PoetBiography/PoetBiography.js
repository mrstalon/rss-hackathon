import React from 'react'

import './poet-biography.scss'

class PoetBiography extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Привет из биографии поэта'
      },
      en: {
        title: 'Hello from poet biography'
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
    const { lang, description } = this.props
    const currentContent = content[lang]

    return (
      <div className="poet__biography--container">
        <h2 className="poet__biography--title">Биография</h2>
        <div className="poet__biography-main">{description}</div>
      </div>
    )
  }
}

export default PoetBiography
