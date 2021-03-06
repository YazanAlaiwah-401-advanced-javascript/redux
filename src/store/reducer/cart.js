let initialState = {
  carts: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let carts;
  switch (type) {
    case 'ADD PRODUCT':
      carts = state.carts;
      carts.push(payload);
      return { carts };
    case 'REMOVE PRODUCT':
      carts = state.carts;
      carts.splice(carts.indexOf(payload), 1);
      return { carts };
    default:
      return state;
  }
};
