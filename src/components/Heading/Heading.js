// React
import React from "react";
import PropTypes from "prop-types";

// Heading for every section
const Heading = (props) => {
  return (
    <div className="heading">
      <div className="heading__flowers heading__flowers--left" />
      <h2 className="heading__text heading--secondary">{props.title}</h2>
      <div className="heading__flowers heading__flowers--right" />
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
