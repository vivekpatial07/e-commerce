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

export const singleProductData = createSelector(
  state => state.singleProduct,
  singleProd => {
    const { product, singleProductLoader } = singleProd
    return {
      product,
      singleProductLoader
    }
  }
)