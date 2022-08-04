import { combineReducers } from 'redux'
import counter from './counter'
import quiz from './quiz'

export default combineReducers({
  counter,
  quiz,
})
