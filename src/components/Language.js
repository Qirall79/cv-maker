/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import "../styles/language.css";

class Language extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="lang-container">
        <h3>Languages</h3>
        <hr align="left" />
        {this.props.infos.map((element) => {
          return (
            <div className="lang">
              <h4>{(element.language || "Wa ktb language") + ": "}</h4>
              <p>{element.level || "A1"}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Language;
