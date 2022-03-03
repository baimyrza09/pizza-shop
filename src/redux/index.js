import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import PizzaApi from '../services/pizzaApi';
import {
    GET_ALL_PIZZAS_SUCCESS, FILTER_BY_SUCCESS, SET_IS_LOADING_SUCCESS,
    SORT_BY_SUCCESS, ADD_PIZZA_TO_CART_SUCCESS
} from '../pages/main/actions';
import { REMOVE_CART_ITEM_SUCCESS, RESET_CART_SUCCESS, MINUS_PIZZA_SUCCESS, PLUS_PIZZA_SUCCESS } from '../pages/cart/actions';
import { findSum } from '../helpers';

const initialState = {
    pizzas: '',
    filterBy: 'Все',
    sortBy: '',
    cart: {},
    totalPizzas: 0,
    totalPrice: 0,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PIZZAS':
            return {
                ...state,
                pizzas: action.payload
            };
        case 'FILTER_BY':
            return {
                ...state,
                pizzas: action.payload.data,
                filterBy: action.payload.name
            };
        case 'SET_IS_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'SORT_BY':
            return {
                ...state,
                pizzas: action.payload
            };
        case 'ADD_PIZZA_TO_CART': {
            const currentPizza = state.cart[action.payload.title]
                ? [...state.cart[action.payload.title], action.payload]
                : [action.payload];

            const newCart = {
                ...state.cart,
                [action.payload.title]: currentPizza
            };

            const combinedArr = [].concat.apply([], Object.values(newCart));
            const totalPrice = findSum(combinedArr);
            const totalPizzas = combinedArr.length;

            return {
                ...state,
                cart: newCart,
                totalPrice,
                totalPizzas
            };
        }
        case 'RESET_CART':
            return {
                ...state,
                cart: {},
                totalPizzas: 0,
                totalPrice: 0
            };
        case 'REMOVE_CART_ITEM': {
            const newCart = {
                ...state.cart
            };
            const removedPizzasPrice = findSum(newCart[action.payload]);
            const removedPizzasAmount = newCart[action.payload].length;
            delete newCart[action.payload];

            return {
                ...state,
                cart: newCart,
                totalPrice: state.totalPrice - removedPizzasPrice,
                totalPizzas: state.totalPizzas - removedPizzasAmount
            };
        }
        case 'MINUS_PIZZA': {
            // Getting price of last object in cart array
            const minusedPrice = state.cart[action.payload].slice().pop().price;
            const newCart = {
                ...state.cart,
                [action.payload]: state.cart[action.payload].slice(0, -1)
            };

            return {
                ...state,
                cart: newCart,
                totalPizzas: state.totalPizzas - 1,
                totalPrice: state.totalPrice - minusedPrice
            };
        }
        case 'PLUS_PIZZA':
            const firstItem = state.cart[action.payload][0];
            return {
                ...state,
                cart: { ...state.cart, [action.payload]: [...state.cart[action.payload], firstItem] },
                totalPrice: state.totalPrice + firstItem.price,
                totalPizzas: state.totalPizzas + 1
            };
        default:
            return state;
    };
};

const pizzaApi = new PizzaApi();

export const getAllPizzas = () => async (dispatch) => {
    dispatch(SET_IS_LOADING_SUCCESS(true));
    const response = await pizzaApi.getAllPizzas();
    dispatch(GET_ALL_PIZZAS_SUCCESS(response.data));
    dispatch(SET_IS_LOADING_SUCCESS(false));
};

export const filterBy = (name) => async (dispatch) => {
    dispatch(SET_IS_LOADING_SUCCESS(true));
    const response = await pizzaApi.filterBy(name);
    dispatch(FILTER_BY_SUCCESS({ name, data: response.data }));
    dispatch(SET_IS_LOADING_SUCCESS(false));
};

export const sortBy = (name) => async (dispatch) => {
    dispatch(SET_IS_LOADING_SUCCESS(true));
    const response = await pizzaApi.sortBy(name);
    dispatch(SORT_BY_SUCCESS(response.data));
    dispatch(SET_IS_LOADING_SUCCESS(false));
};

export const addPizzaToCart = (pizzaObj) => (dispatch) => {
    dispatch(ADD_PIZZA_TO_CART_SUCCESS(pizzaObj));
}

export const resetCart = () => (dispatch) => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
        dispatch(RESET_CART_SUCCESS());
    }
};

export const removeCartItem = (title) => (dispatch) => {
    if (window.confirm(`Вы действительно хотите удалить пиццу: ${title}?`)) {
        dispatch(REMOVE_CART_ITEM_SUCCESS(title));
    }
};

export const minusPizza = (title) => (dispatch) => {
    dispatch(MINUS_PIZZA_SUCCESS(title));
};

export const plusPizza = (title) => (dispatch) => {
    dispatch(PLUS_PIZZA_SUCCESS(title));
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;