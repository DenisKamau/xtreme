import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Home/Homepage/Homepage";
import NaviHeader from "./Components/NaviHeader/NaviHeader";
import Shop from "./Components/Shop/ShopHomePage/Shop";
import Footer from "./Components/Home/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NaviHeader />
        <Switch>
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
