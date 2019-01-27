import React from 'react'

import './search-input.scss'

class SearchInput extends React.Component {
  state = {
    content: {
      ru: {
        placeholder: 'Введите имя поэта'
      },
      by: {
        placeholder: 'Увядзіце імя паэта'
      },
      en: {
        placeholder: "Enter poet's name"
      }
    }
  }

  render() {
    const { lang, value, handleInputChange } = this.props
    const { content } = this.state
    const currentContent = content[lang]

    return (
      <input className="search-bar__input" placeholder={currentContent.placeholder} value={value} onChange={handleInputChange} />
    )
  }
}

export default SearchInput
