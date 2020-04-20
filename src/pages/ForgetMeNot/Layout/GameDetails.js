// React
import React from "react";

// Components
import Auxiliary from "../../../components/HigherOrder/Auxiliary";
import Heading from "../../../components/Heading/Heading";
import Icon from "../../../components/Icon/Icon";

// Game details section where you can buy the game
const GameDetails = () => {
  return (
    <Auxiliary>
      <section className="game-details game-details--forgetmenot">
      <Heading title="Game Details" />
        <div className="game-details__content">
          <div className="game-details__game-description">

            <div className="game-details__description">
              <div className="game-details__content-warning">
                <p className='text--grey'>
                  This Game may contain content not appropriate for all ages, or
                  may not be appropriate for viewing at work: Nudity or Sexual
                  Content, General Mature Content.
                </p>
              </div>
              <img
                src={require("../../../assets/images/header--story.png")}
                alt="Header"
                className="game-details__heading"
              />
              <p className="text--large">
                Iris had never planned for her life to end up so mundane.
                Graduating and immediately taking her first job offer, she soon
                discovers she would be getting underpaid and heavily overworked.
                One day, straying from her auto-piloted route from work to do
                some errands, she discovers a flower shop.
              </p>
              <p className="text--large">
                Sage, the owner of the store, continues to see her odd and out
                of place customer visit more and more often. As days turn into
                weeks, the comfort of after-work visits becomes the norm, until
                one day, they stop.
              </p>
            </div>
            <div className="game-details__description">
              <img
                src={require("../../../assets/images/header--features.png")}
                alt="Header"
                className="game-details__heading"
              />
              <div className="game-details__feature">
                <Icon
                  type="corner-down-right"
                  className="icon icon--large icon--blue"
                />
                <p className="text--large text--italic">
                  Two couples to choose from, one main, one alternative
                </p>
              </div>
              <div className="game-details__feature">
                <Icon
                  type="corner-down-right"
                  className="icon icon--large icon--blue"
                />
                <p className="text--large text--italic">
                  Multiple endings: Good, bad, and alternative
                </p>
              </div>
              <div className="game-details__feature">
                <Icon
                  type="corner-down-right"
                  className="icon icon--large icon--blue"
                />
                <p className="text--large text--italic">
                  Unlock an after story completing the "good" ending for bonus
                  NSFW content
                </p>
              </div>
              <div className="game-details__feature">
                <Icon
                  type="corner-down-right"
                  className="icon icon--large icon--blue"
                />
                <p className="text--large text--italic">
                  Options to toggle NSFW content on and off for age-appropriate
                  reading, without missing out on the main story line!
                </p>
              </div>
              <span className="text--small text--grey">&copy; Featherbox Studio</span>
            </div>
          </div>
          
          <div className="game-details__details">
            <div className="game-details__details--general">
              <p className="text--larger">Game Details</p>
              <div className="game-details__detail">
                <span className="text--small">Genre:</span>
                <span className="text--small text--grey">Visual Novel</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Works on:</span>
                <span className="text--small text--grey">Windows (7, 8, 10), Linux (Ubuntu 16.04, Ubuntu 18.04), Mac OS X (10.11+) TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Release date:</span>
                <span className="text--small text--grey">TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Size:</span>
                <span className="text--small text--grey">TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Players:</span>
                <span className="text--small text--grey">Single-player</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Languages:</span>
                <span className="text--small text--grey">English</span>
                <div className="game-details__detail--languages">
                  <div className="game-details__detail--language">
                    <Icon type='x' className='icon icon--blue icon--large' />
                    <span className="text--small text--grey">audio</span>
                  </div>
                  <div className="game-details__detail--language">
                    <Icon type='check' className='icon icon--blue icon--large' />
                    <span className="text--small">text</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="game-details__details--requirements">
              <div className="game-details__title">
                <p className="text--larger">System Requirements</p>
                <div className="game-details__os">
                  <Icon file='brands' type='windows' className='icon icon--small icon--blue' />
                  <Icon file='brands' type='apple' className='icon icon--small icon--blue' />
                  <Icon file='brands' type='linux' className='icon icon--small icon--blue' />
                </div>
              </div>
              <div className="game-details__detail">
                <span className="text--small">System:</span>
                <span className="text--small text--grey">Windows 7 TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Processor:</span>
                <span className="text--small text--grey">Pentium Ⅲ- 500MHz TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Memory:</span>
                <span className="text--small text--grey">1 GB RAM TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Graphics:</span>
                <span className="text--small text--grey">800x600 Full Color TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Storage:</span>
                <span className="text--small text--grey">1100 MB available space TBD</span>
              </div>
              <div className="game-details__detail">
                <span className="text--small">Sound:</span>
                <span className="text--small text--grey">Direct Sound Compatible TBD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Auxiliary>
  );
};

export default GameDetails;
