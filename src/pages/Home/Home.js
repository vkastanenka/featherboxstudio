// React
import React from "react";
// import { Link } from "react-router-dom";

// Components
// import Auxiliary from "../../components/HigherOrder/Auxiliary";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Header from "./Layout/Header";
import CurrentProjects from "./Layout/CurrentProjects";
import Contacts from "./Layout/Contacts";

// Home page for the website '/'
const Home = () => {
  return (
    <div className="page">
      <Navbar
        links={[
          ["Featherbox"],
          ["Projects", "current-projects"],
          ["Contacts", "contacts"],
        ]}
      />
      <Header />
      <main className="main main--home">
        <CurrentProjects />
        <Contacts />
      </main>
      <Footer />
      <img src={require('../../assets/images/forgetmenot/flower.png')} alt="page flower" className="page__flower"/>
    </div>
  );
};

export default Home;
