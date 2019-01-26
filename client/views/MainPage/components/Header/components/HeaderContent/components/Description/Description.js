import React from 'react'
import { connect } from 'react-redux'

import './description.scss'

class Description extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Поэты Беларуси',
        description: 'Место, где вы можете узнать самые интересные факты о своих любимых поэтах'
      },
      en: {
        title: 'Belarusian Poets',
        description: 'Place where you can find the most interesting facts about your favorite poets'
      },
      by: {
        title: 'Паэты Беларусі',
        description: 'Месца, дзе вы можаце даведацца самыя цікавыя рэчы пра сваіх любімых паэтаў'
      }
    }
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <div className="project-description">
        <h1>{currentContent.title}</h1>
        <hr />
        <p>{currentContent.description}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang
  }
}

export default connect(mapStateToProps)(Description)
