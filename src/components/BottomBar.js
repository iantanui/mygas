import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function BottomBar () {
  return (
    <div className="bottom-nav-bar">
        <NavLink to="/dashboard" activeClassName="active"> Dashboard</NavLink>
        <NavLink to="/products" activeClassName="active">Products</NavLink>
        <NavLink to="/refills" activeClassName="active">Refills</NavLink>
        <NavLink to="/management" activeClassName="active"> Manage</NavLink>
    </div>
  );
};

export default BottomBar;
