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
            <div className="about flex pb-28 pt-24 w-10/12 items-center justify-center m-auto">
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
                        The Sports Union is represented by The Sports Union
                        Council which consists of The Sports Secretary, three
                        Joint Sports Secretaries, the Captains of all Sports
                        Teams and one Ex-Office Member. The Sports Union Council
                        makes the final calls on matters such as sending teams
                        to outstation tournaments, decisions regarding IBOSM and
                        the like.
                    </div>
                    <button className="random font-poppins border-2 p-3 mt-5 rounded-lg">Random Staff</button>
                </div>
            </div>
        </div>
    );
}

export default About;


