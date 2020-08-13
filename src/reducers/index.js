import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import content from './content'

export default combineReducers({
  user,
  event,
  content
})