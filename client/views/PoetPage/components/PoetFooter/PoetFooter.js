import React from 'react'
import './poet-footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faVk,
  faLinkedinIn,
  faGooglePlus
} from '@fortawesome/free-brands-svg-icons'

class PoetFooter extends React.Component {
  state = {
    content: {
      en: {
        copyright: 'All Right Reserved | Privacy Policy',
        social: 'GET SOCIAL WITH US'
      },
      ru: {
        copyright: 'Все Права Защищены | Политика Конфиденциальности',
        social: 'МЫ В СОЦИАЛЬНЫХ СЕТЯХ'
      },
      by: {
        copyright: 'Усе Правы Абаронены | Палітыка Прыватнасці',
        social: 'МЫ У САЦЫЯЛЬНЫХ СЕТКАХ'
      }
    },
    currentContent: null
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <footer className="poet__footer--container">
        <div className="poet__footer--copyright">
          <p>RS DreamTeam &copy; 2019</p>
          <p>{currentContent.copyright}</p>
        </div>
        <div className="poet__footer--social">
          <p>{currentContent.social}</p>
          <ul className="poet__footer--iconcontainer">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGooglePlus} color="white" size="2x"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faVk} color="white" size="2x"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} color="white" size="2x"/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default PoetFooter
