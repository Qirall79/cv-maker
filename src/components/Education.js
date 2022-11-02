import React, { Component } from "react";
import "../styles/education.css";

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="edu-container">
        <h3>Education</h3>
        <hr align="left" />
        {this.props.infos.map((element) => {
          return (
            <div className="edu-element">
              <h4>{element.from + " - " + element.to}</h4>
              <div>
                <h4>{element.school + ", " + element.city}</h4>
                <p>Subject: {element.major}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
