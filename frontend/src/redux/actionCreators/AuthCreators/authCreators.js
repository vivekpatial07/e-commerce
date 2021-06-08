import { authActions } from '../../actionTypes'

export const signupInitiate = (data) => {
  return {
    type: authActions.SIGNUPINITIATE,
    payload: data
  }
}

export const loginInitiate = (data) => {
  return {
    type: authActions.LOGININITIATE,
    payload: data
  }
}