import React, { Component } from 'react'
import './poet-map.scss'
import GoogleMapReact from 'google-map-react'

class PoetMap extends React.Component {
  state = {
    content: {
      en: {
        title: 'Working place'
      },
      ru: {
        title: 'Места деятельности'
      },
      by: {
        title: 'Месца работы'
      }
    },
    currentContent: null
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <div className="poet__map--container" style={{ height: '100vh', width: '100%' }}>
        <h2 className="poet__map--title">{currentContent.title}</h2>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
<<<<<<< HEAD
          {/*<AnyReactComponent*/}
            {/*lat={59.955413}*/}
            {/*lng={30.337844}*/}
            {/*text={'Kreyser Avrora'}*/}
          {/*/>*/}
=======
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          /> */}
>>>>>>> ca04f9c6bd075ce678165b09c27a29b18eabb5c7
        </GoogleMapReact>
      </div>
    )
  }
}

export default PoetMap
