'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F1546', // Customize your primary color
    },
    secondary: {
      main: '#1BFCB6', // Customize your secondary color
    },
    neutral: {
      main: '#D83B01',
      contrastText: '#fff',
    },
    // You can add more colors here, like error, warning, success, etc.
  },
  typography: {
    fontFamily: 'Lato, sans-serif', // Customize your default font family
    fontSize: 14, // Customize your base font size
  },
});

export default theme;