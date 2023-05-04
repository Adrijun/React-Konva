import React, { FC, useState } from 'react';
import { Line } from 'react-konva';

// This component is taking in the coordinates and draw lines of a dangerzone
interface Props {
  dangerZonesCoordinates: any;
}

const DangerZoneRender: FC<Props> = function DangerZoneRender({
  dangerZonesCoordinates,
}) {
  const [dangerzonesColor, setDangerzonesColor] = useState(
    'rgba(49,32,128,0.3)'
  );
  const [dangerzonesStrokeWidth, setDangerzonesStrokeWidth] = useState(1);
  const [dangerzonesShadowBlur, setDangerzonesShadowBlur] = useState(1);
  const handleMouseEnter = () => {
    setDangerzonesColor('rgba(49,32,128,0.4)');
    setDangerzonesStrokeWidth(1);
    setDangerzonesShadowBlur(6);
  };

  const handleMouseLeave = () => {
    setDangerzonesColor('rgba(49,32,128,0.3)');
    setDangerzonesStrokeWidth(1);
    setDangerzonesShadowBlur(1);
  };

  // Normalising the coordinates of the detection zone to the size of the window.
  function getMultipliedOfPostions(
    coordinatesValue: number,
    heightWidthValue: number
  ) {
    return coordinatesValue * heightWidthValue;
  }
  return (
    <>
      {
        // Maps out the arrays and reduces into one
        dangerZonesCoordinates.map((dangerZonesArr: any[]) =>
          dangerZonesArr.map(dangerzone => {
            const flattenedPoints = dangerzone.reduce(
              (a: string | any[], b: any) => a.concat(b),
              []
            );
            // dangerZonesPoints are now normalized and are being used down in Line so it can be drawn
            const dangerZonesPoints = flattenedPoints.map(
              (value: number, index: number) => {
                if (index % 2) {
                  return getMultipliedOfPostions(value, window.innerHeight);
                }
                return getMultipliedOfPostions(value, window.innerWidth);
              }
            );

            return (
              <Line
                key={dangerzone}
                id="dangerzones"
                points={dangerZonesPoints}
                strokeWidth={dangerzonesStrokeWidth}
                stroke={dangerzonesColor}
                shadowBlur={dangerzonesShadowBlur}
                fill={dangerzonesColor}
                closed
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            );
          })
        )
      }
    </>
  );
};

export default DangerZoneRender;
