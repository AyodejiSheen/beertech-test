import React from 'react'
import Logo from '../../public/images/shop-logo.png'
import Image from 'next/image'
import Iconify from './elements/icon'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='bg-[#fbe3d7] py-20 px-4'>
            <div className='lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                <div className='space-y-4 flex-1'>
                    <Image src={Logo} alt='shop.com' className='w-24 object-contain' />
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos sed deserunt ipsa vero atque, culpa in impedit excepturi consequuntur.</p>
                    <div className='flex gap-2 items-center'>
                        <button className='h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white'>
                            <Iconify icon='ri:facebook-fill' className='text-xl' />
                        </button>

                        <button className='h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white'>
                            <Iconify icon='simple-icons:instagram' className='text-lg' />
                        </button>

                        <button className='h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white'>
                            <Iconify icon='simple-icons:x' className='text-lg' />
                        </button>
                    </div>
                </div>

                <div className='space-y-4 flex-1'>
                    <h2 className='text-lg font-semibold'>Useful Links</h2>
                    <div className=' text-sm space-y-2 font-medium text-gray-600'>
                        <div>
                            <Link href="#">About Us</Link>
                        </div>
                        <div>
                            <Link href="#">Location</Link>
                        </div>

                        <div>
                            <Link href="#">FAQ</Link>
                        </div>

                        <div>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className='space-y-4 flex-1'>
                    <h2 className='text-lg font-semibold'>My Account</h2>
                    <div className='text-sm space-y-2 font-medium text-gray-600'>
                        <div>
                            <Link href="#">My Profile</Link>
                        </div>
                        <div>
                            <Link href="#">Discount</Link>
                        </div>

                        <div>
                            <Link href="#">Orders History</Link>
                        </div>

                        <div>
                            <Link href="#">Order Tracking</Link>
                        </div>
                    </div>
                </div>

                <div className='space-y-4 flex-1'>
                    <h2 className='text-lg font-semibold'>Contact Info</h2>
                    <div className='space-y-2 text-sm font-medium text-gray-600'>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>+234 000 0000 000.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer