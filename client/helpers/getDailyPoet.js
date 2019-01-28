import poetsContentRu from '../content/poets-ru'
import poetsContentEn from '../content/poets-en'
import poetsContentBy from '../content/poets-by'

import getRandomNumber from './getRandomNumber'

export default (lang, id) => {
  switch (lang) {
    case 'en': {
      if (id) {
        return poetsContentEn[id]
      }
      return poetsContentEn[getRandomNumber(0, poetsContentEn.length)]
    }
    case 'ru': {
      if (id) {
        return poetsContentRu[id]
      }
      return poetsContentRu[getRandomNumber(0, poetsContentRu.length)]
    }
    case 'by': {
      if (id) {
        return poetsContentBy[id]
      }
      return poetsContentBy[getRandomNumber(0, poetsContentBy.length)]
    }
  }
}