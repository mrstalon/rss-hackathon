import React from 'react'
import Viewer from 'react-viewer'
import 'react-viewer/dist/index.css'
import './poet-photo-gallary.scss'
import { changeLanguage } from 'actions/lang'

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
    const { lang, imgName, gallery } = this.props
    const currentContent = content[lang]
    const img = require(`../../../../assets/img/poet-1.jpg`)

    const imagesCollection = gallery.map((el) => {
      return { src: require(`../../../../assets/img/${el.src}`), key: el.id }
    })

    const list = imagesCollection.map((el) => {
      return (
        <li key={el.key}>
          <img
            src={el.src}
            onClick={() => {
              this.setState({ visible: !this.state.visible })
            }}
          />
        </li>
      )
    })

    console.log(list)

    return (
      <div className="poet__gallery--container">
        <h2 className="poet__gallery--title">Галлерея</h2>
        <div className="poet__gallery--content">
          <ul className="poet__gallery--preview">{list}</ul>

          <Viewer
            visible={this.state.visible}
            onClose={() => {
              this.setState({ visible: false })
            }}
            images={imagesCollection}
          />
        </div>
      </div>
    )
  }
}

export default PoetPhotoGallary
