let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE ACTIVE CATEGORY':
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
};
