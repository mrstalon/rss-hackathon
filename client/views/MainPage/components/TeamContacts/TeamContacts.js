import React from 'react'
import { connect } from 'react-redux'

import './team-contacts.scss'

class TeamContacts extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из контактов команды'
      },
      'en': {
        title: 'Hello from team contacts'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: {
      title: 'Привет из контактов команды'
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
      <footer className="team-contacts">
        <h2>{this.state.currentContent.title}</h2>
      </footer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(TeamContacts)