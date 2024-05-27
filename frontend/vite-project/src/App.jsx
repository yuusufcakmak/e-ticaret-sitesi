import React from "react";
import HomePage from "./pages/HomePage";
// import ShopPage from "./pages/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <ProductDetailsPage />
    </React.Fragment>
  );
}

export default App;
