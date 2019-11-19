import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './App.css';

const responses = [
  "Only if you kiss your boyfried",
  "You? Seriously? No. Just, no",
  "Come on, you're embarrassing yourself",
  "Actually, yeah",
  "YAS KWEEN",
  "Ehhhhhh don't plan on it",
  "Does a bear shit in the woods?",
  "Only if you become a completely different person",
  "Yeah, sure. And pigs are flying now, too, right?"
]

const getRandomIndex = () => Math.floor(Math.random() * responses.length)

const ballVariants = {
  shaking: {
    x: [10, -16, 10, -12, 19, -10, 4, -10, 0], y: [10, -9, 5, -10, -6, -10, 6, -10, 6, 0],
  },
  showing: { x: 0, y: 0 },
}

const contentVariants = {
  shaking: { opacity: 0 },
  showing: { opacity: 1 },
}

const BallResponse = ({ message, animationState }) => (
  <motion.div
    variants={contentVariants}
    animate={animationState}
  >
    <div className="ball__triangle">
      <div className="ball__content">
        {message}
      </div>
    </div>
  </motion.div>
)

function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isShowing, setIsShowing] = useState(true);

  const setThing = () => {
    setIsShowing(false)
    setTimeout(() => {
      setCurrentIndex(getRandomIndex())
      setIsShowing(true);
    }, 1000);
  }

  const animationState = isShowing ? 'showing' : 'shaking';

  return (
    <div className="App">
      <motion.div
        className="ball__outer"
        variants={ballVariants}
        animate={animationState}
        transition={{ type: 'spring' }}
      >
        <div className="ball__inner">
          <motion.div
            variants={contentVariants}
          >
            <div className="ball__triangle">
              <div className="ball__content">
                {currentIndex || currentIndex === 0 ? responses[currentIndex] : ''}
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
      <div className="button" onClick={() => setThing()}>pls tell me</div>
    </div>
  );
}

export default App;
