// Boilerplate
import React, { Component } from "react";
import PropTypes from "prop-types";
// Styling
import "../styles/statsMenu.css";
// Import custom components
import Dropdown from "./Dropdown.js";
// Import images
import BarbCrest from "../assets/img/crests/barbarian_crest.png";
import CrusCrest from "../assets/img/crests/crusader_crest.png";
import DHCrest from "../assets/img/crests/demonhunter_crest.png";
import MonkCrest from "../assets/img/crests/monk_crest.png";
import NecroCrest from "../assets/img/crests/necromancer_crest.png";
import WDCrest from "../assets/img/crests/witchdoctor_crest.png";
import WizCrest from "../assets/img/crests/wizard_crest.png";
import DefaultCrest from "../assets/img/crests/default.png";

export default class StatsMenu extends Component {
  constructor(props) {
    super(props);
    this.classes = [
      {
        key: "barbarian",
        label: "Barbarian",
        value: "Barbarian",
      },
      {
        key: "crusader",
        label: "Crusader",
        value: "Crusader",
      },
      {
        key: "demon-hunter",
        label: "Demon Hunter",
        value: "Demon Hunter",
      },
      {
        key: "monk",
        label: "Monk",
        value: "Monk",
      },
      {
        key: "necromancer",
        label: "Necromancer",
        value: "Necromancer",
      },
      {
        key: "witch-doctor",
        label: "Witch Doctor",
        value: "Witch Doctor",
      },
      {
        key: "wizard",
        label: "Wizard",
        value: "Wizard",
      },
    ];
    this.crests = {
      barbarian: BarbCrest,
      crusader: CrusCrest,
      "demon-hunter": DHCrest,
      monk: MonkCrest,
      necromancer: NecroCrest,
      "witch-doctor": WDCrest,
      wizard: WizCrest,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  renderCrest() {
    if (this.props.class)
      return (
        <img
          src={this.crests[this.props.class]}
          alt=""
          className="class-crest"
        />
      );
    else return <img src={DefaultCrest} alt="" className="class-crest" />;
  }
  handleSelect(selection) {
    this.props.onChange(selection);
  }
  render() {
    return (
      <div className="stats-menu">
        <div className="class-selection">
          {this.renderCrest()}
          <Dropdown onChange={this.handleSelect} options={this.classes} isSearchable={false} />
        </div>
        <div className="stats"></div>
      </div>
    );
  }
}

StatsMenu.propTypes = {
  class: PropTypes.string,
  onChange: PropTypes.func,
};
