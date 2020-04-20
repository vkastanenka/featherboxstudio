// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import Heading from "../../../components/Heading/Heading";
import Icon from "../../../components/Icon/Icon";

// Contacts section with a short bio and links to email and social media
const Contacts = () => {
  return (
    <section className="contacts">
      <Heading title="Contacts" />
      <div className="contacts__content">
        <div className="contacts__website">
          <p className="text--large">
            For any general questions, inquiries, or feedback, you can reach out
            to us via Featherbox Studio’s social media pages or our staff email.
            If you want to contact a specific contributor on the team, our
            individual contact details and social media pages can be found below
            the contact form. We appreciate all questions and feedback sent to
            us.
          </p>
          <Icon type="twitter" className="icon icon--larger icon--black-blue" />
          <p className="text--larger">
            Email: staff@featherboxstudio.com
          </p>
        </div>
        <div className="contacts__team-members">
          <h3 className="heading--tertiary">Team Member Contacts</h3>
          <div className="contacts__team-member team-member">
            <div className="team-member__info">
              <div className="team-member__photo-container team-member__photo-container--kat">
                <img
                  src={require("../../../assets/images/contact-icon--rena.jpg")}
                  alt="team member photo"
                  className="team-member__photo"
                />
              </div>
              <h4 className="heading--quaternary text--bold">Kat Pankowska</h4>
              <p className="text--largest">
                Admin, Developer, Artist, Writer
              </p>
              <p className="text--large">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit optio est, at nisi dicta nulla doloribus tempora nam aliquam sint dolorum quidem inventore nesciunt ea eaque cumque assumenda labore natus? Magni, rerum tempore esse incidunt repudiandae a quibusdam repellendus quia, blanditiis eum amet officia ipsum rem non? Accusamus, sunt odit!
              </p>
            </div>
            <div className="team-member__contact">
              <div className="team-member__social-icons">
                <Icon
                  type="twitter"
                  className="icon icon--larger icon--black-blue"
                />
                <Icon
                  type="instagram"
                  className="icon icon--larger icon--black-blue"
                />
              </div>
              <p className="text--larger">
                Email: projectsbykat@gmail.com
              </p>
            </div>
          </div>
          <div className="contacts__team-member team-member">
            <div className="team-member__info">
              <div className="team-member__photo-container team-member__photo-container--victoria">
                <img
                  src={require("../../../assets/images/contact-icon--victoria.jpg")}
                  alt="team member photo"
                  className="team-member__photo"
                />
              </div>
              <h4 className="heading--quaternary text--bold">Victoria</h4>
              <p className="text--largest">
                Admin, Tech, Web Development
              </p>
              <p className="text--large">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, numquam odit. Quisquam dicta corrupti modi eligendi natus amet unde iste neque saepe vitae aliquam ut tempore, perspiciatis quia incidunt voluptatem ratione, nesciunt ducimus beatae blanditiis animi cupiditate veritatis dolore? Libero laborum iure numquam ratione, id quis repellat aperiam. Vitae, hic.
              </p>
            </div>
            <div className="team-member__contact">
              <div className="team-member__social-icons">
                <Icon
                  type="twitter"
                  className="icon icon--larger icon--black-blue"
                />
                <Icon
                  type="instagram"
                  className="icon icon--larger icon--black-blue"
                />
              </div>
              <p className="text--larger">
                Email: vkastanenka@gmail.com
              </p>
            </div>
          </div>
          <div className="contacts__team-member team-member">
            <div className="team-member__info">
              <div className="team-member__photo-container team-member__photo-container--evan">
                <img
                  src={require("../../../assets/images/contact-icon--evan.jpg")}
                  alt="team member photo"
                  className="team-member__photo"
                />
              </div>
              <h4 className="heading--quaternary text--bold">Evan Tran</h4>
              <p className="text--largest">
                Music Producer, Developer, Writer
              </p>
              <p className="text--large">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laborum, natus maxime labore animi perspiciatis expedita, necessitatibus nisi sint similique autem hic dicta, eaque error. Rerum nesciunt at deserunt accusantium, veniam aut, est quaerat velit sunt recusandae sit odio aliquid magnam ab iste tempora quasi, animi labore! Pariatur, doloribus a.</p>
            </div>
            <div className="team-member__contact">
              <div className="team-member__social-icons">
                <Icon
                  type="twitter"
                  className="icon icon--larger icon--black-blue"
                />
                <Icon
                  type="instagram"
                  className="icon icon--larger icon--black-blue"
                />
              </div>
              <p className="text--larger">
                Email: snowylightsmusic@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
