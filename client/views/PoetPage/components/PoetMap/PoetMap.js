import React, { Component } from 'react'
import './poet-map.scss'
import GoogleMapReact from 'google-map-react'

class PoetMap extends React.Component {
  state = {
    // по дефолту язык будет русским
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

    return (
      <div className="poet__map--container" style={{ height: '100vh', width: '100%' }}>
        <h2 className="poet__map--title">Места деятельности</h2>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/*<AnyReactComponent*/}
            {/*lat={59.955413}*/}
            {/*lng={30.337844}*/}
            {/*text={'Kreyser Avrora'}*/}
          {/*/>*/}
        </GoogleMapReact>
      </div>
    )
  }
}

export default PoetMap
