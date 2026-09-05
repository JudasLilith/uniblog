import React from 'react';
import { useState } from "react";

import './App.css';
import ReactMarkdown from "react-markdown";

import { useNavigate } from 'react-router-dom';


function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}



function Goto(place: string,) {
  const navigate = useNavigate();
  navigate(place);
}

function cards() {
  return (
    <>
      <div className='card'>
        <p>A custom PCB Businesscard with NFC tags</p>
        <img src='./assets/image/IMG_7012.JPG'></img>
      </div>
      <div className='card'>
        <p>An arduino-Uno based MP3 player</p>
      </div>
      <div className='card'>
        <p>ESP32-controlled Home Assistant Power manager</p>
      </div>
      <div className='card'>
        <p>A voltage multiplier circuit made with a 555 timer</p>
      </div>
      <div className='card'>
        <p>Pac-Blood</p>
      </div>
      <div className='card'>
        <p>Electric wheelchair with facial recognition</p>
      </div>
      <div className='card'>
        <p>full electronics workbench</p>
      </div>
      <div className='card'>
        <p>Refurbished Brother AX350 electric typewriter </p>
      </div>
      <div className='card'>
        <p>Go-Kart motor with throttle</p>
      </div>
      <div className='card'>
        <p>CLI tool for checking 3d Printer connection</p>
      </div>
    </>
  );
}



function groundGenerator() {
  const circleNumber = randomInt(3) + 1;
}


function App() {


  const rollingBannerTextVar = 'life is like a box of chocolates; you never know what you\'re going to get; ';
  /*
      'This is my rifle - this is my gun, this one\'s for fighting; this one\'s for fun!'
  */

  const [ProjectVisibility, setProjectVisibility] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setProjectVisibility(true);
  }
  const handleClose = () => {
    setProjectVisibility(false);
  };




  return (
    <div className="App">


      <div className='rollingBannerContainer'>
        <div className='rollingBanner'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className='rollingBannerText'>{rollingBannerTextVar}</div>
          ))}
        </div>
      </div>



      <div className="TabTitle">
        <title></title>

      </div>

      <div className="PageTitle">
        <h1 id="PageTitleText">Howdy there!</h1>
      </div>





      <div className='flexBoxContainer'>
        {ProjectVisibility && cards()}
        <button onClick={handleClose}>Close</button>
      </div>


      <button onClick={handleClick}>show dialog box</button>

      <div className='glow-circle'></div>


      <div className='box'></div>

      <div className="bar"></div>




      <div className="bottom">



        <a
          className="App-link"
          href="https://judaslilith.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          my other websites:
        </a>


        <div className="circle">
        </div>





      </div>




    </div>

  );
} //app ending 

export default App;
