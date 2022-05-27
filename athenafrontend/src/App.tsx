import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/component.css";
import Main from "./components/main/Main";
import { MainProvider } from "./components/MainContext";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Main />
      </MainProvider>
    </div>
  );
}

export default App;
