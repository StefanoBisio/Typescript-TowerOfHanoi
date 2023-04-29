import React from 'react';
import { useDrag } from 'react-dnd';
import './Disk.module.css';

interface DiskProps {
  diskId: number;
  towerIndex: number;
}

export const Disk: React.FC<DiskProps> = ({ diskId, towerIndex }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'disk',
    item: { id: diskId, source: towerIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const diskWidth = 30 + diskId * 10;
  const diskHeight = 10;

  return (
    <div
      ref={drag}
      className="disk"
      style={{
        width: `${diskWidth}px`,
        height: `${diskHeight}px`,
        backgroundColor: `hsl(${diskId * 45}, 80%, 50%)`,
        opacity: isDragging ? 0.5 : 1,
      }}
    ></div>
  );
};
