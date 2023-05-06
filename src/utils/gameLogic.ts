// Initializes the game state
export const initGame = (numDisks: number): number[][] => {
  // Create an array of length 3 to represent the 3 towers
  const initialState = Array.from({ length: 3 }, (_, i) => {
    // If the current tower is the first tower (index 0)
    if (i === 0) {
      // Create an array of length numDisks to represent the disks on the first tower
      const firstTower = Array.from({ length: numDisks }, (_, index) => {
        // Initialize the disks in descending order
        return numDisks + index;
      });
      return firstTower;
    } else {
      // The other towers start empty
      return [];
    }
  });
  return initialState;
};


// Define a function to move a disk from one tower to another
/**
 * Moves a disk from one tower to another.
 * @param gameState The current state of the game represented as a 2D array.
 * @param source The index of the source tower.
 * @param target The index of the target tower.
 * @returns The new game state after moving the disk.
 */
export const moveDisk = (
  gameState: number[][],
  source: number,
  target: number
): number[][] => {
  // Check if the source tower is empty
  if (gameState[source].length === 0) {
    // If the source tower is empty, return the current game state
    return gameState;
  }

  // Get the top disk from the source tower
  const sourceDisk = gameState[source][gameState[source].length - 1];
  // Get the top disk from the target tower
  const targetDisk = gameState[target][gameState[target].length - 1];

  // Check if the target tower is empty or if the source disk is smaller than the target disk
  if (targetDisk === undefined || sourceDisk < targetDisk) {
    // Create a new game state by mapping over each tower
    const newGameState = gameState.map((tower, index) => {
      if (index === source) {
        // Remove the top disk from the source tower
        return tower.slice(0, tower.length - 1);
      } else if (index === target) {
        // Add the source disk to the top of the target tower
        return [...tower, sourceDisk];
      } else {
        // Leave other towers unchanged
        return tower;
      }
    });

    // Return the new game state
    return newGameState;
  }

  // If the move is invalid, return the current game state
  return gameState;
};

export const isGameOver = (gameState: number[][]): boolean => {
  // console.log(gameState[0].length);
  // console.log(gameState[1].length);
  // console.log(gameState[2].length);

  const numDisks = gameState[0].length + gameState[1].length + gameState[2].length;
  
  // const gameOver = gameState[1].length === numDisks || gameState[2].length === numDisks;
  // console.log('isGameOver:', gameOver);

  return gameState[1].length === numDisks || gameState[2].length === numDisks;
};
