import React from "react";
import "../styles/footer.css";
import { RiBuildingLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="ft">
      <div className="ft-contacts">
        <div className="ft-title">Contact Us</div>
        <div className="ft-txt">
          <RiPhoneLine className="ft-txt-icon" />
          <div>+91 7588874767</div>
        </div>
        <a className="ft-txt" href="mailto:contact@quixilinx.com">
          <RiMailLine className="ft-txt-icon" />
          <div>contact@quixilinx.com</div>
        </a>
        <div className="ft-txt">
          <RiBuildingLine className="ft-txt-icon" />
          <div>
            B-111, Anant Regency, M. M. M. Marg, mulund West, Mumbai - 400080
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
