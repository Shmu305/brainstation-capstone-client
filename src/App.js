import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Mangos from "./pages/Mongos/Mangos";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateListing from "./pages/CreateListingPage/CreateListing";
import EditListing from "./pages/EditListingPage/EditListing";

function App() {
   return (
      <div className="app">
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact>
                      <Home />
                  </Route>
                  <Route path='/signin'>
                    <LoginPage/>
                  </Route>
                  <Route path="/mangos">
                      <Mangos/>
                  </Route>
                  <Route path="/listing/:id">
                      <ItemDetail/>
                  </Route>
                  <Route path="/createlisting">
                      <CreateListing/>
                  </Route>
                  <Route path="/editlisting">
                      <EditListing/>
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
  );  
}

export default App;
