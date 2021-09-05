import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import CreateTodo from "../components/containers/createtodo";
import EditTodo from "../components/containers/edittodo";
import HomeScreen from "../components/containers/homescreen";
import history from './routehistory';
export default class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/createtodo" component={CreateTodo} />
          <Route path="/edittodo" component={EditTodo} />
        </Switch>
      </Router>
    )
  }
}