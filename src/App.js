import "./App.css";
import GymContainer from "./components/GymContainer";
import GymDetails from "./components/GymDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background" />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/gyms">
            <GymContainer />
          </Route>
          <Route path="/gyms/:id">
            <GymDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
