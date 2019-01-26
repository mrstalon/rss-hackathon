import React from 'react'

import './header-content.scss'

import ProjectDescription from './components/Description'

import headerBgList from '../../../../../../constants/header-bg-list'

class HeaderContent extends React.Component {
  state = {
    intervalId: null,
    currentBgPosition: 0
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      const { currentBgPosition } = this.state
      let nextBgPosition
      if (currentBgPosition + 1 >= headerBgList.length) {
        nextBgPosition = 0
      } else {
        nextBgPosition = currentBgPosition + 1
      }
      this.changeHeaderBg(nextBgPosition)
      this.setState({
        currentBgPosition: nextBgPosition
      })
    }, 3000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    const { intervalId } = this.state
    clearInterval(intervalId)
  }

  changeHeaderBg = (nextBgPosition) => {
    const bgName = headerBgList[nextBgPosition]
    const newBgImg = require(`../../../../../../assets/img/${bgName}`)
    const main = document.querySelector('.header-content__bg-image')
    main.style.background = `url(${newBgImg}) no-repeat`
    main.style.backgroundSize = 'cover';
    main.style.backgroundPosition = 'center center';
  }

  render() {
    return (
      <main className="header-content">
        <div className="header-content__bg-image"></div>
        <ProjectDescription />
      </main>
    )
  }
}
export default HeaderContent