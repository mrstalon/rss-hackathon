import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './poet-page.scss'

import PoetPhoto from './components/PoetPhoto/PoetPhoto'
import PoetBiography from './components/PoetBiography/PoetBiography'
import PoetWorksList from './components/PoetWorksList/PoetWorksList'
import PoetPhotoGallary from './components/PoetPhotoGallary/PoetPhotoGallary'
import PoetVideo from './components/PoetVideo/PoetVideo'
import PoetMap from './components/PoetMap/PoetMap'

import defineContentForLang from '../../helpers/defineContentForLang'

class PoetPage extends React.Component {
  state = {
    currentContent: []
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const { lang, choosedPoetId, history } = this.props

    if (choosedPoetId === null) {
      history.push('/search')
    }

    const currentContent = defineContentForLang(lang)
    this.setState({ currentContent })
  }

  static getDerivedStateFromProps = (nextProps) => {
    const currentContent = defineContentForLang(nextProps.lang)
    return { currentContent }
  }

  render() {
    const { currentContent } = this.state
    const { lang, choosedPoetId } = this.props
    if (!choosedPoetId && choosedPoetId !== 0) {
      return null
    }

    const choosedPoetContent = currentContent[choosedPoetId]

    return (
      <div className="poet-page">
        <PoetPhoto
          imgName={choosedPoetContent.avatarName}
          lang={lang}
          name={choosedPoetContent.name}
          born={choosedPoetContent.biographyContent[0].born}
          period={choosedPoetContent.biographyContent[0].period}
          genre={choosedPoetContent.biographyContent[0].genre}
        />
        <PoetBiography
          lang={lang}
          description={choosedPoetContent.biographyContent[0].description}
        />
        <PoetWorksList
          lang={lang}
          composition={choosedPoetContent.biographyContent[0].composition}
        />
        <PoetPhotoGallary
          lang={lang}
          imgName={choosedPoetContent.avatarName}
          gallery={choosedPoetContent.gallery}
        />
        <PoetVideo lang={lang} link={choosedPoetContent.biographyContent[0].video}/>
        <PoetMap lang={lang} location={choosedPoetContent.geolocation}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang,
    choosedPoetId: state.choosedPoetId
  }
}

export default withRouter(connect(mapStateToProps)(PoetPage))
