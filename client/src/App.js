import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

/* COMPONENTS */ 
import Main from "./Main/Main.js";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default App