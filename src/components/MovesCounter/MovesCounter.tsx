import React from 'react';

interface MovesCounterProps {
  moves: number;
}

export const MovesCounter: React.FC<MovesCounterProps> = ({ moves }) => {
  return (
    <div>
      <p>
        Moves: <span>{moves}</span>
      </p>
    </div>
  );
};
