import { Image, Layer, Stage, Group } from 'react-konva';
import useImage from 'use-image';
import { DangerZoneRender } from './DangerZoneRender';
import { PersonSkeletonRender } from './PersonSkeletonRender';
import { useEffect, useState } from 'react';
import { IKeypoints } from '../Models/IKeypoints';
import { getDetections, getKeypoints } from '../apis/apirequest';
import { getDangerZoneCoordinates } from '../apis/apirequest';
import { DetectionsRender } from './DetectionsRender';
const construction_site = './image/anonym2.jpg';

// Useeffect för api
// Använd props för att skicka APi till Dangerzone render och Person SKeletonrender
export function StageRender() {
  const [image] = useImage(construction_site);
  const [data, setData] = useState<Array<IKeypoints>>();
  const [dangerZoneData, setDangerZoneData] = useState();
  const [detectionData, setDetectionData] = useState();
  useEffect(() => {
    const subscribe = async () => {
      const allKeypoints = await getKeypoints();
      setData(allKeypoints.data);
    };
    subscribe();
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
          <Group>
            <Image
              image={image}
              height={window.innerHeight}
              width={window.innerWidth}
            />
          </Group>
          {dangerZoneData && (
            <DangerZoneRender dangerZonesCoordinatesOne={dangerZoneData} />
          )}
        </Layer>
        {data && <PersonSkeletonRender keypoints={data} />}
        {detectionData && <DetectionsRender detections={detectionData} />}
      </Stage>
    </>
  );
}
