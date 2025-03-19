"use client";

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const handleBookNow = () => {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({ url: 'https://calendly.com/jumakelly199/30min' });
      return false;
    } else {
      console.error('Calendly is not loaded');
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5, color: 'black' }}>
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
          words={['Your professional dog trainer and handler in Mombasa']}
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
