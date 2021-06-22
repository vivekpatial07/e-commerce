import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loginReducer, signUpReducer } from './reducers/authReducer'
import createSagaMiddleware from 'redux-saga'
import watcherSaga from './sagas/watcherSaga'
import { productsReducer, singleProductReducer } from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watcherSaga)

export default store