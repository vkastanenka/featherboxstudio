// React
import React from "react";
import { Link } from 'react-router-dom';

// Components
import Auxiliary from "../../components/HigherOrder/Auxiliary";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Header from './Layout/Header';
import Gallery from './Layout/Gallery';
import GameDetails from './Layout/GameDetails';
import Characters from './Layout/Characters';

// Page for the game Forget Me Not '/forgetmenot'
const ForgetMeNot = () => {
  return (
    <Auxiliary>
      <Navbar links={["Forget Me Not", "Gallery", "Kickstarter", "Details", "Characters"]} />
      <Header />
      <main className="main main--game">
        <Gallery />
        <GameDetails />
        <Characters />
      </main>
      <Footer />
    </Auxiliary>
  );
};

export default ForgetMeNot;
