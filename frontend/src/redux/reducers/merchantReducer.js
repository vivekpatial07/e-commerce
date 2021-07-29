import { merchantActions } from '../actionTypes'

const initialState = {
  fetchMerchProdLoader: false,
  merchProds: []
}

export const merchantReducer = (state=initialState, action) => {
  switch(action.type){
    
    case merchantActions.FETCH_MERCH_PROD_INIT:
      return {
        fetchMerchProdLoader: true
      }
    
    case merchantActions.FETCH_MERCH_PROD_SUCCESS:
      return {
        merchProds: action.payload,
        fetchMerchProdLoader: false
      }
    
    default:
      return state
  }
}