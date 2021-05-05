// Boilerplate
import React, { Component } from "react";
// Semantic UI
import { Dropdown } from "semantic-ui-react";

export default class ClassDropdown extends Component {
  constructor(props) {
    super(props);
    this.classes = [
      {
        key: "Barbarian",
        text: "Barbarian",
        value: "Barbarian",
      },
      {
        key: "Crusader",
        text: "Crusader",
        value: "Crusader",
      },
      {
        key: "Demon Hunter",
        text: "Demon Hunter",
        value: "Demon Hunter",
      },
      {
        key: "Monk",
        text: "Monk",
        value: "Monk",
      },
      {
        key: "Necromancer",
        text: "Necromancer",
        value: "Necromancer",
      },
      {
        key: "Witch Doctor",
        text: "Witch Doctor",
        value: "Witch Doctor",
      },
      {
        key: "Wizard",
        text: "Wizard",
        value: "Wizard",
      },
    ];
  }
  render() {
    return (
      <div>
        <Dropdown
          placeholder="Select Class"
          fluid
          selection
          options={this.classes}
        />
      </div>
    );
  }
}
