import React from 'react'

 const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        {/* Heading */}
        <div className="container px-5 py-2 mx-auto">
    <div className="text-center mb-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-myblack">
      Our Promotion
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    </div>
    {/* Promotion Section */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Promotion 1 */}
        <div
  className="hero min-h-[25rem] promo-1 rounded-xl bg-no-repeat">
  <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold scroll-m-20 tracking-tight uppercase">Get upto <span className='text-myOrange'> 60% </span>off</h1>
      <p className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight">
      Get upto 60% off on your first order.
      </p>
    </div>
  </div>
</div>
        {/* Promotion 2 */}
        <div
  className="hero min-h-[25rem] promo-2  rounded-xl bg-no-repeat">
  <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold scroll-m-20 tracking-tight uppercase">Get upto <span className='text-myOrange'> 30% </span>off</h1>
      <p className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight">
    Flash sale, get upto 30% off on new arrivals.
      </p>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
export default Promotion
