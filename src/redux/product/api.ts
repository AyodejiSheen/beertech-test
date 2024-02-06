import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../../baseurl";
import { setCategories, setProducts } from ".";
import { handleErrors } from "@/helper";






export const getAllProducts = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${baseurl.base}/product`)
        dispatch(setProducts(response.data.products))
    } catch (err: any) {
        handleErrors(err)
    }
}

export const getCategories = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${baseurl.base}/products/categories`)
        dispatch(setCategories(response.data))
    } catch (err: any) {
        handleErrors(err)
    }
}

export const getProductPerCat = (data: string) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${baseurl.base}/products/category/${data}`)
        dispatch(setProducts(response.data.products))
    } catch (err: any) {
        handleErrors(err)
    }
}