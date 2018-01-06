import React, { Component } from 'react';
import './NavbarPicture.css';

import { Link } from 'react-router-dom'

export default class NavbarPicture extends Component {

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }
    
        render() {
            return(
                <li className="NavPicture"><Link to='/' onClick={this._handleClick}>logo</Link></li>
            );
        }

        _handleClick(event){
            this.props.getState("Home");
        }

}