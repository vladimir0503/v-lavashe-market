import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";

import itemsReducer from './itemsReducer';
import cardReducer from './cardReduser';

const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cardReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;