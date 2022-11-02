import React, { Component } from "react";
import "../styles/personal.css";
import phone from "../assets/phone-call.png";
import address from "../assets/maps-and-flags.png";
import email from "../assets/email.png";

class Personal extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="per-container">
        <img src={this.props.infos.img} alt="CV" />
        <div id="details">
          <h3>Personal Details</h3>
          <hr align="left" />
        </div>

        <div className="details">
          <img src={address} alt="address" className="icon" />
          <p>{this.props.infos.address}</p>
        </div>

        <div className="details">
          <img src={email} alt="email" className="icon" />
          <p>{this.props.infos.email}</p>
        </div>

        <div className="details">
          <img src={phone} alt="phone" className="icon" />
          <p>{this.props.infos.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default Personal;
