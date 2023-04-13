import Konva from 'konva';
import React, { useEffect, useRef } from 'react';
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

  imageElement?: HTMLImageElement;
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

  const { x, y, width, height } = shape;
  const scaleX = imageElement ? imageElement.width / window.innerWidth : 1;
  const scaleY = imageElement ? imageElement.height / window.innerHeight : 1;

  return (
    <>
      <Image
        ref={blurRef}
        x={x}
        y={y}
        width={width}
        height={height}
        image={imageElement}
        cropX={x * scaleX}
        cropY={y * scaleY}
        cropWidth={width * scaleX}
        cropHeight={height * scaleY}
        filters={[Konva.Filters.Blur]}
        blurRadius={20}
        fill="black"
      />
    </>
  );
};

export default BlurImageToolShape;
