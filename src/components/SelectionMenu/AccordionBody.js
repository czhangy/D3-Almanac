// Boilerplate
import React, { Component } from "react";
import PropTypes from "prop-types";
// Styling
import "../../styles/selectionMenu.css";
// Import custom components
import Dropdown from "../Dropdown";

export default class AccordionBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemUnlocked: false,
      slotUnlocked: false,
      skillUnlocked: false,
      skillType: null,
      values: [null, null, null],
    };
    this.itemCategories = [
      {
        key: "head",
        label: "Head",
        value: "Head",
      },
      {
        key: "shoulders",
        label: "Shoulders",
        value: "Shoulders",
      },
      {
        key: "neck",
        label: "Neck",
        value: "Neck",
      },
      {
        key: "torso",
        label: "Torso",
        value: "Torso",
      },
      {
        key: "waist",
        label: "Waist",
        value: "Waist",
      },
      {
        key: "hands",
        label: "Hands",
        value: "Hands",
      },
      {
        key: "wrists",
        label: "Wrists",
        value: "Wrists",
      },
      {
        key: "legs",
        label: "Legs",
        value: "Legs",
      },
      {
        key: "feet",
        label: "Feet",
        value: "Feet",
      },
      {
        key: "left-finger",
        label: "Left Finger",
        value: "Left Finger",
      },
      {
        key: "right-finger",
        label: "Right Finger",
        value: "Right Finger",
      },
      {
        key: "main-hand",
        label: "Main Hand",
        value: "Main Hand",
      },
      {
        key: "off-hand",
        label: "Off Hand",
        value: "Off Hand",
      },
    ];
    this.locked = ["Item", "Slot", "Skill"];
    this.searchable = [
      "Item",
      "Skill",
      "Weapon Slot",
      "Armor Slot",
      "Jewelry Slot",
    ];
    this.handleSelect = this.handleSelect.bind(this);
  }
  renderRows() {
    let rows = [];
    for (let i = 0; i < this.props.headers.length; i++) {
      rows.push(
        <div className="accordion-body-row" key={i}>
          <div className="accordion-body-row-header">
            {this.props.headers[i] + ":"}
          </div>
          <Dropdown
            onChange={this.handleSelect}
            options={this.getContents(i)}
            isSearchable={this.searchable.includes(this.props.headers[i])}
            isDisabled={
              (this.props.headers[i] === "Item" && !this.state.itemUnlocked) ||
              (this.props.headers[i] === "Slot" && !this.state.slotUnlocked) ||
              (this.props.headers[i] === "Skill" && !this.state.skillUnlocked)
            }
            label={this.props.headers[i]}
            value={this.state.values[i]}
          />
        </div>
      );
    }
    return <div>{rows}</div>;
  }
  getContents(index) {
    if (this.props.headers[index] === "Category") {
      return this.itemCategories;
    } else if (this.props.headers[index] === "Type") {
      return [
        { key: "active", label: "Active", value: "Active" },
        { key: "passive", label: "Passive", value: "Passive" },
      ];
    } else if (this.props.headers[index] === "Slot") {
      var count = [
        { key: "1", label: "1", value: "1" },
        { key: "2", label: "2", value: "2" },
        { key: "3", label: "3", value: "3" },
        { key: "4", label: "4", value: "4" },
        { key: "5", label: "5", value: "5" },
        { key: "6", label: "6", value: "6" },
      ];
      if (this.state.skillType === "passive") {
        count.splice(4, 2);
        return count;
      } else if (this.state.skillType === "active") return count;
      else return [];
    } else {
      return [];
    }
  }
  handleSelect(selection, label) {
    if (label === "Category") {
      // Unlock Item
      this.setState({ itemUnlocked: true });
      // Reset other fields
      let newArr = this.state.values.slice();
      newArr[0] = selection;
      newArr[1] = null;
      this.setState({ values: newArr });
    } else if (label === "Item") {
      // Set display
      let newArr = this.state.values.slice();
      newArr[1] = selection;
      this.setState({ values: newArr });
    } else if (label === "Type") {
      // Unlock Slot
      this.setState({ slotUnlocked: true });
      // Set skill type
      this.setState({ skillType: selection });
      // Reset other fields
      let newArr = this.state.values.slice();
      newArr[0] = selection;
      newArr[1] = null;
      newArr[2] = null;
      this.setState({ values: newArr });
    } else if (label === "Slot") {
      // Set display
      let newArr = this.state.values.slice();
      newArr[1] = selection;
      this.setState({ values: newArr });
      // Unlock Skill
      this.setState({ skillUnlocked: true });
    } else if (label === "Skill") {
      // Set display
      let newArr = this.state.values.slice();
      newArr[2] = selection;
      this.setState({ values: newArr });
    } else if (label === "Weapon Slot") {
      // Set display
      let newArr = this.state.values.slice();
      newArr[0] = selection;
      this.setState({ values: newArr });
    } else if (label === "Armor Slot") {
      // Set display
      let newArr = this.state.values.slice();
      newArr[1] = selection;
      this.setState({ values: newArr });
    } else if (label === "Jewelry Slot") {
      // Set display
      let newArr = this.state.values.slice();
      newArr[2] = selection;
      this.setState({ values: newArr });
    }
  }
  render() {
    return this.renderRows();
  }
}

AccordionBody.propTypes = {
  headers: PropTypes.array,
};
