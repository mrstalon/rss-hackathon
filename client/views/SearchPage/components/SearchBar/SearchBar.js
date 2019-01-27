import React from 'react'
import { connect } from 'react-redux'

import './search-bar.scss'

import SearchInput from './components/SearchInput'
import SearchCitiesSelect from './components/SearchCitiesSelect'
import PoetsList from './components/PoetsList'

import filterPoets from '../../../../helpers/filterPoets'

import defineContentForLang from '../../../../helpers/defineContentForLang'

class SearchBar extends React.Component {
  state = {
    content: {
      ru: {
        title: 'Поиск авторов'
      },
      en: {
        title: 'Poet search'
      },
      by: {
        title: 'Пошук паэтаў'
      }
    },
    userInput: '',
    choosedCity: 'Не выбрано',
    poets: [],
    searchedPoets: [],
    allPoetsCities: []
  }

  componentDidMount() {
    const { lang } = this.props

    const currentPoetsContent = defineContentForLang(lang)
    const searchedPoets = currentPoetsContent
      .map((poet) => {
        return {
          name: poet.name,
          id: poet.id,
          avatarName: poet.avatarName,
          bornCity: poet.biographyContent[0].born.city
        }
      })
      .sort((a, b) => ('' + a.name).localeCompare(b.name))
    const poetsCities = currentPoetsContent.map((poet) => poet.biographyContent[0].born.city)
    this.setState({ searchedPoets, allPoetsCities: poetsCities, poets: searchedPoets })
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const { searchedPoets } = prevState
    const currentContent = defineContentForLang(nextProps.lang)

    const originalPoets = currentContent
      .map((poet) => {
        return {
          name: poet.name,
          id: poet.id,
          avatarName: poet.avatarName,
          bornCity: poet.biographyContent[0].born.city
        }
      })
      .sort((a, b) => ('' + a.name).localeCompare(b.name))

    const poetsCities = currentContent.map((poet) => poet.biographyContent[0].born.city)

    const newPoets = searchedPoets.map((poet) => {
      const poetToInsert = currentContent.find((p) => p.id === poet.id)
      return {
        name: poetToInsert.name,
        id: poetToInsert.id,
        avatarName: poetToInsert.avatarName,
        bornCity: poetToInsert.biographyContent[0].born.city
      }
    })
    return { searchedPoets: newPoets, poets: originalPoets, allPoetsCities: poetsCities }
  }

  handleInputChange = (e) => {
    this.setState(
      {
        userInput: e.target.value
      },
      this.filterPoets
    )
  }

  handleSelectChange = (e) => {
    this.setState(
      {
        choosedCity: e.target.value
      },
      this.filterPoets
    )
  }

  filterPoets = () => {
    const { choosedCity, poets, userInput } = this.state
    const newSearchedPoets = filterPoets(userInput, choosedCity, poets)
    this.setState({ searchedPoets: newSearchedPoets })
  }

  render() {
    const { handleInputChange, handleSelectChange } = this
    const { userInput, choosedCity, searchedPoets, allPoetsCities, content } = this.state
    const { lang } = this.props
    const currentContent = content[lang]

    return (
      <div className="search-bar">
        <h1 className="search-bar__title">{currentContent.title}</h1>
        <SearchInput value={userInput} handleInputChange={handleInputChange} lang={lang} />
        <SearchCitiesSelect
          value={choosedCity}
          handleSelectChange={handleSelectChange}
          cities={allPoetsCities}
          lang={lang}
        />
        <PoetsList poets={searchedPoets} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.langInfo.lang
})

export default connect(mapStateToProps)(SearchBar)
