import { SET_STOCKS } from "../actions/stocks"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCKS:
      return action.stocks
    default:
      return state
  }
}

export default reducer
