import { Stage, Layer, Image, Line, Circle } from 'react-konva';
import useImage from 'use-image';

import React from 'react';
const construction_site = '../image/construction_site.jpg';

export function Skeleton() {
  //Individuella kordinater för kroppsdelar
  const green = 'rgb(17,244,8)';
  const blue = 'rgb(12,123,241)';
  const orange = 'rgb(250,152,58)';
  const purple = 'rgb(104,47,100)';
  const parts = [
    {
      name: 'nose',
      x: 0.7094516754150391,
      y: 0.6242968241373698,
    },
    {
      name: 'left_eye',
      x: 0.7218494415283203,
      y: 0.6201642354329427,
    },
    {
      name: 'right_eye',
      x: 0.6970539093017578,
      y: 0.6201642354329427,
    },
    {
      name: 'left_ear',
      x: 0.7404460906982422,
      y: 0.6284294128417969,
    },
    {
      name: 'right_ear',
      x: 0.6846561431884766,
      y: 0.6242968241373698,
    },
    {
      name: 'left_shoulder',
      x: 0.7776393890380859,
      y: 0.6780204772949219,
    },
    {
      name: 'right_shoulder',
      x: 0.6598606109619141,
      y: 0.6780204772949219,
    },
    {
      name: 'left_elbow',
      x: 0.7962360382080078,
      y: 0.7524070739746094,
    },
    {
      name: 'right_elbow',
      x: 0.6412639617919922,
      y: 0.7400093078613281,
    },
    {
      name: 'left_wrist',
      x: 0.7900371551513672,
      y: 0.8102633158365885,
    },
    {
      name: 'right_wrist',
      x: 0.6288661956787109,
      y: 0.7978655497233073,
    },
    {
      name: 'left_hip',
      x: 0.7528438568115234,
      y: 0.8061307271321615,
    },
    {
      name: 'right_hip',
      x: 0.6784572601318359,
      y: 0.8061307271321615,
    },
    {
      name: 'left_knee',
      x: 0.7590427398681641,
      y: 0.8970476786295573,
    },
    {
      name: 'right_knee',
      x: 0.6908550262451172,
      y: 0.8970476786295573,
    },
    {
      name: 'left_ankle',
      x: 0.7652416229248047,
      y: 0.9755668640136719,
    },
    {
      name: 'right_ankle',
      x: 0.7032527923583984,
      y: 0.9714342753092448,
    },
  ];
  // Ihop parning av kroppsdelar
  const connectSkeleton = [
    {
      name: 'right_ankle-right_knee',
      coordinates: [
        {
          x: parts[15].x,
          y: parts[15].y,
          x1: parts[13].x,
          y1: parts[13].y,
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
          x: parts[13].x,
          y: parts[13].y,
          x1: parts[11].x,
          y1: parts[11].y,
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
          x: parts[16].x,
          y: parts[16].y,
          x1: parts[14].x,
          y1: parts[14].y,
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
          x: parts[14].x,
          y: parts[14].y,
          x1: parts[12].x,
          y1: parts[12].y,
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
          x: parts[11].x,
          y: parts[11].y,
          x1: parts[12].x,
          y1: parts[12].y,
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
          x: parts[5].x,
          y: parts[5].y,
          x1: parts[11].x,
          y1: parts[11].y,
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
          x: parts[6].x,
          y: parts[6].y,
          x1: parts[12].x,
          y1: parts[12].y,
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
          x: parts[5].x,
          y: parts[5].y,
          x1: parts[6].x,
          y1: parts[6].y,
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
          x: parts[5].x,
          y: parts[5].y,
          x1: parts[7].x,
          y1: parts[7].y,
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
          x: parts[6].x,
          y: parts[6].y,
          x1: parts[8].x,
          y1: parts[8].y,
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
          x: parts[7].x,
          y: parts[7].y,
          x1: parts[9].x,
          y1: parts[9].y,
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
          x: parts[8].x,
          y: parts[8].y,
          x1: parts[10].x,
          y1: parts[10].y,
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
          x: parts[1].x,
          y: parts[1].y,
          x1: parts[2].x,
          y1: parts[2].y,
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
          x: parts[0].x,
          y: parts[0].y,
          x1: parts[1].x,
          y1: parts[1].y,
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
          x: parts[0].x,
          y: parts[0].y,
          x1: parts[2].x,
          y1: parts[2].y,
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
          x: parts[1].x,
          y: parts[1].y,
          x1: parts[3].x,
          y1: parts[3].y,
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
          x: parts[2].x,
          y: parts[2].y,
          x1: parts[4].x,
          y1: parts[4].y,
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
          x: parts[3].x,
          y: parts[3].y,
          x1: parts[5].x,
          y1: parts[5].y,
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
          x: parts[4].x,
          y: parts[4].y,
          x1: parts[6].x,
          y1: parts[6].y,
          colorDotOne: green,
          colorDotTwo: orange,
          colorSkeletonLines: green,
        },
      ],
    },
  ];
  const [image] = useImage(construction_site); // Bild
  interface Iskeleton {
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
