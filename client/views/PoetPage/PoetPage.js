import React from 'react'
import { connect } from 'react-redux'

import './poet-page.scss'

import PoetPhoto from './components/PoetPhoto/PoetPhoto'
import PoetBiography from './components/PoetBiography/PoetBiography'
import PoetWorksList from './components/PoetWorksList/PoetWorksList'
import PoetPhotoGallary from './components/PoetPhotoGallary/PoetPhotoGallary'
import PoetVideo from './components/PoetVideo/PoetVideo'
import PoetMap from './components/PoetMap/PoetMap'

// пока что хардкодь информацию по поэту в этом файле
// потом когда доделаешь полностью, я прикручу перевод контента
import contentPoetsRu from '../../content/poets-ru'
import contentPoetsBy from '../../content/poets-by'
import contentPoetsEn from '../../content/poets-en'

class PoetPage extends React.Component {
  state = {
    poetInfo: contentPoetsRu[0],
    choosedPoetId: 0
  }

  render() {
    // Благодаря функции connect у вас в this.props появится
    // свойство lang: currentLang ('ru' or 'by' or 'en')
    const { lang } = this.props
    const { choosedPoetId } = this.state
    let choosedPoetContent

    if (lang === 'ru') {
      choosedPoetContent = contentPoetsRu[choosedPoetId]
    } else if (lang === 'en') {
      choosedPoetContent = contentPoetsEn[choosedPoetId]
    } else {
      choosedPoetContent = contentPoetsBy[choosedPoetId]
    }

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
        <PoetWorksList lang={lang} composition={choosedPoetContent.composition} />
        <PoetPhotoGallary lang={lang} />
        <PoetVideo lang={lang} />
        <PoetMap lang={lang} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(PoetPage)
