"use client"
import React from 'react'
import { Button } from './ui/button'
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='mb-[100px]'>
      <div
    className="hero min-h-[90vh] custom-img bg-fixed bg-center bg-no-repeat"
    >
    <div className="hero-overlay bg-opacity-70">

    </div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-mywhite">An Industrial Take on
           <span className='text-myOrange'>Streetwear</span>
           </h1>
        <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-mywhite">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <Button className='outline outline-offset-2 outline-1 text-mywhite group hover:rounded-3xl duration-300 hover:outline-myOrange'>
      <FaShoppingCart className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce" /> Shop Now
    </Button>
      </div>
    </div>
  </div>
  </div>
  )
}
export default Hero