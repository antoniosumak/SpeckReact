import React, { Component} from "react";
import {Route} from "react-router-dom";
import "./App.scss";

//Komponente
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//Stranice 
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/event/:id" component={Event}/>
      </Main>
      <Footer/>
      </>
    )
  }
}

export default App;
