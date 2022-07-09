import React from 'react';

import AppStyled from './AppStyled';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

// import './App.scss';

const App = () => {
  return (
    <AppStyled>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Testimonials />
        <Work />
        <Footer />
      </div>
    </AppStyled>
  );
};

export default App;
