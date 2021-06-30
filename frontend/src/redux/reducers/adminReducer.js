
import { AdminActions } from "../actionTypes"

const adminState = {
  fetchUsersLoader: false,
  allUsers:[]
}

export const adminReducer = (state=adminState, action) => {
  switch(action.type) {
    case AdminActions.FETCH_ALL_USERS_INIT:
      return {
        ...state,
        fetchUsersLoader: true
      }

    case AdminActions.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        fetchUsersLoader: false,
        allUsers: action.payload
      }
    
    default:
      return {
      ...state
      }
  }
}

