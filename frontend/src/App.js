import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import SignUp from "./component/SignUp";
import Homepage from "./component/Homepage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/signup" component={() => <SignUp />} />
          <Route path="/Homepage" component={() => <Homepage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
