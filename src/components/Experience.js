import React from "react";
import "../styles/experience.css";

const Experience = (props) => {
  return (
    <div id="exp-container">
      <h3>Experience</h3>
      <hr align="left" />
      {props.infos.map((element) => {
        return (
          <div className="exp-element">
            <h4>{element.from + " - " + element.to}</h4>
            <div>
              <h4>{element.position}</h4>
              <p>{element.company + ", " + element.city}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
