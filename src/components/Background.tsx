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
  const [frontImage, setFrontImage] = useState(images[0]);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [fade, setFade] = useState(false);
  const fadeDuration = 1000; // in ms
  const displayDuration = 5000; // time per image

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(frontImage);
      const nextIndex = (currentIndex + 1) % images.length;
      
      // Set the next image with initial opacity 0
      setBackImage(images[nextIndex]);
      
      // Use a small delay to trigger the transition
      setTimeout(() => {
        setFade(true);
      }, 50);
      
      // After fadeDuration, update the front image and reset fade/backImage
      setTimeout(() => {
        setFrontImage(images[nextIndex]);
        setBackImage(null);
        setFade(false);
      }, fadeDuration + 50);
      
    }, displayDuration);
    return () => clearInterval(interval);
  }, [frontImage]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -3,
      }}
    >
      {/* Front (current) background */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${frontImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          opacity: 1,
        }}
      />
      {/* Back (fading in) background */}
      {backImage && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: `opacity ${fadeDuration}ms ease-in-out`,
            opacity: fade ? 1 : 0,
          }}
        />
      )}
      {/* Darker Translucent Overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // darker overlay
          zIndex: 1,
        }}
      />
      {/* Starry Sky Animation */}
      <div
        style={{
          position: 'absolute',
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
