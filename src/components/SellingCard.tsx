import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Link from 'next/link'

export const SellingCard = ({src,alt,title,description,price,category,Products}:{
    src:string,
    alt:string,
    title:string,
    description:string,
    price:number,
    category:string,
    Products:string
  
}) => {
  return (
    <div>
    <Link href={`/${category}/${Products}`}>
      {/* image div */}
       <div className="w-[350px] h-[23rem] p-4 mx-auto shadow-md rounded-xl relative group hover:scale-105 duration-300">
    <div className='block relative h-[21rem] rounded overflow-hidden'>
      <Image src={src} alt="Nothing" width={400} height={400}/>
    </div>
    </div>
    {/* typography */}
    <div className="mt-4">
        
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 line-clamp-1">{title}</h2>
     
      <p className="mt-2 scroll-m-20 border-b pb-2 text-xl  tracking-tight first:mt-0 line-clamp-1 text-myblackpara"> {description}</p>
     
      <p className=" mt-2 scroll-m-20 border-b pb-4 text-xl tracking-tight first:mt-0 line-clamp-1 text-myblack"></p> ${price}
    </div>
    </Link>
    {/* button */}
    <div className="flex justify-between ">
   
      <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  bottom-2 right-3 ml-5'><HiShoppingCart className='mr-2 w-4 h-4 group-hover:text-myOrange'/>Add to Cart</Button>
      
      <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl bottom-2 left-3 mr-5'><FaHeart className='mr-2 w-4 h-4 group-hover:text-myOrange'/>Buy Now</Button>
    </div>
  </div>
   
  
  
  
  
  )
}
