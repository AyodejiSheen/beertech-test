"use client"
import ProductCard from '@/components/card/productCard'
import Button from '@/components/elements/Button/button'
import { productType, products } from '@/dummyData'
import React, { useState } from 'react'



const Products = () => {

    const [activeType, setActiveType] = useState(1)

    return (
        <>
            <div className="flex gap-4 lg:gap-12 justify-center items-center overflow-x-auto py-6">
                {
                    productType.map((eachType, i) => (
                        <Button onClick={() => setActiveType(eachType.id)} key={eachType.id} variant={activeType === eachType.id ? "primary" : "white"} classNames="whitespace-nowrap">{eachType.name}</Button>
                    ))
                }
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12">
                {
                    products.map((eachProduct, i) => (
                        <div key={i} className="flex justify-center">
                            <div className='w-11/12 2xl:w-[85%] flex-none space-y-4'>
                                <ProductCard item={eachProduct} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products