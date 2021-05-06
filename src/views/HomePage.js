// Boilerplate
import React, { Component } from "react";
import axios from "axios";
// Styling
import "../styles/homepage.css";
// Import custom components
import StatsMenu from "../components/StatsMenu.js";
import SelectionMenu from "../components/SelectionMenu.js";
import BuildMenu from '../components/BuildMenu.js'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: null,
    };
    this.handleClassChange = this.handleClassChange.bind(this);
    this.getData = this.getData.bind(this);
  }
  handleClassChange(selection) {
    this.setState({ class: selection });
  }
  getData() {
    console.log("press");
    axios
      .get(`http://localhost:5000/classes/${this.state.class}`)
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div className="page home-page">
        <StatsMenu class={this.state.class} onChange={this.handleClassChange} />
        <SelectionMenu class={this.state.class} />
        <BuildMenu class={this.state.class} />
      </div>
    );
  }
}
