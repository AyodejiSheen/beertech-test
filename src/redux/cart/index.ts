import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface initialState {
    cartCount: number
}



//define the initalstate for this CartSlice 
const initialValue = {
    cartCount: 0,
}



//create the slice
export const CartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {

        addToCart: (state: initialState) => {
            state.cartCount += 1
        }










    },
})





export default CartSlice.reducer;
export const {
    addToCart,

} = CartSlice.actions