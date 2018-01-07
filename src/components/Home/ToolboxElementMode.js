import React, { Component } from 'react';
import './ToolboxElement.css';

export default class ToolboxElementMode extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(){
        if(this.props.currentType != this.props.type){
            this.props.changeType(this.props.type);
        }
        else{
            this.props.changeType("normal");
        }
    }
    
    getClassNames(){
        if(this.props.currentType == this.props.type)
            return "ToolboxElement Clicked"
        else
            return "ToolboxElement"
    }

    render() {
        return(
            <button className={this.getClassNames()} onClick={this._handleClick}> 
                <span className="Element"><img className="ElementImage" src={"./images/" + this.props.type + ".svg"} alt={this.props.type + " image"}/></span>
                <span className="ElementDescription">{this.props.description}</span> 
            </button> );}
}
