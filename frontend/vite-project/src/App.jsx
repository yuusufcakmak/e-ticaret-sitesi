import React from "react";
import "./App.css";
import { MdContactPage } from "react-icons/md";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <React.Fragment>
      <AuthPage />
      <MdContactPage />
    </React.Fragment>
  );
}

export default App;
