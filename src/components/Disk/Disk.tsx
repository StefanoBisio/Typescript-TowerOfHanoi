import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './Disk.module.css';


interface DiskProps {
  diskId: number;
  towerIndex: number;
}

export const Disk: React.FC<DiskProps> = ({ diskId, towerIndex }) => {
  // Use the useDrag hook from react-dnd to enable dragging of the disk
  const [{ isDragging }, drag] = useDrag(() => ({
    // Set the type of the draggable item to 'disk'
    type: 'disk',
    // Pass the diskId and towerIndex as the item data
    item: { id: diskId, source: towerIndex },
    // Collect the isDragging property from the monitor
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Calculate the width and height of the disk based on its size
  const diskWidth = 40 + diskId * 20;

  return (
    <div
      // Attach the drag ref to enable dragging
      ref={drag}
      className={styles.disk}
      style={{
        width: `${diskWidth}px`,
        // Set the background color based on the disk size
        backgroundColor: `hsl(${diskId * 45}, 80%, 50%)`,
        // Set the opacity to 0.5 when dragging, otherwise 1
        opacity: isDragging ? 0.5 : 1,
      }}
    ></div>
  );
};