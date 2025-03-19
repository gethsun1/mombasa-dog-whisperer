"use client";

import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import Script from 'next/script';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Hero() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  const handleBookNow = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/jumakelly199/30min'
      });
    } else {
      console.error('Calendly is not loaded yet');
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5, color: 'black' }}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setCalendlyLoaded(true)}
      />
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'black' }}
      >
        Welcome to The Mombasa Dog Whisperer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          color: 'white',
          fontSize: '1rem',
          minHeight: '3rem',
        }}
      >
        <Typewriter
          words={['Your Professional Dog Trainer &  Handler in Mombasa']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleBookNow}
      >
        Book Now
      </Button>
    </Box>
  );
}
