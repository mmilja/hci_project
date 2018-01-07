import React, { Component } from 'react';
import './MainContainer.css';
import './ContextMenu.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import { observe } from './Home/Logic.js';
import Toolbox from './Home/Toolbox.js';
import Canvas from './Home/Canvas.js';

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

class MainContainer extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            data: {},
            showInspectModal: false,
            showAdvancedModal: false,
            type: "normal",
            takenSquares: [0,0,0,0,0,0,0,0,0],
            containerDescriptions: ["","","","","","","","",""]
        };

        this.unobserve = observe(this._handleChange.bind(this));
        this._changeType = this._changeType.bind(this);
        this._showModal = this._showModal.bind(this);
    }


    _handleChange(takenSquares, containerDescriptions){
        const nextState = { takenSquares: takenSquares, containerDescriptions: containerDescriptions }
        this.changeState(nextState);

    }

    _changeType(type){
        const nextState = { type }
        this.changeState(nextState);
    }

    _showModal(type, data){
        if(this.state.type === "Inspect" && this.state.showInspectModal == false){
            const nextState = { data: data, showInspectModal: true };
            this.changeState(nextState);
        }
        else if(this.state.type === "Advanced" && this.state.showAdvancedModal == false){
            const nextState = { data: data, showAdvancedModal: true };
            this.changeState(nextState);
        }
        else{
            const nextState = { data: {}, showInspectModal: false, showAdvancedModal: false };
            this.changeState(nextState);
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
     }

    componentWillUnmount() {
		this.unobserve();
    }

    changeState(nextState){
        if(this.state){
            this.setState(nextState);
        } 
        else{
            this.state = nextState;
        }
    }
    
    getClassNames(){
        if(this.state.type == "normal"){
            return "MainContainer";
        }
        else{
            return "MainContainer " + this.state.type;
        }
    }

    handleClick(){

    }

    showContextMenu(){
        if(arraysEqual(this.state.takenSquares, [0,0,0,0,0,0,0,0,0])){
            return(
                <ContextMenu id={"Simple"}>
                    <MenuItem disabled >Construct</MenuItem>
                    <MenuItem divider />
                    <MenuItem disabled >Save Configuration</MenuItem>
                    <MenuItem disabled >Load Configuration</MenuItem>
                </ContextMenu>);
        }
        else{
            return(
                <ContextMenu id={"Simple"}>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>Construct</MenuItem>
                    <MenuItem divider />
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>Save Configuration</MenuItem>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 3' }}>Load Configuration</MenuItem>
                </ContextMenu>);
        }
    }
    
    render() {
        const { takenSquares, containerDescriptions, click, data } = this.state;
        return(
            <div>
                <ContextMenuTrigger id={"Simple"} holdToDisplay={1000}>
                    <div className={this.getClassNames()}>
                        <Toolbox changeType={this._changeType}/>
                        <Canvas takenSquares={takenSquares} containerDescriptions={containerDescriptions} showModal={this._showModal}/>
                        <Modal isOpen={this.state.showInspectModal} data={data} onRequestClose={() => {this.setState({ showInspectModal: false });}}><h1>Inspect Modal Content</h1></Modal>
                        <Modal isOpen={this.state.showAdvancedModal} data={data} onRequestClose={() => {this.setState({ showAdvancedModal: false });}} ><h1>Advanced Modal Content</h1></Modal>
                    </div>
                </ContextMenuTrigger> 
                {this.showContextMenu()}
            </div>
            );}
}


export default DragDropContext(HTML5Backend)(MainContainer);