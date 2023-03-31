import Konva from 'konva';
import React, { useRef } from 'react';
import { Image, Line } from 'react-konva';
import useImage from 'use-image';
const construction_site = './image/construction_site.jpg';
export const ImageRender = () => {
  const [image] = useImage(construction_site);
  const imageRef = useRef<any>();

  React.useEffect(() => {
    if (image) {
      <Line stroke="blue" strokeWidth={24} points={[200, 500, 400, 500]} />;
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current.cache();
    }
  }, [image]);
  return (
    <>
      <Image
        ref={imageRef}
        image={image}
        // filters={[Konva.Filters.Blur]}
        // blurRadius={25}
        height={window.innerHeight}
        width={window.innerWidth}
      />
    </>
  );
};
