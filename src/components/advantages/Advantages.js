import React from "react";

import SeamlessOperations from "../../assets/icons/SeamlessOperations";
import BestDMC from "../../assets/icons/BestDMC";
import ProfessionalGuides from "../../assets/icons/ProfessionalGuides";
import PremiumServices from "../../assets/icons/PremiumServices";

import "./styles.css";

export const Advantages = () => {
  return (
    <section className="advantages-section">
      <div className="wrapper">
        <ul>
          <li>
            <BestDMC size={40} />
            <div>
              <h5 className="font-1">Best DMC for Bhutan</h5>
              <p className="font-2">Local destination expertise</p>
            </div>
          </li>
          <li>
            <PremiumServices size={40} />
            <div>
              <h5 className="font-1">Premium Services</h5>
              <p className="font-2">Handpicked partners & stays</p>
            </div>
          </li>
          <li>
            <ProfessionalGuides size={40} />
            <div>
              <h5 className="font-1">Professional Guides</h5>
              <p className="font-2">Trained & experienced teams</p>
            </div>
          </li>
          <li>
            <SeamlessOperations size={40} />
            <div>
              <h5 className="font-1">Seamless Operations</h5>
              <p className="font-2">Reliable on-ground support</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
