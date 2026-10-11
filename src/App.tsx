import React, { useEffect } from 'react';
import { useState } from "react";
import { Parallax, Background } from 'react-parallax';
import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import { useRef } from "react";


function cards() {
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">

            <img src="/uniblog/BusinessCard.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Custom PCB Businesscard with NFC tags</h5>
            <a href="https://github.com/JudasLilith/BusinessCard" target="_blank" rel="noopener noreferrer"><b>Link</b></a>


          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/fallout_zine_MP3Player.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back"><h5>Arduino-Uno based MP3 player</h5>
            <a href="https://github.com/JudasLilith/MP3Player" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/ESPCord.PNG" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back"> <h5>ESP32-controlled Home Assistant Power manager</h5>
            <a href="https://github.com/JudasLilith/ESPCord" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/voltage.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back"> <h5>Voltage multiplier circuit made with a 555 timer</h5>
            <a href="https://github.com/JudasLilith/FalloutCard" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>



      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/PacBlood.png" alt="PCB business card" className="card-img" />

          </div>
          <div className="card-back"><h5> Pac-Man inspired retro game</h5>
            <a href="https://github.com/JudasLilith/TSA-Project" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/modsZine.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Electric wheelchair with facial recognition and crossbow turret</h5>
            <a href="https://github.com/juhapark21/Fallout" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/bench.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Electronics and tool Workbench</h5>
          </div>
        </div>
      </div>




      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/lupin4.png" alt="PCB business card" className="card-img" />
            <img src="/uniblog/lupinNormalinverted.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>CAD Model Importer for McMaster, GrabCAD and Misumi</h5>
            <a href="https://github.com/JudasLilith/lupin4" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>



      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/skull.png" alt="PCB business card" className="card-img" />
            <img src="/uniblog/quickskull.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Skull Gaming Cyberdeck</h5>
            <a href="https://cad.onshape.com/documents/f1aa0a3a7b4374997dd55df6/w/a944fa475a3193ec97faba3c/e/8ddd5b1495066512f0165f7d?renderMode=0&uiState=6acba908e207aef228742a68" target="_blank" rel="noopener noreferrer"><b>Link</b></a>

          </div>
        </div>
      </div>



      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/klipper.jpg" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Klipper upgrade on Anycubic I3 Mega S + various Mods</h5>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/crossbow.jpg" alt="PCB business card" className="card-img" />
            <img src="/uniblog/goodcrossbow.gif" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>3D printed Crossbow for 7.5 inch crossbow bolts</h5>
            <a href="https://github.com/JudasLilith/Cassidy" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/RubeGoldberg.png" alt="PCB business card" className="card-img" />
            <img src="/uniblog/rube.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Rube Goldberg Machine</h5>
          </div>
        </div>
      </div>







      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/brother3.png" alt="PCB business card" className="card-img" />
            <img src="/uniblog/typewriterfinished.jpg" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Refurbished Brother AX350 electric typewriter</h5>
          </div>
        </div>
      </div>







      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/gokart.png" alt="PCB business card" className="card-img" />
            <img src="/uniblog/motor.jpg" alt="PCB business card" className="card-img" />

          </div>
          <div className="card-back">
            <h5>Go-Kart motor testing rig with throttle</h5>
          </div>
        </div>
      </div>










      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/zine.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>CLI tool for checking 3d Printer connection</h5>
            <a href="https://github.com/JudasLilith/PrinterConnection" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/esp32testing2.JPG" alt="PCB business card" className="card-img" />
            <img src="/uniblog/testingesp32.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5> ESP32 CAN Data transfer Testing Rig</h5>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">

            <img src="/uniblog/breathalyzer.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>DIY Breathalyzer</h5>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/OctoPrint.JPG" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Octoprint Setup with DIY-runout Sensor</h5>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/deadbeat.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>Drunk Driver Simulator</h5>
            <a href="https://Git/JudasLilith" target="_blank" rel="noopener noreferrer"><b>Link</b></a>
          </div>
        </div>
      </div>



      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/MacroPad.JPG" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">            <h5>MacroPad for Godot</h5>
            <a href="https://codeberg.org/JudasLilith" target="_blank" rel="noopener noreferrer"><b>Link</b></a>

          </div>
        </div>
      </div>

    </>
  );
}

type HoverLettersProps = {
  text: string;
  className?: string;
};

function HoverLetters({ text, className = "" }: HoverLettersProps) {
  return (
    <h3 className={`letters ${className}`} aria-label={text}>
      {Array.from(text).map((ch, i) =>
        ch === " " ? (
          " "
        ) : (
          <span key={i} aria-hidden="true">
            {ch}
          </span>
        )
      )}
    </h3>
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



      <head>
        <link rel="icon" href="uniblog/MoonLogo.png" />
        <title>Your Custom Website Title</title>
      </head>











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
          <HoverLetters text='My name is Peter, and I am an Engineering Student from Texas!' />

          <HoverLetters text="I like to:" />
          <li>Design PCBs</li>
          <li>Blacksmith Jewelry</li>
          <li>CNC Routing & Mill Machining for FRC</li>
          <li>CAD on FreeCAD or SolidWorks</li>
          <li>Work on my Klipper setup</li>
          <li>Gardening(Especially lavender, tomatoes and mints)</li>
          <li>Top 3 distros are Arch, Fedora, and Nix</li>


        </div>



        <div className="reveal">
          <h3>Favorite Media</h3>
          <p>Movies </p>
          <li>Forrest Gump</li>
          <li>Any Stanley Kubrick (especially Full Metal Jacket and Clockwork Orange)</li>
          <li>Rocky 4</li>
          <li>Every single Goddamn Ghibli movie except Spirited Away( The Heron, The Wind Rises, Nausicaä, Laputa, and Mononoke Hime)</li>
          <p>Games</p>
          <li>Wolfenstein-New Colossus</li>
          <li>Team Fortress 2</li>
          <li>Cataclysm: Dark Days Ahead</li>
          <li>Red Alert 3 (We miss you Tim Curry)</li>
          <li>StarCraft II</li>
          <li>CyberPunk 2077</li>
          <li>DOOM</li>
          <p>Music</p>
          <li>Black Sabbath - The Wizard, War Pigs</li>
          <li>Sex Pistols - No Fun</li>
          <li>Sir Chloe - Walk You Home</li>
          <li>Elvis - Blue Suede Shoes, If I Can Dream</li>
          <li>Dazey and the Scouts - Wet</li>
          <li>The Adicts - What Am I To Do</li>
        </div>
        <div className="reveal">
          <HoverLetters text="Here are some projects I've done over the years:" />
          <h6></h6>

        </div>


        <button onClick={handleClick}>
          <HoverLetters text="Click Me!" />
        </button>

        <div className='flexBoxContainer'>
          {ProjectVisibility && cards()}
        </div>











        <div className="spacer" style={{ height: '200px' }} />

        <div className="bottom">

          <p>Other Links:</p>
          <a href="https://judaslilith.com" target="_blank" rel="noopener noreferrer"><b>outdated_website</b></a>
          <a href="https://github.com/JudasLilith" target="_blank" rel="noopener noreferrer"><b>GitHub</b></a>
          <a href="https://codeberg.org/JudasLilith" target="_blank" rel="noopener noreferrer"><b>CodeBerg(not used as much)</b></a>

        </div>
        <div className="spacer" style={{ height: '100px' }} />


      </div>





    </div>
  );
} //app ending 

export default App;
