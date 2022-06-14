import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import "./Hotstar.css";
import Home from "./Home";
import Selective from "./Selective";

function Hotstar() {
  return (
    <>
      <Router>
        <div className="hotstar">
          <Header />
          <Switch>
            <Route path="/:type">
              <Selective />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Hotstar;
