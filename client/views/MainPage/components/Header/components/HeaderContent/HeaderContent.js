import React from 'react'

import './header-content.scss'

import ProjectDescription from './components/Description'

import headerBgList from '../../../../../../constants/header-bg-list'

class HeaderContent extends React.Component {
  state = {
    intervalId: null,
    currentBgPosition: 0,
    bgImages: null
  }

  componentDidMount() {
    this.preloadBgImages()
    const intervalId = this.setAnimationInterval()
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    const { intervalId } = this.state
    clearInterval(intervalId)
  }

  preloadBgImages = () => {
    const bgImages = headerBgList.map((imgPath) => {
      return require(`../../../../../../assets/img/${imgPath}`)
    })
    this.setState({ bgImages })
  }

  setAnimationInterval = () => {
    return setInterval(() => {
      const { currentBgPosition } = this.state
      let nextBgPosition
      if (currentBgPosition + 1 >= headerBgList.length) {
        nextBgPosition = 0
      } else {
        nextBgPosition = currentBgPosition + 1
      }
      this.setState({
        currentBgPosition: nextBgPosition
      })
    }, 3000)
  }

  render() {
    const { bgImages, currentBgPosition } = this.state
    if (!bgImages) {
      return null
    }
    const bgImage = bgImages[currentBgPosition]

    return (
      <main className="header-content">
        <div
          className="header-content__bg-image"
          style={{
            background: `url(${bgImage}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        <ProjectDescription />
      </main>
    )
  }
}
export default HeaderContent
