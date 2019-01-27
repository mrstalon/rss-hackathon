import React from 'react'

import './search-page.scss'

import SearchBar from './components/SearchBar'

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-page">
        <SearchBar />
      </div>
    )
  }
}

export default SearchPage