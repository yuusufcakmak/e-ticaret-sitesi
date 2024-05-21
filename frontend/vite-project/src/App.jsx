import React from "react";
import HomePage from "./pages/HomePage";
// import ShopPage from "./pages/ShopPage";
import "./App.css";
import { MdContactPage } from "react-icons/md";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <MdContactPage />
    </React.Fragment>
  );
}

export default App;
