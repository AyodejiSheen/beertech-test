'use client'
import React, { useEffect, useState } from 'react'
import Button from './elements/Button/button'
import ProductCard from './card/productCard'
import Iconify from './elements/icon'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getAllProducts, getCategories, getProductPerCat } from '@/redux/product/api'
import useDebounce from '@/hooks/useDebounce'
import { setProductSorting } from '@/redux/product'
import ProductCardSkeleton from './skeleton/productCardSkeleton'



const ProductSection = () => {

    const [activeType, setActiveType] = useState("all")
    const { products, categories } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState("")
    const debounceValue = useDebounce(searchInput)


    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getCategories())
    }, [dispatch])


    const handleCategory = (value: string) => {
        setActiveType(value)
        if (value === "all") {
            dispatch(getAllProducts())
        } else {
            dispatch(getProductPerCat(value))
        }
    }


    const filteredProduct = products?.filter((each) =>
        each.title?.toLowerCase().includes(debounceValue.toLowerCase())
    );



    return (
        <section className="space-y-10 container mx-auto">
            <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="font-medium">COLLECTION</h3>
                <div className="w-12 h-1 rounded-full bg-primary -mt-2" />
                <p className="text-2xl font-semibold">Our Top Collection</p>
            </div>

            {
                filteredProduct ? (
                    <>
                        <div className="overflow-x-scroll no-scroll container">
                            <div className="flex gap-6 lg:gap-12 lg:justify-center items-center py-6">
                                <Button onClick={() => handleCategory("all")} variant={activeType === "all" ? "primary" : "white"} classNames="whitespace-nowrap">All Category</Button>
                                {
                                    categories?.slice(0, 5).map((each, i) => (
                                        <Button onClick={() => handleCategory(each)} key={i} variant={activeType === each ? "primary" : "white"} classNames="whitespace-nowrap">{each}</Button>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 justify-between items-center w-full'>
                            <div className='max-w-sm w-full'>
                                <select onChange={(e) => dispatch(setProductSorting(e.target.value))} className=' border h-10 rounded-lg bg-gray-50 w-full text-sm px-2 outline-none'>
                                    <option selected disabled>Filter by price</option>
                                    <option value={"asec"}>Low - High Price</option>
                                    <option value={"desc"}>High - Low Price</option>
                                </select>
                            </div>

                            <div className='max-w-sm w-full'>
                                <input placeholder='Search for product' onChange={(e) => setSearchInput(e.target.value)} className='border outline-none h-10 rounded-lg bg-gray-50 w-full text-sm px-2' />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
                            {
                                filteredProduct.map((eachProduct, i) => (
                                    <div key={i} className="flex justify-center">
                                        <div className='w-11/12 2xl:w-[85%] flex-none space-y-4'>
                                            <ProductCard item={eachProduct} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex justify-center">
                            <Button variant="primary" icon={<Iconify icon='ic:round-arrow-right' className="text-2xl" />}>View More</Button>
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
                        {
                            [1, 2, 3, 4, 6, 7, 8, 9].map((_, i) => (
                                <div key={i} className="flex justify-center">
                                    <div className='w-11/12 2xl:w-[85%] flex-none space-y-4'>
                                        <ProductCardSkeleton />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </section >
    )
}

export default ProductSection