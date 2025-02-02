import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import NavigationMenuDemo from '../navlinks';
import Image from 'next/image';



export default function Navbar(){
  return (
    <div>
      <div className="navbar bg-mywhite">
    <div className="navbar-start">
      <div className="dropdown">
        
        <div tabIndex={0} role="button" className="p-0 text-[2x] lg:hidden">
        <GiHamburgerMenu/>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
         <li><Link href={'/Home'}>Home</Link></li>
        <li>
          <details>
            <summary>Women</summary>
            <ul className="p-2 ">
              <li>
                <Link href={'/Tops'}>Tops</Link> 
              </li>
              <li>
                <Link href={'/Pants'}>Pants</Link>
              </li>
              <li>
                <Link href={'/Accessories'}>Accessories/Jwelery</Link>
              </li>
              <li><Link href={'/Shoes'}>Shoes</Link></li>
             

            </ul>
          </details>
        </li>
        <li>
          <Link href={'/aboutUs'}>About</Link>
        </li>
        <li><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </div>
      <div>
      <Image src={require("../../../public/pictures/Logo2.webp")}alt="logo" width={170} height={150} className='  flex-col pl-10'/>
      </div>
    </div>
    <div className="navbar-center group ">
     
     </div> 
         
    <div className='hidden lg:flex group' >  < NavigationMenuDemo/></div>
    <div className="navbar-end group">
      <Link href={"/Cart"}>
      <div tabIndex={0} role="button" className=" pr-4">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer   group-hover:text-myOrange duration-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
          
          <span className="badge badge-sm indicator-item text-myblackpara group-hover:text-mywhite group-hover:bg-myblack">8</span>
        </div>
      </div>
      </Link>
      </div>
      </div>
      </div>
  
  
  );
}




