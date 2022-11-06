/* eslint-disable no-useless-constructor */
import React from "react";
import Personal from "./Personal";
import Language from "./Language";
import "../styles/sidebar.css";

const Sidebar = (props) => {
  return (
    <div id="side-container">
      <Personal infos={props.personal} />
      <Language infos={props.language} />
    </div>
  );
};

export default Sidebar;
