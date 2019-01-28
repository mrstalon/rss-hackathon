import { CHANGE_TOP_POET_ID } from '../../constants/action-types/poet'

export default function (state = null, action) {
  switch (action.type) {
    case CHANGE_TOP_POET_ID: {
      return action.payload
    }
    default: {
      return state
    }
  }
}