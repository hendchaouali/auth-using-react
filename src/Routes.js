import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}>
            </Route>
            <Route exact path="/dashboard" component={Dashboard}>
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
