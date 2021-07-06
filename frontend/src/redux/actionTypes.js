
export const authActions = {
  SIGNUPINITIATE: 'SIGNUPINITIATE',
  SIGNUPSUCCESS:  'SIGNUPSUCCESS',
  SIGNUPFAILURE:  'SIGNUPFAILURE',
  LOGININITIATE: 'LOGININITIATE',
  LOGINSUCCESS: 'LOGINSUCCESS',
  LOGINFAILURE: 'LOGINFAILURE',
  LOGOUTINITIATE: 'LOGOUTINITIATE',
  LOGOUTSUCCESS: 'LOGOUTSUCCESS',
  LOGOUTFAILURE: 'LOGOUTFAILURE',
  // REDIRECT_TO_AUTH: 'REDIRECT_TO_AUTH'
}

export const productActions = {
  GET_ALL_PRODUCTS_INITIATE: 'GET_ALL_PRODUCTS_INITIATE',
  GET_ALL_PRODUCTS_SUCCESS: 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_FAILURE: 'GET_ALL_PRODUCTS_FAILURE',
  GET_SINGLE_PRODUCT_INITIATE: 'GET_SINGLE_PRODUCT_INITIATE',
  GET_SINGLE_PRODUCT_SUCCESS: 'GET_SINGLE_PRODUCT_SUCCESS',
  GET_SINGLE_PRODUCT_FAILURE: 'GET_SINGLE_PRODUCTFAILUREE',
  CLEAR_SINGLE_PRODUCT: 'CLEAR_SINGLE_PRODUCT',
  GET_TOP_PRODUCTS_INIT: 'GET_TOP_PRODUCTS_INIT',
  GET_TOP_PRODUCT_SUCCESS: 'GET_TOP_PRODUCT_SUCCESS',
  GET_TOP_PRODUCT_FAILURE: 'GET_TOP_PRODUCT_FAILURE',

  RATE_PRODUCT_INIT: 'RATE_PRODUCT_INIT',
  RATE_PRODUCT_SUCC: 'RATE_PRODUCT_SUCC',
  RATE_PRODUCT_FAIL: 'RATE_PRODUCT_FAIL',

  CHECK_RATED_PRODUCTS_INIT: 'CHECK_RATED_PRODUCTS_INIT',
  CHECK_RATED_PRODUCTS_SUCC: 'CHECK_RATED_PRODUCTS_SUCC',

}

export const cartActions = {
  GET_CART_ITEMS_INITIATE: 'GET_CART_ITEMS_INITIATE',
  GET_CART_ITEMS_SUCCESS: 'GET_CART_ITEMS_SUCCESS',
  GET_CART_ITEMS_FAILURE: 'GET_CART_ITEMS_FAILURE',

  // single product fetch in cart
  FETCH_CART_PRODUCT_INITIATE: 'FETCH_CART_PRODUCT_INITIATE',
  FETCH_CART_PRODUCT_SUCCESS: 'FETCH_CART_PRODUCT_SUCCESS',
  FETCH_CART_PRODUCT_FAILURE: 'FETCH_CART_PRODUCT_FAILURE'

}

export const checkoutActions = {
  SET_ADDRESS_INITIATE: 'SET_ADDRESS_INITIATE',
  SET_ADDRESS_SUCCESS: 'SET_ADDRESS_SUCCESS',
  SET_ADDRESS_FAILURE: 'SET_ADDRESS_FAILURE',
  FETCH_ADDRESS_INITIATE: 'FETCH_ADDRESS_INITIATE',
  FETCH_ADDRESS_SUCCESS: 'FETCH_ADDRESS_SUCCESS',
  FETCH_ADDRESS_FAILURE: 'FETCH_ADDRESS_FAILURE',
  FETCH_PAYMENT_INTENT_INITIATE: 'FETCH_PAYMENT_INTENT_INITIATE',
  FETCH_PAYMENT_INTENT_SUCCESS: 'FETCH_PAYMENT_INTENT_SUCCESS',
  FETCH_PAYMENT_INTENT_FAILURE: 'FETCH_PAYMENT_INTENT_FAILURE'
}

export const AdminActions = {
  FETCH_ALL_USERS_INIT: 'FETCH_ALL_USERS_INIT',
  FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
  FETCH_ALL_USERS_FAILURE: 'FETCH_ALL_USERS_FAILURE'

}