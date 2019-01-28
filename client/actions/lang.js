import { CHANGE_LANGUAGE } from '../constants/action-types/lang'

export function changeLanguage(newLang) {
  return {
    type: CHANGE_LANGUAGE,
    payload: newLang
  }
}