import {
  LOGGED_IN, CURRENT_USER, USER_PROFILES, CHANGE_USER_AVATAR
} from '../actions'

const initialState = ''

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload;
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case CHANGE_USER_AVATAR:
      return action.payload
    case USER_PROFILES:
      return action.payload
    default:
      return state;
  }
}