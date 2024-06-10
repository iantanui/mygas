import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Refills from "./Refills";
import Management from "./Management";

const Navigation = () => {
  return (
    <Router>
      <TopBar />
      <div className="content mt-5">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/refills" element={<Refills />} />
          <Route path="/management" element={<Management />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      <BottomBar />
    </Router>
  );
};

export default Navigation;
