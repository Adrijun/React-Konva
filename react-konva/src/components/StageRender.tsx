import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { DangerZoneRender } from './DangerZoneRender';
import { PersonSkeletonRender } from './PersonSkeletonRender';
const construction_site = './image/anonym2.jpg';

export function StageRender() {
  const [image] = useImage(construction_site);

  return (
    <>
      <Stage height={window.innerHeight} width={window.innerWidth}>
        <Layer>
          <Image
            image={image}
            height={window.innerHeight}
            width={window.innerWidth}
          />

          <DangerZoneRender />
        </Layer>
        <PersonSkeletonRender />
      </Stage>
    </>
  );
}
