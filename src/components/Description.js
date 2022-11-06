/* eslint-disable no-useless-constructor */
import React from "react";
import "../styles/description.css";

const Description = (props) => {
  return (
    <div id="description">
      <h3>Description</h3>
      <hr align="left" />
      <p>{props.infos.description}</p>
    </div>
  );
};

export default Description;
