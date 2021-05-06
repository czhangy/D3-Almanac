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
      locks: [true, true, true],
      values: [null, null, null],
    };
    // Dropdown contents of Category
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
    // Dropdown contents of Type
    this.skillTypes = [
      { key: "active", label: "Active", value: "Active" },
      { key: "passive", label: "Passive", value: "Passive" },
    ];
    // Dropdown contents of Slot
    this.skillSlots = [
      { key: "1", label: "1", value: "1" },
      { key: "2", label: "2", value: "2" },
      { key: "3", label: "3", value: "3" },
      { key: "4", label: "4", value: "4" },
      { key: "5", label: "5", value: "5" },
      { key: "6", label: "6", value: "6" },
    ];
    // List of searchable dropdowns
    this.searchable = [
      "Item",
      "Skill",
      "Weapon Slot",
      "Armor Slot",
      "Jewelry Slot",
    ];
    // Binding
    this.handleSelect = this.handleSelect.bind(this);
  }
  // Iterative rendering
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
              (this.props.headers[i] === "Item" && this.state.locks[0]) ||
              (this.props.headers[i] === "Slot" && this.state.locks[1]) ||
              (this.props.headers[i] === "Skill" && this.state.locks[2])
            }
            label={this.props.headers[i]}
            value={this.state.values[i]}
          />
        </div>
      );
    }
    return <div>{rows}</div>;
  }
  // Get the contents of each dropdown by label
  getContents(index) {
    if (this.props.headers[index] === "Category") return this.itemCategories;
    else if (this.props.headers[index] === "Type") return this.skillTypes;
    else if (this.props.headers[index] === "Slot") {
      var count = this.skillSlots;
      // Trim contents for passive slots
      if (this.state.values[0] === "passive") count.splice(4, 2);
      return count;
    } else return [];
  }
  // Set states and emit value
  handleSelect(selection, label) {
    let indexMapping = {
      Category: 0,
      Item: 1,
      Type: 0,
      Slot: 1,
      Skill: 2,
      "Weapon Slot": 0,
      "Armor Slot": 1,
      "Jewelry Slot": 2,
    };
    let reset = true;
    if (label === "Category") {
      // Unlock Item
      let newArr = this.state.locks.slice();
      newArr[0] = false;
      this.setState({ locks: newArr });
    } else if (label === "Type") {
      // Unlock Slot
      let newArr = this.state.locks.slice();
      newArr[1] = false;
      this.setState({ locks: newArr });
    } else if (label === "Slot") {
      // Unlock Skill
      let newArr = this.state.locks.slice();
      newArr[2] = false;
      this.setState({ locks: newArr });
      // Cube slots
    } else if (label.length > 9)
      // Don't reset cube slots
      reset = false;
    // Set display
    this.handleState(selection, indexMapping[label], reset);
  }
  // Set state arrays
  handleState(newVal, index, reset) {
    let newArr = this.state.values.slice();
    newArr[index] = newVal;
    if (reset) for (let i = index + 1; i < newArr.length; i++) newArr[i] = null;
    this.setState({ values: newArr });
  }
  render() {
    return this.renderRows();
  }
}

AccordionBody.propTypes = {
  headers: PropTypes.array,
};
