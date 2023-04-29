// components/Tower/Tower.tsx

import React from 'react';
import { useDrop } from 'react-dnd';

import { Disk } from '../Disk/Disk';
import styles from './Tower.module.css';

interface TowerProps {
  towerIndex: number;
  disks: number[];
  onDiskDrop: (source: number, target: number) => void;
}

export const Tower: React.FC<TowerProps> = ({ towerIndex, disks, onDiskDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'disk',
  drop: (item: { id: number; source: number }) => onDiskDrop(item.source, towerIndex),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={styles.tower}
      style={{
        backgroundColor: isOver ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
      }}
    >
      {disks.map((diskSize, index) => (
        <Disk key={index} diskId={diskSize} towerIndex={towerIndex} />
        ))}
    </div>
  );
};
