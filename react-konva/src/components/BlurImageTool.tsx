import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import React, { useRef, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';

import BlurShape, { Shape } from './BlurShape';

export interface BlurImageToolProps {
  imageElement?: HTMLImageElement;
}

const BlurImageTool = ({ imageElement }: BlurImageToolProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = React.useRef<Konva.Stage>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [draggingShape, setDraggingShape] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleAddMask() {
    const pointerPosition = stageRef.current?.getPointerPosition();
    if (!pointerPosition) {
      return null;
    }

    const _shapes = shapes.slice();
    const id = uuidv4();
    _shapes.push({
      id,
      x: pointerPosition.x,
      y: pointerPosition.y,
      width: 0,
      height: 0,
    });
    setShapes(_shapes);

    return id;
  }

  function selectShape(id: string | null) {
    console.log('select', id);

    setSelectedId(id);

    if (!id) {
      return;
    }

    // Place selected shape at the top.
    const _shapes = shapes.slice();
    const index = _shapes.findIndex(shape => shape.id === id);
    if (index > -1) {
      const shape = _shapes[index];
      _shapes.splice(index, 1);
      _shapes.push(shape);
      setShapes(_shapes);
    }
  }

  function handleRemove(id: string) {
    const _shapes = shapes.slice();
    const index = _shapes.findIndex(shape => shape.id === id);
    if (index > -1) {
      _shapes.splice(index, 1);
      setShapes(_shapes);
    }
  }

  const handleDragStart = (e: KonvaEventObject<MouseEvent>) => {
    const clickedOnEmpty = e.target.index === 0;
    if (!clickedOnEmpty) {
      return;
    }
    selectShape(null);

    const id = handleAddMask();
    setDraggingShape(id);
  };

  const handleDragMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!draggingShape) {
      return;
    }

    const pointerPosition = stageRef.current?.getPointerPosition();
    if (!pointerPosition) {
      return;
    }

    const _shapes = shapes.slice();
    const shape = _shapes[_shapes.length - 1];
    shape.width = pointerPosition.x - shape.x;
    shape.height = pointerPosition.y - shape.y;
    setShapes(_shapes);
  };

  const handleDragEnd = (e: KonvaEventObject<MouseEvent>) => {
    if (!draggingShape) {
      return;
    }

    // Remove mask if it's too tiny.
    const _shapes = shapes.slice();
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
    <div ref={containerRef}>
      <Stage
        width={600}
        height={300}
        ref={stageRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        style={{ cursor: 'crosshair' }}
      >
        <Layer>
          <Image image={imageElement} width={600} height={300} />
          {shapes.map((shape, i) => {
            return (
              <BlurShape
                key={shape.id}
                shape={shape}
                imageElement={imageElement}
                isSelected={shape.id === selectedId}
                onRemove={() => handleRemove(shape.id)}
                onSelect={() => selectShape(shape.id)}
                onChange={newAttrs => {
                  const _shapes = shapes.slice();
                  _shapes[i] = newAttrs;
                  setShapes(_shapes);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default BlurImageTool;
