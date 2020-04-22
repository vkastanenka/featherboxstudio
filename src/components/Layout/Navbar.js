// React
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types";

// Components
import Icon from "../Icon/Icon";

// Navbar for every page
class Navbar extends Component {
  state = {
    projectsHover: false,
  };

  render() {
    const links = this.props.links.map((link) => {
      let navLink;
      let projectsDropdown = null;

      if (link.length === 1) {
        navLink = (
          <li
            key={link[0]}
            className="navbar__link text--larger"
            onClick={scroll.scrollToTop}
          >
            {link[0]}
          </li>
        );
      } else if (link[0] === "Projects") {
        if (this.state.projectsHover) {
          projectsDropdown = (
            <ul className="navbar__dropdown">
              <li className="navbar__dropdown-link text--default text--grey">
                <ScrollLink
                  to="current-projects"
                  spy={true}
                  smooth={true}
                  offset={-93}
                  duration={500}
                >
                  Current Projects
                </ScrollLink>
              </li>
              <li className="navbar__dropdown-link text--default text--grey">
                <Link to="/forgetmenot">Forget Me Not</Link>
                <img
                  src={require("../../assets/images/forgetmenot/flower.png")}
                  alt="flower"
                  className="navbar__dropdown-image"
                />
              </li>
            </ul>
          );
        }

        navLink = (
          <li
            key={link[0]}
            className="navbar__link navbar__link--projects text--larger"
            onMouseEnter={() => this.setState({ projectsHover: true })}
            onMouseLeave={() => this.setState({ projectsHover: false })}
          >
            <p>{link[0]}</p>
            {projectsDropdown}
          </li>
        );
      } else if (link[0] === "Kickstarter") {
        navLink = (
          <li key={link[0]} className="navbar__link text--larger">
            <a
              className='text--white-dark-blue'
              rel="noopener noreferrer"
              target="_blank"
              href={link[1]}
            >
              {link[0]}
            </a>
          </li>
        );
      } else {
        navLink = (
          <li key={link[0]} className="navbar__link text--larger">
            <ScrollLink
              className="text--white-dark-blue"
              to={link[1]}
              spy={true}
              smooth={true}
              offset={-93}
              duration={500}
            >
              {link[0]}
            </ScrollLink>
          </li>
        );
      }

      return navLink;
    });

    return (
      <nav className="navbar">
        <div className="navbar__home">
          <img
            src={require("../../assets/images/featherbox-logo--blue--smaller.png")}
            alt="logo"
            className="navbar__logo"
          />
          <Link to="/" className="text--larger navbar__link">
            Home
          </Link>
        </div>
        <ul className="navbar__links">
          {links}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"https://twitter.com/Featherboxgames"}
          >
            <Icon
              type="twitter"
              className="icon icon--larger icon--white-dark-blue icon--active icon--bg-white"
            />
          </a>
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Navbar;
