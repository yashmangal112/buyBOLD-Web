// ImageSlider.js
import React, { useState, useEffect } from 'react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-slider relative">
      {images.map((image, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`slide absolute top-0 left-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
