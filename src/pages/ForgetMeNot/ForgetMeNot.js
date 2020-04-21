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
          ["Forget Me Not"],
          ["Kickstarter"],
          ["Gallery"],
          ["Details"],
          ["Characters"],
        ]}
      />
      <Header />
      <main className="main main--game">
        <Gallery />
        <GameDetails />
        <Characters />
      </main>
      <Footer />
    </div>
  );
};

export default ForgetMeNot;
