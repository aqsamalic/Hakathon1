import React from 'react'
import { SellingCard } from '@/components/SellingCard'

const Tops = () =>{
    const bestSell=[
        {
          src:"/pictures/top1.1.jpg",
          alt:"Dress shirt",
          title:"Stylish Dress",
          discription:" Best quality dress shirt for  women.",
          price:200,
        },
        {
          src:"/pictures/top2.jpg",
          alt:"Brand pants",
          title:"Stylish Dress Pants",
          discription:" Best quality dress Pants for  women.",
          price:250
     },
        {
          src:"/pictures/top3.jpg",
          alt:"Shoes",
          title:"Stylish Shoes",
          discription:" Best quality top notch shoes for  women.",
          price:300
     },
     {
        src:"/pictures/top4.jpg",
        alt:"Dress shirt",
        title:"Stylish Dress",
        discription:" Best quality dress shirt for  women.",
        price:200,
      },
      {
        src:"/pictures/top5.jpg",
        alt:"Brand pants",
        title:"Stylish Dress Pants",
        discription:" Best quality dress Pants for  women.",
        price:250
   },
      {
        src:"/pictures/top6.jpg",
        alt:"Shoes",
        title:"Stylish Shoes",
        discription:" Best quality top notch shoes for  women.",
        price:300
   },
   
      ]
  return (
    <div className='mb-[100px] mt-[100px]'> <div className="container px-5 py-2 mx-auto">
    <div className="text-center mb-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
      Tops
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    </div>
    <div className='flex flex-wrap justify-center gap-5'>
        {

      bestSell.map((item,i)=>(
        <SellingCard key={i} src={item.src} alt={item.alt} title={item.title} discription={item.discription} price={item.price}/>))
      }

      </div>
    </div>
  )
}

export default Tops