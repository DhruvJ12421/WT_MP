import React from "react";
import "./App.css";
import Login from 'C:/Users/Dhruv Jain/Desktop/Webtech/wtmp/src/components/Login.js'
import Menu from 'C:/Users/Dhruv Jain/Desktop/Webtech/wtmp/src/components/Menu.js'
import VegStarters from 'C:/Users/Dhruv Jain/Desktop/Webtech/wtmp/src/components/VegStarters.js'
import IceCreams from './components/IceCreams.js'
import NonVegStarters from './components/nv.js'
import Deserts from './components/deserts.js'
import Salads from './components/Salads.js'
import Lassis from './components/Lassis.js'
import Home from 'C:/Users/Dhruv Jain/Desktop/Webtech/wtmp/src/components/Home.js'
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
