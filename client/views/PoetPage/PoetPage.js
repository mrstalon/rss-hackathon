import React from 'react'
import { connect } from 'react-redux'

import './poet-page.scss'

import PoetPhoto from './components/PoetPhoto/PoetPhoto'
import PoetBiography from './components/PoetBiography/PoetBiography'
import PoetWorksList from './components/PoetWorksList/PoetWorksList'
import PoetPhotoGallary from './components/PoetPhotoGallary/PoetPhotoGallary'
import PoetVideo from './components/PoetVideo/PoetVideo'
import PoetMap from './components/PoetMap/PoetMap'

class PoetPage extends React.Component {
  // пока что хардкодь тут информацию по поэту
  // потом когда доделаешь полностью, я прикручу перевод контента
  state = {
    poetInfo: {
      name: 'Имя поэта'
      // и так далее, это нужно будет согласовывать с тем кто будет контент искать
    },
  }

  render() {
    // Благодаря функции connect у вас в this.props появится
    // свойство lang: currentLang ('ru' or 'by' or 'en')
    return (
      <div className="poet-page">
        <PoetPhoto lang={this.props.lang}/>
        <PoetBiography lang={this.props.lang} />
        <PoetWorksList lang={this.props.lang} />
        <PoetPhotoGallary lang={this.props.lang} />
        <PoetVideo lang={this.props.lang} />
        <PoetMap lang={this.props.lang} />
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