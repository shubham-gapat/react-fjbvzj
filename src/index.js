import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";

import App from "./App";

const preFixPath = prefix => path => `${prefix}${path}`;

const LANDING = "";

const getRegPath = preFixPath(LANDING);

ReactDOM.render(
  <Router>
    <Route path={getRegPath("/")} component={App} />
  </Router>,
  document.getElementById("root")
);
