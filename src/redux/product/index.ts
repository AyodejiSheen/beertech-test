import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "./interface"


interface ProductState {
    products: Product[] | null,
    categories: string[] | null
}


const initialValue: ProductState = {
    products: null,
    categories: null
}


export const ProductSlice = createSlice({
    name: "product",
    initialState: initialValue,
    reducers: {

        setProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },

        setCategories: (state: ProductState, action: PayloadAction<string[]>) => {
            state.categories = action.payload
        },

        setProductSorting: (state: ProductState, action: PayloadAction<string>) => {
            if (action.payload === "asec") {
                if (state.products) {
                    state.products = [...state.products].sort((a, b) => a.price - b.price);
                }
            } else {
                if (state.products) {
                    state.products = [...state.products].sort((a, b) => b.price - a.price);
                }
            }
        }


    },
})

export default ProductSlice.reducer;
export const {
    setProducts,
    setCategories,
    setProductSorting
} = ProductSlice.actions