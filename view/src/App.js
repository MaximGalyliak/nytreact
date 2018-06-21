import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SavedPage from "./components/SavedPage/SavedPage";
import MenuBar from "./components/MenuBar";
const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <MenuBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/saved" component={SavedPage} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
