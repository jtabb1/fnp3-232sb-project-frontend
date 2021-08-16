import "./App.css";
import CategoryContainer from "./components/CategoryContainer";
import CategoryDetails from "./components/CategoryDetails";
import JoinTable from "./components/JoinTable";
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
          <Route exact path="/joins">
            <JoinTable />
          </Route>
          <Route exact path="/categories">
            <CategoryContainer />
          </Route>
          <Route path="/categories/:id">
            <CategoryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
