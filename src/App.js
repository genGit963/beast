import React from "react";
import { Route, Routes } from "react-router-dom";


import './app.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import ExerciseDetail from "./pages/exerciseDetail";



function App() {

  return (
    <div>
      <h1>This is App Screen.</h1>
      <NavBar />
      {/* --------------------- Using Routes paths for different pages from main page-------------- */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/element/:id" element={<ExerciseDetail />} />
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;