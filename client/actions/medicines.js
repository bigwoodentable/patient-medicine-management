import { getAllMedicines } from '../apis/medicines'
import { clearWaiting, setWaiting } from './waiting'

export const SET_MEDS = 'SET_MEDS'

export function setMeds(meds) {
  return {
    type: SET_MEDS,
    meds,
  }
}

export function fetchMeds(navigate) {
  return (dispatch) => {
    dispatch(setWaiting())
    return getAllMedicines()
      .then((meds) => {
        dispatch(setMeds(meds))
        return null
      })
      .then(() => {
        dispatch(clearWaiting())
        navigate ? navigate('/medicines') : null
        return null
      })
      .catch((err) => console.error(err))
  }
}
