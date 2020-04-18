// React
import React from "react";
import PropTypes from "prop-types";

// SVG
import sprite from "../../assets/images/sprite.svg";

// SVG icons
const Icon = (props) => {
  return (
    <svg className={props.className} onClick={props.onClick}>
      <use href={`${sprite}#icon-${props.type}`} />
    </svg>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default Icon;
