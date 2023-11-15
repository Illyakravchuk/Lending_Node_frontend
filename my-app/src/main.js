import React from 'react';
import './main.css';
import logo from './img/logo.svg';
import person from './img/person.svg';
import pictures from './img/pictures.svg';
import globe from './img/globe.svg';
import arrow from './img/arrow.svg';

function main() {
  return (
    <div className="main">
      <header className="main-header">
        <div className="container-menu">
          <div className="logo">
            <img src={logo} className="" alt="logo" />
          </div>
          <div className="container-button-menu">
            <div>
              <button className="button-menu" onClick={handleButtonClick}>Home</button>
              <button className="button-menu" onClick={handleButtonClick}>Purpose</button>
              <button className="button-menu" onClick={handleButtonClick}>Expert</button>
              <button className="button-menu" onClick={handleButtonClick}>FAQ</button>
            </div>
          </div>

          <button className="button-profile" onClick={toggleMessage}>
            <img src={person} className="" alt="person" />
          </button>
        </div>

        <div id="messageContainer" className="container-message">
          <div className="message-box"></div>
          <img src={arrow} className="arrow" alt="arrow" />
          <div className="text-Messages">Messages</div>
          <div className="text-Profile">Profile</div>
          <div className="circle-red"></div>
        </div>

        <div className="horizontal-line"> </div>
        <div className="text-find">Find your Expert to solve all problem!</div>
        <div className="text-look">Look for your expert in your field to solve problems and tasks!</div>
        <button className="get-started" onClick={handleButtonClick}>Get started!</button>
        <div className="vertical-line"> </div>

        <div className="container-support">
          <div className="text-our">Our Main Support</div>
          <div className="common-styles text-300">300+ complete tasks</div>
          <div className="pictures">
            <img src={pictures} className="main-logo" alt="pictures" />
          </div>
          <div className="common-styles text-Front">Front-End</div>
          <div className="common-styles text-150UP">150+ tasks</div>
          <div className="common-styles text-Back">Back-end</div>
          <div className="common-styles text-150DN">150+ tasks</div>
          <div className="common-styles text-Cyber">Cyber-security</div>
          <div className="common-styles text-protected">protected cities 200+</div>
        </div>

        <div className="container-Daily">
          <div className="container-globe">
            <img src={globe} className="" alt="globe" />
          </div>
          <div className="text-Daily">Daily support</div>
          <div className="percent">86%</div>
        </div>

        <div className="container-pay">
          <div className="time-action">1-30 Oct 2023</div>
          <div className="price">$257.45</div>
        </div>

        <div className="container-background-image">
          <div className="torus">
            <div className="ellipse"> </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function toggleMessage() {
  let messageContainer = document.getElementById("messageContainer");

  if (messageContainer.style.opacity === "0" || messageContainer.style.opacity === "") {
    messageContainer.style.display = "block";

    setTimeout(() => {
      messageContainer.style.opacity = "1";
    }, 50);

  } else {
    messageContainer.style.opacity = "0";

    setTimeout(() => {
      messageContainer.style.display = "none";
    }, 800);
  }
}

function handleButtonClick() {

}


export default main;

