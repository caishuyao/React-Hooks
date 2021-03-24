// main entery of the web application

import React, { useEffect, useState, useRef } from "react";

import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

const App = () => {
  return (
    <div className="App">
      <Hello />
    </div>
  );
};

export default App;
