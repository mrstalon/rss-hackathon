import { CHANGE_CHOOSED_POET_ID } from '../constants/action-types/poet'

export function changeChoosedPoetId(id) {
  return {
    type: CHANGE_CHOOSED_POET_ID,
    payload: id
  }
}