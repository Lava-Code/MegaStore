import * as actionType from '../constants/cartConstants'

export const cartReducer = (state= {cartItems: []}, action) => {
    switch(actionType) {
        case actionType.ADD_TO_CART:
            const newItem = action.payload;
            // Search for the new item in the cart
            const existItem = state.cartItems.find((x)=>x.id === newItem.id)

            // if The new item exist in the cart return the new item with it's new data(quantity) and add it to the new copy Cart
            if (existItem) {
                return {
                    // Spread the state (take the state as it is) to keep the other state's parts 
                    ...state,
                    // Create a new copy of the cart which has the new added item and the old items
                    /* As remember map() always returns an array which we'll use it to create a new copy of the cart*/
                    cartItems: state.cartItems.map((x)=> x.id === existItem.id ? newItem : x )
                }
            } else {
                return {
                    ...state,
                    cartItems:[...state.cartItems,newItem]
                }

            }
            case actionType.REMOVE_FROM_CART:
                return {
                    ...state,
                    // Note we have to send product ID in action payload
                    cartItems: state.cartItems.filter((x)=> x.id !== action.payload)
                }
    default:
        return state;        
    }
}