import { Button } from '@/components/ui/button'
import { Import } from 'lucide-react'
import React from 'react'
import { HiShoppingCart,} from 'react-icons/hi'
import { FaPlus ,FaMinus,FaHeart } from "react-icons/fa";
import Image from 'next/image'
import SlugComponent from '@/components/slugComponent';


const Product = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    
     {/* <Image src="/pictures/pant5.jpg" alt="Nothing" width={400} height={400} className="lg:w-1/2 w-full object-cover object-center rounded" /> */}
     <SlugComponent/>
     {/* Heading */}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          Branded Tops
        </h2>
        <h1 className=" text-2xl font-semibold tracking-tight mb-3 text-myblack" >
          The stylish Top and Jeans
        </h1>

        {/* rating */}
        <div className="rating mt-1">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-myOrange" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-myOrange" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-myOrange" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-myOrange" />
</div>
<div className='divider'></div>
        {/* <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div> */}

        {/* discription */}
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
        {/* color */}
        <div className="flex mt-6 items-center  mb-5">
          <div className="flex">
            <span className="mr-3 scroll-m-20 text-bs font-semibold tracking-tight text-myblack">Color</span>
           <button className="border-2 border-gray-300 mr-1 bg-white rounded-full w-6 h-6 focus:outline-none active:border-myblackpara focus:border-myblackpara" />
           <button className="border-2 border-gray-300 mr-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none active:border-myblackpara focus:border-myblackpara" />
           <button className="border-2 border-gray-300 mr-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none active:border-myblackpara focus:border-myblackpara" />
           <button className="border-2 border-gray-300 mr-1 bg-myblack rounded-full w-6 h-6 focus:outline-none active:border-myblackpara focus:border-myblackpara" />
         </div>
         {/* size */}
          <div className="flex ml-6 items-center">
            <span className="mr-3 scroll-m-20 text-bs font-semibold tracking-tight text-myblack">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
             </div>
          </div>
        </div>
        {/* quantity */}
        <div className='flex item-center'>
        <span className="mr-3 scroll-m-20 text-bs font-semibold tracking-tight text-myblack">Quantity</span>
        <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  bottom-2 right-2 w-fit h-fit'><FaPlus className='mr-2 w-4 h-4 group-hover:text-myOrange'/>Add</Button>
        <div className='ml-2 mr-2 scroll-m-20 text-bs font-semibold tracking-tight'>1</div>
        <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  bottom-2 right-2 w-fit h-fit'><FaMinus className='mr-2 w-4 h-4 group-hover:text-myOrange'/>Less</Button>
        </div>
        {/* add to cart and buy now */}
        <div className='divider'></div>
        <div className="flex item-center justify-between">
          {/* price */}
         <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  bottom-2 right-2'><HiShoppingCart className='mr-2 w-4 h-4 group-hover:text-myOrange'/>Add to Cart</Button>
          
        </div>
        <Button className=' mt-2 w-full group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  bottom-2 right-2'><FaHeart className='mr-2 w-4 h-4 group-hover:text-myOrange'/>Buy Now</Button>
      </div>
   
    </div>
  </div>
</section>

  )
}

export default Product