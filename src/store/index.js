import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const rootReducer = combineReducers({ store: reducer });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
