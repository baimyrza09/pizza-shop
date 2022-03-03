export const GET_ALL_PIZZAS_SUCCESS = (pizzas) => ({
    type: 'GET_ALL_PIZZAS', payload: pizzas
});

export const FILTER_BY_SUCCESS = (obj) => ({
    type: 'FILTER_BY', payload: obj
});

export const SET_IS_LOADING_SUCCESS = (bool) => ({
    type: 'SET_IS_LOADING', payload: bool
});

export const SORT_BY_SUCCESS = (field) => ({
    type: 'SORT_BY', payload: field
});

export const ADD_PIZZA_TO_CART_SUCCESS = (obj) => ({
    type: 'ADD_PIZZA_TO_CART', payload: obj
});