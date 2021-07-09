import {applyMiddleware, createStore } from 'redux';
import productReducer from './reducers/productReducer';
import thunk from "redux-thunk";

/**
 * Les middleware permettent d'executer une fonction avant chaque appel du 
 * Reducer. 
 * Documentation sur les thunk:
 * https://daveceddia.com/where-fetch-data-redux/
 */
const store = createStore(
    productReducer, 
    applyMiddleware(thunk)
);
export default store;