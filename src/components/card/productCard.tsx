import Image from 'next/image'
import React from 'react'
import Iconify from '../elements/icon'
import Rating from '../elements/rating'
import Button from '../elements/Button/button'
import { useAppDispatch } from '@/redux/store'
import { addToCart } from '@/redux/cart'
import { Product } from '@/redux/product/interface'



const ProductCard = ({ item }: { item: Product }) => {

    const dispatch = useAppDispatch()


    return (
        <div data-testid="product_card" className='border rounded-3xl bg-gray-100 cursor-pointer product_wrapper h-80'>
            <div className='h-52 flex items-center justify-center relative product_image_bg'>
                <button className='h-8 w-8 rounded-full absolute top-4 right-4 bg-white flex items-center justify-center'>
                    <Iconify icon='mdi:heart' className={"text-black"} />
                </button>

                <Image src={item.thumbnail} alt={item.title} width={0} height={0} sizes='100vw' className='w-52 h-40 rounded-3xl object-contain drop drop-shadow-lg product_img' />
            </div>

            <div className='bg-white px-6 pt-3 pb-4 rounded-b-3xl space-y-3 transition-all duration-1000 ease-linear'>
                <div className='space-y-1'>
                    <p className='text-xs font-medium text-gray-600 capitalize'> {item.title}</p>
                    <div>
                        <Rating activeLength={item.rating  * 0.65} />
                    </div>
                </div>

                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex items-start gap-2'>
                        <p className='text-sm font-bold text-gray-700'>₦ {item.price}</p>
                        {
                            item.discountPercentage && (
                                <p className='text-[10px] bg-orange-500 px-2 h-4 flex items-center text-white rounded'>{item.discountPercentage}% off</p>
                            )
                        }
                    </div>

                    <div className='w-max cart_btn'>
                        <Button onClick={() => dispatch(addToCart())} variant='primary' size='xs'>Add To Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard