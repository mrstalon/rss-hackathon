import React from 'react'
import './poet-video.scss'
import YouTube from 'react-youtube'

class PoetVideo extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Привет из видео поэта'
      },
      en: {
        title: 'Hello from poet video'
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
    const { lang, link } = this.props
    const currentContent = content[lang]
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
    return (
      <div className="poet__video--container">
        <h2 className="poet__video--title">Видео</h2>
        <YouTube className="poet__video" videoId={link} opts={opts} onReady={this._onReady} />
      </div>
    )
  }
}

export default PoetVideo
