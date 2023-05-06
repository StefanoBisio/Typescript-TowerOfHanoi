
# Tower of Hanoi

This is a Tower of Hanoi game implemented in TypeScript using React and react-dnd.

## Overview

The Tower of Hanoi is a mathematical puzzle consisting of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No larger disk may be placed on top of a smaller disk.

This app allows you to play the Tower of Hanoi game by dragging and dropping disks between towers. It also keeps track of the number of moves you have made and alerts you when you have completed the game.

## Technologies

This app is built using TypeScript, React, and react-dnd.

- TypeScript is a strict syntactical superset of JavaScript that adds optional type annotations and other features to improve the readability and maintainability of your code.
- React is a popular JavaScript library for building user interfaces. It allows you to create reusable components and manage their state in a declarative way.
- react-dnd is a set of higher-order components for building complex drag-and-drop interfaces using React.

## How it works

The app consists of several components that work together to implement the game logic and user interface.

- The `Tower` component represents a single tower in the game. It uses the `useDrop` hook from react-dnd to enable dropping disks on the tower.
- The `Disk` component represents a single disk in the game. It uses the `useDrag` hook from react-dnd to enable dragging disks between towers.
- The `MovesCounter` component displays the number of moves made in the game.
- The `GameControls` component allows you to reset the game with a different number of disks.

The game logic is implemented in the `gameLogic.tsx` file using several utility functions:

- The `initGame` function initializes the game state with a given number of disks on the first tower.
- The `moveDisk` function moves a disk from one tower to another and returns the new game state.
- The `isGameOver` function checks if all disks have been moved to one of the other two towers.

The `App.tsx` file ties everything together by managing the game state and rendering the components. It uses several state variables to keep track of the current game state and move count, and defines several event handlers to handle disk drops and game resets.

## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
