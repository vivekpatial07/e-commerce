import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loginReducer, signUpReducer } from './reducers/authReducer'
import createSagaMiddleware from 'redux-saga'
import watcherSaga from './sagas/watcherSaga'
import { productsReducer } from './reducers/productsReducer'

const reducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  products: productsReducer 
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watcherSaga)

export default store