import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./FirstPage";
import Game from "./Game";
import GameSettings from "./GameSettings";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/gamesettings" component={GameSettings} />
      </Switch>
    </Router>
  );
}
