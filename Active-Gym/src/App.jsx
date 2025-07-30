import React from 'react';
import Header from './components/Header';
import Hero from './components/UI/Hero';
import Exercise from './components/UI/Exercise'
import './App.css'; 
import Start from './components/UI/Start';
import Pricing from './components/UI/Pricing';
import Footer from './components/UI/Footer';



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Exercise />
      <Start />
      <Pricing />
      <Footer />
    
    </>
  );
}

export default App;
