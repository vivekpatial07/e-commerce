import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { signUpReducer } from './reducers/authReducer'
import createSagaMiddleware from 'redux-saga'
import watcherSaga from './sagas/watcherSaga'

const reducer = combineReducers({
  signUp: signUpReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watcherSaga)

export default store