import React from 'react'
import { SellingCard } from '@/components/SellingCard'

const Tops = () =>{
    const bestSell=[
        {
          src:"/pictures/top1.1.jpg",
          alt:"Top", 
          title:"Jeans Jacket",
          discription:" Best quality dress  for  women.",
          price:200,
          category:"Tops",
          Products:"Tops1",
        
        },
        {
          src:"/pictures/top2.jpg",
          alt:"Tops",
          title:"Long tops",
          discription:" Best quality dress for  women.",
          price:250,
          category:"Tops",
          Products:"Tops2",
         

     },
        {
          src:"/pictures/top3.jpg",
          alt:"Top",
          title:" Wool Top",
          discription:" Best quality top notch dress for  women.",
          price:300,
          category:"Tops",
          Products:"Tops3",
     },
     {
        src:"/pictures/top4.jpg",
        alt:"Dress shirt",
        title:"Stylish Dress",
        discription:" Best quality dress shirt for  women.",
        price:200,
        category:"Tops",
        Products:"Tops4",
     },
      {
        src:"/pictures/top5.jpg",
        alt:"Top",
        title:"Summer Top",
        discription:" Best quality dress  for  women.",
        price:200,
        category:"Tops",
        Products:"Tops5",
        
        
   },
      {
        src:"/pictures/top6.jpg",
        alt:"Top",
        title:" Style Tops", 
        discription:" Best quality top notch dress for  women.",
        price:300,
        category:"Tops",
        Products:"Tops6",
       

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

bestSell.map((item, i) => (
  <SellingCard
    key={i}
    src={item.src}
    alt={item.alt}
    title={item.title}
    discription={item.discription}
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