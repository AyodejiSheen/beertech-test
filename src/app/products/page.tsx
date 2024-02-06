
import { Metadata } from 'next'
import React from 'react'
import ProductSection from '@/components/productSection';


export const metadata: Metadata = {
    title: "Products - shop.com",
    description: "Shop.com top products",
};


const ProductPage = () => {

    return (
        <section className="space-y-10 container mx-auto pb-10">
            <ProductSection />
        </section>
    )
}

export default ProductPage