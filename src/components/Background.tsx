"use client";

import React, { useState, useEffect } from 'react';
import StarrySky from './StarrySky';

const images = [
  '/mombasabg.jpg',
  '/mombasabg1.jpg',
  '/mombasabg2.jpg',
  '/mombasabg3.jpg',
  '/mombasabg4.jpg',
  '/mombasabg5.jpg',
  '/mombasabg6.jpg',
  '/mombasabg7.jpg',
  '/mombasabg8.jpg',
 
  
];

export default function Background() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -3, // base layer behind all
      }}
    >
      {/* Translucent Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // adjust opacity/color as needed
          zIndex: 1,
        }}
      />
      {/* Starry Sky Animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
        }}
      >
        <StarrySky />
      </div>
    </div>
  );
}
