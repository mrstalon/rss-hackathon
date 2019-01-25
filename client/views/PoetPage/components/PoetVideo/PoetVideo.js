import React from 'react'

import './poet-video.scss'

class PoetVideo extends React.Component {
  state = {
    content: {
      'ru': {
        title: 'Привет из видео поэта'
      },
      'en': {
        title: 'Hello from poet video'
      },
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: {
      title: 'Привет из видео поэта'
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
      <div className="poet-video">
        <h1>{this.state.currentContent.title}</h1>
      </div>
    )
  }
}

export default PoetVideo