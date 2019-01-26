import React from 'react'
import WorksTable from './components/WorksTable/WorksTable'
import './poet-works-list.scss'

class PoetWorksList extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Привет из списка произведений поэта'
      },
      en: {
        title: 'Hello from poet works list'
      }
      // 'by': {
      //   title: '...'
      // }
    },

    // по дефолту язык будет русским
    currentContent: null
  }

  render() {
    const { content } = this.state
    const { lang, composition } = this.props
    const currentContent = content[lang]

    return (
      <div className="poet__worklist--container">
        <h2 className="poet__worklist--title">Библиография</h2>
        <div className="poet__worklist-main">
          <WorksTable composition={composition} />
        </div>
      </div>
    )
  }
}

export default PoetWorksList
