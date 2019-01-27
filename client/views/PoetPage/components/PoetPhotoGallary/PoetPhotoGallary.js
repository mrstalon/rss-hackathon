import React from 'react'
import Viewer from 'react-viewer'
import 'react-viewer/dist/index.css'
import './poet-photo-gallary.scss'

class PoetPhotoGallary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // по дефолту язык будет русским
      currentContent: null,
      visible: false,
      choosePhotoId: 0
    }
  }

  render() {
    const { content } = this.state
    const { lang, gallery } = this.props

    const imagesCollection = gallery.map((el) => {
      return { src: require(`../../../../content/${el.src}`), key: el.id }
    })

    const list = imagesCollection.map((el, i) => {
      return (
        <li key={el.key}>
          <img
            src={el.src}
            onClick={() => {
              this.setState({ visible: !this.state.visible, choosePhotoId: i })
            }}
          />
        </li>
      )
    })

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
            activeIndex={this.state.choosePhotoId}
          />
        </div>
      </div>
    )
  }
}

export default PoetPhotoGallary
