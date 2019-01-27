import React from 'react'

const Poet = ({name, avatarName, bornCity, handlePoetClick, id}) => {
  const img = require(`../../../../../../../assets/img/${avatarName}`)

  return (
    <div className="poets-list__item" onClick={() => handlePoetClick(id)}>
      <img src={img} />
      <div>
        <h1 className="poet-list__item__name">{name}</h1>
        <span className="poet-list__item__city">{bornCity}</span>
      </div>
    </div>
  )
}

export default Poet