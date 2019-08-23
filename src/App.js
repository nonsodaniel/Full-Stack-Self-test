import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Carousel from './components/layouts/Carousel'
import Benefits from "./components/layouts/Benefits";
import Socials from "./components/layouts/Socials";
import Footer from "./components/layouts/Footer";
import MakeRent from "./components/layouts/MakeRent";
import HowWork from "./components/layouts/HowWork";
import Achievements from "./components/layouts/Achievements";
import Sponsors from "./components/layouts/Sponsors";
import PreLaunch from "./components/layouts/PreLaunch";
import Map from "./components/layouts/Map";
import Unique from "./components/layouts/Unique";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app wrapper" id="wrapper" >
          <Navbar />
          <Carousel />
          <MakeRent />
          <Unique />
          <HowWork />

          <Achievements />
          <Benefits />
          <Socials />
          <Sponsors />
          <PreLaunch />
          <Map />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
