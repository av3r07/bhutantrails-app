import React from "react";
import logo from "../../assets/images/logo.png";

import "./styles.css";

export const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="wrapper">
          <div className="branding">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
            <p className="font-2">Journeys that stay with you.</p>
          </div>
          <div className="info">
            <h5 className="font-1">For Partners</h5>
            <button className="font-2">Request B2B Rates</button>
            <button className="font-2">Our Services</button>
            <button className="font-2">Bhutan Destinations</button>
          </div>
          <div className="info">
            <h5 className="font-1">Contact</h5>
            <a className="font-2" href="tel:+918700203218">
              +91 8700203218
            </a>
            <a className="font-2" href="mailto:info@bhutantrails.in">
              info@bhutantrails.in
            </a>
            <span className="font-2">Samteling Zur Lam, Thimphu</span>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="wrapper">
          <p className="font-2">© 2026 Bhutan Trails. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};
