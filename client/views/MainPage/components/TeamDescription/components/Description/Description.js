import React from 'react'
import './description.scss'
import Member from '.././Member/Member'

const alesia = require(`../../../../../../assets/img/Alesia.jpg`)
const mrstalon = require('../../../../../../assets/img/mrstalon.jpg')
const victor = require('../../../../../../assets/img/_VictorBelikov.jpg')
const vbkoshak = require('../../../../../../assets/img/vbkoshak.jpg')

class Description extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Наша команда',
        description:
          'Наша команда состоит из способных студентов знаменитой Rolling Scopes School, успешно прошедших второй этап обучения в школе.',
        alt: 'Фото',
        names: ['Олеся Бондаренко', 'Артем Зеков', 'Виктор Беликов', 'Vlad Boltrukanis']
      },
      en: {
        title: 'Our team',
        description:
          'Our team consists of capable students of the famous Rolling Scopes School who have successfully completed the second stage of the schooling.',
        alt: 'Photo',
        names: ['Alesia Bandarenka', 'Artem Zekov', 'Victor Belikov', 'Vlad Boltrukanis']
      },
      by: {
        title: 'Наша каманда',
        description:
          'Наша каманда складаецца са здольных студэнтаў знакамітай Rolling Scopes School, якія паспяхова прайшлі другі этап навучання ў школе.',
        alt: 'Фота',
        names: ['Алеся Бандарэнка', 'Арцем Зекаў', 'Віктар Белікаў', 'Vlad Boltrukanis']
      }
    },
    persons: [
      { id: 1, gitHub: 'https://github.com/Lesechka', photo: alesia },
      { id: 2, gitHub: 'https://github.com/mrstalon', photo: mrstalon },
      { id: 3, gitHub: 'https://github.com/victorbelikov', photo: victor },
      { id: 4, gitHub: 'https://github.com/VbKoshak', photo: vbkoshak }
    ]
  }

  render() {
    const { content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <section className="about">
        <div className="container">
          <div className="about-text">
            <h3><span className="about-text-linkteam">{currentContent.title}</span></h3>
            <p><i>{currentContent.description}</i></p>
          </div>
          <div className="team-members-list">
            {this.state.persons.map((person, i) => (
              <Member
                key={person.id}
                photo={person.photo}
                github={person.gitHub}
                alt={currentContent.alt}
                name={currentContent.names[i]}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Description
