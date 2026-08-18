import React from "react";
import "./styles.css";

export const Cards = () => {
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

  const forwardToMail = () => {
    window.location.href = "mailto:info@bhutantrails.in";
  };

  return (
    <section className="cards-section" id="contact">
      <div className="wrapper">
        <div className="card">
          <div className="content">
            <span className="font-1">OUR PROMISE</span>
            <h2 className="font-1">
              We handle the destination.
              <br />
              <strong>You deliver the memories.</strong>
            </h2>
          </div>
          <button className="font-2" onClick={() => navigate("enquiry")}>
            Start a partnership
          </button>
        </div>
        <div className="card">
          <div className="content">
            <span className="font-1">TRAVELLING DIRECT?</span>
            <h2 className="font-1">Planning Bhutan for yourself?</h2>
            <p className="font-2">
              We also welcome a limited number of direct travellers looking for
              thoughtfully planned Bhutan journeys.
            </p>
          </div>
          <button className="font-2" onClick={forwardToMail}>
            Plan my Bhutan trip
          </button>
        </div>
      </div>
    </section>
  );
};
