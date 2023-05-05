import React, { useEffect, useRef, useState } from 'react';
import '../scss/stagerender.scss';
import { Layer, Stage } from 'react-konva';
import DangerZoneRender from './DangerZoneRender';
import { PersonSkeletonRender } from './PersonSkeletonRender';
import { IKeypoints } from '../Models/IKeypoints';
import { getDetections, getKeypoints } from '../apis/apirequest';
import { getDangerZoneCoordinates } from '../apis/apirequest';
import DetectionsRender from './DetectionsRender';
import BlurImageTool from './BlurImageTool';
import Konva from 'konva';
import { Triangle } from 'react-loader-spinner';
import constructionSite from './../images/construction_site.jpg';
import dataResponse from './../apis/db.json'; // Används för demo
const imageElement = document.createElement('img');
imageElement.crossOrigin = 'anonymous';
imageElement.src = constructionSite;

// Använd props för att skicka APi till Dangerzone render och Person SKeletonrender
export function StageRender() {
  const [isLoading, setIsLoading] = useState(true);
  const stageRef = useRef<Konva.Stage>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Simulera laddningstiden för filtret i 3 sekunder
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  // Useeffect för api
  // const [keyPointsData, Data] = useState<Array<IKeypoints>>();
  // const [dangerZoneData, setDangerZoneData] = useState();
  // const [detectionData, setDetectionData] = useState();
  // const detections = dataResponse.detections;
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./../apis/db.json');
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.log('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const runKeyPoints = async () => {
  //     const allKeypoints = await getKeypoints();
  //     setData(allKeypoints.data);
  //   };
  //   runKeyPoints();
  // }, []);

  // useEffect(() => {
  //   const runDangerZone = async () => {
  //     const allDangerZoneCoordinates = await getDangerZoneCoordinates();
  //     setDangerZoneData(allDangerZoneCoordinates.data);
  //   };
  //   runDangerZone();
  // }, []);

  // useEffect(() => {
  //   const runDetection = async () => {
  //     const allDetections = await getDetections();
  //     setDetectionData(allDetections.data);
  //   };
  //   runDetection();
  // }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) : (
        <div className="content">
          <div ref={containerRef}>
            {imageElement && (
              <Stage
                height={window.innerHeight}
                width={window.innerWidth}
                ref={stageRef}
              >
                <Layer>
                  {dataResponse && (
                    <BlurImageTool
                      imageElement={imageElement}
                      data={dataResponse.detections}
                    />
                  )}
                  {dataResponse && (
                    <DangerZoneRender
                      dangerZonesCoordinates={dataResponse.danger_zone}
                    />
                  )}

                  {dataResponse && (
                    <DetectionsRender detections={dataResponse.detections} />
                  )}
                  {/* {dataResponse && (
                    <PersonSkeletonRender
                      keypoints={dataResponse.keypoints}
                      skeletons={dataResponse.skeleton}
                    />
                  )} */}
                </Layer>
              </Stage>
            )}
          </div>
        </div>
      )}
    </>
  );
}
