import { Line } from 'react-konva';
import { dangerZonesCoordinates } from '../constants/Dangerzones';

export const DangerZoneRender = () => {
  const dangerzonesColor = 'rgba(49,32,128,0.6)';

  function getMultipliedOfPostions(
    coordinatesValue: number,
    heightWidthValue: number
  ) {
    return coordinatesValue * heightWidthValue;
  }

  return (
    <>
      {dangerZonesCoordinates.map(dangerZonesArrays => {
        // flattened  points are  not normalized coordinates
        return dangerZonesArrays.map(dangerzone => {
          const flattenedPoints = dangerzone.reduce((a, b) => a.concat(b), []);

          //flattened points are multiplited width height and width to be normalized
          const dangerZonesPoints = flattenedPoints.map((value, index) => {
            if (index % 2) {
              return getMultipliedOfPostions(value, window.innerHeight);
            }
            return getMultipliedOfPostions(value, window.innerWidth);
          });

          return (
            <>
              {
                <Line
                  points={dangerZonesPoints}
                  strokeWidth={1}
                  stroke={dangerzonesColor}
                  fill={dangerzonesColor}
                  closed
                ></Line>
              }
            </>
          );
        });
      })}
    </>
  );
};
