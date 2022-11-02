/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../styles/description.css";

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="description">
        <h3>Description</h3>
        <hr align="left" />
        <p>{this.props.infos.description}</p>
      </div>
    );
  }
}

export default Description;
