import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFoud";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
           <Route path="/" element={< Home />} />
           <Route path="/knowledges" element={<Knowledges />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />      
       </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
