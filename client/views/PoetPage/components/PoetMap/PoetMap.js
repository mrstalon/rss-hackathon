import React from 'react'
import './poet-map.scss'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

class PoetMap extends React.Component {
  state = {
    content: {
      en: {
        title: 'Working place',
      },
      ru: {
        title: 'Места деятельности',
      },
      by: {
        title: 'Месца работы',
      }
    },
    currentContent: null
  }

  render() {
    const { content } = this.state
    const { lang, location } = this.props
    const currentContent = content[lang]
    const mapState = {
      center: location.coordinate,
      zoom: 12,
      controls: ['zoomControl', 'fullscreenControl'],
    }


    return (
      <div className="poet__map--container" style={{ height: '100vh', width: '100%' }}>
        <h2 className="poet__map--title">{currentContent.title}</h2>
        <YMaps>
          <Map
            className="poet__map--map"
            defaultState={mapState}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <Placemark
              modules={['geoObject.addon.balloon']}
              defaultGeometry={mapState.center}
              properties={{
                balloonContentBody: `${location.text}`
              }}/>
          </Map>
        </YMaps>
      </div>
    )
  }
}

export default PoetMap
