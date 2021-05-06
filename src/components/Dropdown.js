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
    if (this.props.label) this.props.onChange(e.key, this.props.label);
    else this.props.onChange(e.key);
  }
  render() {
    if (!this.props.clear)
      return (
        <div>
          <Select
            options={this.props.options}
            styles={styles}
            isSearchable={this.props.isSearchable}
            isDisabled={this.props.isDisabled}
            onChange={this.handleSelect}
          />
        </div>
      );
    else
      return (
        <div>
          <Select
            options={this.props.options}
            styles={styles}
            isSearchable={this.props.isSearchable}
            isDisabled={this.props.isDisabled}
            onChange={this.handleSelect}
            value={null}
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
  clear: PropTypes.bool,
};
