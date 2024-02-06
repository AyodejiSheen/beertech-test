
import { Metadata } from 'next'
import React from 'react'
import Products from './products';


export const metadata: Metadata = {
    title: "Products - shop.com",
    description: "Shop.com top products",
};


const ProductPage = () => {

    return (
        <section className="space-y-10 container mx-auto pb-10">
            <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="font-medium">COLLECTION</h3>
                <div className="w-12 h-1 rounded-full bg-primary -mt-2" />
                <h4 className="text-2xl font-semibold">Our Top Collection</h4>
            </div>

            <Products />
        </section>
    )
}

export default ProductPage