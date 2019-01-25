import React from 'react'
import { connect } from 'react-redux'

import './daily-top-poet.scss'

class DailyTopPoet extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из автора дня'
      },
      'en': {
        title: 'Hello from daily top poet'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: {
      title: 'Привет из автора дня'
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
      <section className="daily-poet">
        <h1>{this.state.currentContent.title}</h1>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(DailyTopPoet)