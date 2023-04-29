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

  const handleResetGame = (numDisks: number) => {
    setGameState(initGame(numDisks));
    setMoveCount(0);
  };

  const handleDiskDrop = (source: number, target: number) => {
    // Use a functional update to ensure we're working with the most recent state

    // React may sometimes batch multiple state updates together for better performance, which can result in state updates using stale or outdated state values when computed based on the current state. By using a functional update, you ensure that the state update always uses the most recent state, as React will apply the functional update in the correct order, even when batching multiple updates together.
    setGameState((prevState) => {
      console.log("Before moveDisk:", prevState);

      // Apply the moveDisk function to the prevState
      const newGameState = moveDisk(prevState, source, target);
      console.log("After moveDisk:", newGameState);

      // Return the newGameState as the updated state value
      return newGameState;
    });

    // Use a separate functional update for moveCount to ensure correct counting
    setMoveCount((prevMoveCount) => prevMoveCount + 1);
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
        <div className={styles.gameArea}>
          {gameState.map((tower, index) => (
            <Tower key={index} towerIndex={index} disks={tower} onDiskDrop={handleDiskDrop} />
          ))}
        </div>
        <MovesCounter moves={moveCount} />
        <GameControls onResetGame={handleResetGame} />
      </div>
    </DndProvider>
  );
};

export default App;
