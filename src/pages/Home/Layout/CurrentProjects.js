// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import Heading from "../../../components/Heading/Heading";

// Section detailing the current projects being worked ou by the studio
const CurrentProjects = (props) => {
  return (
    <section className="current-projects">
      <Heading title="Current Projects" />
      <div className="current-projects__content">
        <div className="current-projects__information">
          <img
            src={require("../../../assets/images/forgetmenot/forgetmenot-logo.png")}
            alt="Game Logo"
            className="current-projects__image"
          />
          <h2 className="heading--secondary text--dancing text--bold">
            Can you love those who have forgotten you?
          </h2>
          <p className="text--large">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            dolor doloremque ratione odit quidem culpa? Repudiandae, eaque
            obcaecati quae sit quis dolore beatae nam impedit iste aliquid
            consequuntur nihil cum!
          </p>
          <button>Learn more!</button>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;