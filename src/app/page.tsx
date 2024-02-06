'use client'
import ProductCard from "@/components/card/productCard";
import Button from "@/components/elements/Button/button";
import Iconify from "@/components/elements/icon";
import { productType, products, stat } from "@/dummyData";
import Image from "next/image";
import { useState } from "react";
import heroImage from '../../public/images/hero-img.png'
import BlogCard from "@/components/card/blogCard";
import Link from "next/link";




export default function Home() {

  const [activeType, setActiveType] = useState(1)

  return (

    <section className="space-y-16 pb-6">
      <section className="w-full rounded-3xl bg-gradient-to-r from-[#fae7d9] to-[#f7d2df] overflow-hidden max-h-[80vh] lg:max-h-[80vh] flex flex-col md:flex-row md:items-center justify-around gap-0 transition duration-500 ease-in-out lg:gap-12">
        <div className="h-full flex flex-col gap-8 lg:gap-12 justify-center p-6 md:p-4">
          <div className="space-y-2 2xl:space-y-4">
            <p className="text-sm lg:text-base">Limited Time Only For Winter</p>
            <h1 className="hero_font text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-none tracking-wider">
              fash<span className="text-primary">i</span>on
            </h1>
            <h3 className="capitalize lg:text-xl font-medium">Look your best on your best day</h3>
          </div>

          <div className="w-max">
            <Link href="products">
              <Button variant="primary" icon={<Iconify icon='ic:round-arrow-right' className="text-2xl" />}>
                Explore Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden md:flex items-end">
          <Image src={heroImage} alt="shop hero image" className="w-full md:w-96 lg:w-full object-cover object-bottom" />
        </div>
      </section>

      <section className="space-y-10 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="font-medium">COLLECTION</h3>
          <div className="w-12 h-1 rounded-full bg-primary -mt-2" />
          <p className="text-2xl font-semibold">Our Top Collection</p>
        </div>

        <div className="overflow-x-auto no-scroll">
          <div className="flex gap-6 lg:gap-12 lg:justify-center items-center py-6">
            {
              productType.map((eachType, i) => (
                <Button onClick={() => setActiveType(eachType.id)} key={eachType.id} variant={activeType === eachType.id ? "primary" : "white"} classNames="whitespace-nowrap">{eachType.name}</Button>
              ))
            }
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
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

        <div className="flex justify-center">
          <Button variant="primary" icon={<Iconify icon='ic:round-arrow-right' className="text-2xl" />}>View More</Button>
        </div>
      </section>

      <section className="bg-[#fbe3d7] py-20 rounded-3xl container mx-auto">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto">
          {
            stat.map((eachStat, i) => (
              <div key={i} className="stat_wrapper space-y-8 text-center flex flex-col items-center rounded-2xl p-6 ">
                <div className="h-16 w-16 rounded-lg transition-all duration-500 flex items-center justify-center stat_icon_box">
                  <Iconify icon={eachStat.icon} className="text-2xl" />
                </div>
                <div className="space-y-4">
                  <h2 className="font-semibold">{eachStat.name}</h2>
                  <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="space-y-16 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="font-medium">BLOGS</h3>
          <div className="w-12 h-1 rounded-full bg-primary -mt-2" />
          <h4 className="text-2xl font-semibold">Latest News</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12">
          {
            [1, 2, 3].map((_, i) => (
              <BlogCard key={i} />
            ))
          }
        </div>

        <div className="flex justify-center">
          <Button variant="primary" icon={<Iconify icon='ic:round-arrow-right' className="text-2xl" />}>View More</Button>
        </div>
      </section>
    </section>
  );
}
