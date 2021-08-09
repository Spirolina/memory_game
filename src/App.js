/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';
import Navbar from './components/Navbar';
import charizard from './images/charizard.png';
import abra from './images/abra.png';
import bullbas from './images/bulbasaur.png';
import charmander from './images/charmander.png';
import cubone from './images/cubone.png';
import meowth from './images/meowth.png';
import mew from './images/mew.png';
import mewtwo from './images/mewtwo.png';
import odish from './images/odish.png';
import pidgey from './images/pidgey.png';
import spearow from './images/spearow.png';
import squirtle from './images/squirtle.png';
import Score from './components/Score';
import CardBox from './components/CardBox';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [isFinish, setFinis] = useState(false);
  const [pokes, setPokes] = useState([
    {
      name: 'charizard',
      img: charizard,
    },
    {
      name: 'abra',
      img: abra,
    },
    {
      name: 'bulbasar',
      img: bullbas,
    },
    {
      name: 'charmander',
      img: charmander,
    },
    {
      name: 'cubone',
      img: cubone,
    },
    {
      name: 'meowth',
      img: meowth,
    },
    {
      name: 'odish',
      img: odish,
    },
    {
      name: 'pidgey',
      img: pidgey,
    },
    {
      name: 'mew',
      img: mew,
    },
    {
      name: 'mewtwo',
      img: mewtwo,
    },
    {
      name: 'spearow',
      img: spearow,
    },
    {
      name: 'squirtle',
      img: squirtle,
    },
  ]);
  const [pickedPokes, setPickedPokes] = useState([]);
  const [lastPickedPokes, setLastPickedPokes] = useState('');
  const [isGameFinish, setIsGameFinish] = useState(false);

  function randomizePokes() {
    for (let i = pokes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pokes[i];
      pokes[i] = pokes[j];
      pokes[j] = temp;
    }
  }

  function controlCard(name) {
    const myPickedPokes = [...pickedPokes];
    myPickedPokes.push(name);
    setPickedPokes(myPickedPokes);
  }

  function checkScore() {
    if (score >= best) {
      setBest(score);
    }
  }

  function restartGame() {
    setIsGameFinish(false);
    setScore(0);
    setBest(0);
    setPickedPokes([]);
    setLastPickedPokes('');
  }

  function checkGame() {
    if (best === pokes.length) {
      setIsGameFinish(true);
    }
  }
  useEffect(() => {
    checkGame();
  }, [best]);

  useEffect(() => {
    checkScore();
  }, [score]);

  useEffect(() => {
    controlCard(lastPickedPokes);
    randomizePokes();
  }, [lastPickedPokes]);

  function pickCard(e) {
    let { target } = e;
    if (target.className !== 'card') {
      target = target.parentElement;
    }
    let status = true;
    pickedPokes.forEach((poke) => {
      if (poke === target.id) {
        status = false;
      }
    });

    if (status) {
      setScore(score + 1);
      setLastPickedPokes(target.id);
    } else {
      setScore(0);
      setPickedPokes([]);
      setLastPickedPokes('');
    }
  }
  return (
    !isGameFinish ? (
      <div className="App">
        <Navbar />
        <CardBox pickCard={pickCard} cards={pokes} />
        <Score currentScore={score} bestScore={best} />

      </div>
    ) : (
      <div className="finish">
        <h3> You win ! </h3>
        <button type="button" onClick={restartGame}> Play Again </button>
      </div>
    )
  );
}

export default App;
