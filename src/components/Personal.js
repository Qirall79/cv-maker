import React from "react";
import "../styles/personal.css";
import phone from "../assets/phone-call.png";
import address from "../assets/maps-and-flags.png";
import email from "../assets/email.png";

const Personal = (props) => {
  return (
    <div id="per-container">
      <img src={props.infos.img} alt="CV" />
      <div id="details">
        <h3>Personal Details</h3>
        <hr align="left" />
      </div>

      <div className="details">
        <img src={address} alt="address" className="icon" />
        <p>{props.infos.address}</p>
      </div>

      <div className="details">
        <img src={email} alt="email" className="icon" />
        <p>{props.infos.email}</p>
      </div>

      <div className="details">
        <img src={phone} alt="phone" className="icon" />
        <p>{props.infos.phoneNumber}</p>
      </div>
    </div>
  );
};

export default Personal;
