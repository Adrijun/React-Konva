import Konva from 'konva';
import '../scss/detectionsrender.scss';
import { FC, useEffect, useRef } from 'react';
import { Line, Text } from 'react-konva';
import React from 'react';
interface Props {
  detections: Array<[]>;
  groups: any;
}
export const DetectionsRender: FC<Props> = ({ detections }) => {
  const blurRef = useRef<any>(null);

  useEffect(() => {
    if (blurRef.current) {
      blurRef.current.cache({ offset: 10 });
    }
  }, [blurRef]);

  function getMultipliedOfPostions(
    coordinatesValue: number,
    heightWidthValue: number
  ) {
    return coordinatesValue * heightWidthValue;
  }

  return (
    <>
      {detections.map((detectionsArrays: any[]) => {
        // flattened  points are  not normalized coordinates
        return detectionsArrays.map(detectionZone => {
          const detectionLabel = detectionZone[5];
          console.log(detectionLabel, 'detectionLabel');

          const flattenedPoints = detectionZone.reduce(
            (a: string | any[], b: any) => a.concat(b),
            []
          );
          // Label for detection

          //flattened points are multiplited width height and width to be normalized
          const detectionPoints = flattenedPoints.map(
            (value: number, index: number) => {
              if (index % 2) {
                return getMultipliedOfPostions(value, window.innerHeight);
              }
              return getMultipliedOfPostions(value, window.innerWidth);
            }
          );

          return (
            <>
              {
                <>
                  <Text
                    x={detectionPoints[0]}
                    y={detectionPoints[1] - 25}
                    text={detectionLabel}
                    fontSize={20}
                    fill="rgb(30,234,8)"
                  />
                  <Line
                    ref={blurRef}
                    points={[
                      detectionPoints[0],
                      detectionPoints[1],
                      detectionPoints[2],
                      detectionPoints[1],
                      detectionPoints[2],
                      detectionPoints[3],
                      detectionPoints[0],
                      detectionPoints[3],
                    ]}
                    closed
                    filters={[Konva.Filters.Blur, Konva.Filters.Pixelate]}
                    fillLinearGradientStartPoint={{
                      x: detectionPoints[0],
                      y: detectionPoints[1],
                    }}
                    fillLinearGradientEndPoint={{
                      x: detectionPoints[2],
                      y: detectionPoints[3],
                    }}
                    fillLinearGradientColorStops={[0, 'white', 1, 'black']}
                    opacity={0.9}
                    blurRadius={5}
                    pixelSize={5}
                  ></Line>
                  <Line
                    points={[
                      detectionPoints[0],
                      detectionPoints[1],
                      detectionPoints[2],
                      detectionPoints[1],
                      detectionPoints[2],
                      detectionPoints[3],
                      detectionPoints[0],
                      detectionPoints[3],
                    ]}
                    closed
                    strokeWidth={4}
                    stroke="rgb(30,234,8)"
                    shadowBlur={1}
                    shadowColor="rgb(30,234,8)"
                  ></Line>
                </>
              }
            </>
          );
        });
      })}
    </>
  );
};
