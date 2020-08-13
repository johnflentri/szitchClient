import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import content from './content'
import teams from './teams'

export default combineReducers({
  user,
  event,
  content,
  teams
})