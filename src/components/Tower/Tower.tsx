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
  // Use the useDrop hook from react-dnd to handle dropping disks on the tower
  const [{ isOver }, drop] = useDrop(() => ({
    // Only accept disk items
    accept: 'disk',

     // Call the onDiskDrop function when a disk is dropped
    drop: (item: { id: number; source: number }) => onDiskDrop(item.source, towerIndex),

    // Monitor is an object that keeps track of the drag state and provides methods to inspect it. In this code, it is used in the collect function to determine if a disk is currently being dragged over the tower.
    collect: (monitor) => ({

      // isOver is a property that is set to true if a disk is currently being dragged over the tower. It is used to change the background color of the tower when a disk is being dragged over it.
      isOver: !!monitor.isOver(), // Set isOver to true if a disk is currently being dragged over the tower
    }),
  }));

  return (
    <div
      ref={drop}
      className={styles.tower}
      style={{
        // Change the background color if a disk is being dragged over the tower
        backgroundColor: isOver ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
      }}
    >
      {/* Render the disks in reverse order.
      [...disks].reverse() instead of disks.reverse() is better because it avoids mutating the original disks array */}
      {[...disks].reverse().map((diskSize, index) => (
        <Disk key={index} diskId={diskSize} towerIndex={towerIndex} />
      ))}
    </div>
  );
};
