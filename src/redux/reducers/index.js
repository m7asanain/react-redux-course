
const INTIAL_STATE = {
    cart: [],
    cartTotal: 0,
    products: []
}

const rootReducer = (state = INTIAL_STATE, action) => {
    
    return {
        ...state,
    }
}

export default rootReducer;