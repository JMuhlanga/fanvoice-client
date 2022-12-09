import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Sports from './Components/Sports';
import PopCulture from './Components/PopCulture';
import Gaming from './Components/Gaming';
import AboutUs from './Components/About';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/popculture" element={<PopCulture />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>                
    </div>
  );
}

export default App;
