import React from "react";

import {
    Route,
    BrowserRouter,
    Switch,
    Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";

const authGuard = (Component) => () => {
    return localStorage.getItem("token") ? (
        <Component/>
    ) : (
        <Redirect to="/login"/>
    );
};
export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}>
            </Route>
            <Route exact path="/dashboard" render={authGuard(Dashboard)}>
            </Route>
            <Route exact path="/" component={Login}>
                {/*<Redirect to="/login"/>*/}
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
}

