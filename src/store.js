import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import myReducer from './reducers/myReducer'
const store = createStore(myReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;