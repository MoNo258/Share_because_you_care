import React, {Component, useEffect, useState} from 'react';
import {createBrowserHistory} from "history";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../src/components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import {auth} from "./firebase/firebase.config";
import Form from "./components/Form";

const history = createBrowserHistory();

// due to distinguish between private and public routes this project has created `higher-order components` (HOCs) for both types of routes
// <PrivateRoute> HOC:
const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={
                props => authenticated === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
            }

        />
    )
};
// <PublicRoute> HOC:
const PublicRoute = ({component: Component, authenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={
                props => authenticated === false
                    ? <Component {...props} />
                    : <Redirect to='/oddaj-rzeczy'/>
            }
        />
    )
};

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (user) {
                setAuthenticated(true);
                setLoading(false);
            } else {
                setAuthenticated(false);
                setLoading(false);
            }
        });
    });


    return loading === true
        ?
        (<div>
            Loading ...
        </div>)
        :
        (
            <>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <PrivateRoute path='/oddaj-rzeczy' authenticated={authenticated} component={Form} />
                        <PublicRoute path='/logowanie' authenticated={authenticated} component={Login}/>
                        <PublicRoute path='/rejestracja' authenticated={authenticated} component={Register}/>
                        <PublicRoute path='/wylogowano' authenticated={authenticated} component={Logout}/>
                    </Switch>
                </Router>
            </>
        );
}

export default App;
