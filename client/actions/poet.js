import { CHANGE_CHOOSED_POET_ID, CHANGE_TOP_POET_ID } from '../constants/action-types/poet'

export function changeChoosedPoetId(id) {
  return {
    type: CHANGE_CHOOSED_POET_ID,
    payload: id
  }
}

export function changeTopPoetId(id) {
  return {
    type: CHANGE_TOP_POET_ID,
    payload: id
  }
}