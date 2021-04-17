import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App";
import "./App.scss";
import Add from "./Add";
import Inspect from "./Inspect";
import About from "./About";

const Routing = () => {
    return(
        <Router>
            <div className="wrapper">
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/person/:id" component={Inspect} />
                    <Route path="/add" exact component={Add} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </div>
        </Router>
    );
}

export default Routing;