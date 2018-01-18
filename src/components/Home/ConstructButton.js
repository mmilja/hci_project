import React, { Component } from 'react';
import './ToolboxElement.css';

export default class ConstructButton extends Component {
    render() {
      return(
        <button className="ToolboxElement Construct">
          <img className="leftImage" src="../images/Construct.png" alt="Construct"/> 
          <p className="ConstructButton" >Build</p>     
          <img className="rightImage" src="../images/Construct.png" alt="Construct"/> 
        </button>);}
  }