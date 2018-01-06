import React, { Component } from 'react';
import './MainContainer.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { observe } from './Home/Logic.js';
import Toolbox from './Home/Toolbox.js';
import Canvas from './Home/Canvas.js';



class MainContainer extends Component {
    constructor(props){
        super(props);
        this.unobserve = observe(this._handleChange.bind(this));
    }

    _handleChange(takenSquares, containerDescriptions){
        const nextState = { takenSquares, containerDescriptions }
        if(this.state){
            this.setState(nextState);
        } 
        else{
            this.state = nextState;
        }

    }

    componentWillUnmount() {
		this.unobserve()
	}
    
    render() {
        const { takenSquares, containerDescriptions } = this.state 
        return(
            <div className="MainContainer">
                <Toolbox />
                <Canvas takenSquares={takenSquares} containerDescriptions={containerDescriptions}/>
            </div>
            );}
}

export default DragDropContext(HTML5Backend)(MainContainer);