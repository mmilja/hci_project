import React, { Component } from 'react';
import './ToolboxElement.css';

export default class ConstructButton extends Component {
    render() {
      return(
        <button className="ToolboxElement Construct">
          <img className="leftImage" src={require('../../images/Construct.png')} alt="construct"/> 
          <span className="ConstructButton" >Build</span>     
        </button>);}
  }