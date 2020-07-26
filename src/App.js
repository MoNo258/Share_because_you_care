import React  from 'react';
import {createBrowserHistory} from "history";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../src/components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout"

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
                  <Route path='/wylogowano' component={Logout} />
              </Switch>
          </Router>
      </>
  );
}

export default App;
