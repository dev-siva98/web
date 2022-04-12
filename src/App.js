import React, { useEffect, useState } from "react";
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Orders from "./Components/Pages/Orders/Orders";
import Shop from "./Components/Pages/Shop/Shop";
import UserLogin from "./Components/Pages/UserLogin/UserLogin";
import AddProduct from './Components/Admin/AddProduct'
import axios from "./axios";
import { AppContext, LoadingContext } from './AppContext'
import CartProvider from "./Components/Cart/CartProvider";
import Loader from "./Components/Loader/Loader";
import Cart from "./Components/Pages/Cart/Cart";

function App() {

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState()
  const loader = { loading, setLoading }
  const login = { loggedIn, setLoggedIn }

  useEffect(() => {
    console.log('auth')
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
      setLoggedIn(false)
      setUser(null)
      console.log(err);
    })
  },[loggedIn])  
    
  return (
    <div className="app">
      {
        loading ? <Loader /> : null}
      <Router>
        <AppContext.Provider value={login}>
          <LoadingContext.Provider value={loader}>
            <CartProvider>
              <Navbar user={user} />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<UserLogin />} />
                <Route path='/about' element={<About />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/admin' element={<AddProduct />} />
              </Routes>
              <Footer />
            </CartProvider>
          </LoadingContext.Provider>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
