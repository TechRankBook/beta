import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HorizontalVerticalTabs from './components/HorizontalVerticalTabs';


const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section1 />
      <Section2 />
      <HorizontalVerticalTabs />
      <Section3 />
      <Section4 />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
