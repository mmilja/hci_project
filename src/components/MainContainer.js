import React, { Component } from 'react';
import './MainContainer.css';
import './ContextMenu.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Modal from 'react-responsive-modal';

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import { observe } from './Home/Logic.js';
import Toolbox from './Home/Toolbox.js';
import Canvas from './Home/Canvas.js';

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
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
            type: this.props.type,
            takenSquares: this.props.takenSquares,
            containerDescriptions: this.props.containerDescriptions
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
        if(this.state.type === "Inspect" && this.state.showInspectModal === false){
            const nextState = { data: data, showInspectModal: true };
            this.changeState(nextState);
        }
        else if(this.state.type === "Advanced" && this.state.showAdvancedModal === false){
            const nextState = { data: data, showAdvancedModal: true };
            this.changeState(nextState);
        }
        else{
            const nextState = { data: {}, showInspectModal: false, showAdvancedModal: false };
            this.changeState(nextState);
        }
    }

    componentWillUnmount() {
        this.unobserve();
    }

    changeState(nextState){
        if(this.state){
            this.setState(nextState);
        } 
        else{
            //this.state = nextState;
        }
    }
    
    getClassNames(){
        if(this.state.type === "normal"){
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

    RenderInspectModal(){
        return (
            <div>
                <h2>Simple centered modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                </p>
            </div>
        );
    }

    RenderAdvancedModal(){
        return(
            <div>
                <h2>Simple centered modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                </p>
            </div>
        );
    }
    
    render() {
        const { takenSquares, containerDescriptions, data } = this.state;
        return(
            <div style={{width:'100%',height:'100%'}}>
                <ContextMenuTrigger id={"Simple"} holdToDisplay={-1}>
                    <div className={this.getClassNames()} style={{width:'100%',height:'100%'}}>
                        <Toolbox changeType={this._changeType}/>
                        <Canvas takenSquares={takenSquares} containerDescriptions={containerDescriptions} showModal={this._showModal}/>
                        <Modal open={this.state.showInspectModal} data={data} onClose={() => {this.setState({ showInspectModal: false });}} little>
                            <div className="modal-div">
                                <h1>Inspect container status:</h1>
                                <div className="input-div">
                                    <label>Container Status:</label>
                                    <label className="container-status-label">Down</label>
                                </div>
                                <div className="input-div">
                                    <label>Container image:</label>
                                    <input type="text" placeholder="Search DockerHub.." />
                                </div>
                                <div className="input-div">
                                    <label>Container networks:</label>
                                    <ul className="inline-list">
                                        <li>home,</li>
                                        <li>docker,</li>
                                        <li>internal,</li>
                                        <li>localhost</li>
                                    </ul> 
                                </div>
                                <div className="command-prompt">
                                    <label>Enter a direct command to the container:</label>
                                    <input type="text" placeholder="Enter command here.." />
                                </div>
                            </div>
                        </Modal>
                        <Modal open={this.state.showAdvancedModal} data={data} onClose={() => {this.setState({ showAdvancedModal: false });}} little>
                            <div className="modal-div">
                                <h1>Advanced container status:</h1>
                                <div className="input-div">
                                    <label>Container Status:</label>
                                    <label className="container-status-label">Down</label>
                                </div>
                                <div className="input-div">
                                    <label>Container image:</label>
                                    <input type="text" placeholder="Search DockerHub.." />
                                </div>
                                <div className="input-div">
                                    <label>Container networks:</label>
                                    <ul className="inline-list">
                                        <li>home,</li>
                                        <li>docker,</li>
                                        <li>internal,</li>
                                        <li>localhost</li>
                                    </ul> 
                                </div>
                                <div className="command-prompt">
                                    <label>Enter a direct command to the container:</label>
                                    <input type="text" placeholder="Enter command here.." />
                                </div>
                            </div>
                        </Modal>
                    </div>
                </ContextMenuTrigger> 
                {this.showContextMenu()}
            </div>
            );}
}


export default DragDropContext(HTML5Backend)(MainContainer);