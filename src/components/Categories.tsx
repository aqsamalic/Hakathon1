import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

 const Categories = () =>{
  return (
    <div className='mb-[100px] mt-[100px]'>
 <div className="container px-5 py-2 mx-auto">
<div className="text-center mb-5">
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
  Our Categories
  </h1>
  <div className="flex mt-6 justify-center">
    <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
  </div>
</div>
{/* categories start from here */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {/* category 1 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
      <Link href={'/top'}>
      
        <Image src={require("../../public/pictures/Top1 (2).jpg")} alt='Category' height={400} width={400} className='rounded-xl duration-100 group-hover:scale-125'/>
        <div className='absolute -bottom-20 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblack/70  text-center w-full text-mywhite'>
        <h1 className='Uppercase'>TOPS</h1>
    </div>
    </Link>
    </div>
    {/* category 2*/}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
      <Link href={'/pants'}>
        <Image src={require("../../public/pictures/pants3.jpg")} alt='Category' height={400} width={400} className='rounded-xl duration-100 group-hover:scale-125'/>
        <div className='absolute -bottom-20 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblack/70  text-center w-full text-mywhite'>
        <h1 className='Uppercase'>Pants</h1>
    </div>
    </Link>
    </div>
    {/* category 3 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
      <Link href={'/shoes'}>
        <Image src={require("../../public/pictures/Shoes2.jpg")} alt='Category' height={400} width={400} className='rounded-xl duration-100 group-hover:scale-125'/>
        <div className='absolute -bottom-20 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblack/70  text-center w-full text-mywhite'>
        <h1 className='Uppercase'>Shoes</h1>
    </div>
    </Link>
    </div>
    {/* category 4 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
      <Link href={'/accessories'}>
        <Image src={require("../../public/pictures/Accessries.jpg")} alt='Category' height={400} width={400} className='rounded-xl duration-100 group-hover:scale-125'/>
        <div className='absolute -bottom-20 group-hover:bottom-7 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblack/70  text-center w-full text-mywhite'>
        <h1 className='Uppercase'>Accesseries</h1>
    </div>
    </Link>
    </div>
    

</div>
</div>
</div>

  )
}

export default Categories
