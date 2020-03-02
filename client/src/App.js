import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

/* COMPONENTS */ 
import Main from './Main/Main.js';
import Login from './Login/Login.js'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default App