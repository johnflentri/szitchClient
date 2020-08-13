import {
  GET_TEAMS
} from '../actions'

const initialState = ''

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      return action.payload;
    default:
      return state;
  }
}