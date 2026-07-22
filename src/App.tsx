import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from "react-markdown";

function App() {

  const markdowntext = `
    # React Markdown Example

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



      <div className="TabTitle">
        <title>essay blog</title>
      </div>

      <div className="PageTitle">
        <h1>Essay Blog</h1>
      </div>



      <div className="mdDocument">
        <section>
          <ReactMarkdown>{markdowntext}</ReactMarkdown>
        </section>
        <p> nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
        <ReactMarkdown>{ChallengeEssay}</ReactMarkdown>
      </div>









      <header className="App-hes">
        <img src={logo} className="App-logo" alt="logo" />



        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learngsdgbf React

        </a>







      </header>
    </div>
  );
}

export default App;
