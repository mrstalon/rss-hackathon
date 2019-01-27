import React from 'react'
import './poet-biography.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

class PoetBiography extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Привет из биографии поэта'
      },
      en: {
        title: 'Hello from poet biography'
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
    const { lang, description } = this.props
    const currentContent = content[lang]

    const elements = description.map((el) => {
      return (
        <VerticalTimelineElement
          key={el.id}
          className="vertical-timeline-element--work"
          date={el.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <p>{el.event}</p>
        </VerticalTimelineElement>
      )
    })

    return (
      <div className="poet__biography--container">
        <h2 className="poet__biography--title">Биография</h2>
        <VerticalTimeline>
          {elements}
          <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} />
        </VerticalTimeline>
      </div>
    )
  }
}

export default PoetBiography
