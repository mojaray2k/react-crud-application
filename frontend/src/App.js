import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./pages/Home";
import Database from "./pages/Database";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App">
        <Router>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/database" component={Database} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
