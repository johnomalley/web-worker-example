import {SET_PI_VALUE} from '../actions/types'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_PI_VALUE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}