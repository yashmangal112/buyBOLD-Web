// Footer.js
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Icon } from '@iconify/react';
import { FcShipped } from "react-icons/fc";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex pl-[90px] pr-[60px] pt-[90px] pb-[60px] flex-col md:flex-row justify-between items-center">
        <div className="flex w-1/3 p-2 items-center space-x-4 mb-4 md:mb-0">
          <img src="logo-3.png" alt="Footer Logo" className="filter drop-shadow-md" />
        </div>
        <div className="flex w-2/3 p-5 flex-wrap space-x-4">
          <div className="mb-4 md:mb-0 w-full font-montserrat">
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
      <div class="flex justify-center p-5 border-t-[0.1px] border-b-[0.1px] border-gray-700 relative w-10/12 m-auto flex-wrap content-start">
        <div class="flex gap-2 items-center mx-8">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[23px] mx-3' viewBox="0 0 24 24" fill="none"><path d="M18.68 1.5H5.32L1.5 8.18V22.5H22.5V8.18L18.68 1.5Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M4.36011 18.6797H8.18011" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M12 1.5V12" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M1.5 8.17969H22.5" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
          Shipped 2k+ Orders
        </div>
        <div class="flex gap-2 items-center mx-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[23px] mx-3' fill="none"><path d="M20.5901 1.5V7.23H4.36009C3.6295 7.18682 2.94302 6.86617 2.44102 6.33362C1.93901 5.80107 1.65942 5.09686 1.65942 4.365C1.65942 3.63314 1.93901 2.92893 2.44102 2.39638C2.94302 1.86383 3.6295 1.54318 4.36009 1.5H20.5901Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M18.68 13H22.5V16.82H18.68C18.1735 16.82 17.6876 16.6188 17.3294 16.2606C16.9713 15.9024 16.77 15.4166 16.77 14.91C16.77 14.4034 16.9713 13.9176 17.3294 13.5594C17.6876 13.2012 18.1735 13 18.68 13Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M22.5 7.22937V22.4994H3.41002C2.90426 22.4967 2.41997 22.2947 2.06235 21.937C1.70472 21.5794 1.50264 21.0951 1.50002 20.5894V4.35938C1.4987 4.7358 1.57171 5.10877 1.71485 5.45692C1.85798 5.80507 2.06844 6.12153 2.33415 6.38817C2.59985 6.6548 2.91558 6.86636 3.26323 7.01072C3.61087 7.15507 3.98359 7.22938 4.36002 7.22937H22.5Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
         Reasonable Prices
        </div>
        <div class="flex gap-2 items-center mx-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[23px] mx-3' fill="none"><path d="M12 22.5C9.30769 21.9634 6.8846 20.5103 5.14332 18.3879C3.40205 16.2656 2.45025 13.6053 2.45 10.86V3.41L12 1.5L21.55 3.41V10.86C21.5498 13.6053 20.598 16.2656 18.8567 18.3879C17.1154 20.5103 14.6923 21.9634 12 22.5V22.5Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M7.23 10.93L10.81 14.51L16.77 8.54004" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10"></path></svg> 
          Secure Payments
        </div>
      </div>

      <div className="social_bar flex justify-center my-9">
        <div className="flex space-x-8">
          <a href="https://github.com/yashmangal112">
          <Icon icon="mdi:instagram" color="#c5c5c5" width="25" className="hover:text-orange-400" />
          </a>
          <a href="https://www.linkedin.com/in/yashmangal112/">
            <Icon icon="ri:facebook-fill" color="#c5c5c5" width="25"/>
          </a>
          <a
            href="https://www.instagram.com/yash_mangal_112/"
            // target="_blank"
          >
            <Icon icon="ri:twitter-fill" color="#c5c5c5" width="25" />
          </a>
          <a href="https://yashmangal112.vercel.app/">
          <Icon icon="bi:linkedin" color="#c5c5c5" width="25" />
          </a>
        </div>
      </div>
      <div className="copyright text-center font-montserrat mt-12">
        BUYBOLD - © 2023. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
