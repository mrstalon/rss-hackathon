import React, { Component } from 'react'
import './works-table.scss'

class PoetWorksList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const compositions = this.props.composition.map((el) => {
      return (
        <tr key={el.id}>
          <td className="poet__worklist--year">{el.year}</td>
          <td>{el.name}</td>
        </tr>
      )
    })

    return (
      <table className="poet__worklist-content">
        <tbody>
        <tr>
          <th>Год издания</th>
          <th>Книга</th>
        </tr>
        {compositions}
        </tbody>
      </table>
    )
  }
}

export default PoetWorksList
