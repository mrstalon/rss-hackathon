import { CHANGE_LANGUAGE } from '../../constants/action-types/lang'

const defaultState = {
  lang: 'ru'
}

export default function castedSpellInfo(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        lang: action.payload
      }
    }
    default: {
      return state
    }
  }
}