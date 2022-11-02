/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Personal from "./Personal";
import Language from "./Language";
import "../styles/sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="side-container">
        <Personal infos={this.props.personal} />
        <Language infos={this.props.language} />
      </div>
    );
  }
}

export default Sidebar;
