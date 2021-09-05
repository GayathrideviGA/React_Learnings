import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestionDetail from "./features/QuestionDetail/QuestionDetail";
import Questions from "./features/Questions/questions";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Questions />
        </Route>
        <Route path="/question/:id">
          <QuestionDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;