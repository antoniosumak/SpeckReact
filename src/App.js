import React, { Component, useContext, useEffect, useState } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
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
  const { isAdmin, isLoggedIn, setIsAdmin, setIsLoggedIn } =
    useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token == null) {
      setIsLoggedIn(false);
    }
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn]);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isAdmin, setIsAdmin]);

  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/event/:id" component={Event} />
        <Route path="/register" component={Register}></Route>
        <Route path="/login" render={() => <Login />}></Route>
        <ProtectedRoute path="/admin" component={Admin} />
      </Main>
      <Footer />
    </>
  );
};

export default App;
