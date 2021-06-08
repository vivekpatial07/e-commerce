import authActionTypes from '../../actionTypes/AuthActionTypes'

export const signupInitiate = (data) => {
  return {
    type: authActionTypes.SIGNUPINITATE,
    payload: data
  }
}