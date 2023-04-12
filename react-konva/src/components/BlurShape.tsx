import Konva from 'konva';
import React, { useEffect, useRef } from 'react';
import { Transformer, Image } from 'react-konva';

export type Shape = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

interface BlurImageToolShapeProps {
  shape: Shape;
  isSelected: boolean;
  //   onRemove: () => void;
  onSelect: () => void;
  //   onChange: (value: Shape) => void;
  imageElement?: HTMLImageElement;
}

const BlurImageToolShape = ({
  shape,
  isSelected,
  //   onRemove,
  //   onSelect,
  //   onChange,
  imageElement,
}: BlurImageToolShapeProps) => {
  const shapeRef: any = useRef<Konva.Line>(null);
  const transformerRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (isSelected && shapeRef.current && transformerRef.current) {
      // we need to attach transformer manually
      transformerRef.current.nodes([shapeRef.current]);
      transformerRef.current.getLayer()!.batchDraw();
    }
  }, [isSelected]);

  React.useEffect(() => {
    shapeRef.current.cache();
  });

  return (
    <>
      <Image
        // onClick={onSelect}
        // onTap={onSelect}
        ref={shapeRef}
        {...shape}
        fill="black"
        image={imageElement}
        cropX={shape.x}
        cropY={shape.y}
        cropWidth={shape.width}
        cropHeight={shape.height}
        filters={[Konva.Filters.Blur]}
        blurRadius={25}
      />

      <Transformer
        ref={transformerRef}
        boundBoxFunc={(oldBox, newBox) => {
          // limit resize
          if (newBox.width < 5 || newBox.height < 5) {
            return oldBox;
          }
          return newBox;
        }}
        rotateEnabled={false}
        keepRatio={false}
      />
    </>
  );
};

export default BlurImageToolShape;
