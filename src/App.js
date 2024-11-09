import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import HorizontalVerticalTabs from './components/HorizontalVerticalTabs';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <section id="section1">
        <Section1 />
      </section>
      <section id="section2">
        <Section2 />
      </section>
      <section id="HorizontalVerticalTabssection">
        <HorizontalVerticalTabs />
      </section>
      <section id="section3">
        <Section3 />
      </section>
      <section id="section4">
        <Section4 />
      </section>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
