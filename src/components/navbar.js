import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="dummy-logo.png" alt="Logo" className="w-16 h-16" />
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
          <a className='flex justify-center items-center gap-3' href="/track-orders">Track Orders <AiOutlineArrowRight/></a>
        </div>
      </nav>
  )
}

export default navbar