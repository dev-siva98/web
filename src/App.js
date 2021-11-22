import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
