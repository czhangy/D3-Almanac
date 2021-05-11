// Boilerplate
import React, { Component } from "react";
import PropTypes from "prop-types";
// Styling
import "../styles/buildMenu.css";
// Import images
import BarbGearmap from "../assets/img/gearmaps/barbarian_male.jpg";
import CrusGearmap from "../assets/img/gearmaps/crusader_male.jpg";
import DHGearmap from "../assets/img/gearmaps/demonhunter_male.jpg";
import MonkGearmap from "../assets/img/gearmaps/monk_male.jpg";
import NecroGearmap from "../assets/img/gearmaps/necromancer_male.jpg";
import WDGearmap from "../assets/img/gearmaps/witchdoctor_male.jpg";
import WizGearmap from "../assets/img/gearmaps/wizard_male.jpg";

export default class BuildMenu extends Component {
  constructor(props) {
    super(props);
  // Maps keys to gearmaps
  this.gearmaps = {
    barbarian: BarbGearmap,
    crusader: CrusGearmap,
    "demon-hunter": DHGearmap,
    monk: MonkGearmap,
    necromancer: NecroGearmap,
    "witch-doctor": WDGearmap,
    wizard: WizGearmap,
  };
}
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
        <img src={this.gearmaps[this.props.class]} alt="Inventory UI" className="gear-display" />
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
