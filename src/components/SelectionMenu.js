// Boilerplate
import React, { Component } from "react";
import PropTypes from "prop-types";
// Styling
import "../styles/selectionMenu.css";
// Custom components
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionBody from './SelectionMenu/AccordionBody';

export default class SelectionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPanel: "gear",
    };
  }
  render() {
    return (
      <div className="selection-menu">
        <Accordion preExpanded={["gear"]} className="large-width">
          <AccordionItem uuid="gear" className="large-width">
            <AccordionItemHeading className="selection-menu-title" style={{borderTop: "none"}}>
              <AccordionItemButton className="selection-menu-button">Gear Selection</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="selection-menu-body">
              <AccordionBody headers={['Category','Item']} class={this.props.class}/>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="skills">
            <AccordionItemHeading className="selection-menu-title">
              <AccordionItemButton className="selection-menu-button">Skills Selection</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="selection-menu-body">
            <AccordionBody headers={['Type','Slot','Skill']} class={this.props.class}/>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="cube">
            <AccordionItemHeading className="selection-menu-title">
              <AccordionItemButton className="selection-menu-button">Kanai's Cube Selection</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="selection-menu-body">
            <AccordionBody headers={['Weapon Slot','Armor Slot','Jewelry Slot']} class={this.props.class}/>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

SelectionMenu.propTypes = {
  class: PropTypes.string,
};
