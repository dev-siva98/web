import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
