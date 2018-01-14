import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import FrontPage from './FrontPage';
import Navbar from './Navbar/Navbar.js';
import MainContainer from './MainContainer.js';
import Help from './Help.js';
import About from './About.js';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            stateList: ['Home','Canvas','Help','About'],
            currentState: 'Home',
            type: 'normal',
            takenSquares: [0,0,0,0,0,0,0,0,0],
            containerDescriptions: ["","","","","","","","",""]
        };

        this._appGetState = this._appGetState.bind(this);
    }

    _appGetState(description){
        this.setState({currentState: description});
    }


    render() {
        return(
            <BrowserRouter>
            <div id="App">
                <Navbar appGetState={this._appGetState} stateList={this.state.stateList} currentState={this.state.currentState} />
                <Switch>
                    <Route exact  path='/' render={ () => <FrontPage />} />
                    <Route path='/Home' render={ () => <FrontPage />} />
                    <Route path='/Canvas'  render={ () =>  <MainContainer getUpdate={this._getUpdate} type={this.state.type} takenSquares={this.state.takenSquares} containerDescriptions={this.state.containerDescriptions}/>} />
                    <Route path='/Help'  render={ () => <Help /> } />
                    <Route path='/About' render={ () => <About /> } />
                </Switch> 
            </div>  
            </BrowserRouter>
        );
    }
}