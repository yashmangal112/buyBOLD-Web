// About.js
import React from 'react';
import ImageSlider from './ImageSlider';

const sliderImages = [
//   'influencer-1.svg',
  'influencer-2.svg',
  'influencer-3.svg',
//   'influencer-5.svg',
  'influencer-7.svg'
  // Add more image URLs as needed
];

function About() {
    return (
        <div>
            <div id="about" className="about flex pb-28 pt-24 w-10/12 items-center justify-center m-auto">
                <div className="about1 w-1/2 px-3">
                    <div className='w-[500px] h-[500px]'>
                        <ImageSlider images={sliderImages} />
                    </div>
                    
                </div>
                <div className="text w-1/2 px-7">
                    <div className="parrel">
                        <div className="head"></div>
                        <p className="text2 font-montserrat font-semibold mb-3 text-xl">About the club</p>
                    </div>
                    <div className="desc font-poppins text-base text-justify">
                    BuyBold is an online marketplace that enables store to sell their products through interactive short videos and is highly personalised and recommendation based.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of...
                    </div>
                    <button className="random font-poppins border-2 p-3 mt-5 rounded-lg">Random Staff</button>
                </div>
            </div>
        </div>
    );
}

export default About;


