import {
  GET_CONTENT
} from '../actions'

const initialState = ''

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTENT:
      return action.payload;
    default:
      return state;
  }
}