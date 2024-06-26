import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductContext from "./components/products/ProductContext";
import RefillContext from "./components/refills/RefillContext";
import GasTypeProvider from "./components/gasTypes/GasTypeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GasTypeProvider>
    <ProductContext>
      <RefillContext>
        <App />
      </RefillContext>
    </ProductContext>
  </GasTypeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
