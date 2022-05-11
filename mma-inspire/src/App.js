import React from 'react';
import Academy from "./components/Academy";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About";
import CustomMade from "./components/CustomMade";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='App'>
      <NavBar />
    <Routes>
      <Route exact path="/academy" element={<Academy />}></Route>
      <Route exact path="/navbar" element={<NavBar />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/custommade" element={<CustomMade />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer />
    </div>
    
  );
};

export default App;
