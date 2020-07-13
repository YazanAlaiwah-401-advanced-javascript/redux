export const handelCategory = (name) => ({
  type: 'UPDATE ACTIVE CATEGORY',
  payload: name,
});
export const handelProduct = (name) => ({
  type: 'UPDATE PRODUCTS',
  payload: name,
});

export const addToCart = (name) => ({
  type: 'ADD PRODUCT',
  payload: name,
});
export const removeCart = (name) => ({
  type: 'REMOVE PRODUCT',
  payload: name,
});
