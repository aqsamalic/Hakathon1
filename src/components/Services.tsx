import React from 'react'
import Image from 'next/image'

 const Services = () => {
  return (
    <div><section className="text-gray-600 body-font  mb-[60px] mt-[60px]">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
        Our Services
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        
      {/* Delivery section  */}
        <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center  items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center    mb-5 flex-shrink-0">
          <Image src={require("../../public/pictures/Delivery.jpg")} alt='Delivery' height={200} width={200} className='w-20 h-20 rounded-s-lg'/>
          </div>
          <div className="flex-grow group">
            <h2 className="text-myblack text-lg group-hover:text-myOrange duration-100 title-font font-medium  capitalize">
                free delivery
            </h2>
            <p className="capitalize line-clamp-2  group-hover:text-myblackpara/60 scroll-m-20  text-base font-semibold tracking-tight ">
              free delivery on order above $1000
            </p>
         </div >
         
         
        </div>
        {/* 24/7 Services  */}
        <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-30 inline-flex items-center justify-center   mb-5 flex-shrink-0">
          <Image src={require("../../public/pictures/service.jpg")} alt='Delivery' height={200} width={200} className='w-20 h-30 bg-mywhite rounded-full'/>
          </div>
          <div className="flex-grow group">
            <h2 className="text-myblack text-lg group-hover:text-myOrange duration-300 title-font font-medium  capitalize">
                24/7 Services
            </h2>
            <p className="capitalize line-clamp-2  group-hover:text-myblackpara/60 scroll-m-20  text-base font-semibold tracking-tight ">
             For Queries and Questions Contact Us
            </p>
         </div>
         
         
        </div>
        {/* Money back  */}
        <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-30 inline-flex items-center justify-center    mb-5 flex-shrink-0">
          <Image src={require("../../public/pictures/Money back.jpg")} alt='Delivery' height={200} width={200} className='w-30 h-30 rounded-full'/>
          </div>
          <div className="flex-grow group">
            <h2 className="text-myblack text-lg group-hover:text-myOrange duration-300 title-font font-medium mb-3 capitalize">
                Money back
            </h2>
            <p className="capitalize line-clamp-2  group-hover:text-myblackpara/60 scroll-m-20  text-base font-semibold tracking-tight ">
             100% money back guarantee on demage products
            </p>
         </div>
         
         
        </div>
         </div>
         
         
    </div>
  </section>
  </div>
  )
}
export default Services
