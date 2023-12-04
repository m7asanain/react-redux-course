import { CART_ACTION_TYPES } from "../actions/cartAction";

const INTIAL_STATE = {
    cart: [],
    cartTotal: 0,
    products: []
}

const rootReducer = (state = INTIAL_STATE, action) => {
    const { type, payload } = action;

    if (type === CART_ACTION_TYPES.ADD_TO_CART) {
        return {
            ...state,
            cart: state.cart.concat(payload),
            cartTotal: state.cartTotal + payload.price
        }
    }

    if (type === CART_ACTION_TYPES.DELETE_FROM_CART) {
        return {
            ...state,
        }
    }
    
    return {
        ...state,
    }
}

export default rootReducer;