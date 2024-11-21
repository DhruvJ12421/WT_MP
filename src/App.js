import React from "react";
import "./App.css";
import Login from '../src/components/Login.js'
import Menu from '../src/components/Menu.js'
import VegStarters from '../src/components/VegStarters.js'
import IceCreams from './components/IceCreams.js'
import NonVegStarters from './components/nv.js'
import Deserts from './components/deserts.js'
import Salads from './components/Salads.js'
import Lassis from './components/Lassis.js'
import Soups from './components/soups.js'
import Seafood from './components/seafood.js'
import Noodles from './components/noodles.js'
import MainCourse from './components/MainC.js'
import Home from '../src/components/Home.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define navigation routes */}
        <Routes>
          {/* Route for Login Page */}
          <Route path="/" element={<Login />} />
          
          {/* Route for Home Page */}
          <Route path="/home" element={<Home />} />

          {/* Route for Menu Page */}
          <Route path="/menu" element={<Menu />} />
          
          {/* Route for VegStarters Page */}
          <Route path="/vegstarters" element={<VegStarters />} />

          {/* Route for IceCream Page */}
          <Route path="/IceCreams" element={<IceCreams />} />

          {/* Route for NonVegStarters Page */}
          <Route path="/NonVegStarters" element={<NonVegStarters />} />

          {/* Route for Deserts Page */}
          <Route path="/Deserts" element={<Deserts />} />

          {/* Route for Salads Page */}
          <Route path="/Salads" element={<Salads />} />

          {/* Route for Lassis Page */}
          <Route path="/Lassis" element={<Lassis />} />

          {/* Route for soups Page */}
          <Route path="/Soups" element={<Soups />} />

          {/* Route for Seafood Page */}
          <Route path="/Seafood" element={<Seafood />} />
          
          {/* Route for noodles Page */}
          <Route path="/Noodles" element={<Noodles />} />

          {/* Route for MainCourse Page */}
          <Route path="/MainCourse" element={<MainCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
