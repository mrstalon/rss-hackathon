import React from 'react'

import './poet-photo.scss'

class PoetPhoto extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Компонент фотография поэта'
      },
      en: {
        title: 'Poet photo Component'
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
    const { lang, imgName, name, born, period, genre } = this.props
    const currentContent = content[lang]
    const img = require(`../../../../assets/img/${imgName}`)

    return (
      <div className="poet__photo--container">
        <img alt="poetImage" className="poet__photo--img" src={img} />
        <div className="poet__photo--info">
          <h1 className="poet__photo--name">{name}</h1>
          <div className="poet__photo--born">
            <strong>Родился:</strong>
            <br />
            <span>{`${born.city}, ${born.country}`}</span>
          </div>
          <div className="poet__photo--period">
            <strong>Годы жизни:</strong>
            <br />
            <span>{period}</span>
          </div>
          <div className="poet__photo--genre">
            <strong>Жанр:</strong>
            <br />
            <span>{genre}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PoetPhoto
