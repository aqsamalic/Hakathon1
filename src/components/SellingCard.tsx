import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Link from 'next/link'

export const SellingCard = ({src,alt,title,discription,price}:{
    src:string,
    alt:string,
    title:string,
    discription:string,
    price:number,
  
}) => {
  return (
    <div>
    <Link href={'/'}>
      {/* image div */}
       <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
    <div className='block relative h-[23rem] rounded overflow-hidden'>
      <Image src={src} alt="Nothing" width={400} height={400}/>
    </div>
    </div>
    {/* typography */}
    <div className="mt-4">
        
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 line-clamp-1">{title}</h2>
     
      <p className="mt-2 scroll-m-20 border-b pb-2 text-xl  tracking-tight first:mt-0 line-clamp-1 text-myblackpara"> {discription}</p>
     
      <p className=" mt-2 scroll-m-20 border-b pb-4 text-xl tracking-tight first:mt-0 line-clamp-1 text-myblackpara"></p> ${price}
    </div>
    </Link>
    {/* button */}
    <div>
   
      <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2'><HiShoppingCart className='mr-2 w-2 h-4 group-hover:text-myOrange'/>Add to Cart</Button>
      
      <Button className='group bg-myblack hover:bg-transparent text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2'><FaHeart className='ml-2 w-4 h-4 group-hover:text-myOrange'/>Buy Now</Button>
    </div>
  </div>
  
  
  
  
  )
}
