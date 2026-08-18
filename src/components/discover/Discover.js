import React from "react";

import paro from "../../assets/images/paro.webp";
import phuentsholing from "../../assets/images/phuentsholing.webp";
import thimphu from "../../assets/images/thimphu.webp";
import Punakha from "../../assets/images/Punakha.webp";

import "./styles.css";

export const Discover = () => {
  return (
    <section className="discover-section" id="discover">
      <div className="wrapper">
        <span className="font-1">DISCOVER BHUTAN</span>
        <h2 className="font-1">
          One destination. Endless ways to experience it.
        </h2>
        <p className="font-2">
          We build Bhutan programs around the traveller — from classic
          highlights to slower, deeper and more adventurous journeys.
        </p>
        <ul>
          <li>
            <div className="image">
              <img src={phuentsholing} alt="phuentsholing" />
            </div>
            <div className="content">
              <span className="font-2">Gateway to Bhutan</span>
              <h3 className="font-1">Phuentsholing</h3>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={thimphu} alt="Thimphu" />
            </div>
            <div className="content">
              <span className="font-2">Capital & culture</span>
              <h3 className="font-1">Thimphu</h3>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={Punakha} alt="Punakha" />
            </div>
            <div className="content">
              <span className="font-2">Valleys & Heritage</span>
              <h3 className="font-1">Punakha</h3>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={paro} alt="Paro" />
            </div>
            <div className="content">
              <span className="font-2">Historical Place</span>
              <h3 className="font-1">Paro</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
