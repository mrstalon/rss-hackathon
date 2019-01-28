import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './daily-top-poet.scss'

import getDailyPoet from '../../../../helpers/getDailyPoet'

import { changeChoosedPoetId, changeTopPoetId } from '../../../../actions/poet'

class DailyTopPoet extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Поэт дня'
      },
      en: {
        title: 'Daily top poet'
      },
      by: {
        title: 'Паэт дня'
      }
    },
    lang: null,
    currentContent: null,
    poetId: null
  }

  redirect = () => {
    const { history, dispatch } = this.props
    const { poetId } = this.state
    dispatch(changeChoosedPoetId(poetId))
    history.push('/poet')
  }

  componentDidMount() {
    if (this.props.poetId !== null) {
      this.setState({poetId: this.props.poetId})
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.lang === nextProps.props) {
      return null
    }
    let currentContent
    if (prevState.poetId) {
      currentContent = getDailyPoet(nextProps.lang, prevState.poetId)
    } else {
      currentContent = getDailyPoet(nextProps.lang)
    }
    nextProps.dispatch(changeTopPoetId(currentContent.id))
    return { currentContent, lang: nextProps.lang, poetId: currentContent.id }
  }

  render() {
    const { currentContent, content } = this.state
    const { lang } = this.props
    const { redirect } = this
    const currentUIContent = content[lang]


    const avatar = require(`../../../../assets/img/${currentContent.avatarName}`)
    const name = currentContent.name
    const { city, country } = currentContent.biographyContent[0].born
    const timePeriod = currentContent.biographyContent[0].period

    return (
      <section className="daily-poet">
        <h1 className="daily-poet__title">{currentUIContent.title}</h1>
        <div className="daily-poet-content-container">
          <img src={avatar} className="daily-poet__avatar" onClick={redirect} />
          <div className="daily-poet-content">
            <h1 className="daily-poet-content__title">{name}</h1>
            <h2>{`${city}, ${country}`}</h2>
            <h3>{timePeriod}</h3>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.langInfo.lang,
    poetId: state.topPoetId
  }
}

export default withRouter(connect(mapStateToProps)(DailyTopPoet))
