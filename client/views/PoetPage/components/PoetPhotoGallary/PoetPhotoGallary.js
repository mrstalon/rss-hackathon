import React from 'react'
import './poet-photo-gallary.scss'
import { changeLanguage } from 'actions/lang'
import Viewer from 'react-viewer'

class PoetPhotoGallary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {
        ru: {
          title: 'Привет из галереи поэта'
        },
        en: {
          title: 'Hello from poet gallary'
        }
        // 'by': {
        //   title: '...'
        // }
      },

      // по дефолту язык будет русским
      currentContent: null,
      visible: false
    }
  }

  render() {
    const { content } = this.state
    const { lang, imgName } = this.props
    const currentContent = content[lang]
    const img = require(`../../../../assets/img/${imgName}`)

    return (
      <div className="poet__gallery--container">
        <h2 className="poet__gallery--title">Галлерея</h2>
        <img src={img} />

        <div>
          <button
            onClick={() => {
              this.setState({ visible: !this.state.visible })
            }}
          >
            show
          </button>

          <Viewer
            visible={this.state.visible}
            onClose={() => {
              this.setState({ visible: false })
            }}
            images={[
              { src: `https://i.imgur.com/M4yygdu.png`, alt: '' },
              { src: `https://i.imgur.com/blJSGpJ.png`, alt: '' },
              { src: `${img}`, alt: '' }
            ]}
          />
        </div>
      </div>
    )
  }
}

export default PoetPhotoGallary
