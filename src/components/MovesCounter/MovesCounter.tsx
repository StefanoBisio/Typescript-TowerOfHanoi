// components/MovesCounter/MovesCounter.tsx

import React from 'react';
import './MovesCounter.module.css';

interface MovesCounterProps {
  moves: number;
}

export const MovesCounter: React.FC<MovesCounterProps> = ({ moves }) => {
  return (
    <div className="movesCounter">
      <p>
        Moves: <span>{moves}</span>
      </p>
    </div>
  );
};
