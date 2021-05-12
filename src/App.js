import React, { Component, useEffect, useState } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

//Komponente
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

//Stranice
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
  const [isAdmin, setIsAdmin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token == null) {
      setIsLoggedIn("false");
    }
    if (token) {
      setIsLoggedIn("true");
    } else {
      setIsLoggedIn("false");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin("true");
    } else {
      setIsAdmin("false");
    }
  }, [isAdmin]);

  return (
    <>
      <Header userLoggedIn={isLoggedIn} userIsAdmin={isAdmin} />
      <Main>
        <Route path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/event/:id" component={Event} />
        <Route path="/register" component={Register}></Route>
        <Route
          path="/login"
          render={() => (
            <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
          )}
        ></Route>
        <Router>
          <ProtectedRoute path="/admin" component={Admin} isAdmin={isAdmin} />
        </Router>
      </Main>
      <Footer />
    </>
  );
};

export default App;
