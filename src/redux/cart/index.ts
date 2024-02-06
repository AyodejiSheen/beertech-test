import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product/interface";



interface initialState {
    cartItems: {
        item: Product,
        qty: number
    }[]
}



//define the initalstate for this CartSlice 
const initialValue: initialState = {
    cartItems: [],
}



//create the slice
export const CartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {

        addToCart: (state: initialState, action: PayloadAction<Product>) => {
            let newProduct = action.payload
            if (state.cartItems) {
                let findProductIndex = state.cartItems.findIndex((each) => each.item.id === newProduct.id)
                if (findProductIndex !== -1) {
                    state.cartItems[findProductIndex].qty += 1
                } else {
                    state.cartItems = [...state.cartItems, {
                        item: action.payload,
                        qty: 1
                    }]
                }
            }
        },


        updateCartItem: (state: initialState, action: PayloadAction<{
            item: Product,
            qty: number
        }[]>) => {
            state.cartItems = action.payload
        },


        clearAllCart: (state: initialState) => {
            if (state.cartItems) {
                state.cartItems = []
            }
        }










    },
})





export default CartSlice.reducer;
export const {
    addToCart,
    updateCartItem,
    clearAllCart
} = CartSlice.actions