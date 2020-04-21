// React
import React, { Component } from "react";

// Components
import Auxiliary from "../../../components/HigherOrder/Auxiliary";

import Heading from "../../../components/Heading/Heading";
import Icon from "../../../components/Icon/Icon";

// Gallery of images of gameplay
class Gallery extends Component {
  state = {
    galleryPage: 1,
    galleryPages: 2,
  };

  render() {
    let galleryImages = (
      <div className="gallery__images">
        <div className="gallery__image gallery__image--1" />
        <div className="gallery__image gallery__image--2" />
        <div className="gallery__image gallery__image--3" />
        <div className="gallery__image gallery__image--4" />
      </div>
    );

    if (this.state.galleryPage === 2) {
      galleryImages = (
        <div className="gallery__images">
          <div className="gallery__image gallery__image--5" />
          <div className="gallery__image gallery__image--6" />
          <div className="gallery__image gallery__image--7" />
          <div className="gallery__image gallery__image--8" />
        </div>
      );
    }

    return (
      <Auxiliary>
        <section className="gallery gallery--forgetmenot">
        <Heading title="Gallery" />
          <div className="gallery__content">
            <div className="gallery__gallery">
              <Icon
                type="arrow-left-circle"
                className="icon icon--larger icon--black-blue"
              />
              {galleryImages}
              <Icon
                type="arrow-right-circle"
                className="icon icon--larger icon--black-blue"
              />
            </div>
            <div className="gallery__cast-container">
              <img
                src={require("../../../assets/images/forgetmenot/entire-cast.png")}
                alt="Gallery Cast"
                className="gallery__cast"
              />
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}

export default Gallery;
