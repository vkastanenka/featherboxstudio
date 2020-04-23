// React
import React from "react";

// Video header for the game
const Header = () => {
  return (
    <header className="header--game">
      <div className="header--game__video-container">
        <video className="header--game__video" autoPlay muted loop>
          <source
            src={require("../../../assets/images/forgetmenot/kickstarter-video.mp4")}
            type="video/mp4"
          />
          Your browser is not supported!
        </video>
        <img
          src={require("../../../assets/images/forgetmenot/forgetmenot-logo--adjusted.png")}
          alt="Game Logo"
          className="header--game__logo"
        />
        <div className="header--game__kickstarter">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={
              "https://www.kickstarter.com/projects/forgetmenotgame/forget-me-not-8?ref=project_link"
            }
          >
            <img
              src={require("../../../assets/images/kickstarter-logo.png")}
              alt="Kickstarter Logo"
              className="header--game__kickstarter-logo"
            />
          </a>
        </div>
      
      </div>
    </header>
  );
};
export default Header;
