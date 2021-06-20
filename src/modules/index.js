import { combineReducers } from 'redux'
import counter from './counter'
import book_ctrl from './book_ctrl'

export default combineReducers({
  counter,
  book_ctrl
})
