import React, { Component } from 'react';
import './FrontPage.css';

export default class FrontPage extends Component {

    render()
    {
     return(
        <div className="FrontPage">
            <div className="intro">
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
            </div>
            <div className="page-help">
                <img src="../images/ContainerDrop.jpg" alt="page-help-basics" />
                <img alt="page-help-right-click" />
            </div>
            <div className="last-paragraph">
                <img src="../images/DockerSwarm.png"/>
                <div className="more-info">
                    <h2>
                        Pellentesque accumsan mauris nec nisl feugiat, ac luctus risus sollicitudin.
                    </h2> 
                    <p>
                    Proin in enim ac massa molestie ornare. Nulla id augue tempor, eleifend lacus at, faucibus sem. Integer magna orci, convallis in lectus sit amet, fermentum euismod est. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse finibus risus tellus, nec lobortis ante imperdiet a. 
                    Cras elit justo, ultricies non orci eget, pharetra dignissim purus. Duis sed urna ut justo aliquet dignissim tempus imperdiet est.
                    Curabitur augue ex, sagittis in placerat pulvinar, imperdiet ac lacus. Donec velit erat, congue ut urna ut, tincidunt vehicula velit. 
                    In ullamcorper aliquam dolor, in finibus nunc aliquam a. Donec lorem mauris, posuere sit amet rhoncus eget, pulvinar at ipsum.
                    </p>
                    <p> 
                    Sed non lectus laoreet diam tincidunt pellentesque eu non odio. Pellentesque sit amet neque libero. Cras dapibus sagittis felis, ut vulputate risus. 
                    Vivamus ut convallis velit. Praesent sed augue ex. Morbi eget sem ut felis dignissim laoreet.
                    Morbi nec nibh porttitor, rutrum magna ut, feugiat tellus. Nunc egestas orci sit amet enim dapibus ullamcorper. Curabitur eleifend molestie mauris at suscipit. 
                    Donec mollis augue ac tincidunt commodo. Duis euismod lacus erat, ornare euismod risus eleifend non. Maecenas at vehicula nunc. 
                    Cras eu mi vel quam tincidunt blandit eget vitae purus.
                    </p>
                </div>
            </div>
        </div>
        );
    }
}