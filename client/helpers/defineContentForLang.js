import poetsListRu from '../content/poets-ru'
import poetsListBy from '../content/poets-by'
import poetsListEn from '../content/poets-en'

export default (lang) => {
  switch(lang) {
    case 'en': {
      return poetsListEn
    }
    case 'ru': {
      return poetsListRu
    }
    case 'by': {
      return poetsListBy
    }
  }
}