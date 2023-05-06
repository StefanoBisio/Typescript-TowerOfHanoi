// App.tsx

import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Tower } from './components/Tower/Tower';
import { GameControls } from './components/GameControls/GameControls';
import { MovesCounter } from './components/MovesCounter/MovesCounter';
import { initGame, isGameOver, moveDisk } from './utils/gameLogic';
import styles from './App.module.css';

const App: React.FC = () => {
  const [gameState, setGameState] = useState(initGame(6));
  const [moveCount, setMoveCount] = useState(0);
  const [showRules, setShowRules] = useState(false);


  const handleResetGame = (numDisks: number) => {
    setGameState(initGame(numDisks));
    setMoveCount(0);
  };

  const handleDiskDrop = (source: number, target: number) => {
    // React may sometimes batch multiple state updates together for better performance, which can result in state updates using stale or outdated state values when computed based on the current state. By using a functional update, you ensure that the state update always uses the most recent state, as React will apply the functional update in the correct order, even when batching multiple updates together.
    setGameState((prevState) => {
      // Apply the moveDisk function to the prevState
      const newGameState = moveDisk(prevState, source, target);
      // Only increment moveCount if the move is legal
      if (newGameState !== prevState) {
        setMoveCount((prevMoveCount) => prevMoveCount + 1);
      }
      return newGameState;
    });
  };

  // Add a useEffect hook to check if the game is over when gameState or moveCount change
  useEffect(() => {
    if (isGameOver(gameState)) {
      alert(`Game Over! You completed the game in ${moveCount} moves.`);
    }
  }, [gameState, moveCount]);

  return (
    <DndProvider backend={HTML5Backend}>

      <div className={styles.app}>
        <h1>Tower of Hanoi</h1>

        <button className={styles.rulesButton} onClick={() => setShowRules(!showRules)}>Rules</button>
        {showRules && (
          <ul>
            <li>Only one disk can be moved at a time.</li>
            <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.</li>
            <li>No larger disk may be placed on top of a smaller disk.</li>
          </ul>
        )}

        <div className={styles.gameArea}>
          {gameState.map((tower, index) => (
            <Tower key={index} towerIndex={index} disks={tower} onDiskDrop={handleDiskDrop} />
          ))}
        </div>

        <div className={styles.interface}>
          <MovesCounter moves={moveCount} />
          <GameControls onResetGame={handleResetGame} />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
