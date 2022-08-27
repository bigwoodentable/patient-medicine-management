import { combineReducers } from "redux"

import stocks from "./stocks"
import waiting from "./waiting"

export default combineReducers({
  stocks,
  waiting,
})
