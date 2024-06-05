import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Refills from "./Refills";
import ManagementSystem from "./Management";
import BotttomBar from "./BottomBar";

const Navigation = () => {
  const [value, setValue] = useState("dashboard");
  const navigate = useNavigate();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    navigate.push(`/${newValue}`);
  }

  return (
    <>
      <TopBar />

      <Routes>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/refills" component={Refills} />
        <Route exact path="/management" component={ManagementSystem} />
        <Route exact path="/" component={Dashboard} />
      </Routes>
      
      <BotttomBar value={value} onchange={handleNavigationChange} />
    </>

  );
};

export default Navigation;
