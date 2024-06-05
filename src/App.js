import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Products />
      </Router>
    </div>
  );
}

export default App;
