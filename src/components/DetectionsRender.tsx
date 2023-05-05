import React, { FC, useState } from 'react';
import { Line, Text } from 'react-konva';

// This component renders a bounding box around the person skeleton
interface Props {
  // detections: Array<[]>;
  detections: (string | number)[][][];
}

const DetectionsRender: FC<Props> = function DetectionsRender({ detections }) {
  // Normalising the coordinates of the detection zone to the size of the window.
  function getMultipliedOfPostions(
    coordinatesValue: number,
    heightWidthValue: number
  ) {
    return coordinatesValue * heightWidthValue;
  }

  const [detectionZonesColor, setDetectionzonesColor] =
    useState('rgb(30, 234, 8)');
  const [DetectionzonesStrokeWidth, setDetectionzonesStrokeWidth] = useState(4);
  const [DetectionzonesShadowBlur, setDetectionzonesShadowBlur] = useState(1);
  const [DetectionzonesPersonLabel, setDetectionzonesPersonLabel] =
    useState(18);
  const [DetectionzonesPersonLabelColor, setDetectionzonesPersonLabelColor] =
    useState('rgb(30, 234, 8)');

  const handleMouseEnter = () => {
    setDetectionzonesColor('rgba(30, 234, 8, 0.8)');
    setDetectionzonesStrokeWidth(6);
    setDetectionzonesShadowBlur(3);
    setDetectionzonesPersonLabel(20);
    setDetectionzonesPersonLabelColor('rgb(30, 234, 8)');
  };

  const handleMouseLeave = () => {
    setDetectionzonesColor('rgb(30, 234, 8)');
    setDetectionzonesStrokeWidth(4);
    setDetectionzonesShadowBlur(1);
    setDetectionzonesPersonLabel(18);
    setDetectionzonesPersonLabelColor('rgb(30, 234, 8)');
  };
  return (
    <>
      {detections.map((detectionsArrays: any[]) =>
        detectionsArrays.map(detectionZone => {
          const detectionLabel = detectionZone[5];

          const flattenedPoints = detectionZone.reduce(
            (a: string | any[], b: any) => a.concat(b),
            []
          );

          // detectionPoints are now normalized and being used in Line so it can draw boundingboxes
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
              <Text
                x={detectionPoints[0]}
                y={detectionPoints[1] - 25}
                text={detectionLabel}
                fontSize={DetectionzonesPersonLabel}
                fill={DetectionzonesPersonLabelColor}
                // shadowBlur={DetectionzonesShadowBlur}
                // shadowColor={detectionZonesColor}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />

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
                strokeWidth={DetectionzonesStrokeWidth}
                stroke={detectionZonesColor}
                shadowBlur={DetectionzonesShadowBlur}
                shadowColor={detectionZonesColor}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                lineJoin="round"
                tension={0.02}
              />
            </>
          );
        })
      )}
    </>
  );
};

export default DetectionsRender;
