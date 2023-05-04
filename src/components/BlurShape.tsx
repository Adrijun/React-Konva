import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-konva';

export type Shapes = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

interface BlurImageToolShapeProps {
  shape: Shapes;

  imageElement: HTMLImageElement;
}

const BlurImageToolShape = ({
  shape,
  imageElement,
}: BlurImageToolShapeProps) => {
  const blurRef = useRef<Konva.Image>(null);

  useEffect(() => {
    if (blurRef.current) {
      blurRef.current.cache();
    }
  });

  // These two lines of code calculate the scaling factors that need to be applied to the blurred image shape to match the size and position of the original image
  const scaleX = imageElement ? imageElement.width / window.innerWidth : 1;
  const scaleY = imageElement ? imageElement.height / window.innerHeight : 1;
  return (
    <>
      <Image
        ref={blurRef}
        x={shape.x}
        y={shape.y}
        width={shape.width}
        height={shape.height}
        image={imageElement}
        cropX={shape.x * scaleX}
        cropY={shape.y * scaleY}
        cropWidth={shape.width * scaleX}
        cropHeight={shape.height * scaleY}
        filters={[Konva.Filters.Blur]}
        blurRadius={30}
        fill="black"
      />
    </>
  );
};

export default BlurImageToolShape;
