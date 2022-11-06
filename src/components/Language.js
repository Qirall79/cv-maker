/* eslint-disable no-useless-constructor */
import React from "react";

import "../styles/language.css";

const Language = (props) => {
  return (
    <div id="lang-container">
      <h3>Languages</h3>
      <hr align="left" />
      {props.infos.map((element) => {
        return (
          <div className="lang">
            <h4>{(element.language || "Wa ktb language") + ": "}</h4>
            <p>{element.level || "A1"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Language;
