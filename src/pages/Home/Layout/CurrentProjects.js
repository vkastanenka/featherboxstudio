// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import Heading from "../../../components/Heading/Heading";

// Section detailing the current projects being worked ou by the studio
const CurrentProjects = () => {
  return (
    <section className="current-projects" id="current-projects">
      <Heading title="Current Projects" />
      <div className="current-projects__content">
        <div className="current-projects__information">
          <img
            src={require("../../../assets/images/forgetmenot/forgetmenot-logo--adjusted.png")}
            alt="Game Logo"
            className="current-projects__image"
          />
          <h2 className="current-projects__tagline heading--secondary text--dancing text--bold">
            Can forgotten love still bloom?
          </h2>
          <p className="text--large">
            Iris had never planned for her life to end up so mundane. Graduating
            and immediately taking her first job offer, she soon discovers she
            would be getting underpaid and heavily overworked. One day, straying
            from her auto-piloted route from work to do some errands, she
            discovers a flower shop...
          </p>
          <Link to="/forgetmenot">
            <button className="text--large btn btn--blue btn--translate">
              Learn more!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
