// React
import React, { Component } from "react";

// Components
import Auxiliary from "../../../components/HigherOrder/Auxiliary";
import Popup from "../../../components/HigherOrder/Popup";

import Heading from "../../../components/Heading/Heading";
import Icon from "../../../components/Icon/Icon";

// Gallery of images of gameplay
class Gallery extends Component {
  state = {
    gallery: [
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-1--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-1--small--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-3--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-3--small--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-5--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-5--small--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-7--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-7--small--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-2--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-2--small--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-4--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-4--small--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-6--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-6--small--placeholder.png")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
      {
        large: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-8--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
        small: (
          // eslint-disable-next-line
          <img
            src={require("../../../assets/images/forgetmenot/gallery/gallery-8--small--placeholder.jpg")}
            alt="gallery image"
            className="gallery__image"
          />
        ),
      },
    ],
    galleryPage: 1,
    popupImage: null,
  };

  changePopupImage = (direction) => {
    const { gallery, popupImage } = this.state;

    // Find current image index
    const galleryCopy = [...gallery];
    const currentImageIndex = galleryCopy
    // eslint-disable-next-line
      .map((picture, index) => {
        if (picture.large === popupImage) return index;
      })
      .filter((value) => typeof value === "number")[0];

    // Determine next image index
    let nextImageIndex;
    const arrayLimit = gallery.length - 1;

    if (direction === "forwards") {
      nextImageIndex = currentImageIndex + 1;
      if (nextImageIndex > arrayLimit) nextImageIndex = 0;
    } else if (direction === "backwards") {
      nextImageIndex = currentImageIndex - 1;
      if (nextImageIndex < 0) nextImageIndex = arrayLimit;
    }

    // Set next image
    this.setState({
      popupImage: gallery[nextImageIndex].large,
    });
  };

  render() {
    const { gallery, galleryPage, popupImage } = this.state;
    let popup = null;
    const galleryPageClass =
      "gallery__show-gallery-page gallery__show-gallery-page--inactive";
    const galleryPageActiveClass =
      "gallery__show-gallery-page gallery__show-gallery-page--active";

    if (popupImage) {
      popup = (
        <Popup>
          <div className="gallery__popup">
            <div className="gallery__popup-image-container">
              <Icon
                type="x-circle"
                className="icon icon--larger icon--white-blue gallery__icon-close icon--active hover-basic"
                onClick={() => this.setState({ popupImage: null })}
              />
              {popupImage}
            </div>
            <div className="gallery__popup-icon-container">
              <Icon
                type="arrow-left-circle"
                className="icon icon--massive icon--white-blue icon--active"
                onClick={() => this.changePopupImage("backwards")}
              />
              <Icon
                type="arrow-right-circle"
                className="icon icon--massive icon--white-blue icon--active"
                onClick={() => this.changePopupImage("forwards")}
              />
            </div>
          </div>
        </Popup>
      );
    }

    let galleryImages = (
      <div className="gallery__images">
        <div
          className="gallery__image-container"
          onClick={() => this.setState({ popupImage: gallery[0].large })}
        >
          {gallery[0].small}
        </div>
        <div
          className="gallery__image-container"
          onClick={() => this.setState({ popupImage: gallery[1].large })}
        >
          {gallery[1].small}
        </div>
        <div
          className="gallery__image-container"
          onClick={() => this.setState({ popupImage: gallery[2].large })}
        >
          {gallery[2].small}
        </div>
        <div
          className="gallery__image-container"
          onClick={() => this.setState({ popupImage: gallery[3].large })}
        >
          {gallery[3].small}
        </div>
      </div>
    );

    if (galleryPage === 2) {
      galleryImages = (
        <div className="gallery__images">
          <div
            className="gallery__image-container"
            onClick={() => this.setState({ popupImage: gallery[4].large })}
          >
            {gallery[4].small}
          </div>
          <div
            className="gallery__image-container"
            onClick={() => this.setState({ popupImage: gallery[5].large })}
          >
            {gallery[5].small}
          </div>
          <div
            className="gallery__image-container"
            onClick={() => this.setState({ popupImage: gallery[6].large })}
          >
            {gallery[6].small}
          </div>
          <div
            className="gallery__image-container"
            onClick={() => this.setState({ popupImage: gallery[7].large })}
          >
            {gallery[7].small}
          </div>
        </div>
      );
    }

    return (
      <Auxiliary>
        {popup}
        <section className="gallery gallery--forgetmenot" id="gallery">
          <Heading title="Gallery" />
          <div className="gallery__content">
            <div className="gallery__gallery">{galleryImages}</div>
            <div className="gallery__show-gallery-page-container">
              <Icon
                type="arrow-left-circle"
                className="icon icon--larger icon--black-blue icon--active"
                onClick={() =>
                  this.setState((prevState) => ({
                    galleryPage: prevState.galleryPage === 1 ? 2 : 1,
                  }))
                }
              />
              <div
                className={
                  galleryPage === 1 ? galleryPageActiveClass : galleryPageClass
                }
              />
              <div
                className={
                  galleryPage === 2 ? galleryPageActiveClass : galleryPageClass
                }
              />
              <Icon
                type="arrow-right-circle"
                className="icon icon--larger icon--black-blue icon--active"
                onClick={() =>
                  this.setState((prevState) => ({
                    galleryPage: prevState.galleryPage === 1 ? 2 : 1,
                  }))
                }
              />
            </div>
            <img
              src={require("../../../assets/images/flower-divider-3.png")}
              alt="divider"
              className="gallery__divider"
            />
            <div className="gallery__cast-container">
              <img
                src={require("../../../assets/images/forgetmenot/entire-cast--adjusted.png")}
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
