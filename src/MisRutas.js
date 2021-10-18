import React from "react";
import { Route, Switch } from "react-router";
import Store from "./pages/Store";
import About from "./pages/About";
import Cart from "./pages/Cart";

export default function MisRutas(){
    return(
        <Switch>
            <Route exact path="/" component={Store} />
            <Route path='/About' component={About} />
            <Route path="/Cart" component={Cart} />
        </Switch>
    );
}