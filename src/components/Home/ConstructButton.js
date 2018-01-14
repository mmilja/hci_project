import React, { Component } from 'react';
import './ToolboxElement.css';

export default class ConstructButton extends Component {
    render() {
      return(
        <button className="ToolboxElement Construct">
          <img src="../images/Construct.png" alt="Construct"/> 
          <p className="ConstructButton" >Construct</p>     
          <img src="../images/Construct.png" alt="Construct"/> 
        </button>);}
  }