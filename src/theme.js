// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '25px',
      fontFamily: "Roboto, sans-serif",
      fontWeight: 900,
      color: '#1976d2', // Example custom color
    },
    h2: {
      fontSize: '16px',
      fontWeight: 600,
      color:'#000'
    },
    h3: {
        fontSize: '14px',
        fontWeight: 600,
        color:'#000'
      },

    // Add custom styles for other headings as needed
  },
});

export default theme;
