import React, { FC } from 'react';
import { Line } from 'react-konva';
import { IDangerZonesCoordinates } from '../Models/IDangerZonesCoordinates';

import '../scss/dangerzonerender.scss';
interface Props {
  dangerZonesCoordinatesOne: any;
}

export const DangerZoneRender: FC<Props> = ({ dangerZonesCoordinatesOne }) => {
  console.log(dangerZonesCoordinatesOne, 'dangerZonesCoordinatesOne');

  const dangerzonesColor = 'rgba(49,32,128,0.6)';

  function getMultipliedOfPostions(
    coordinatesValue: number,
    heightWidthValue: number
  ) {
    return coordinatesValue * heightWidthValue;
  }

  return (
    <>
      {dangerZonesCoordinatesOne.map((dangerZonesArrays: any[]) => {
        // flattened  points are  not normalized coordinates
        return dangerZonesArrays.map(dangerzone => {
          const flattenedPoints = dangerzone.reduce(
            (a: string | any[], b: any) => a.concat(b),
            []
          );

          //flattened points are multiplited width height and width to be normalized
          const dangerZonesPoints = flattenedPoints.map(
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
                  <Line
                    id="dangerzones"
                    points={dangerZonesPoints}
                    strokeWidth={1}
                    stroke={dangerzonesColor}
                    fill={dangerzonesColor}
                    closed
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
