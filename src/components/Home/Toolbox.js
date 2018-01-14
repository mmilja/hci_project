import React, { Component } from 'react';
import './Toolbox.css';

import ToolboxElementDraggable from './ToolboxElementDraggable.js';
import ToolboxElementMode from './ToolboxElementMode.js';
import ToolboxButton from './ToolboxButton.js';
import ConstructButton from './ConstructButton.js';

export default class Toolbox extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            type: "normal",
            draggableItems:  ['Container','SwarmContainer'],
            modeChangingItems: ['NetworkConnection','Inspect','Advanced']
        };

        this._changeType = this._changeType.bind(this);
    }
    
    _changeType(type){
        const nextState = { type }
        if(this.state){
            this.setState(nextState);
        } 
        else{
            this.state = nextState;
        }
        this.props.changeType(type);
    }

    render() { 

        return (
            <div className="Toolbox">
                <span className="draggableItem"><h3>Draggable items:</h3>{this.state.draggableItems.map(description => <ToolboxElementDraggable type={description} description={description} key={description} />)}</span>
                <span className="modeChangeButtons">{this.state.modeChangingItems.map(description => <ToolboxElementMode type={description} description={description} key={description} changeType={this._changeType} currentType={this.state.type}/>)}</span>
                <span className="importantButtons"><ConstructButton /> <ToolboxButton/></span>
            </div>
        );
    }

}