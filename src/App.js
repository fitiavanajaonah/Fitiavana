import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from "./pages/home";
import contact from "./pages/contact";
import knowledges from "./pages/knowledges";
import NotFound from "./pages/NotFound";
import portfolio from "./pages/portfolio";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={home} />
          <Route path="/competance" Component={knowledges} />
          <Route path="/portfolio" Component={portfolio} /> 
          <Route path="/contact" Component={contact} />
          <Route path="/not" Component={NotFound} />   
        </Routes>
      </BrowserRouter>
    </>
  );

};

export default App;


