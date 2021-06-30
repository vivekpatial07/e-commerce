import axios from 'axios'
import { put } from 'redux-saga/effects'
import { fetchAllUsersSuccess } from '../actionCreators/adminCreators'

export function* fetchAllUsersSaga(){
  try {
    const response = yield axios.get('/admin/fetchAllUsers')
    yield put(fetchAllUsersSuccess(response.data))
  } catch (error) {
      alert('failed to fetch')
  }

}