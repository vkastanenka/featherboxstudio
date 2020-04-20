// React
import React from "react";

// Video header for the game
const Header = () => {
  return (
    <header className="header--game">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source
            src={require("../../../assets/images/forgetmenot/kickstarter-video.mp4")}
            type="video/mp4"
          />
          Your browser is not supported!
        </video>
        <img
          src={require("../../../assets/images/forgetmenot/forgetmenot-logo.png")}
          alt="Game Logo"
          className="header--game__logo"
        />
        <div className="header--game__kickstarter">
          <h3 className="heading--tertiary text--dancing text--bold">Support On</h3>
          <img
            src={require("../../../assets/images/kickstarter-logo--small.png")}
            alt="Kickstarter Logo"
            className="header--game__kickstarter-logo"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
