import { authActions } from '../actionTypes'

export const signupInitiate = (data) => {
  return {
    type: authActions.SIGNUPINITIATE,
    payload: data
  }
}

export const signupSuccess = (data) => {
  return {
    type: authActions.SIGNUPSUCCESS,
    payload: data
  }
}

export const signupFailure = (data) => {
  return {
    type: authActions.SIGNUPFAILURE,
    payload: data
  }
}

export const loginInitiate = (data) => {
  return {
    type: authActions.LOGININITIATE,
    payload: data
  }
}

export const loginSuccess = (data) => {
  return {
    type: authActions.LOGINSUCCESS,
    payload: data
  }
}

export const loginFailure = (data) => {
  return {
    type: authActions.LOGINFAILURE,
    payload: data
  }
}