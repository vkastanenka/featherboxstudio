// React
import React from "react";

// Components
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
          ["Top"],
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
      <img src={require('../../assets/images/forgetmenot/flower--adjusted.png')} alt="page flower" className="page__flower"/>
    </div>
  );
};

export default Home;
