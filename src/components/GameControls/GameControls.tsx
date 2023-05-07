import React, { useState } from 'react';
import styles from './GameControls.module.css';

// Define the props that the GameControls component accepts
interface GameControlsProps {
  // onResetGame is a callback function that takes a number (numDisks) as an argument
  onResetGame: (numDisks: number) => void;
}

export const GameControls: React.FC<GameControlsProps> = ({ onResetGame }) => {
  // Define a state variable to keep track of the number of disks selected by the user
  const [numDisks, setNumDisks] = useState(6);

  // Define a function to handle changes to the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Parse the new value entered by the user as an integer
    const newValue = parseInt(event.target.value, 10);
    // If the new value is a valid number between 3 and 10, update the numDisks state variable
    if (!isNaN(newValue) && newValue >= 3 && newValue <= 10) {
      setNumDisks(newValue);
    }
  };

  // Define a function to handle clicks on the Reset Game button
  const handleResetClick = () => {
    // Call the onResetGame callback function passed from the parent component with the current value of numDisks
    onResetGame(numDisks);
  };

  return (
    <div className={styles.gameControls}>
      <label htmlFor="numDisks">Number of Disks:</label>
      <input
        type="number"
        id="numDisks"
        name="numDisks"
        min="3"
        max="10"
        value={numDisks}
        onChange={handleChange}
      />
      <button onClick={handleResetClick}>Reset Game</button>
    </div>
  );
};