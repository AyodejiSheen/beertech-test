import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product/interface";



interface initialState {
    cartItems: Product[]
}



//define the initalstate for this CartSlice 
const initialValue = {
    cartItems: [],
}



//create the slice
export const CartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {

        addToCart: (state: initialState, action: PayloadAction<Product>) => {
            state.cartItems.push(action.payload)
        }










    },
})





export default CartSlice.reducer;
export const {
    addToCart,

} = CartSlice.actions