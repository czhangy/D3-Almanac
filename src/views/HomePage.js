// Boilerplate
import React, { Component } from "react";
// Styling
import "../styles/homepage.css";
// Import custom components
import ClassDropdown from "../components/ClassDropdown.js";
// Import images
import Barb from "../assets/img/crests/barbarian_crest.png";

export default class HomePage extends Component {
  renderSkills() {
    var skills = [];
    for (var i = 0; i < 6; i++) skills.push(<div className="square" key={i} />);
    return <div className="skill-selection">{skills}</div>;
  }
  renderPassives() {
    var passives = [];
    for (var i = 0; i < 4; i++) passives.push(<div className="circle" key={i} />);
    return <div className="passive-selection">{passives}</div>;
  }
  renderCube() {
    var cube = [];
    for (var i = 0; i < 3; i++) cube.push(<div className="circle" key={i} />);
    return <div className="cube-selection">{cube}</div>;
  }
  render() {
    return (
      <div className="page home-page">
        <div className="gear-and-skills">
          <div className="gear-selection"></div>
          {this.renderSkills()}
          {this.renderPassives()}
          {this.renderCube()}
        </div>
        <div className="class-and-stats">
          <div className="class-selection">
            <img src={Barb} alt="" className="class-crest" />
            <ClassDropdown />
          </div>
          <div className="stats"></div>
        </div>
      </div>
    );
  }
}
