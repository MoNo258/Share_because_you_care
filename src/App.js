import React  from 'react';
// import logo from './logo.svg';
import {createBrowserHistory} from "history";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
// import {Redirect} from "react-router-dom";
import Home from "../src/components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const history = createBrowserHistory();

function App() {
  return (
      <>
          <Router history={history}>
              <Switch>
                  <Route exact path='/' component={Home} />
                  {/*<Route path='/oddaj-rzeczy' component={Form} />*/}
                  <Route path='/logowanie' component={Login} />
                  <Route path='/rejestracja' component={Register} />
                  {/*<Route path='/wylogowano' component={Logout} />*/}
                  {/*<Redirect from="/" to="/"/>*/}
              </Switch>
          </Router>
      </>
  );
}

export default App;
