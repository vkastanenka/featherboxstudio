// React
import React from "react";
import PropTypes from "prop-types";

// SVG
import sprite from "../../assets/images/sprite.svg";
import spriteBrands from "../../assets/images/sprite-brands.svg";

// SVG icons
const Icon = (props) => {
  let svgIcon = (
    <svg className={props.className} onClick={props.onClick}>
      <use href={`${sprite}#icon-${props.type}`} />
    </svg>
  );

  if (props.file && props.file === "brands") {
    svgIcon = (
      <svg className={props.className} onClick={props.onClick}>
        <use href={`${spriteBrands}#icon-${props.type}`} />
      </svg>
    );
  }

  return svgIcon;
};

Icon.propTypes = {
  file: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Icon;
