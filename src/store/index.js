import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './reducer/category';
import products from './reducer/product';
import cart from './reducer/cart';

const rootReducer = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
