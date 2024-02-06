import bag from '../public/images/bag.png'
import watch from '../public/images/apple-watch.png'
import shirt from '../public/images/shirt.png'
import watchTwo from '../public/images/apple-watch2.png'
import gown from '../public/images/gown.png'
import powder from '../public/images/powder.png'
import heels from '../public/images/heels.png'
import { StaticImageData } from 'next/image'



export const handleErrors = (err: any) => {
    const response = err.response;
    switch (response?.status) {
        case 500:
            window.alert(response.data.message)
            break;

        case 400:
        case 401:
        case 404:
        case 405:
        case 403:
        case 422:
            if (response.data.errors) {
                if (Array.isArray(response.data.errors)) {
                    response.data.errors.forEach((each: any) => {
                        window.alert(each.message)
                    });
                } else if (typeof response.data.errors === "object") {
                    Object.keys(response.data.errors).forEach((field) => {
                        const errors = response.data.errors[field];
                        errors.forEach((errorMessage: any) => {
                            window.alert(errorMessage)
                        });
                    });
                }
            } else if (response.data.error) {
                window.alert(response.data.error)
            } else {
                window.alert(response.data.message)
            }
            break;

        default:
            window.alert(err.message)
            break;
    }
};


export type Product = {
    id: number,
    name: string,
    discount: string | null,
    price: number,
    rating: number,
    image: StaticImageData,
    is_fav: boolean
}


export const productType = [
    { id: 1, name: "Accessories" },
    { id: 2, name: "Jewellery" },
    { id: 3, name: "Dress Collection" },
    { id: 4, name: "Footwear" },
]

export const products: Product[] = [
    { id: 1, name: "Apple Smart Watch", discount: "10% Off", price: 12000, rating: 3, image: watch, is_fav: true },
    { id: 2, name: "Beauty Spot Cream", discount: "3% Off", price: 22000, rating: 4, image: powder, is_fav: false },
    { id: 3, name: "Ladies' stylish hand bag", discount: null, price: 2000, rating: 5, image: bag, is_fav: false },
    { id: 4, name: "Men black T-shirt", discount: "30% Off", price: 14000, rating: 3, image: shirt, is_fav: false },
    { id: 5, name: "Women Party gown", discount: "12% Off", price: 12500, rating: 2, image: gown, is_fav: true },
    { id: 6, name: "Stylish party heels", discount: null, price: 32000, rating: 1, image: heels, is_fav: false },
    { id: 7, name: "Apple Watch Aluminium band", discount: "10% Off", price: 12000, rating: 3, image: watchTwo, is_fav: false },
]

export const stat = [
    { id: 1, name: "Easy Order System", icon: "solar:cart-3-bold" },
    { id: 2, name: "On Time delivery", icon: "iconamoon:delivery-fast-fill" },
    { id: 3, name: "100% Refund", icon: "mingcute:card-refund-fill" },
    { id: 4, name: "24/7 Online Support", icon: "fluent:person-support-28-filled" },
]


export const appData = {
    appName: "shop.com"
}