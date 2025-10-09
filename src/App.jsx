

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutoage from "./pages/Aboutoage";
import ProductPage from "./pages/ProductPage";
import NotFountPage from "./pages/NotFountPage";
const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>  
        <Route path="about-page" element={<Aboutoage/>}/>
        <Route path="product-page" element={<ProductPage/>}/>
        <Route path="*" element={<NotFountPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

  


