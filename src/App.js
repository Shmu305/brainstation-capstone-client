import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";

function App() {
   return (
      <div className="app">
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact>
                      <Home />
                  </Route>
                  {/* <Route path="/login">
                      <Login />
                  </Route>
                  <Route path="/signup">
                      <Signup />
                  </Route> */}
              </Switch>
          </BrowserRouter>
      </div>
  );  
}

export default App;
