import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Cart from "./Components/Pages/Cart/Cart";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";

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
          <Route path='/shop'>
            <Shop/>
          </Route>
          <Route path='/cart'>
            <Cart/>         
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
