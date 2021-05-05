// Boilerplate
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Custom views
import HomePage from "./views/HomePage.js";
import AboutPage from "./views/AboutPage.js";
// Styling
import "./styles/navbar.css";
import "./styles/root.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="navbar">
            <Link to="/" className="nav-logo">
              D3 Almanac
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Router>
      </div>
    );
  }
}

export default App;
