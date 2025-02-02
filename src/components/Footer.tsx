import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () =>{
  return (
    <div>
      <footer className="text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto ">
      <div className="flex flex-wrap md:text-left text-center order-first pb-">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className=" scroll-m-20 text-xl title-font font-medium text-gray-600 tracking-widest  mb-3">
            Company
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              Home</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              About</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              Term of Use</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              How it works</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              Contact Us</Link>
            </li>
      
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font  font-medium text-gray-600 tracking-widest text-xl mb-3">
            Support
          </h2>
          <nav className="list-none mb-10">
          <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              Support Carrer</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              24h services</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
              Quick Chat</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-600 tracking-widest text-xl mb-3">
            Contact
          </h2>
          <nav className="list-none mb-10">
          <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
             Whatsapp</Link>
            </li>
            <li>
              <Link href={"/"} className='text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40 '>
             Support 24h</Link>
            </li>
            
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-600 tracking-widest text-xl mb-3">
            Subscribe
          </h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="'text-base font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40"
              >
                Email
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 hover:border-myOrange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-myblackpara border-0 py-2 px-6 focus:outline-none hover:bg-myblackpara rounded">
              Get Notified
            </button>
          </div>
          <p className="'text-sl font-semibold text-gray-500 tracking-widest hover:text-myblackpara/40">
            Please provide us your Email
            <br className="lg:block hidden" />
           to get notified about new products
          </p>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-100">
    
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <div>
        <Image src={require("../../public/pictures/Logo2.webp")} alt="logo" width={170} height={150} className='  flex-col pl-10'/>  
        </div>
      
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2020 Branded
          <Link
            href="https://twitter.com/knyttneve"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @Market
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={"#"} className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>
          <Link href={"#"} className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </Link>
          <Link href={"#"} className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </Link>
          <Link href={"#"} className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer
