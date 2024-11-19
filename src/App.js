import React from "react";
import "./App.css";
import Home from "../src/components/Home.js";
import WhyChooseUs from "./components/whyus.js";
import FollowUs from "./components/Follow.js";
import Login from "../src/components/Login.js";
import Menu from "../src/components/Menu.js";
import Cart from "./components/Cart.js";
import VegStarters from "../src/components/VegStarters.js";
import IceCreams from "./components/IceCreams.js";
import NonVegStarters from "./components/nv.js";
import Deserts from "./components/deserts.js";
import Salads from "./components/Salads.js";
import Lassis from "./components/Lassis.js";
import Soups from "./components/soups.js";
import Seafood from "./components/seafood.js";
import Noodles from "./components/noodles.js";
import MainCourse from "./components/MainC.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define navigation routes */}
        <Routes>
          {/* Default route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for Whyus Page */}
          <Route path="/WhyChooseUs" element={<WhyChooseUs />} />

          {/* Route for FollowUs Page */}
          <Route path="/FollowUs" element={<FollowUs />} />
          
          {/* Route for Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Route for Menu Page */}
          <Route path="/menu" element={<Menu />} />

          {/* Route for Cart Page */}
          <Route path="/cart" element={<Cart />} />
          
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

          {/* Route for Soups Page */}
          <Route path="/Soups" element={<Soups />} />

          {/* Route for Seafood Page */}
          <Route path="/Seafood" element={<Seafood />} />
          
          {/* Route for Noodles Page */}
          <Route path="/Noodles" element={<Noodles />} />

          {/* Route for MainCourse Page */}
          <Route path="/MainCourse" element={<MainCourse />} />

          {/* Fallback Route: Redirect unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
