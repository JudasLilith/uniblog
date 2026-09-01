import React from 'react';
import logo from './logo.jpg';
import './App.css';
import ReactMarkdown from "react-markdown";

function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}


function groundGenerator() {
  const circleNumber = randomInt(3) + 1;



}


function App() {

  const markdowntext = `
## React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)



`;





  const ChallengeEssay = `

## ==The lessons we take from obstacles we encounter can be fundamental to later success. 
Recount a time when you faced a challenge, setback, or failure. 
How did it affect you, and what did you learn 
from the experience?

I was able to learn the 



`;

  const rollingBannerTextVar = 'life is like a box of chocolates; you never know what you\'re going to get; ';

  /*
      'This is my rifle - this is my gun, this one\'s for fighting; this one\'s for fun!'
  */



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
        <div className='card'>
          <div className="card-inner">
            <div className="card-front">Front Side can I not say anything</div>
            <div className="card-back">Back Side sonion the fuck is happening</div>
          </div>
        </div>
        <div className='card'>
          <p>A custom PCB Businesscard with NFC tags</p>
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
      </div>



      <div className="mdDocument">
        <section>
          <ReactMarkdown>{markdowntext}</ReactMarkdown>
        </section>
        <ReactMarkdown>{ChallengeEssay}</ReactMarkdown>
      </div>



      <div className='glow-circle'></div>


      <div className='box'></div>

      <div className="bar"></div>




      <header className="App-hes">
        <img src={logo} className="App-logo" alt="logo" />








      </header>

      <div className="bottom">
        <p>About me:</p>
        <p> I am an Engineering Student from Texas. My hobbies are 3D printing, Vanilla Web Dev, Video game creation(Godot and Unity), CNC & milling, and much more:</p>
        <li>Gardening(especially herbs)</li>
        <li>Computer Designing(OnShape, FreeCad, Inventor, and Fusion360)</li>
        <li>Blacksmithing(Ringmaking & knifemaking)</li>
        <li>Linux Ricing(Hyprland)</li>
        <li>Hobby CNCing</li>
        <li>Hobby Machine Milling</li>
        <li>ESP32, Arduinos, and Raspberry Pis</li>


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
}

export default App;
