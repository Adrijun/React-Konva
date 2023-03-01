import { Circle, Image, Layer, Line, Stage } from 'react-konva';
import { parts } from '../constants/Parts';
import useImage from 'use-image';
import { Key } from 'react';
import { dangerZones } from '../constants/Dangerzones';
const construction_site = './image/anonym2.jpg';

export function PersonSkeleton() {
  const [image] = useImage(construction_site);

  const green = 'rgb(17,244,8)';
  const blue = 'rgb(12,123,241)';
  const orange = 'rgb(250,152,58)';
  const purple = 'rgb(104,47,100)';
  console.log();
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
          {dangerZones.map(dangerZone => {
            return dangerZone.map(dangerZoneCoordinates => {
              return dangerZoneCoordinates.map(coordinates => {
                const x = coordinates[0] * window.innerHeight;
                const y = coordinates[1] * window.innerWidth;
                console.log(x, 'X', y, 'Y');

                return (
                  <>
                    {
                      <>
                        <Line
                          x={x}
                          y={y}
                          points={[x, y]}
                          strokeWidth={4}
                          stroke="Magenta"
                        />
                        <Circle x={x} y={y} radius={4} fill="blue" />
                      </>
                    }
                  </>
                );
              });
            });
          })}
        </Layer>
        {parts.map(part => {
          const connectSkeleton = [
            {
              name: 'right_ankle-right_knee',
              coordinates: [
                {
                  x: part[15].x,
                  y: part[15].y,
                  x1: part[13].x,
                  y1: part[13].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: blue,
                },
              ],
            },
            {
              name: 'right_knee-right_hip',
              coordinates: [
                {
                  x: part[13].x,
                  y: part[13].y,
                  x1: part[11].x,
                  y1: part[11].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: blue,
                },
              ],
            },
            {
              name: 'left_ankle-left_knee',
              coordinates: [
                {
                  x: part[16].x,
                  y: part[16].y,
                  x1: part[14].x,
                  y1: part[14].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: blue,
                },
              ],
            },
            {
              name: 'left_knee-left_hip',
              coordinates: [
                {
                  x: part[14].x,
                  y: part[14].y,
                  x1: part[12].x,
                  y1: part[12].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: blue,
                },
              ],
            },

            {
              name: 'left_hip-right_hip',
              coordinates: [
                {
                  x: part[11].x,
                  y: part[11].y,
                  x1: part[12].x,
                  y1: part[12].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: purple,
                },
              ],
            },
            {
              name: 'right_shoulder-right_hip',
              coordinates: [
                {
                  x: part[5].x,
                  y: part[5].y,
                  x1: part[11].x,
                  y1: part[11].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: purple,
                },
              ],
            },
            {
              name: 'left_shoulder-left_hip',
              coordinates: [
                {
                  x: part[6].x,
                  y: part[6].y,
                  x1: part[12].x,
                  y1: part[12].y,
                  colorDotOne: blue,
                  colorDotTwo: blue,
                  colorSkeletonLines: purple,
                },
              ],
            },
            {
              name: 'left_shoulder-right_shoulder',
              coordinates: [
                {
                  x: part[5].x,
                  y: part[5].y,
                  x1: part[6].x,
                  y1: part[6].y,
                  colorDotOne: orange,
                  colorDotTwo: orange,
                  colorSkeletonLines: orange,
                },
              ],
            },

            {
              name: 'right_shoulder-right_elbow',
              coordinates: [
                {
                  x: part[5].x,
                  y: part[5].y,
                  x1: part[7].x,
                  y1: part[7].y,
                  colorDotOne: orange,
                  colorDotTwo: orange,
                  colorSkeletonLines: orange,
                },
              ],
            },

            {
              name: 'left_shoulder-left_elbow',
              coordinates: [
                {
                  x: part[6].x,
                  y: part[6].y,
                  x1: part[8].x,
                  y1: part[8].y,
                  colorDotOne: orange,
                  colorDotTwo: orange,
                  colorSkeletonLines: orange,
                },
              ],
            },
            {
              name: 'right_elbow-right_wrist',
              coordinates: [
                {
                  x: part[7].x,
                  y: part[7].y,
                  x1: part[9].x,
                  y1: part[9].y,
                  colorDotOne: orange,
                  colorDotTwo: orange,
                  colorSkeletonLines: orange,
                },
              ],
            },

            {
              name: 'left_elbow-left_wrist',
              coordinates: [
                {
                  x: part[8].x,
                  y: part[8].y,
                  x1: part[10].x,
                  y1: part[10].y,
                  colorDotOne: orange,
                  colorDotTwo: orange,
                  colorSkeletonLines: orange,
                },
              ],
            },

            {
              name: 'left_eye-right_eye',
              coordinates: [
                {
                  x: part[1].x,
                  y: part[1].y,
                  x1: part[2].x,
                  y1: part[2].y,
                  colorDotOne: green,
                  colorDotTwo: green,
                  colorSkeletonLines: green,
                },
              ],
            },

            {
              name: 'nose-left_eye',
              coordinates: [
                {
                  x: part[0].x,
                  y: part[0].y,
                  x1: part[1].x,
                  y1: part[1].y,
                  colorDotOne: green,
                  colorDotTwo: green,
                  colorSkeletonLines: green,
                },
              ],
            },

            {
              name: 'nose-right_eye',
              coordinates: [
                {
                  x: part[0].x,
                  y: part[0].y,
                  x1: part[2].x,
                  y1: part[2].y,
                  colorDotOne: green,
                  colorDotTwo: green,
                  colorSkeletonLines: green,
                },
              ],
            },
            {
              name: 'right_eye-right_ear',
              coordinates: [
                {
                  x: part[1].x,
                  y: part[1].y,
                  x1: part[3].x,
                  y1: part[3].y,
                  colorDotOne: green,
                  colorDotTwo: green,
                  colorSkeletonLines: green,
                },
              ],
            },
            {
              name: 'left_eye-left_ear',
              coordinates: [
                {
                  x: part[2].x,
                  y: part[2].y,
                  x1: part[4].x,
                  y1: part[4].y,
                  colorDotOne: green,
                  colorDotTwo: green,
                  colorSkeletonLines: green,
                },
              ],
            },
            {
              name: 'right_ear-right_shoulder',
              coordinates: [
                {
                  x: part[3].x,
                  y: part[3].y,
                  x1: part[5].x,
                  y1: part[5].y,
                  colorDotOne: green,
                  colorDotTwo: orange,
                  colorSkeletonLines: green,
                },
              ],
            },
            {
              name: 'left_ear-left_shoulder',
              coordinates: [
                {
                  x: part[4].x,
                  y: part[4].y,
                  x1: part[6].x,
                  y1: part[6].y,
                  colorDotOne: green,
                  colorDotTwo: orange,
                  colorSkeletonLines: green,
                },
              ],
            },
          ];
          return (
            <>
              <Layer>
                {connectSkeleton.map(
                  (Skeleton: {
                    coordinates: any[];
                    name: Key | null | undefined;
                  }) => {
                    const skeletonLine = Skeleton.coordinates.map(
                      (coordinate: {
                        x1: number;
                        y1: number;
                        x: number;
                        y: number;
                        colorSkeletonLines: string | CanvasGradient | undefined;
                        colorDotOne: string | undefined;
                        colorDotTwo: string | undefined;
                      }) => {
                        const x1 = coordinate.x1 * window.innerWidth;
                        const y1 = coordinate.y1 * window.innerHeight;
                        const x = coordinate.x * window.innerWidth;
                        const y = coordinate.y * window.innerHeight;
                        if (
                          x1 === null ||
                          y1 === null ||
                          x === null ||
                          y === null
                        ) {
                          return null;
                        }
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
                      }
                    );
                    return <>{skeletonLine}</>;
                  }
                )}
              </Layer>
            </>
          );
        })}
      </Stage>
    </>
  );
}
