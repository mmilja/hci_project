import React, { Component } from 'react';
import './ToolboxElement.css';

export default class ToolboxElementMode extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return(
        <button className="ToolboxElement"> 
            <span className="Element"><img className="ElementImage" src={"images/" + this.props.type + ".svg"} alt={this.props.type + " image"}/></span>
            <span className="ElementDescription">{this.props.description}</span> 
        </button> );}
}
