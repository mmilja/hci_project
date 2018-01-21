import React, { Component } from 'react';
import './ToolboxElement.css';

import { Images } from '../Constants.js'

export default class ToolboxElementMode extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(){
        if(this.props.currentType !== this.props.type){
            this.props.changeType(this.props.type);
        }
        else{
            this.props.changeType("normal");
        }
    }
    
    getClassNames(){
        if(this.props.currentType === this.props.type)
            return "ToolboxElement Clicked"
        else
            return "ToolboxElement"
    }

    render() {
        const imgPath = Images[this.props.description];

        return(
            <button className={this.getClassNames()} onClick={this._handleClick}> 
                <span className="Element"><img className="ElementImage Mode" src={imgPath} alt="mode" /></span>
                <span className="ElementDescription">{this.props.description}</span> 
            </button> );}
}
