import React from "react";

import "./styles.css";

export const Hero = () => {
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
    <section className="hero-section w-full flex-center-align">
      <div className="wrapper">
        <h5 className="font-1">EXPERIENCE BHUTAN</h5>
        <h1 className="font-1">
          Your trusted partner in the <br /> <span>Land of Happiness.</span>
        </h1>
        <p className="font-2">
          We Take Care of the Journey, You Create the Memories. Premium ground
          services, local expertise, and seamless operations for travel partners
          across Bhutan.
        </p>
        <p className="font-1 built-para">
          Built for Travel agents • Tour operators • Group planners •
          Destination partners
        </p>
        <div className="cta-buttons">
          <button className="font-2" onClick={() => navigate("enquiry")}>
            Enquire Now
          </button>
          <button className="font-2" onClick={() => navigate("services")}>
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
