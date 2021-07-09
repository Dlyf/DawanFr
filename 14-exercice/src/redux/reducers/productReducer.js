import axios from 'axios';

import {
    fetchProductsBegin,
    fetchProductsSuccess,
    fetchProductsFailure
} from '../actions/actionCreator';

import {
    FETCH_PRODUCTS_BEGIN, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE,
    ADD_CART_PRODUCT,
    EDIT_PRODUCT_QUANTITY
} from '../actions/actionTypes';


const initialState = {
    produits: [],
    produitsPanier: [],
    loading: false,
    error: null
}

// Voir https://daveceddia.com/where-fetch-data-redux/

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return axios.get("https://fakestoreapi.com/products")
        .then(reponse => {
          const products = reponse.data;
          products.forEach(p => p.quantity = 0);
          dispatch(fetchProductsSuccess(products));
          return products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
}


function productReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
              ...state,
              loading: true,
              error: null
            };
      
        case FETCH_PRODUCTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                produits: action.payload.produits
        };

        case FETCH_PRODUCTS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              produits: []
        };
        
        case ADD_CART_PRODUCT:
            const produitsPanier = [...state.produitsPanier];
            action.payload.produit.quantity++;
            produitsPanier.push(action.payload.produit);
            return {
              ...state,
              produitsPanier
        };

        case EDIT_PRODUCT_QUANTITY:
            const produits = [...state.produitsPanier];
            const produit = produits.find(p => p.id === action.payload.id);
            if (produit.quantity + action.payload.newQuantity > 0) {
                produit.quantity += action.payload.newQuantity;
            }
            return {
              ...state,
              produitsPanier: produits
        };

        default:
            return state;
    }
}

export default productReducer;