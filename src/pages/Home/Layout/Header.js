// React
import React from "react";

// Header with featherbox logo
const Header = () => {
  return (
    <header className="header header--home" id="header">
      <div className="header--home__main">
        <img
          src={require("../../../assets/images/featherbox-logo--blue.png")}
          alt="new"
          className="header--home__logo"
        />
        <h1 className="heading--primary text--light">Featherbox Studio</h1>
      </div>
      <div className="header--home__about">
        <h3 className="heading--tertiary">
          Featherbox Studio is a team of creative minds putting our ideas out
          there!{" "}
        </h3>
        <h4 className="heading--quaternary">
          Team members focus on game development, music production, and 2d
          illustration.
        </h4>
      </div>
    </header>
  );
};

export default Header;
