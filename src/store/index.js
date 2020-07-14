import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './reducer/category';
import products from './reducer/product';
import cart from './reducer/cart';

const rootReducer = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
