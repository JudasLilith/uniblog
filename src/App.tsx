import React, { useEffect } from 'react';
import { useState } from "react";
import { Parallax, Background } from 'react-parallax';
import example from './Fuji_apple.jpg';

import './App.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';





function cards() {
  return (
    <>
      <div className='card'>
        <p>A custom PCB Businesscard with NFC tags</p>
        <img src='/uniblog/testing.jpg' style={{ width: '200px', height: '200px', objectFit: 'cover' }}></img>
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

/*
function UpdateTitle() {
  let [TITLE, setTITLE] = useState("somethn changed");
  TITLE = "judaslilith"; 
  
  return (
    <title>{ "somebs" }</title>
  );
}
*/

const TITLE = "working website"


const generateRandom = (min: number, max: number) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

};




function App() {


  const rollingBannerTextVar = 'life is like a box of chocolates; you never know what you\'re going to get; ';
  /*
      'This is my rifle - this is my gun, this one\'s for fighting; this one\'s for fun!'
  */

  const [ProjectVisibility, setProjectVisibility] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setProjectVisibility(!ProjectVisibility);
  }



  return (
    <div className="App">
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>



      <div className='rollingBannerContainer'>
        <div className='rollingBanner'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='rollingBannerText'>{rollingBannerTextVar}</div>
          ))}
        </div>
      </div>




      <Parallax
        className='parallaxbg'
        strength={500}
      >
        <div style={{ height: 1000 }} />
        <Background className="custom-bg">
          <div className='glow-circle'>
          </div>
        </Background>

      </Parallax>


      <div className='content'>
        <div className="circle" >

          <div className='spacer'></div>  
        <div>
        <h1 className='PageTitleText'>Howdy there!</h1>




          <p>thing is me  talog</p>
          <p>Asian music covers a vast swath of music cultures surveyed in the articles on Arabi</p>
          <p>Chi, having a scales does European-influenced music.</p>
          <p>Knowlter."</p>

          <p>Asian music covers a vast swath of music cultures surveyed in the articles oity.</p>
</div>
        </div>


      </div>




      <div className='flexBoxContainer'>
        {ProjectVisibility && cards()}

        <button onClick={handleClick}>show dialog box
          <img src="./src/assets/image/IMG_7525.JPG"></img>
        </button>








        <div className="bottom">
          <a className="App-link" href="https://judaslilith.com" target="_blank" rel="noopener noreferrer">my other websites:</a>


        </div>



      </div>





    </div>
  );
} //app ending 

export default App;
