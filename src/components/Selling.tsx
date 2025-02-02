import React from 'react'
import Image from 'next/image'
import { SellingCard } from './SellingCard';

 const Selling = () => {
  const bestSell=[
    {
      src:"/pictures/Top1 (2).jpg",
      alt:"Dress shirt",
      title:"Stylish Dress",
      description:" Best quality dress shirt for  women.",
      price:200,
      category:"Tops",
      Products:"Tops",
     
    },
    {
      src:"/pictures/pant5.jpg",
      alt:"Brand pants",
      title:"Stylish Dress Pants",
      description:" Best quality dress Pants for  women.",
      price:250,
      category:"Pants",
      Products:"Pants",
    },
    {
      src:"/pictures/shoe5.jpg",
      alt:"Shoes",
      title:"Stylish Shoes",
      description:" Best quality top notch shoes for  women.",
      price:300,
      category:"Shoes",
      Products:"Shoes",
   
 },
  ]
  return (
    <div className='mb-[100px] mt-[100px]'>
        {/* Heading */}
         <div className="container px-5 py-2 mx-auto">
    <div className="text-center mb-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
      Best selling product
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
      {/* selling section */}
      <div className='flex flex-wrap justify-center gap-5'>
        {
         bestSell.map((item,i)=>(
        <SellingCard key={i}  
        src={item.src} 
        alt={item.alt} 
        title={item.title} 
        description={item.description} 
        price={item.price} 
        category={item.category} 
        Products={item.Products} />))
      }

      </div>
    </div>
    </div>
  
   
    
    </div>
  )
}
export default Selling
