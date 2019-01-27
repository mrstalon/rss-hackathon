import React from 'react'

import './poet-photo.scss'

class PoetPhoto extends React.Component {
  state = {
    content: {
      ru: {
        bornLabel: 'Место рождения:',
        livingPeriodLabel: 'Годы жизни:',
        janreLabel: 'Жанр:'
      },
      en: {
        bornLabel: 'Born place:',
        livingPeriodLabel: 'Living period:',
        janreLabel: 'Janre:'
      },
      by: {
        bornLabel: 'Месца нараджэння:',
        livingPeriodLabel: 'Годы жыцця:',
        janreLabel: 'Жанр:'
      }
    }
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
            <strong>{currentContent.bornLabel}</strong>
            <br />
            <span>{`${born.city}, ${born.country}`}</span>
          </div>
          <div className="poet__photo--period">
            <strong>{currentContent.livingPeriodLabel}</strong>
            <br />
            <span>{period}</span>
          </div>
          <div className="poet__photo--genre">
            <strong>{currentContent.janreLabel}</strong>
            <br />
            <span>{genre}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PoetPhoto
