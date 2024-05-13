import HomePage from "./pages/HomePage";
import React from "react";
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
