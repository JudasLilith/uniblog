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
            <h5>A custom PCB Businesscard with NFC tags</h5>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/fallout_zine_MP3Player.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back"><h5>An arduino-Uno based MP3 player</h5></div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/ESPCord.PNG" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back"> <h5>ESP32-controlled Home Assistant Power manager</h5></div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><h5>A voltage multiplier circuit made with a 555 timer</h5></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/PacBlood.png" alt="PCB business card" className="card-img" />

          </div>
          <div className="card-back"><h5>A Pac-Man inspired retro game</h5></div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/modsZine.png" alt="PCB business card" className="card-img" />

          </div>
          <div className="card-back">
            <h5>Electric wheelchair with facial recognition</h5>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><h5>full electronics workbench</h5></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><h5>Refurbished Brother AX350 electric typewriter</h5></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front"><h5>Go-Kart motor with throttle</h5></div>
          <div className="card-back">Back side</div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="/uniblog/zine.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5>CLI tool for checking 3d Printer connection</h5></div>
        </div>
      </div>


      <div className="card">
        <div className="card-inner">
          <div className="card-front">

            <img src="/uniblog/BusinessCard.png" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">
            <h5> 2 feet 3D printed Crossbow</h5>
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
            <img src="/uniblog/MacroPad.JPG" alt="PCB business card" className="card-img" />
          </div>
          <div className="card-back">            <h5>MacroPad for Godot</h5></div>
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
          <h3>My NAME IS <b>Peter Seo</b>, and I am an Engineering Student from Texas!</h3>
          <p>I like: </p>
          <li>Working on my Klipper setup</li>
          <li>Gardening(Especially herbs and flowers)</li>
          <li>Top 3 distros are Arch, Fedora, and Hannah Montana</li>
          <p>I</p>
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
          <p>Music</p>
          <li>Black Sabbath - The Wizard, War Pigs</li>
          <li>Sex Pistols - No Fun</li>
          <li>Sir Chloe - Walk You Home</li>
          <li>Elvis - Blue Suede Shoes, If I Can Dream</li>
          <li>Dazey and the Scouts - Wet</li>
          <li>The Adicts - What Am I To Do</li>
        </div>
        <div className="reveal">

          <h6>Here are some projects I've done over the years:</h6>

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
