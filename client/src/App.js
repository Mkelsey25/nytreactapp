import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SavedArticles from "./pages/SavedArticles";
import NothingFound from "./pages/NothingFound";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Homepage} />
        <Route exact path="/saved" component={SavedArticles} />
        <Route component={NothingFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
