import React from "react";
import PartnersBg from "../../assets/images/partners.webp";
import Tick from "../../assets/icons/Tick";
import "./styles.css";

export const Partners = () => {
  const navigate = (sectionId) => {
    const section = document.getElementById(sectionId);

    const offset = window.innerWidth < 768 ? 0 : 93;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="partners-section" id="partners">
      <div className="wrapper">
        <div className="image">
          <img src={PartnersBg} alt="Partners" />
        </div>
        <div className="content">
          <span className="font-1">BUILT FOR B2B PARTNERS</span>
          <h2 className="font-1">
            A destination partner you can actually rely on.
          </h2>
          <p className="font-2">
            Your reputation travels with every guest you send. That’s why we
            take care of every detail behind the itinerary—from trusted
            suppliers and responsive coordination to accurate information and
            seamless execution.
          </p>
          <ul>
            <li>
              <Tick />
              <p className="font-2">Fast quotation & itinerary support</p>
            </li>
            <li>
              <Tick />
              <p className="font-2">
                Competitive B2B pricing with transparent inclusions
              </p>
            </li>
            <li>
              <Tick />
              <p className="font-2">
                Customised solutions for your requirements
              </p>
            </li>
            <li>
              <Tick />
              <p className="font-2">Strong local network & trusted suppliers</p>
            </li>
            <li>
              <Tick />
              <p className="font-2">
                Professional guides and destination experts
              </p>
            </li>
            <li>
              <Tick />
              <p className="font-2">24/7 on-ground assistance</p>
            </li>
          </ul>
          <button className="font-2" onClick={() => navigate("enquiry")}>
            Let's work together ➜
          </button>
        </div>
      </div>
    </section>
  );
};
