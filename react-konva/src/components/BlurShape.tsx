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
  onRemove: () => void;
  onSelect: () => void;
  onChange: (value: Shape) => void;
  imageElement: HTMLImageElement;
}

const BlurImageToolShape = ({
  shape,
  isSelected,
  onRemove,
  onSelect,
  onChange,
  imageElement,
}: BlurImageToolShapeProps) => {
  const shapeRef = useRef<Konva.Rect>(null);
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
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shape}
        fill="black"
        image={imageElement}
        cropX={shape.x}
        cropY={shape.y}
        cropWidth={shape.width}
        cropHeight={shape.height}
        draggable
        onDblClick={onRemove}
        onDragStart={onSelect}
        filters={[Konva.Filters.Blur]}
        blurRadius={50}
        onDragEnd={e => {
          onChange({
            ...shape,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current!;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shape,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
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
      )}
    </>
  );
};

export default BlurImageToolShape;
