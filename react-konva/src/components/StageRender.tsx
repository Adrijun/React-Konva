import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { DangerZoneRender } from './DangerZoneRender';
import { PersonSkeletonRender } from './PersonSkeletonRender';
import { useEffect, useState } from 'react';
import { IKeypoints } from '../Models/IKeypoints';
import { getKeypoints } from '../apis/apirequest';
import { getDangerZoneCoordinates } from '../apis/apirequest';
const construction_site = './image/anonym2.jpg';

// Useeffect för api
// Använd props för att skicka APi till Dangerzone render och Person SKeletonrender
export function StageRender() {
  const [image] = useImage(construction_site);
  const [data, setData] = useState<Array<IKeypoints>>();
  const [dangerZoneData, setDangerZoneData] = useState();

  useEffect(() => {
    const subscribe = async () => {
      const allKeypoints = await getKeypoints();
      setData(allKeypoints.data);
      console.log(allKeypoints, 'data');
    };
    subscribe();
  }, []);

  useEffect(() => {
    const runDangerZone = async () => {
      const allDangerZoneCoordinates = await getDangerZoneCoordinates();
      setDangerZoneData(allDangerZoneCoordinates.data);
      console.log(allDangerZoneCoordinates, 'allDangerZoneCoordinates');
    };
    runDangerZone();
  }, []);

  return (
    <>
      <Stage height={window.innerHeight} width={window.innerWidth}>
        <Layer>
          <Image
            image={image}
            height={window.innerHeight}
            width={window.innerWidth}
          />

          {dangerZoneData && (
            <DangerZoneRender dangerZonesCoordinatesOne={dangerZoneData} />
          )}
        </Layer>
        {data && <PersonSkeletonRender keypoints={data} />}
      </Stage>
    </>
  );
}
