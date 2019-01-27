import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './poets-list.scss'

import Poet from './components/Poet'

import { changeChoosedPoetId } from '../../../../../../actions/poet'

class PoetsList extends React.Component {
  handlePoetClick = (id) => {
    this.props.dispatch(changeChoosedPoetId(id))
    this.props.history.push('/poet')
  }

  render() {
    const { handlePoetClick } = this
    const { poets } = this.props

    return (
      <div className="poets-list">
        {poets.map((poet) => {
          return (
            <Poet
              key={poet.id}
              name={poet.name}
              avatarName={poet.avatarName}
              bornCity={poet.bornCity}
              id={poet.id}
              handlePoetClick={handlePoetClick}
            />
          )
        })}
      </div>
    )
  }
}

export default withRouter(connect(null)(PoetsList))