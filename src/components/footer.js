// Footer.js
import React from "react";
import { BsInstagram } from "react-icons/bs";
import {FcShipped} from 'react-icons/fc'
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex pl-[90px] pr-[60px] pt-[90px] pb-[90px] flex-col md:flex-row justify-between items-center">
        <div className="flex w-1/3 p-2 items-center space-x-4 mb-4 md:mb-0">
          <img src="footer-logo.png" alt="Footer Logo" className="w-12 h-12" />
        </div>
        <div className="flex w-2/3 p-5 flex-wrap space-x-4">
  <div className="mb-4 md:mb-0 w-full">
    <h3>Quick Links</h3>
    <ul className="grid grid-cols-2 gap-4">
      <li className="line-height-6 py-5">
        <a href="/account">My Account</a>
      </li>
      <li className="line-height-6 py-5 ">
        <a href="/order-history">Order History</a>
      </li>
      <li className="line-height-6 py-5">
        <a href="/wish-list">Wish List</a>
      </li>
      <li className="line-height-6 py-5 ">
        <a href="/terms">Terms and Conditions</a>
      </li>
      <li className="line-height-6 py-5">
        <a href="/about">About</a>
      </li>
      <li className="line-height-6 py-5 ">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</div>

      </div>
      <div class="flex justify-center p-5 border-t-2 border-b-2 border-gray-300 relative w-10/12 m-auto flex-wrap content-start">
    <div class="flex gap-2 items-center mx-8">
        <FcShipped class="text-white text-3xl mx-3"/> Shipped 2k+ Orders
    </div>
    <div class="flex gap-2 items-center mx-8">
        <FcShipped class="text-white text-3xl mx-3" /> Reasonable Prices
    </div>
    <div class="flex gap-2 items-center mx-8">
        <FcShipped class="text-white text-3xl mx-3" /> Secure Payments
    </div>
</div>

      <div className="flex justify-center mt-4">
            <div className="flex space-x-4">
              <a href="https://github.com/yashmangal112">
                <BsInstagram className="w-18 h-8 hover:opacity-100 hover:transform- none animate-bounce " />
              </a>
              <a
                href="https://www.linkedin.com/in/yashmangal112/"
              >
                <BsInstagram className="w-18 h-8 hover:opacity-100 hover:transform- none animate-bounce " />
              </a>
              <a
                href="https://www.instagram.com/yash_mangal_112/"
                // target="_blank"
              >
                <BsInstagram className="w-18 h-8 hover:opacity-100 hover:transform- none animate-bounce " />
              </a>
              <a href="https://yashmangal112.vercel.app/">
                <BsInstagram className="w-18 h-8 hover:opacity-100 hover:transform- none animate-bounce " />
              </a>
            </div>
      </div>
    </footer>
  );
}

export default Footer;
