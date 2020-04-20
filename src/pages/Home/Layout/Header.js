// React
import React from "react";

// Header with featherbox logo
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Header</div>
      <div className="header__about">
        <h3 className="heading--tertiary">
          Featherbox Studio is a dedicated team of creative minds putting our
          ideas out there!{" "}
        </h3>
        <h4 className="heading--quaternary">
          Team members focus game development, music production, UI/UX design, and 2d illustration.
        </h4>
      </div>
    </header>
  );
};

export default Header;
