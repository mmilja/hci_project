import React, { Component } from 'react';
import './ToolboxElement.css';

export default class ToolboxButton extends Component {
  render() {
    return(
        <div className="ToolboxElement"> 
            <button className="SaveButton"><span className="ToolboxButton">Save <br/> Configuration</span></button>
            <button className="LoadButton"><span className="ToolboxButton">Load <br/> Configuration</span></button>  
        </div> );}
}
