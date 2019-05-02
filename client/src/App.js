import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import VehicleDetails from "./components/VehicleDetails";
import HomeContainer from "./containers/HomeContainer";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/vehicles/:id" component={VehicleDetails} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
