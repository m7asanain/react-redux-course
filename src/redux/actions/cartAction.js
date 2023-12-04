export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART'
}

export const addToCartAction = (product) => {
    return {
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
    }
}