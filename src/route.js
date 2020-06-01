import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/Home";

const createRoutes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/home">
            <Home />
        </Route>
    </Switch>
);

export default createRoutes;
