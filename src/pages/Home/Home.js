// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import Auxiliary from "../../components/HigherOrder/Auxiliary";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Header from './Layout/Header';
import CurrentProjects from './Layout/CurrentProjects';
import Contacts from './Layout/Contacts';

// Home page for the website '/'
const Home = () => {
  return (
    <Auxiliary>
      <Navbar links={["Featherbox", "Projects", "News", "About", "Contacts"]} />
      <Header />
      <main className="main main--home">
        <CurrentProjects />
        <Contacts />
      </main>
      <Footer />
    </Auxiliary>
  );
};

export default Home;
