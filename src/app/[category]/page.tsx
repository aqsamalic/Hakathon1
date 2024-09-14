"use client"
import React from 'react'
import { SellingCard } from '@/components/SellingCard'
import { useAppSelector } from '../store/hook'

const Tops = ( { params} :{ params: { category:string } } ) =>{
  const product= useAppSelector((state) => state.products);
  const bestSell = product.filter((item) => item.category == params.category)
  console.log("bestSell",bestSell)
  

  
  return (
    <div className='mb-[100px] mt-[100px]'> <div className="container px-5 py-2 mx-auto">
    <div className="text-center mb-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
      {params.category}
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    </div>
    <div className='flex flex-wrap justify-center gap-5'>
        {

bestSell.map((item: any, i) => (
  <SellingCard
    key={i}
    src={item.image[0]}
    alt={item.title}
    title={item.title}
    description={item.description}
    price={item.price}
    category={item.category} 
    Products={item.Products} 
  />
))
      }

      </div>
    </div>
  )
}

export default Tops