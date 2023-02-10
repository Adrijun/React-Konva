import { Stage, Layer, Image, Line, Circle } from 'react-konva';
import useImage from 'use-image';
import { parts } from '../constants/Parts';
import { connectSkeleton } from '../constants/PersonSkeleton';
import React from 'react';
const construction_site = './image/construction_siteAnonym.JPEG';

export function Skeleton() {
  const [image] = useImage(construction_site); // Bild
  interface ISkeleton {
    name: string;
    coordinates: [
      {
        x: number;
        y: number;
        x1: number;
        y1: number;
      }
    ];
  }
  return (
    <>
      <Stage height={window.innerHeight} width={window.innerWidth}>
        <Layer>
          <Image
            id="ImageC"
            image={image}
            height={window.innerHeight}
            width={window.innerWidth}
          />
        </Layer>
        <Layer>
          {connectSkeleton.map(Skeleton => {
            const skeletonLine = Skeleton.coordinates.map(coordinate => {
              const x1 = coordinate.x1 * window.innerWidth;
              const y1 = coordinate.y1 * window.innerHeight;
              const x = coordinate.x * window.innerWidth;
              const y = coordinate.y * window.innerHeight;
              console.log(parts);

              return (
                <>
                  <Line
                    key={Skeleton.name}
                    points={[x, y, x1, y1]}
                    strokeWidth={2}
                    stroke={coordinate.colorSkeletonLines}
                  />

                  <Circle
                    x={x}
                    y={y}
                    radius={4}
                    fill={coordinate.colorDotOne}
                  />
                  <Circle
                    x={x1}
                    y={y1}
                    radius={4}
                    fill={coordinate.colorDotTwo}
                  />
                </>
              );
            });

            return <>{skeletonLine}</>;
          })}
        </Layer>
      </Stage>
    </>
  );
}
