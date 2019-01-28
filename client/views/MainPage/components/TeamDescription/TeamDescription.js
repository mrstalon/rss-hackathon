import React from 'react'
import { connect } from 'react-redux'

import ProjectDescription from './components/Description'

class HeaderContent extends React.Component {
  render() {
    const { lang } = this.props
    return (
      <main>
        <ProjectDescription lang={lang} />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.langInfo.lang
})

export default connect(mapStateToProps)(HeaderContent)
