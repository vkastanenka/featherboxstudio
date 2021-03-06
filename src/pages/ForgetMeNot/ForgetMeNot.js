// React
import React from "react";

// Components
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Header from "./Layout/Header";
import Gallery from "./Layout/Gallery";
import GameDetails from "./Layout/GameDetails";
import Characters from "./Layout/Characters";

// Page for the game Forget Me Not '/forgetmenot'
const ForgetMeNot = () => {
  return (
    <div className="page">
      <Navbar
        links={[
          ["Top"],
          ["Gallery", "gallery"],
          ["Details", "details"],
          ["Characters", "characters"],
        ]}
      />
      <Header />
      <main className="main main--game">
        <Gallery />
        <GameDetails />
        <Characters />
      </main>
      <Footer />
      <img src={require('../../assets/images/forgetmenot/flower--adjusted.png')} alt="page flower" className="page__flower"/>
    </div>
  );
};

export default ForgetMeNot;
