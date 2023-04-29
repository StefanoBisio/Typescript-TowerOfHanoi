// Define a function to initialize the game state
export const initGame = (numDisks: number): number[][] => {
  const initialState = Array.from({ length: 3 }, (_, i) =>
    i === 0 ? Array.from({ length: numDisks }, (_, index) => numDisks - index) : []
  );
  return initialState;
};


// Define a function to move a disk from one tower to another
export const moveDisk = (gameState: number[][], source: number, target: number): number[][] => {
  if (gameState[source].length === 0) {
    return gameState;
  }
  const sourceDisk = gameState[source][gameState[source].length - 1];
  const targetDisk = gameState[target][gameState[target].length - 1];

  if (targetDisk === undefined || sourceDisk < targetDisk) {
    const newGameState = gameState.map((tower, index) => {
      if (index === source) {
        return tower.slice(0, tower.length - 1);
      } else if (index === target) {
        return [...tower, sourceDisk];
      } else {
        return tower;
      }
    });

    return newGameState;
  }

  return gameState;
};

export const isGameOver = (gameState: number[][]): boolean => {
  console.log(gameState[0].length);
  console.log(gameState[1].length);
  console.log(gameState[2].length);

  const numDisks = gameState[0].length + gameState[1].length + gameState[2].length;
  const gameOver = gameState[1].length === numDisks || gameState[2].length === numDisks;

  console.log('isGameOver:', gameOver);

  return gameState[1].length === numDisks || gameState[2].length === numDisks;
};
