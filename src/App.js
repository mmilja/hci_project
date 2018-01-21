import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar/Navbar.js';
import MainContainer from './components/MainContainer.js';
import Help from './components/Help.js';
import About from './components/About.js';
import Footer from './components/Footer';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            stateList: ['Home','Canvas'],
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
            <div id="App" className={this.state.type}>
                <Navbar appGetState={this._appGetState} stateList={this.state.stateList} currentState={this.state.currentState} />
                <Switch>
                    <Route exact  path='/' render={ () => <FrontPage />} />
                    <Route path='/Home' render={ () => <FrontPage />} />
                    <Route path='/Canvas'  render={ () =>  <MainContainer getUpdate={this._getUpdate} type={this.state.type} takenSquares={this.state.takenSquares} containerDescriptions={this.state.containerDescriptions}/>} />
                    <Route path='/Help'  render={ () => <Help /> } />
                    <Route path='/About'  render={ () => <About /> } />
                </Switch>
                <Footer/>
            </div> 
        );
    }
}