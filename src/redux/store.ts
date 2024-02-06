import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { CartSlice } from "./cart";
import { ProductSlice } from "./product";


export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    product: ProductSlice.reducer
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
