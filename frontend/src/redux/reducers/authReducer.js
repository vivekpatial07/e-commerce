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

    case authActions.SIGNUPSUCCESS:
      return {
        ...state,
        signUpLoader: false
      }
    
    case authActions.SIGNUPFAILURE:
      return {
        ...state,
        signUpLoader: false
      }

    default:
      return {
      ...state
    }
  }
}