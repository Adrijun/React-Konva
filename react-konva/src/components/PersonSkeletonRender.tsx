import Konva from 'konva';
import { FC, Key } from 'react';
import { Circle, Line } from 'react-konva';
import { IKeypoints } from '../Models/IKeypoints';
interface Props {
  keypoints: Array<IKeypoints>;
}
export const PersonSkeletonRender: FC<Props> = ({ keypoints }) => {
  const green = 'rgb(17,244,8)';
  const blue = 'rgb(12,123,241)';
  const orange = 'rgb(250,152,58)';
  const purple = 'rgb(104,47,100)';

  return (
    <>
      {keypoints.map((part: IKeypoints) => {
        const connectSkeleton = [
          {
            name: 'right_ankle-right_knee',
            coordinates: [
              {
                x: part.right_ankle[0],
                y: part.right_ankle[1],
                x1: part.right_knee[0],
                y1: part.right_knee[1],
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
                x: part.right_knee[0],
                y: part.right_knee[1],
                x1: part.right_hip[0],
                y1: part.right_hip[1],
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
                x: part.left_ankle[0],
                y: part.left_ankle[1],
                x1: part.left_knee[0],
                y1: part.left_knee[1],
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
                x: part.left_knee[0],
                y: part.left_knee[1],
                x1: part.left_hip[0],
                y1: part.left_hip[1],
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
                x: part.left_hip[0],
                y: part.left_hip[1],
                x1: part.right_hip[0],
                y1: part.right_hip[1],
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
                x: part.right_shoulder[0],
                y: part.right_shoulder[1],
                x1: part.right_hip[0],
                y1: part.right_hip[1],
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
                x: part.left_shoulder[0],
                y: part.left_shoulder[1],
                x1: part.left_hip[0],
                y1: part.left_hip[1],
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
                x: part.left_shoulder[0],
                y: part.left_shoulder[1],
                x1: part.right_shoulder[0],
                y1: part.right_shoulder[1],
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
                x: part.right_shoulder[0],
                y: part.right_shoulder[1],
                x1: part.right_elbow[0],
                y1: part.right_elbow[1],
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
                x: part.left_shoulder[0],
                y: part.left_shoulder[1],
                x1: part.left_elbow[0],
                y1: part.left_elbow[1],
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
                x: part.right_elbow[0],
                y: part.right_elbow[1],
                x1: part.right_wrist[0],
                y1: part.right_wrist[1],
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
                x: part.left_elbow[0],
                y: part.left_elbow[1],
                x1: part.left_wrist[0],
                y1: part.left_wrist[1],
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
                x: part.left_eye[0],
                y: part.left_eye[1],
                x1: part.right_eye[0],
                y1: part.right_eye[1],
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
                x: part.nose[0],
                y: part.nose[1],
                x1: part.left_eye[0],
                y1: part.left_eye[1],
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
                x: part.nose[0],
                y: part.nose[1],
                x1: part.right_eye[0],
                y1: part.right_eye[1],
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
                x: part.right_eye[0],
                y: part.right_eye[1],
                x1: part.right_ear[0],
                y1: part.right_ear[1],
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
                x: part.left_eye[0],
                y: part.left_eye[1],
                x1: part.left_ear[0],
                y1: part.left_ear[1],
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
                x: part.right_ear[0],
                y: part.right_ear[1],
                x1: part.right_shoulder[0],
                y1: part.right_shoulder[1],
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
                x: part.left_ear[0],
                y: part.left_ear[1],
                x1: part.left_shoulder[0],
                y1: part.left_shoulder[1],
                colorDotOne: green,
                colorDotTwo: orange,
                colorSkeletonLines: green,
              },
            ],
          },
        ];
        return (
          <>
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
          </>
        );
      })}
    </>
  );
};
