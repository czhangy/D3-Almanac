// Boilerplate
import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: "'Girassol', cursive, sans-serif",
  }),
  control: (provided, state) => ({
    ...provided,
    fontFamily: "'Girassol', cursive, sans-serif",
    width: "12rem",
  }),
};

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(e) {
    this.props.onChange(e.key, this.props.label);
  }
  render() {
    const key = this.props.value ? this.props.value.toLowerCase() : null;
    const value = this.props.value
      ? this.props.value
          .split("-")
          .map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
          })
          .join(" ")
      : null;
    return (
      <div>
        <Select
          options={this.props.options}
          styles={styles}
          isSearchable={this.props.isSearchable}
          isDisabled={this.props.isDisabled}
          onChange={this.handleSelect}
          value={{
            key: key,
            label: value,
            value: value,
          }}
        />
      </div>
    );
  }
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
};
