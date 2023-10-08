import React, { useState, useEffect } from 'react';

const bannerImages = [
  'banner-1.png',
  'banner-2.png',
  'banner-3.png',
  // Add more banner image URLs as needed
];

function LandingBanners() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Function to change the current banner automatically every 5 seconds
  const autoChangeBanner = () => {
    const nextBanner = (currentBanner + 1) % bannerImages.length;
    setCurrentBanner(nextBanner);
  };

  useEffect(() => {
    // Start the automatic banner change interval
    const intervalId = setInterval(autoChangeBanner, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentBanner]);

  const handleIndicatorClick = (index) => {
    setCurrentBanner(index);
  };

  return (
    <div className="landing-page mt-6">
      <div className="relative w-full">
        {bannerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`h-[630px] w-full ${index === currentBanner ? 'block' : 'hidden'} transition-opacity ease-in-out duration-500`}
          />
        ))}
        <div className="absolute inset-x-15 z-15 pl-0 mr-15 ml-15 bottom-4 left-0 right-0 flex justify-center">
          {bannerImages.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-2 bg-gray-400 rounded-full ${index === currentBanner ? 'bg-blue-500' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingBanners;

