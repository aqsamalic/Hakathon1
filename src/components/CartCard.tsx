import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaPlus ,FaMinus,FaTrash} from "react-icons/fa";


const CartCard = ({src,title,size,price}:{src:string,title:string,size:string,price:number}) => {
  return (
    <div className='flex p-10'>
        {/* image */}
        <Image 
        src={src} 
        alt={title} 
        width={100} 
        height={100}
        className='w-[100px] h-[100px]'/>
        {/* details */}
        <div className='flex px-5 justify-between item-center w-full'>
            <div>
            {/* title */}
            <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myblack'>{title}</h2>
            {/* size */}
            <p className='mt-2 text-sm font-semibold leading-none line-clamp-1 text-myblackpara'>size:&nbsp; <span>{size}</span></p> 
            <div className='mt-2 flex items-center'>
            <Button className='group bg-myblack text-mywhite hover:text-myblack text-xs rounded-lg duration-300 mr-2 w-fit h-fit'><FaPlus className='mr-2 w-2 h-2 group-hover:text-myOrange'/>Add</Button>
            <div className='ml-2 mr-2 scroll-m-20 text-sm font-semibold tracking-tight text-myblackpara'>1</div>
            <Button className='group bg-myblack text-mywhite hover:text-myblack text-xs  rounded-lg duration-300 ml-2 w-fit h-fit'><FaMinus className='mr-2 w-2 h-2 group-hover:text-myOrange'/>Less</Button>
            </div>
             {/* price and delete*/}
           <div className='  lg:hidden flex mt-2  flex-col  gap-5'>
            <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myblack'><span> Price:&nbsp;</span>&#36;{price}</h3>
            <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-myblack hover:text-myblackpara cursor-pointer'/>
         
          </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartCard