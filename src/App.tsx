import React from 'react';
import logo from './logo.jpg';
import './App.css';
import ReactMarkdown from "react-markdown";

function App() {

  const markdowntext = `
## React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)



`;


  const IdentityEssay = `





`;



  const ChallengeEssay = `

## ==The lessons we take from obstacles we encounter can be fundamental to later success. 
Recount a time when you faced a challenge, setback, or failure. 
How did it affect you, and what did you learn 
from the experience?

I was able to learn the 



`;





  return (
    <div className="App">

      <title>JudasLilith</title>


      <div className="TabTitle">
        <title>essay blog</title>
        <p><i>This is my rifle - this is my gun, this one's for fighting; this one's for fun!</i></p>

      </div>

      <div className="PageTitle">
        <h1>Essay Blog</h1>
      </div>



      <div className="mdDocument">
        <section>
          <ReactMarkdown>{markdowntext}</ReactMarkdown>
        </section>
        <ReactMarkdown>{ChallengeEssay}</ReactMarkdown>
      </div>








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
          my other website:
        </a>







      </div>




    </div>
  );
}

export default App;
