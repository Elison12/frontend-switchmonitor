import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./Services/auth";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const Routes = () => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <div>
                        <Suspense fallback={<h1>carregando...</h1>}>
                            <Component {...props} />
                        </Suspense>
                    </div>
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: props.location } }}
                    />
                )
            }
        />
    );

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;