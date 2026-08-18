import React from "react";

import Handle1 from "../../assets/images/handle1.webp";
import Handle2 from "../../assets/images/handle2.webp";
import Handle3 from "../../assets/images/handle3.webp";
import Handle4 from "../../assets/images/handle4.webp";
import Handle5 from "../../assets/images/handle5.webp";
import Handle6 from "../../assets/images/handle6.webp";

import "./styles.css";

export const Handle = () => {
  return (
    <section className="handle-section" id="services">
      <div className="wrapper">
        <span className="font-1">WHAT WE DO</span>
        <h2 className="font-1">Everything your Bhutan file needs.</h2>
        <p className="font-2">
          From the first quotation to the guest’s departure, we manage every
          destination detail, allowing your team to focus on delivering
          exceptional client experiences.
        </p>
        <ul>
          <li>
            <img src={Handle6} alt="Accommodation" />
            <h5 className="font-1">Accommodation</h5>
            <p className="font-2">
              Hotels, resorts, boutique stays and carefully selected properties
              across Bhutan.
            </p>
          </li>
          <li>
            <img src={Handle5} alt="Transportation" />
            <h5 className="font-1">Transportation</h5>
            <p className="font-2">
              Comfortable vehicles, airport transfers, intercity movement and
              reliable logistics.
            </p>
          </li>
          <li>
            <img src={Handle4} alt="Tours & Experiences" />
            <h5 className="font-1">Tours & Experiences</h5>
            <p className="font-2">
              Curated itineraries, cultural experiences, sightseeing and offbeat
              Bhutan.
            </p>
          </li>
          <li>
            <img src={Handle2} alt="Permits & Documentation" />
            <h5 className="font-1">Permits & Documentation</h5>
            <p className="font-2">
              Destination formalities and permit coordination handled with care.
            </p>
          </li>
          <li>
            <img src={Handle1} alt="Groups & MICE" />
            <h5 className="font-1">Groups & MICE</h5>
            <p className="font-2">
              Group movements, conferences, incentives, special events and
              customised programs.
            </p>
          </li>
          <li>
            <img src={Handle3} alt="Transportation" />
            <h5 className="font-1">On-Ground Support</h5>
            <p className="font-2">
              Real-time assistance for your team and guests throughout the
              journey.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
