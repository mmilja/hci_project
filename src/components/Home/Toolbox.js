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
            draggableItems:  ['Container','SwarmContainer'],
            modeChangingItems: ['NetworkConnection','Inspect','Advanced']
        };
      }

    render() { 

        return (
            <div className="Toolbox">
                {this.state.draggableItems.map(description => <ToolboxElementDraggable type={description} description={description} key={description} />)}
                {this.state.modeChangingItems.map(description => <ToolboxElementMode type={description} description={description} key={description} />)}
                <ConstructButton />
                <ToolboxButton/>
            </div>
        );
    }

}