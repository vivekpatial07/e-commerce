import { createSelector } from 'reselect'

export const allProductsData = createSelector(
  state => state.products,
  prodState => {
    const { allProducts, productsLoader } = prodState
    return {
      allProducts,
      productsLoader
    }
  }

)