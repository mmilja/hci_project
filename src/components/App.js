import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar/Navbar.js';
import MainContainer from './MainContainer.js';
import Help from './Help.js';
import About from './About.js';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            stateList: ['Home','Status','Help','About'],
            currentState: 'Home'
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
                    <Route exact  path='/' render={ () => <MainContainer />} />
                    <Route path='/Home'  render={ () =>  <MainContainer />} />
                    <Route path='/Help'  render={ () => <Help /> } />
                    <Route path='/About' render={ () => <About /> } />
                </Switch> 
            </div>  
            </BrowserRouter>
        );
    }
}