import React from 'react'

import './search-cities-select.scss'

class SearchCitiesSelect extends React.Component {
  state = {
    content: {
      ru: {
        selectLabel: 'Город:',
        defaultOption: 'Не выбрано'
      },
      en: {
        selectLabel: 'City:',
        defaultOption: 'Not choosed'
      },
      by: {
        selectLabel: 'Горад',
        defaultOption: 'Не вылучана'
      }
    }
  }

  render() {
    const { value, handleSelectChange, cities, lang } = this.props
    const { content } = this.state
    const currentContent = content[lang]

    return (
      <div className="search-bar__cities-select-container">
        <span>{currentContent.selectLabel}</span>
        <select className="search-bar__cities-select" value={value} onChange={handleSelectChange}>
          <option value={currentContent.defaultOption}>{currentContent.defaultOption}</option>
          {cities.map((city, id) => {
            return <option value={city} key={id}>{city}</option>
          })}
        </select>
      </div>
    )
  }
}

export default SearchCitiesSelect
