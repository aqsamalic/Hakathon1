"use client"
import React ,{useState} from 'react'
import Image from 'next/image'

const SlugComponent = () => {
    const [path,setPath]= useState("");
  return (
    <div>  
        <Image src={path ? path:"/pictures/pants2.jpg" }alt="Nothing" width={400} height={400} />
        <div className='flex item-center justify-evenly mx-auto mt-2'>
            <div className='cursor-pointer w-16 h-16'>
            <Image src="/pictures/pants2.jpg" 
            alt="Nothing" 
            width={60} height={60} 
            onClick={()=>setPath("/pictures/pants2.jpg")}/>  
            </div>
            <div className='cursor-pointer w-16 h-16'>
            <Image 
            src="/pictures/pants3.jpg" 
            alt="Nothing" 
            width={60} height={60} 
            onClick={()=>setPath("/pictures/pants3.jpg")}/>  
            </div>
            <div className='cursor-pointer w-16 h-16'>
            <Image src="/pictures/shoe5.jpg"
             alt="Nothing"
              width={60} height={60}
               onClick={()=>setPath("/pictures/shoe5.jpg")}/>  
            </div>
            <div className='cursor-pointer w-16 h-16'>
            <Image src="/pictures/top2.jpg"
             alt="Nothing" 
             width={60} height={60} 
             onClick={()=>setPath("/pictures/top2.jpg")}/>  
            </div>
           
        </div>
        </div>
  )
}

export default SlugComponent