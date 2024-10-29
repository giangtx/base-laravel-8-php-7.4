import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Example from "../components/Example";
import Home from "./Home";
import NotFound from "./404";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/example' component={Example}/>
        <Route path='/404' component={NotFound}/>

        <Route path="/*">
          <Redirect to='/404'/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;