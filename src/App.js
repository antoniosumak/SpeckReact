import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";

//Komponente
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//Stranice
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/event/:id" component={Event} />
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
