import React, { Component } from 'react';
import './FrontPage.css';

export default class FrontPage extends Component {

    render()
    {
     return(
        <div className="FrontPage">
            <img className="docker-image" src={"./images/docker-official.svg"} alt="Docker logo"/>
            <div className="intro-text">
                <h1>
                    Lorem ipsum
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Justo donec enim diam vulputate ut pharetra. Egestas fringilla phasellus faucibus scelerisque. 
                Ultricies integer quis auctor elit sed vulputate mi. Tellus cras adipiscing enim eu turpis. 
                Nunc vel risus commodo viverra maecenas accumsan. Velit egestas dui id ornare arcu odio ut. 
                Adipiscing elit pellentesque habitant morbi tristique senectus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.
                Ultricies leo integer malesuada nunc vel risus commodo. Ac auctor augue mauris augue neque. 
                Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Aenean vel elit scelerisque mauris.
                </p>
            </div>
            <div className="page-help">
                <img alt="page-help-basics" />
                <img alt="page-help-right-click" />
            </div>
        </div>
        );
    }
}