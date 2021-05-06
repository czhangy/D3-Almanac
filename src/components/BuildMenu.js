// Boilerplate
import React, { Component } from "react";
import PropTypes from "prop-types";
// Styling
import "../styles/buildMenu.css";
// Import images
import FBarb from "../assets/img/gearmaps/barbarian_female.jpg";

export default class BuildMenu extends Component {
  renderSkills() {
    var skills = [];
    for (var i = 0; i < 6; i++) skills.push(<div className="square" key={i} />);
    return <div className="skill-display">{skills}</div>;
  }
  renderPassives() {
    var passives = [];
    for (var i = 0; i < 4; i++)
      passives.push(<div className="circle" key={i} />);
    return <div className="passive-display">{passives}</div>;
  }
  renderCube() {
    var cube = [];
    for (var i = 0; i < 3; i++) cube.push(<div className="circle" key={i} />);
    return <div className="cube-display">{cube}</div>;
  }
  render() {
    return (
      <div className="build-menu">
        <img src={FBarb} alt="Inventory UI" className="gear-display" />
        {this.renderSkills()}
        {this.renderPassives()}
        {this.renderCube()}
      </div>
    );
  }
}

BuildMenu.propTypes = {
  class: PropTypes.string,
};
