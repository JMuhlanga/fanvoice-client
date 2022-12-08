import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>                
    </div>
  );
}

export default App;
