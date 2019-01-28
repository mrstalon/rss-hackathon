import React from 'react'
import { connect } from 'react-redux'

import './team-contacts.scss'

class TeamContacts extends React.Component {
  state = {
    content: {
      ru: {
        title: ''
      },
      en: {
        title: ''
      },
      by: {
        title: ''
      }
    }
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <footer className="team-contacts">
        <h2>{currentContent.title}</h2>
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
