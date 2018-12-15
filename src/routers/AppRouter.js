import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import InfoPage from "../components/InfoPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/info/:id" component={InfoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
