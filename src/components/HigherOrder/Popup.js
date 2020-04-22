// React
import React from "react";

// HOC to create dark blurred overlay over main page => Meant to display some content on top
const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup__content">
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
