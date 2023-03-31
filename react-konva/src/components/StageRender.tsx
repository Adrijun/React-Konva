import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { DangerZoneRender } from './DangerZoneRender';
import { PersonSkeletonRender } from './PersonSkeletonRender';
import { useEffect, useState } from 'react';
import { IKeypoints } from '../Models/IKeypoints';
import { getDetections, getKeypoints } from '../apis/apirequest';
import { getDangerZoneCoordinates } from '../apis/apirequest';
import { DetectionsRender } from './DetectionsRender';
import { ImageRender } from './ImageRender';

const construction_site = './image/construction_site.jpg';

// Useeffect för api
// Använd props för att skicka APi till Dangerzone render och Person SKeletonrender
export function StageRender() {
  const [keyPointsData, setData] = useState<Array<IKeypoints>>();
  const [dangerZoneData, setDangerZoneData] = useState();
  const [detectionData, setDetectionData] = useState();
  useEffect(() => {
    const runKeyPoints = async () => {
      const allKeypoints = await getKeypoints();
      setData(allKeypoints.data);
    };
    runKeyPoints();
  }, []);

  useEffect(() => {
    const runDangerZone = async () => {
      const allDangerZoneCoordinates = await getDangerZoneCoordinates();
      setDangerZoneData(allDangerZoneCoordinates.data);
    };
    runDangerZone();
  }, []);

  useEffect(() => {
    const runDetection = async () => {
      const allDetections = await getDetections();
      setDetectionData(allDetections.data);
    };
    runDetection();
  }, []);

  return (
    <>
      <Stage height={window.innerHeight} width={window.innerWidth}>
        <Layer>
          <ImageRender />
          {/* <Image
            image={image}
            height={window.innerHeight}
            width={window.innerWidth}
          /> */}

          {dangerZoneData && (
            <DangerZoneRender dangerZonesCoordinates={dangerZoneData} />
          )}

          {detectionData && (
            <DetectionsRender detections={detectionData} groups />
          )}
          {keyPointsData && <PersonSkeletonRender keypoints={keyPointsData} />}
        </Layer>
      </Stage>
    </>
  );
}
