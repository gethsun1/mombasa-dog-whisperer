// src/theme.ts
'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Deep navy
    },
    secondary: {
      main: '#F39C12', // Warm accent
    },
    background: {
      default: '#FFFFFF', // Clean background
    },
    text: {
      primary: '#333333', // Readable text color
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif', // Using Raleway font
  },
});

export default theme;
