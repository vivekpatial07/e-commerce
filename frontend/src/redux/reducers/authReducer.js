import { authActions } from '../actionTypes'

const initialSignupState = {
  signUpLoader: false
}
export const signUpReducer = (state=initialSignupState, action) => {
  switch(action.type) {
    case authActions.SIGNUPINITIATE:
      return {
        ...state,
        signUpLoader: true
      }

    default:
      return {
      ...state
    }
  }
}