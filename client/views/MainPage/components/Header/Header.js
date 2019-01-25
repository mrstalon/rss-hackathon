import React from 'react'
import { connect } from 'react-redux'

import './header.scss'

class Header extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из хэдера сайта'
      },
      'en': {
        title: 'Hello from header'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: {
      title: 'Привет из хэдера сайта'
    }
  }

  componentDidMount() {
    // Благодаря функции connect у вас в this.props появится
    // свойство lang: currentLang ('ru' or 'by' or 'en')
    this.setState((state, props) => {
      return {
        currentContent: state.content[props.lang]
      }
    })
  }

  componentWillReceiveProps(newProps) {
    // componentWillReceiveProps вызовется когда данному компоненту будут переданы новые props
    // в данном случае у нас может меняться язык, поэтому мы обновляем 
    // язык контента в state нашего компонента при изменении языка в this.props.lang
    this.setState((state) => {
      return {
        currentContent: state.content[newProps.lang]
      }
    })
  }

  render() {
    return (
      <header className="header">
        <h1>{this.state.currentContent.title}</h1>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(Header)