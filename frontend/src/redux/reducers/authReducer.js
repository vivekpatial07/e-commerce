import { authActions } from '../actionTypes'

const authState = {
  authloader: false,
  redirect: false
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
        authloader: false,
        redirect: true
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
        authloader: false,
        redirect: true
      }

    case authActions.LOGINFAILURE:
      return {
        ...state,
        authloader: false
      }

    case authActions.LOGOUTINITIATE:
      return {
        ...state,
        authloader: true
      }

    case authActions.LOGOUTSUCCESS:
      return {
        ...state,
        authloader: false,
        redirect: false
      }

    case authActions.LOGOUTFAILURE:
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