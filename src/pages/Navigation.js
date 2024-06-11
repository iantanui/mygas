import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import DashboardScreen from "./DashboardScreen";
import ProductsScreen from "./ProductsScreen";
import RefillsScreen from "./RefillsScreen";
import ManagementScreen from "./ManagementScreen";

const Navigation = () => {
  return (
    <Router>
      <TopBar />
      <div className="content mt-5">
        <Routes>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/refills" element={<RefillsScreen />} />
          <Route path="/management" element={<ManagementScreen />} />
          <Route path="/" element={<DashboardScreen />} />
        </Routes>
      </div>
      <BottomBar />
    </Router>
  );
};

export default Navigation;
