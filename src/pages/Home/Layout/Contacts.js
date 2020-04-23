// React
import React from "react";

// Components
import Heading from "../../../components/Heading/Heading";
import Icon from "../../../components/Icon/Icon";

// Contacts section with a short bio and links to email and social media
const Contacts = () => {
  return (
    <section className="contacts" id='contacts'>
      <Heading title="Contacts" />
      <div className="contacts__content">
        <div className="contacts__website">
          <p className="text--large">
            <span className="text--largest text--bold text--italic">
              For any general questions, inquiries, or feedback,{" "}
            </span>{" "}
            you can reach out to us via Featherbox Studio’s social media pages
            or our staff email. If you want to contact a specific contributor on
            the team, our individual contact details and social media pages can
            be found below the contact form. We appreciate all questions and
            feedback sent to us.
          </p>
          <div className="contacts__staff-contact">
            <p className="text--larger">Email: staff@featherboxstudio.com</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://twitter.com/Featherboxgames"}
            >
              <Icon
                type="twitter"
                className="icon icon--larger icon--black-dark-blue  icon--bg-blue icon--active"
              />
            </a>
          </div>
        </div>
        <div className="contacts__team-members">
          <h3 className="heading--tertiary">Team Member Contacts</h3>
          <img
            src={require("../../../assets/images/flower-divider-1.png")}
            alt="Divider"
            className="contacts__heading-divider"
          />

          <div className="contacts__team-member team-member">
            <div className="team-member__info">
              <div className="team-member__photo-container team-member__photo-container--kat">
                {/* eslint-disable-next-line */}
                <img
                  src={require("../../../assets/images/contact-icon--rena--adjusted.jpg")}
                  alt="team member photo"
                  className="team-member__photo"
                />
              </div>
              <div className="team-member__identity">
                <h4 className="heading--quaternary text--bold">
                  Kat Pankowska
                </h4>
                <p className="text--largest">
                  Admin, Developer, Artist, Writer
                </p>
              </div>
              <p className="text--large">
                Hi, I'm Kat. I'm an indie game developer and illustrator! I'm constantly pushing myself to learn more about what I'm good at, and also putting myself out of my comfort zone when I need to. I hope to work at a game development company someday.
              </p>
            </div>

            <div className="team-member__contact">
              <div className="team-member__social-icons">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://twitter.com/Hexaclover"}
                >
                  <Icon
                    type="twitter"
                    className="icon icon--larger icon--black-dark-blue icon--bg-blue icon--active"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://www.instagram.com/hexaclover/"}
                >
                  <Icon
                    type="instagram"
                    className="icon icon--larger icon--black-secondary icon--bg-yellow icon--active"
                  />
                </a>
              </div>
              <p className="text--larger">Email: projectsbykat@gmail.com</p>
            </div>
          </div>
          <div className="contacts__team-member team-member">
            <div className="team-member__info">
              <div className="team-member__photo-container team-member__photo-container--victoria">
                {/* eslint-disable-next-line */}
                <img
                  src={require("../../../assets/images/contact-icon--victoria--adjusted.png")}
                  alt="team member photo"
                  className="team-member__photo"
                />
              </div>
              <div className="team-member__identity">
                <h4 className="heading--quaternary text--bold">
                  Victoria Kastanenka
                </h4>
                <p className="text--largest">Admin, Tech, Web Development</p>
              </div>
              <p className="text--large">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                numquam odit. Quisquam dicta corrupti modi eligendi natus amet
                unde iste neque saepe vitae aliquam ut tempore, perspiciatis
                quia incidunt voluptatem ratione, nesciunt ducimus beatae
                blanditiis animi cupiditate veritatis dolore? Libero laborum
                iure numquam ratione, id quis repellat aperiam. Vitae, hic.
              </p>
            </div>
            <div className="team-member__contact">
              <div className="team-member__social-icons">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://twitter.com/vkastanenka"}
                >
                  <Icon
                    type="twitter"
                    className="icon icon--larger icon--black-dark-blue icon--bg-blue icon--active"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://www.instagram.com/vkastanenka/"}
                >
                  <Icon
                    type="instagram"
                    className="icon icon--larger icon--black-secondary icon--bg-yellow icon--active"
                  />
                </a>
              </div>
              <p className="text--larger">Email: vkastanenka@gmail.com</p>
            </div>
          </div>
          <div className="contacts__team-member team-member">
            <div className="team-member__info">
              <div className="team-member__photo-container team-member__photo-container--evan">
                {/* eslint-disable-next-line */}
                <img
                  src={require("../../../assets/images/contact-icon--evan--adjusted.jpg")}
                  alt="team member photo"
                  className="team-member__photo"
                />
              </div>
              <div className="team-member__identity">
                <h4 className="heading--quaternary text--bold">Robin Lights</h4>
                <p className="text--largest">
                  Music Producer, Developer, Writer
                </p>
              </div>
              <p className="text--large">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam laborum, natus maxime labore animi perspiciatis
                expedita, necessitatibus nisi sint similique autem hic dicta,
                eaque error. Rerum nesciunt at deserunt accusantium, veniam aut,
                est quaerat velit sunt recusandae sit odio aliquid magnam ab
                iste tempora quasi, animi labore! Pariatur, doloribus a.
              </p>
            </div>
            <div className="team-member__contact">
              <div className="team-member__social-icons">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://twitter.com/SnowLightedOwl"}
                >
                  <Icon
                    type="twitter"
                    className="icon icon--larger icon--black-dark-blue icon--bg-blue icon--active"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://instagram.com/snowylightsmusic"}
                >
                  <Icon
                    type="instagram"
                    className="icon icon--larger icon--black-secondary icon--bg-yellow icon--active"
                  />
                </a>
              </div>
              <p className="text--larger">Email: snowylightsmusic@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
