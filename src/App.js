import React, { useState } from 'react';
import './App.css';

const responses = [
  "Only if you kiss your boyfriend",
  "You? Seriously? No. Just, no",
  "Come on, you're embarrassing yourself",
  "Actually, yeah",
  "YAS KWEEN",
  "Ehhhhhh don't plan on it",
  "Only if you become a completely different person",
  "Yeah, sure. And pigs are flying now, too, right?"
]

const getRandomIndex = () => Math.floor(Math.random() * responses.length)

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="App">

      <div className="ball__outer">
        <div className="ball__inner">
          <div className="ball__triangle">
            <div className="ball__content">
              {responses[currentIndex]}
            </div>
          </div>
        </div>
      </div>

      <div className="button" onClick={() => setCurrentIndex(getRandomIndex())}>TELL ME</div>
    </div>
  );
}

export default App;
