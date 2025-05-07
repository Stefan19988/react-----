import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // ✅ named import
import reducer from './reducer'; // make sure reducer.js exists and is correctly exported

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;