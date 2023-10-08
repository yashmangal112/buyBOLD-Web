import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';


const navbar = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrolled, setScrolled] = useState(false);

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about-section');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <nav
    className={`p-2 fixed top-0 left-0 right-0 z-50 ${
      scrolled
        ? `
          bg-white
          text-black
          shadow-md
        `
        : `
          bg-white
          text-black
        `
    }`}
  >
        <div className="container mx-auto flex justify-between items-center">
          <img src="dummy-logo.png" alt="Logo" className="w-16 h-16" />
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li>
            {/* Update the link to use an anchor tag */}
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById("about").scrollIntoView({ behavior: "smooth" }); }}>About </a>
          </li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
          <a className='flex justify-center items-center gap-3' href="/track-orders">Track Orders <AiOutlineArrowRight/></a>
        </div>
      </nav>
  )
}

export default navbar