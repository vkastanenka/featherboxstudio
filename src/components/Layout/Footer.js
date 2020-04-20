// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "../Icon/Icon";

// Footer for every page
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img
          src={require("../../assets/images/featherbox-logo--blue--smaller.png")}
          alt="logo"
          className="footer__photo"
        />
        <p className="text--larger">Featherbox Studio</p>
      </div>
      <div className="footer__contact">
        <p className="text--larger">staff@featherboxstudio.com</p>
        <Icon type="twitter" className="icon icon--large icon--black-blue" />
      </div>
    </footer>
  );
};

export default Footer;
