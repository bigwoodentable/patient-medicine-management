import { SET_MEDS } from '../actions/medicines'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDS:
      return action.meds
    default:
      return state
  }
}

export default reducer
