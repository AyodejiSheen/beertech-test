'use client'
import React, { useState } from 'react'
import Logo from '../../public/images/shop-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Iconify from './elements/icon'
import { useAppSelector } from '@/redux/store'


const Navbar = () => {

    const pathname = usePathname()
    const [openTab, setOpenTab] = useState(false)
    const { cartItems } = useAppSelector(state => state.cart)

    const routes = [
        { id: 1, name: "Home", sub: false, path: "/" },
        { id: 2, name: "Shop", sub: false, path: "#" },
        { id: 3, name: "Products", sub: true, path: "/products" },
        { id: 5, name: "Contact", sub: false, path: "#" },
    ]


    return (
        <nav className='flex items-center h-20  fixed w-screen px-4 md:px-6 bg-white border-b lg:border-none z-50 top-0 bg-opacity-40 backdrop-blur-xl'>
            <div className='container mx-auto flex justify-between gap-4 items-center'>
                <Link href="/">
                    <Image src={Logo} alt='shop.com' className='w-24 object-contain' />
                </Link>


                <div className={` bg-white lg:bg-transparent absolute lg:static lg:flex gap-6 flex items-center justify-center text-center flex-col lg:flex-row w-full lg:w-auto h-screen lg:h-max top-0 left-0 bottom-0 lg:translate-x-0 transform ease-in-out duration-300 transition ${openTab ? "translate-x-0 z-50" : "-translate-x-full"}`}>

                    <div className='absolute top-6 right-6 lg:hidden'>
                        <button onClick={() => setOpenTab(!openTab)}>
                            <Iconify icon='ion:close' className='text-4xl' />
                        </button>
                    </div>

                    {
                        routes.map((each, i) => (
                            <div key={each.id} className={`${pathname === each.path ? "border-b-2  border-primary font-semibold" : "hover:border-b-2  border-primary"} font-medium`}>
                                <Link href={each.path} className='text-xl lg:text-sm'>
                                    {each.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <div className='flex gap-6 items-center'>
                    <button>
                        <Iconify icon='uil:search' className='text-xl' />
                    </button>

                    <button>
                        <Iconify icon='lucide:user-round' className='text-xl' />
                    </button>

                    <Link href="/cart">
                        <button className='shadow-lg shadow-primary/40 bg-primary text-white flex gap-2 items-center px-3 rounded-full py-1' >
                            <Iconify icon='solar:cart-large-bold-duotone' className='text-2xl' />

                            <p className='font-medium text-sm'>
                                {cartItems.length}
                            </p>
                        </button>
                    </Link>
                </div>

                <div className='lg:hidden'>
                    <button onClick={() => setOpenTab(!openTab)}>
                        <Iconify icon='fa6-solid:bars-staggered' className='text-2xl' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar