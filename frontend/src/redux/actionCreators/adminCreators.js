import { AdminActions } from "../actionTypes";

export const fetchAllUsersInititate = () => {
  return {
    type: AdminActions.FETCH_ALL_USERS_INIT,
  }
}

export const fetchAllUsersSuccess = (data) => {
  return {
    type: AdminActions.FETCH_ALL_USERS_SUCCESS,
    payload: data
  }
}