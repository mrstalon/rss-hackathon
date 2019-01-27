import React from 'react'
import './poet-video.scss'
import YouTube from 'react-youtube'
import ModalVideo from 'react-modal-video'
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss'

class PoetVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {
        ru: {
          title: 'Привет из видео поэта'
        },
        en: {
          title: 'Hello from poet video'
        },
        // 'by': {
        //   title: '...'
        // }
        currentContent: null,
        isOpen: false
      }
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    const { content } = this.state
    const { lang, link } = this.props
    const currentContent = content[lang]
    const opts = {
      height: '390',
      width: '640',
      // https://developers.google.com/youtube/player_parameters
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <div className="poet__video--container">
        <h2 className="poet__video--title">Видео</h2>
        <div className="poet__video--wrapper" onClick={this.openModal}>
          <YouTube className="poet__video" videoId={link} opts={opts} />
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={link}
          onClose={() => this.setState({ isOpen: false })}
        />
      </div>
    )
  }
}

export default PoetVideo
