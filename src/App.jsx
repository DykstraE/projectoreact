import React from 'react';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Principal from './components/Principal';
import Footer from './components/Footer';
import './styles.css'; 

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Aside />
      <Principal />
      <Footer />
    </div>

  );
};

export default App;

