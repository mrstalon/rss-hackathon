import React from 'react'
import './member.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faVk, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

class Member extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="about-container">
        <img className="team__members--avatar" src={this.props.photo} alt={this.props.alt}
             height="190" width="190"/>
        <div className="about-photo-item1">
          <p className="about-photo-item-name">
            <b>{this.props.name}</b>
          </p>
          <p>
            <a target="_blank" className="about-text-link" href={this.props.github}>
              <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
            </a>
            <a target="_blank" className="about-text-link" href={this.props.github}>
              <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>
            <a target="_blank" className="about-text-link" href={this.props.github}>
              <FontAwesomeIcon icon={faVk} size="3x"/>
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Member
