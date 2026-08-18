import React from "react";

import "./styles.css";

export const Disclaimer = () => {
  return (
    <section className="disclaimer-section">
      <div className="wrapper">
        <p className="font-2">Bhutan Specialist DMC</p>
        <div className="creds">
          <a className="font-1" href="tel:+918700203218">
            +91 8700203218
          </a>
          <span className="font-1">•</span>
          <a className="font-1" href="mailto:info@bhutantrails.in">
            info@bhutantrails.in
          </a>
        </div>
      </div>
    </section>
  );
};
