export const RESET_CART_SUCCESS = () => ({
    type: 'RESET_CART'
});

export const REMOVE_CART_ITEM_SUCCESS = (title) => ({
    type: 'REMOVE_CART_ITEM', payload: title
});

export const MINUS_PIZZA_SUCCESS = (title) => ({
    type: 'MINUS_PIZZA', payload: title
});

export const PLUS_PIZZA_SUCCESS = (title) => ({
    type: 'PLUS_PIZZA', payload: title
});
