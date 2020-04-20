// React
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Icon from "../Icon/Icon";

// Navbar for every page
const Navbar = (props) => {
  const links = props.links.map((link) => {
    return (
      <li key={link} className="navbar__link text--larger">
        {link}
      </li>
    );
  });

  return (
    <nav className="navbar">
      <div className="navbar__home">
        <img
          src={require("../../assets/images/featherbox-logo--blue--smaller.png")}
          alt="logo"
          className="navbar__logo"
        />
        <p className="text--larger">Home</p>
      </div>
      <ul className="navbar__links">
        {links}
        <li className="navbar__link">
          <Icon type="twitter" className="icon icon--larger icon--white-blue" />
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Navbar;
