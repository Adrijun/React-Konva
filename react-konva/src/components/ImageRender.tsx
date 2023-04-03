import Konva from 'konva';
import React, { useEffect, useRef } from 'react';
import { Image, Line } from 'react-konva';
import useImage from 'use-image';
const construction_site = './image/construction_site.jpg';
export const ImageRender = () => {
  const [image] = useImage(construction_site);
  const imageRef = useRef<any>();

  useEffect(() => {
    if (image) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current.cache();
    }
  }, [image]);
  return (
    <>
      {/* <Image
        ref={imageRef}
        image={image}
        // filters={[Konva.Filters.Blur]}
        // blurRadius={1}
        height={window.innerHeight}
        width={window.innerWidth}
      /> */}
    </>
  );
};
