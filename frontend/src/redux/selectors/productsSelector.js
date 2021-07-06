import { createSelector } from 'reselect'

export const allProductsData = createSelector(
  state => state.products,
  prodState => {
    const {
      allProducts,
      productsLoader,
      topProducts,
      topProductsLoader,
      productRated,
      checkProdLoader,

    } = prodState
    return {
      allProducts,
      productsLoader,
      topProducts,
      topProductsLoader,
      productRated,
      checkProdLoader,
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