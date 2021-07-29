import { createSelector } from 'reselect'

export const merchantData =  createSelector(
  state => state.merchant,
  merchantState => {
    const {
      fetchMerchProdLoader,
      merchProds
    } = merchantState

    return {
      fetchMerchProdLoader,
      merchProds
    }
  }
)