import React from 'react'

import './poet-works-list.scss'

class PoetWorksList extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из списка произведений поэта'
      },
      'en': {
        title: 'Hello from poet works list'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: {
      title: 'Привет из списка произведений поэта'
    }
  }

  componentDidMount() {
    // из компонента родителя мы получаем this.props.lang = currentLang
    // свойство lang: currentLang ('ru' or 'by' or 'en')
    // устанавливаем контент в зависимости от языка
    this.setState((state, props) => {
      return {
        currentContent: state.content[props.lang]
      }
    })
  }

  componentWillReceiveProps(newProps) {
    // в данном случае у нас может обновиться язык, поэтому мы обновляем 
    // контент в зависимости от нового языка 
    this.setState((state) => {
      return {
        currentContent: state.content[newProps.lang]
      }
    })
  }

  render() {
    return (
      <div className="poet-works-list">
        <h1>{this.state.currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetWorksList