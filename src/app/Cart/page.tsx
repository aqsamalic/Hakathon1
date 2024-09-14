import CartCard from '@/components/CartCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const Cart = () => {
  return (
    <div className='mb-[100px] mt-[100px]'> 
    <div className='grid lg:grid-cols-3 grid-cols-1'>
      {/* items */}
      <div className='col-span-2'>
        <CartCard src='/pictures/top2.jpg' title='Casual Top' size='L' price={100}/></div>
    
      {/* summary */}
      <div className='bg-myblack/5 p-5 rounded-xl'>
      {/* heading */}
      <h2 className='scroll-m-20 text-lg font-medium tracking-tight uppercase'>Order Summary</h2>  
      {/* divider */}
      <div className='divider mt-0 mb-1'></div> 
       {/*pricing  */}
       <div className='text-sm font-medium tracking-tight text-myblackpara'>
        {/* product charges */}
        <div className='flex justify-between item-center capitalized'>
          <h1>Sub Total</h1>
          <h1>$100</h1>
        </div>
        {/* delivery charges */}
        <div className='flex justify-between item-center capitalized'>
          <h1>Delivery Charges</h1>
          <h1>TBD</h1>
        </div>
        {/* service charges */}
        <div className='flex justify-between item-center capitalized'>
          <h1>Service Charges</h1>
          <h1>TBD</h1>
        </div>
          {/* divider */}
      <div className='divider mt-0 mb-1'></div> 
      {/* estimate total */}
      <div className='flex justify-between item-center uppercase font-semibold text-sm text-myblackpara tracking-tight'>
          <h1>Estimate Total</h1>
          <h1>TBD</h1>
        </div>
                  {/* divider */}
      <div className='divider mt-0 mb-1'></div> 
      {/* checkout button */}
        <div className='flex item center  justify-center w-full'>
          <Button className='bg-myblack hover:bg-transparent duration-300 text-mywhite hover:text-myblack scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl'>proceed to checkout</Button>
        </div>
         {/* divider */}
      <div className='divider mt-0 mb-1'></div> 
      <p className='text-xs font-semibold tracking-tight text-myblack w-[97%] text-center italic'>
        {`*delivery charges and sales tax will be calculated in the checkout page`}
      </p>
        </div>  
       </div>
       </div>
       </div>
  )
}

export default Cart