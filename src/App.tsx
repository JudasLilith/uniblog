import React, { useEffect } from 'react';
import { useState } from "react";
import { Parallax, Background } from 'react-parallax';
import './App.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, useScroll, useTransform } from "motion/react";

import { useRef } from "react";


function cards() {
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>A custom PCB Businesscard with NFC tags</p>
            <img src="/uniblog/testing.jpg" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>An arduino-Uno based MP3 player</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>ESP32-controlled Home Assistant Power manager</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>A voltage multiplier circuit made with a 555 timer</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>Pac-Blood</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>Electric wheelchair with facial recognition</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>full electronics workbench</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>Refurbished Brother AX350 electric typewriter</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>Go-Kart motor with throttle</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><p>CLI tool for checking 3d Printer connection</p></div>
          <div className="card-back">Back side</div>
        </div>
      </div>
    </>
  );
}



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
          <div className='spacer' />
        </div>
      </div>




      <div className='introContent'>
        <div className='spacer' style={{ height: '200px' }} />
        <div className="wave-container">
          <h2 className="wave-text">
            <span>H</span><span>O</span><span>W</span><span>D</span><span>Y</span><span>_</span><span>T</span><span>H</span><span>E</span><span>R</span><span>E</span><span>!</span>
          </h2>
        </div>


        <div className="reveal">
          <h3>My name is <b>Peter Seo</b>, and I am an Engineering Student from Texas!</h3>
          <p>therere faseeeeeeeeeeeeeefasdasdfsaf</p>
          <p>reeeeeeeeeeeeereeeeeeeereter treterteteete</p>
        </div>


        <div className="reveal">
          <p>Chi, having a scales does European-influenced music.</p>
        </div>
        <div className="reveal">
          Box 3
          <p>Knowlter."</p>
          <p>Asian music covers a vast swath of music cultures surveyed in the articles oity.</p>
        </div>



        <button onClick={handleClick}>show dialog box<img src="uniblog/tesng.jpg"></img></button>
        <div className='flexBoxContainer'>
          {ProjectVisibility && cards()}
        </div>











        <div className="zoom-wrapper">
          <div className="zoom-sticky">
            <img className="zoom-img" src={'uniblog/hikari.svg'} alt="Describe your image" />
          </div>
        </div>





        <div className="bottom">
          <a className="App-link" href="https://judaslilith.com" target="_blank" rel="noopener noreferrer">my other websites:</a>
        </div>



      </div>





    </div>
  );
} //app ending 

export default App;
