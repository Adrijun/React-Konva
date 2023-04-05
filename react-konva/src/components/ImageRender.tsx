import React from 'react';
import useImage from 'use-image';
import { Image } from 'react-konva';
const construction_site = './image/construction_site.jpg';

export const ImageRender = () => {
  const [image] = useImage(construction_site);

  return (
    <>
      <Image
        image={image}
        height={window.innerHeight}
        width={window.innerWidth}
      />
    </>
  );
};
