import "./App.css";
import React from "react";
import SearchBar from "./component/search/SearchBar";
import Description from "./component/content/Description";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchBar} />
          <Route path="/:id" component={Description} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
