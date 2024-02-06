import Image from 'next/image'
import React from 'react'
import blogImage from '../../../public/images/blog.png'



const BlogCard = () => {
    return (
        <article className="flex justify-center">
            <div className='w-11/12 2xl:w-[80%] flex-none space-y-4 rounded-3xl bg-white border'>
                <div>
                    <Image src={blogImage} alt="shop blog" className="h-64 object-cover object-top rounded-t-3xl" />
                </div>
                <div className="text-center space-y-3 px-4 py-3">
                    <h2 className="text-lg font-semibold text-primary">Trendy</h2>
                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nesciunt, similique harum rem.</p>
                    <p className="text-gray-300">22 January, 2024</p>
                </div>
            </div>
        </article>
    )
}

export default BlogCard