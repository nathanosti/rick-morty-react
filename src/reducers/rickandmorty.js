import { INITIAL_STATE } from '../store/state'
import { TYPES } from '../store/types'

const { GET_CHARACTERS } = TYPES

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      state.characters = payload
      return state
    default:
      return state
  }
}