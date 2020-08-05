import {
  GET_EVENTS, GET_EVENT_DETAILS
} from '../actions'

const initialState = ''

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    case GET_EVENT_DETAILS:
      return action.payload;
    default:
      return state;
  }
}