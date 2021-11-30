import React from "react";
import './App.css'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Cart from "./Components/Pages/Cart/Cart";
import Home from "./Components/Pages/Home/Home";
import Orders from "./Components/Pages/Orders/Orders";
import Shop from "./Components/Pages/Shop/Shop";
import UserLogin from "./Components/Pages/UserLogin/UserLogin";
import AddProduct from './Components/Admin/AddProduct'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/login'>
            <UserLogin />
          </Route>
          <Route  path='/about'>
            <About />
          </Route>
          <Route  path='/shop'>
            <Shop />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route  path='/orders'>
            <Orders />
          </Route>
          <Route  path='/admin'>
            <AddProduct/>
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
