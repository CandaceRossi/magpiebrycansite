// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
