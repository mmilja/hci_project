import React, { Component } from 'react';
import './FrontPage.css';

export default class FrontPage extends Component {

    scrollDown(){
        const element = document.getElementById("scroll");
        element.scrollIntoView({block: "end", behavior: "smooth"});
    }

    render()
    {
     return(
        <div className="FrontPage">
            <div className="intro-picture">
                
                <div className="docker-button" onClick={this.scrollDown}>
                    <p>How to use</p>
                    <p><i className="fa fa-chevron-down" aria-hidden="true"></i></p>
               </div>
            </div>
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
            <div id="scroll" className="lowerBox">
                <div className="text">
                    <h2>
                        Pellentesque accumsan
                    </h2> 
                    <p>
                        Proin in enim ac massa molestie ornare. Nulla id augue tempor, eleifend lacus at, faucibus sem. Integer magna orci, convallis in lectus sit amet, fermentum euismod est. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse finibus risus tellus, nec lobortis ante imperdiet a. 
                        Cras elit justo, ultricies non orci eget, pharetra dignissim purus. Duis sed urna ut justo aliquet dignissim tempus imperdiet est.
                        Sed non lectus laoreet diam tincidunt pellentesque eu non odio. Pellentesque sit amet neque libero. Cras dapibus sagittis felis, ut vulputate risus. 
                        Vivamus ut convallis velit. Praesent sed augue ex. Morbi eget sem ut felis dignissim laoreet.
                    </p>
                </div>
                <img className="help-image" src={require('../images/ContainerDrop.jpg')} alt="help" />
            </div> 
        </div>
        );
    }
}