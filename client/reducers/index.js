import { combineReducers } from 'redux'

import stocks from './stocks'
import medicines from './medicines'
import waiting from './waiting'

export default combineReducers({
  stocks,
  medicines,
  waiting,
})
