import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "./interface"


interface ProductState {
    products: Product[] | null
}


const initialValue = {
    products: null
}


export const ProductSlice = createSlice({
    name: "product",
    initialState: initialValue,
    reducers: {

        setProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }


    }
})

export default ProductSlice.reducer;
export const {
    setProducts,

} = ProductSlice.actions