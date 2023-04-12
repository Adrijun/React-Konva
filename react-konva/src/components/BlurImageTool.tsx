// import { KonvaEventObject } from 'konva/lib/Node';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';

import BlurShape, { Shape } from './BlurShape';

export interface BlurImageToolProps {
  imageElement?: HTMLImageElement;
  detections: Array<[]>;
}

const BlurImageTool = ({ imageElement, detections }: BlurImageToolProps) => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    handleAddMask();
  }, []);

  function getMultipliedOfPostions(
    coordinatesValue: number,
    heightWidthValue: number
  ) {
    return coordinatesValue * heightWidthValue;
  }

  function handleAddMask() {
    const newShapes: Shape[] = [];
    detections.forEach((detectionsArrays: any[]) => {
      detectionsArrays.forEach(detectionZone => {
        const flattenedPoints = detectionZone.reduce(
          (a: string | any[], b: any) => a.concat(b),
          []
        );

        const detectionPoints = flattenedPoints.map(
          (value: number, index: number) => {
            if (index % 2) {
              return getMultipliedOfPostions(value, window.innerHeight);
            }
            return getMultipliedOfPostions(value, window.innerWidth);
          }
        );
        // Brings out the width and height of the blur effect
        const coord1 = { x: detectionPoints[0], y: detectionPoints[1] };
        const coord2 = { x: detectionPoints[2], y: detectionPoints[1] };
        const blurWidth = Math.sqrt(
          Math.pow(coord2.x - coord1.x, 2) + Math.pow(coord2.y - coord1.y, 2)
        );
        const coord3 = { x: detectionPoints[2], y: detectionPoints[1] };
        const coord4 = { x: detectionPoints[2], y: detectionPoints[3] };
        const blurHeight = Math.sqrt(
          Math.pow(coord4.x - coord3.x, 2) + Math.pow(coord4.y - coord3.y, 2)
        );

        const id = uuidv4();
        newShapes.push({
          id: id,
          x: detectionPoints[0],
          y: detectionPoints[1],
          width: blurWidth + 3,
          height: blurHeight,
        });
        console.log(newShapes, 'newShapes');
      });
    });
    setShapes(newShapes);
  }

  function selectShape(id: string | null) {
    setSelectedId(id);
  }

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
