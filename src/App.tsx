import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateUser } from "./frontend/src/pages/createUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateUser />
      </header>
    </div>
  );
}

export default App;
