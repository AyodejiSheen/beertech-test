import React from 'react'

const ProductCardSkeleton = () => {
    return (
        <div className='border rounded-3xl bg-gray-100 cursor-pointer product_wrapper h-80 animate-pulse'>
            <div className='h-52 flex items-center justify-center relative product_image_bg' />

            <div className='bg-white px-6 pt-3 pb-4 rounded-b-3xl space-y-3 transition-all duration-1000 ease-linear'>
                <div className='space-y-1'>
                    <p className='h-2 w-2/3 bg-gray-200 rounded'></p>
                    <div className='w-1/2 h-3 bg-gray-200 rounded' />
                </div>

                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex items-start gap-2'>
                        <p className='h-2 w-2/3 bg-gray-200 rounded'></p>
                        <div className='w-1/2 h-3 bg-gray-200 rounded' />
                    </div>

                    <div className='w-1/4 cart_btn h-5 rounded-lg'/>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSkeleton