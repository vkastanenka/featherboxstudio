// React
import React from "react";
import { Link } from "react-router-dom";

// Page for links that are not defined
const UndefinedPage = () => {
  return (
    <section className="undefined-page">
      <h1 className="heading--primary">404 Page Not Found!</h1>
      <h2 className="heading--secondary">
        We're sorry, this page does not exist!
      </h2>
      <Link to="/">
        <button className="btn btn--blue btn--translate">Return Home</button>
      </Link>
    </section>
  );
};

export default UndefinedPage;
