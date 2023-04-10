import { KonvaEventObject } from 'konva/lib/Node';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';

import BlurShape, { Shape } from './BlurShape';

export interface BlurImageToolProps {
  imageElement?: HTMLImageElement;
  detections: Array<[]>;
}

const BlurImageTool = ({ imageElement }: BlurImageToolProps) => {
  //   const containerRef = useRef<HTMLDivElement>(null);
  //   const stageRef = React.useRef<Konva.Stage>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [draggingShape, setDraggingShape] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    handleAddMask();
  }, []);

  function handleAddMask() {
    const _shapes = shapes.slice();
    const id = uuidv4; // or you can remove the id property altogether
    _shapes.push({
      id: id(),
      x: 380,
      y: 550,
      width: 150,
      height: 400,
    });
    setShapes(_shapes);
    console.log(_shapes, 'shapes');
    return id;
  }

  function selectShape(id: string | null) {
    console.log('select', id);

    setSelectedId(id);

    if (!id) {
      return;
    }

    // Place selected shape at the top.
    const _shapes = [...shapes];
    const index = _shapes.findIndex(shape => shape.id === id);
    if (index > -1) {
      const shape = _shapes[index];
      _shapes.splice(index, 1);
      _shapes.push(shape);
      setShapes(_shapes);
    }
  }

  const handleDragMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!draggingShape) {
      return;
    }

    const xvärde: number = 0;
    const yvärde: number = 10;

    const _shapes = [...shapes];
    const shape = _shapes[_shapes.length - 1];
    shape.width = xvärde - shape.x;
    shape.height = yvärde - shape.y;
    setShapes(_shapes);
  };

  const handleDragEnd = (e: KonvaEventObject<MouseEvent>) => {
    if (!draggingShape) {
      return;
    }

    // Remove mask if it's too tiny.
    const _shapes = [...shapes];
    const shape = _shapes[_shapes.length - 1];
    if (Math.abs(shape.width) < 5 && Math.abs(shape.height) < 5) {
      _shapes.pop();
      setShapes(_shapes);
    } else {
      selectShape(draggingShape);
    }

    setDraggingShape(null);
  };

  return (
    <>
      <Image
        image={imageElement}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      {shapes.map((shape, i) => {
        return (
          <BlurShape
            key={shape.id}
            shape={shape}
            imageElement={imageElement}
            isSelected={shape.id === selectedId}
            onSelect={() => selectShape(shape.id)}
          />
        );
      })}
    </>
  );
};

export default BlurImageTool;
