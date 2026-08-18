import React from "react";
import "./styles.css";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="wrapper">
        <span className="font-1">ABOUT BHUTAN TRAILS</span>
        <h2 className="font-1">
          Local knowledge.
          <br />
          Professional execution.
        </h2>
        <p className="font-2">
          <strong>Bhutan Trails</strong> is a focused Destination Management
          Company dedicated to making Bhutan easier for travel partners to sell
          and simpler for their guests to experience.
          <br />
          <br />
          Our approach is straightforward: understand your requirement, build
          the right ground arrangement, communicate clearly and stay involved
          until the guest is safely home.
        </p>
        <ul>
          <li>
            <span className="font-2">01</span>
            <h5 className="font-1">Bhutan-focused expertise</h5>
          </li>
          <li>
            <span className="font-2">02</span>
            <h5 className="font-1">B2B-first service model</h5>
          </li>
          <li>
            <span className="font-2">03</span>
            <h5 className="font-1">End-to-end ground handling</h5>
          </li>
          <li>
            <span className="font-2">04</span>
            <h5 className="font-1">Long-term partner mindset</h5>
          </li>
        </ul>
      </div>
    </section>
  );
};
