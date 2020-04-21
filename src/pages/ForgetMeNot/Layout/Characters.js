// React
import React from "react";

// Components
import Auxiliary from "../../../components/HigherOrder/Auxiliary";
import Heading from "../../../components/Heading/Heading";

// Character bios
const Characters = () => {
  return (
    <Auxiliary>
      <section className="characters">
        <Heading title="Characters" />
        <div className="characters__content">
          <div className="characters__character">
            <img
              src={require("../../../assets/images/forgetmenot/bio--iris.jpg")}
              alt="Character Bio"
              className="characters__character-profile"
            />
            <div className="characters__name-info">
              <img
                src={require("../../../assets/images/forgetmenot/header--iris.png")}
                alt="Character Name"
                className="characters__name"
              />
              <p className="text--large">
                <span className="text--largest text--bold text--italic">
                  Iris is a post-graduate student{" "}
                </span>
                with ambitions to one day become a programmer. Her enthusiasm to
                get a job in her "field" straight out of college landed her in
                an office cubicle. Her endless hours of Microsoft Excel, cold
                coffee, and repetitive underpaid work isn't the worst, but also
                couldn't be further from what she thought she was getting into.
                She finds alone time comforting, but something always feels like
                it's missing.
              </p>
            </div>
          </div>
          <div className="characters__character">
            <img
              src={require("../../../assets/images/forgetmenot/bio--sage.jpg")}
              alt="Character Bio"
              className="characters__character-profile"
            />
            <div className="characters__name-info">
              <img
                src={require("../../../assets/images/forgetmenot/header--sage.png")}
                alt="Character Name"
                className="characters__name"
              />
              <p className="text--large">
                <span className="text--largest text--bold text--italic">
                  Sage owns her own business,{" "}
                </span>
                a flower shop called: The Flower Pot. With most of her time
                spent alone, she occupies herself reading books, drying tea as a
                hobby, and spilling all of her emotions to her pet lizard,
                Charlie. She quickly learns she may be a bit of a hopeless
                romantic, and sometimes that can cause trouble.
              </p>
            </div>
          </div>
          <div className="characters__character">
            <img
              src={require("../../../assets/images/forgetmenot/bio--blake.jpg")}
              alt="Character Bio"
              className="characters__character-profile"
            />
            <div className="characters__name-info">
              <img
                src={require("../../../assets/images/forgetmenot/header--blake.png")}
                alt="Character Name"
                className="characters__name"
              />
              <p className="text--large">
                <span className="text--largest text--bold text--italic">
                  Blake is the president{" "}
                </span>
                of his school's book club and the school's top role model for
                inclusivity and self expression. His sister, Iris, acts as his
                only parent-guardian as they both lost their parents at a very
                young age. Preoccupied with slowly figure himself out, he tries
                not to get involved in other people's drama, but sometimes it
                can be inevitable.
              </p>
            </div>
          </div>
          <div className="characters__character">
            <img
              src={require("../../../assets/images/forgetmenot/bio--vivian.jpg")}
              alt="Character Bio"
              className="characters__character-profile"
            />
            <div className="characters__name-info">
              <img
                src={require("../../../assets/images/forgetmenot/header--vivian.png")}
                alt="Character Name"
                className="characters__name"
              />
              <p className="text--large">
                <span className="text--largest text--bold text--italic">
                  Vivian, or sometimes known just as "Vi",{" "}
                </span>
                has always shown her interest in flirtatious activity. Her need
                for constant attention and validation of others can make her
                difficult to deal with, especially when she loses her temper.
                Her interest in Iris had faded years ago, but if an opportunity
                were to strike, who's to say she wouldn't take it?
              </p>
            </div>
          </div>
        </div>
      </section>
    </Auxiliary>
  );
};

export default Characters;
