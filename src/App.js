import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Home/Homepage/Homepage";
import NaviHeader from "./Components/NaviHeader/NaviHeader";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NaviHeader />
        <Switch>
          <Route path="/shop">
            <h1>Shop</h1>
          </Route>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
