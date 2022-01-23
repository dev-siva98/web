import React, { useState } from "react";
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
import axios from "./axios";
import { AppContext } from './AppContext'
import { StateProvider } from "./Components/Cart/StateProvider";
import reducer, { initialState } from "./Components/Cart/reducer";

function App() {

  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState()
  const login = { loggedIn, setLoggedIn }

  axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
    .then(res => {
      if (res.data.error) {
        setLoggedIn(false)
        setUser(null)
      } else {
        setLoggedIn(true)
        setUser(res.data.name)
      }
    })
    .catch(err => {
      console.log(err);
    })

  return (
    <div className="app">
      <Router>
        <AppContext.Provider value={login}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Navbar user={user} />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/login'>
                <UserLogin />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/shop'>
                <Shop />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
              <Route path='/orders'>
                <Orders />
              </Route>
              <Route path='/admin'>
                <AddProduct />
              </Route>
            </Switch>
            <Footer />
          </StateProvider>
        </AppContext.Provider>
      </Router>

    </div >
  );
}

export default App;
