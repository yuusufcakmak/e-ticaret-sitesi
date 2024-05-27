import React from "react";
import HomePage from "./pages/HomePage";
// import ShopPage from "./pages/ShopPage";
import "./App.css";
import { MdContactPage } from "react-icons/md";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <AuthPage />

      <MdContactPage />
    </React.Fragment>
  );
}

export default App;
