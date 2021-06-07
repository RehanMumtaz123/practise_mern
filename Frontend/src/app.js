import React from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/login";
import Signup from "./components/signup";
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
