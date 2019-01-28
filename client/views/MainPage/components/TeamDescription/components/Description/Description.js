import React from 'react'

import './description.scss'

const alesia = require(`../../../../../../assets/img/Alesia.jpg`)
const mrstalon = require('../../../../../../assets/img/mrstalon.jpg')
const vbkoshak = require('../../../../../../assets/img/vbkoshak.jpg')
const victor = require('../../../../../../assets/img/VictorBelikov.jpg')

const mrstalonName = 'mrstalon'
const vbkoshakName = 'VbKoshak'

const alesiaGit = 'https://github.com/Lesechka'
const mrstalonGit = 'https://github.com/mrstalon'
const vbkoshakGit = 'https://github.com/VbKoshak'
const victorGit = 'https://github.com/VictorBelikov'

const git = 'GitHub: '

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
              <a class="about-text-link" href="#">
                {currentContent.title}
              </a>
            </h3>
            <p>
              <i>{currentContent.description}</i>
            </p>
          </div>

          <div className="team-members-list">
            <div className="about-container">
              <img src={alesia} alt={currentContent.alt} height="190" width="190" />
              <div className="about-photo-item1">
                <p className="about-photo-item-name">
                  <b>{currentContent.nameAlesia}</b>
                </p>
                <p>
                  <i>{git}</i>
                </p>
                <p>
                  <a class="about-text-link" href="https://github.com/Lesechka">
                    {alesiaGit}
                  </a>
                </p>
              </div>
            </div>

            <div className="about-container">
              <div className="about-photo-item" />
              <img src={mrstalon} alt={currentContent.alt} height="190" width="190" />
              <p className="about-photo-item-name">
                <b>{mrstalonName}</b>
              </p>
              <p>
                <i>{git}</i>
              </p>
              <p>
                <a class="about-text-link" href="https://github.com/mrstalon">
                  {mrstalonGit}
                </a>
              </p>
            </div>

            <div className="about-container">
              <div className="about-photo-item" />
              <img src={victor} alt={currentContent.alt} height="190" width="190" />
              <p className="about-photo-item-name">
                <b>{currentContent.nameVictor}</b>
              </p>
              <p>
                <i>{git}</i>
              </p>
              <p>
                <a class="about-text-link" href="https://github.com/victorbelikov">
                  {victorGit}
                </a>
              </p>
            </div>

            <div className="about-container">
              <div className="about-photo-item" />
              <img src={vbkoshak} alt={currentContent.alt} height="190" width="190" />
              <p className="about-photo-item-name">
                <b>{vbkoshakName}</b>
              </p>
              <p>
                <i>{git}</i>
              </p>
              <p>
                <a class="about-text-link" href="https://github.com/VbKoshak">
                  {vbkoshakGit}
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
