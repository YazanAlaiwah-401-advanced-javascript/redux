import categories from './category';
import products from './product';
let initialState = {
  categories,
  products,
  productsList: [],
  activeCategory: '',
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE ACTIVE CATEGORY':
      return { ...state, activeCategory: payload };
    case 'UPDATE PRODUCTS':
      let productsList = state.products.filter(
        (product) => product.category === state.activeCategory
      );
      return { ...state, productsList };
    default:
      return state;
  }
};
