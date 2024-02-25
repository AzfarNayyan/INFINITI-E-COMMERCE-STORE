
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import Contact from "./contact/Contact";
import INFINITIHOMEPAGE from "./homepage/INFINITIHOMEPAGE";
import About from "./about/About";
import LOGIN from "./login/LOGIN";
import PRODUCTDISPLAY from "./product/PRODUCTDISPLAY";
import PRODUCTDISPLAY1 from "./product2/PRODUCTDISPLAY1";
import BILLING from "./billing/BILLING";
import REVIEW from "./review/REVIEW";
import ADMINLOGIN from "./adminlogin/ADMINLOGIN";
import ADMINADDPRODUCT from "./admin-addprod/ADMINADDPRODUCT";
import ADMINREMOVEPRODUCT from "./admin-delprod/ADMINREMOVEPRODUCT";
import Dashboard from "./admin-dashboard/Dashboard";
import "./App.css";


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

const NavBar1 = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin">LOGIN</Link>
        </li>
        <li>
          <Link to="/adminadd">ADD PRODUCT</Link>
        </li>
        <li>
          <Link to="/admindel">DELETE PRODUCT</Link>
        </li>
        <li>
          <Link to="/admindashboard">DASHBOARD</Link>
        </li>
      </ul>
    </nav>
  );
};

const NavBar2 = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>

      </ul>
    </nav>
  );
};



const App = () => {

  const isNavBarVisible = !window.location.pathname.startsWith("/admin");
  return (
    <Router>

      {isNavBarVisible && <NavBar2/>}
      {!isNavBarVisible &&<NavBar1/>}


      <Routes>
        <Route path="/" element={<INFINITIHOMEPAGE />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LOGIN />}  />
        <Route path="/product1" element={<PRODUCTDISPLAY />} />
        <Route path="/product2" element={<PRODUCTDISPLAY1 />} />
        <Route path="/bill" element={<BILLING />} />
        <Route path="/review" element={<REVIEW />} />

        <Route path="/admin" element={<ADMINLOGIN />} />
        <Route path="/adminadd" element={<ADMINADDPRODUCT />} />
        <Route path="/admindel" element={<ADMINREMOVEPRODUCT />} />
        <Route path="/admindashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;