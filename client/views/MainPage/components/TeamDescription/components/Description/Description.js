import React from 'react'
import './description.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faVk, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const alesia = require(`../../../../../../assets/img/Alesia.jpg`)
const mrstalon = require('../../../../../../assets/img/mrstalon.jpg')
const vbkoshak = require('../../../../../../assets/img/vbkoshak.jpg')
const victor = require('../../../../../../assets/img/_VictorBelikov.jpg')

const mrstalonName = 'Artem Zekov'
const vbkoshakName = 'Vlad Boltrukanis'

class Description extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Наша команда',
        description:
          'Наша команда состоит из способных студентов знаменитой Rolling Scopes School, успешно прошедших второй этап обучения в школе.',
        alt: 'Фото',
        nameAlesia: 'Олеся Бондаренко',
        nameVictor: 'Виктор Беликов'
      },
      en: {
        title: 'Our team',
        description:
          'Our team consists of capable students of the famous Rolling Scopes School who have successfully completed the second stage of the schooling.',
        alt: 'Photo',
        nameAlesia: 'Alesia Bandarenka',
        nameVictor: 'Victor Belikov'
      },
      by: {
        title: 'Наша каманда',
        description:
          'Наша каманда складаецца са здольных студэнтаў знакамітай Rolling Scopes School, якія паспяхова прайшлі другі этап навучання ў школе.',
        alt: 'Фота',
        nameAlesia: 'Алеся Бандарэнка',
        nameVictor: 'Віктар Белікаў'
      }
    }
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <section className="about">
        <div className="container">
          <div className="about-text">
            <h3>
              <a className="about-text-linkteam" href="#">
                {currentContent.title}
              </a>
            </h3>
            <p>
              <i>{currentContent.description}</i>
            </p>
          </div>

          <div className="team-members-list">
            <div className="about-container">
              <img className="team__members--avatar" src={alesia} alt={currentContent.alt}
                   height="190" width="190"/>
              <div className="about-photo-item1">
                <p className="about-photo-item-name">
                  <b>{currentContent.nameAlesia}</b>
                </p>
                <p>
                  <a target="_blank" className="about-text-link" href="https://github.com/Lesechka">
                    <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                  </a>
                  <a target="_blank" className="about-text-link" href="https://github.com/Lesechka">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                  </a>
                  <a target="_blank" className="about-text-link" href="https://github.com/Lesechka">
                    <FontAwesomeIcon icon={faVk} size="3x"/>
                  </a>
                </p>
              </div>
            </div>

            <div className="about-container">
              <div className="about-photo-item"/>
              <img className="team__members--avatar" src={mrstalon} alt={currentContent.alt}
                   height="190" width="190"/>
              <p className="about-photo-item-name">
                <b>{mrstalonName}</b>
              </p>
              <p>
                <a target="_blank" className="about-text-link" href="https://github.com/mrstalon">
                  <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                </a>
                <a target="_blank" className="about-text-link" href="https://github.com/mrstalon">
                  <FontAwesomeIcon icon={faGithub} size="3x"/>
                </a>
                <a target="_blank" className="about-text-link" href="https://github.com/mrstalon">
                  <FontAwesomeIcon icon={faVk} size="3x"/>
                </a>
              </p>
            </div>

            <div className="about-container">
              <div className="about-photo-item"/>
              <img className="team__members--avatar" src={victor} alt={currentContent.alt}
                   height="190" width="190"/>
              <p className="about-photo-item-name">
                <b>{currentContent.nameVictor}</b>
              </p>
              <p>
                <a target="_blank" className="about-text-link"
                   href="https://github.com/victorbelikov">
                  <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                </a>
                <a target="_blank" className="about-text-link"
                   href="https://github.com/victorbelikov">
                  <FontAwesomeIcon icon={faGithub} size="3x"/>
                </a>
                <a target="_blank" className="about-text-link"
                   href="https://github.com/victorbelikov">
                  <FontAwesomeIcon icon={faVk} size="3x"/>
                </a>
              </p>
            </div>

            <div className="about-container">
              <div className="about-photo-item"/>
              <img className="team__members--avatar" src={vbkoshak} alt={currentContent.alt}
                   height="190" width="190"/>
              <p className="about-photo-item-name">
                <b>{vbkoshakName}</b>
              </p>
              <p>
                <a target="_blank" className="about-text-link" href="https://github.com/VbKoshak">
                  <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                </a>
                <a target="_blank" className="about-text-link" href="https://github.com/VbKoshak">
                  <FontAwesomeIcon icon={faGithub} size="3x"/>
                </a>
                <a target="_blank" className="about-text-link" href="https://github.com/VbKoshak">
                  <FontAwesomeIcon icon={faVk} size="3x"/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Description
