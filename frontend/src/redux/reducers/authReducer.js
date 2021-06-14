import { authActions } from '../actionTypes'

const authState = {
  authloader: false
}

export const signUpReducer = (state=authState, action) => {
  switch(action.type) {
    
    case authActions.SIGNUPINITIATE:
      return {
        ...state,
        authloader: true
      }

    case authActions.SIGNUPSUCCESS:
      return {
        ...state,
        authloader: false
      }
    
    case authActions.SIGNUPFAILURE:
      return {
        ...state,
        authloader: false
      }

    default:
      return {
      ...state
    }
  }
}

export const loginReducer = (state=authState, action) => {
  switch(action.type) {
    
    case authActions.LOGININITIATE:
      return {
        ...state,
        authloader: true
      }

    case authActions.LOGINSUCCESS:
      return {
        ...state,
        authloader: false
      }

    case authActions.LOGINFAILURE:
      return {
        ...state,
        authloader: false
      }
      
    default:
      return {
        ...state
      }
  }
}