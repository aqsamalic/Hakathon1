"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Slider from "react-slick";
import { SellingCard } from './SellingCard';

const FeatureProduct = () => {
    // data
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
            src:"/pictures/pinkshoe.jpg",
            alt:"Shoes",
            title:"Stylish Shoes",
            description:" Best quality top notch shoes for  women.",
            price:300,
            category:"Shoes",
            Products:"Shoes",
         
       },
          {
            src:"/pictures/makeup1.jpg",
            alt:"makeup",
            title:"Branded Makeup",
            description:" Best quality products for  women.",
            price:300,
            category:"makeup",
            Products:"makeup",
         
       },
          {
            src:"/pictures/bags.jpg",
            alt:"Bages",
            title:"Stylish Bages",
            description:" Best quality women bages for  women.",
            price:300,
            category:"bag",
            Products:"bag",
         
       },
          {
            src:"/pictures/Accessries.jpg",
            alt:"Shoes",
            title:"Women Accessories",
            description:" Best quality top notch Acceries for  women.",
            price:300,
            category:"Accessories",
            Products:"Accessories",
         
       },
          {
            src:"/pictures/product.jpg",
            alt:"Shoes",
            title:"Accessories",
            description:" Best quality top notch Accessories for  women.",
            price:300,
            category:"Accessories",
            Products:"Accessories",
         
       },
       {
        src:"/pictures/Shoes2.jpg",
        alt:"Shoes",
        title:"Stylish Shoes",
        description:" Best quality top notch shoes for  women.",
        price:300,
        category:"Shoes",
        Products:"Shoes",
     
   },
        ]
    // slider settings
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
      Feature products
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
      </div>
      {/* carousel */}
      <Slider {...settings}>
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
      </Slider>
    </div>
    
  )
}

export default FeatureProduct