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
==The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?


I first faced a challenge in my sophomore year of my life. I was taking AP Physics 1, which was  a huge step off the status quo at my school. Our normal course plants are to take AP physics 1 at junior year, but I decided to take it a year before so that in the future, I can practice to take the AP Physics C courses on my own.
Taking that course was, in a lot of ways, a mistake. I wasn't able to catch up with a lot of classmates, who, seemed to be having a breeze with all the coursework. my grades were getting lower and lower with every grade, my ego even lower. Never in my life, have I ever gotten a B in any class up to this point, and to me it felt as if there was no other way. I had no belief in myself, no trust about what I was good at, and in general i was extremely sad. However, that all changed with me figuring out what to do. I tried to stay in the other teacher, Mr. M's room after school up until 6 every day to fix and learn my material. Needless to say, I was amazed to find my grade of 100 on my final 


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
