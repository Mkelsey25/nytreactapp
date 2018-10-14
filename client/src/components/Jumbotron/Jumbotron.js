import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
    {children}
  </div>
);

export default Jumbotron;

/*
const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);
*/