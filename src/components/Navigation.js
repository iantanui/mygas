import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Refills from "./Refills";
import ManagementSystem from "./Management";
import BotttomBar from "./BottomBar";

const Navigation = () => {
  const [value, setValue] = useState("dashboard");
  const history = useHistory();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  }

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/refills" component={Refills} />
        <Route exact path="/management" component={ManagementSystem} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <BotttomBar value={value} onchange={handleNavigationChange} />
    </Router>
  );
};

export default Navigation;
