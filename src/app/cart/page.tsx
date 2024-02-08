'use client'
import Button from '@/components/elements/Button/button'
import Iconify from '@/components/elements/icon'
import { clearAllCart, updateCartItem } from '@/redux/cart'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const CartPage = () => {

    const { cartItems } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const handleItemQuantity = (itemId: number, type: "inc" | "dec") => {
        if (cartItems) {
            let newCart = [...cartItems]
            let findIndex = cartItems.findIndex((item) => item.item.id === itemId)
            if (findIndex >= 0) {

                switch (type) {
                    case "inc":
                        newCart[findIndex] = {
                            ...newCart[findIndex],
                            qty: (newCart[findIndex].qty + 1),
                        }
                        break;
                    case "dec":
                        newCart[findIndex] = {
                            ...newCart[findIndex],
                            qty: (newCart[findIndex].qty - 1),
                        }
                        break;
                }

                dispatch(updateCartItem(newCart))
            }
        }
    }

    const cartTotal = () => {
        if (cartItems.length > 0) {
            let total = cartItems.reduce((total, item) => total = total + (item.qty * item.item.price), 0)
            return total;
        }
    }

    const removeItem = (itemId: number) => {
        if (cartItems) {
            let newCart = [...cartItems]
            newCart = newCart.filter((item) => item.item.id !== itemId)
            dispatch(updateCartItem(newCart))
        }
    }

    const clearCart = () => {
        dispatch(clearAllCart())
    }


    return (
        <section className="space-y-10 container mx-auto pb-10 min-h-[60vh]">
            <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="font-medium">CART</h3>
                <div className="w-12 h-1 rounded-full bg-primary -mt-2" />
                <h4 className="text-2xl font-semibold">Items In Your Cart  <span className='bg-primary bg-opacity-10 text-lg text-primary px-3 h-5 rounded-lg font-bold'>{cartItems.length}</span></h4>
            </div>

            <section className='space-y-4 max-w-5xl w-full mx-auto'>
                {
                    cartItems.length === 0 ? (
                        <div className='border p-4 lg:p-6 rounded-xl flex gap-6 items-center justify-between'>
                            <p className='font-semibold'>No Item in Cart</p>

                            <Link href={'/'}>
                                <Button>Start Shopping</Button>
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((each, i) => (
                            <div key={i} className='border p-4 lg:p-6 rounded-xl flex flex-col md:flex-row gap-6 justify-between'>
                                <div className='flex items-center gap-2 flex-1'>
                                    <Image src={each.item.thumbnail} alt={each.item.title} width={0} height={0} sizes='100vw' className='h-20 w-20 rounded-xl object-cover' />
                                    <div className='space-y-2'>
                                        <div>
                                            <p className='text-xs font-medium text-gray-800 capitalize'>{each.item.title}</p>
                                            <p className='text-[10px] text-gray-600 w-2/3 line-clamp-2'>{each.item.description}</p>
                                        </div>

                                        <div className='flex items-start gap-2'>
                                            <p className='text-sm font-bold text-gray-700'>₦ {each.item.price}</p>
                                            {
                                                each.item.discountPercentage && (
                                                    <p className='text-[10px] bg-orange-500 px-2 h-4 flex items-center text-white rounded'>{each.item.discountPercentage}% off</p>
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>

                                <div className='flex flex-row md:flex-col justify-between items-end'>
                                    <div className='h-9 px-4 flex gap-2 items-center justify-center rounded-full bg-primary text-white'>
                                        {
                                            each.qty > 1 ? (
                                                <button onClick={() => handleItemQuantity(each.item.id, "dec")}>
                                                    <Iconify icon="pepicons-pop:minus" className="text-xl" />
                                                </button>
                                            ) : (
                                                <button onClick={() => removeItem(each.item.id)}>
                                                    <Iconify icon="material-symbols:delete" className="text-xl cursor-pointer" />
                                                </button>
                                            )
                                        }
                                        <p className='text-sm font-medium'>{each.qty}</p>
                                        <button onClick={() => handleItemQuantity(each.item.id, "inc")}>
                                            <Iconify icon="ic:round-plus" className="text-xl cursor-pointer" />
                                        </button>
                                    </div>

                                    <h3 className='font-bold text-gray-700'>₦ {each.item.price * each.qty}</h3>
                                </div>
                            </div>
                        ))
                    )
                }

                {
                    cartItems.length !== 0 && (
                        <div className='max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-6 md:items-center justify-between'>
                            <div className='w-max'>
                                <Button onClick={clearCart} variant='white' classNames='border' icon={<Iconify icon="material-symbols:delete" className="text-xl" />}>Clear Cart</Button>
                            </div>

                            <div className='flex flex-col gap-5 items-end'>
                                <div className='space-y-1 text-right'>
                                    <p className='text-sm'>Total</p>
                                    <h3 className='font-bold text-xl'>N{cartTotal()?.toFixed(2)}</h3>
                                </div>

                                <Button>Proceed To Checkout</Button>
                            </div>
                        </div>
                    )
                }
            </section>
        </section>
    )
}

export default CartPage