import { combineReducers } from 'redux'

import stocks from './stocks'
import medicines from './medicines'

export default combineReducers({
  stocks,
  medicines,
})
