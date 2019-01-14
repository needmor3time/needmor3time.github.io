import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Knives from "./pages/Knives";
import User from "./pages/User";
import Login from "./pages/Login";
import File from "./pages/File";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/user" component={User} />
        <Route exact path="/knives" component={Knives} />
        <Route exact path="/file" component={File} />
      </Switch>
      
    </div>
  </Router>
);

export default App;

