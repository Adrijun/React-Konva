/* eslint-disable no-restricted-globals */
import { Stage, Layer, Image, Line } from 'react-konva';
import useImage from 'use-image';

const construction_site = '../image/construction_site.jpg';

interface IPersonSkeleton {
  x: number;
  y: number;
  points: any;
  strokeWidth: number;
  stroke: string;
}
const skeletonThree = [
  [
    0.7032527923583984, 0.9714342753092448, 0.6908550262451172,
    0.8970476786295573,
  ],
  [
    0.6784572601318359, 0.8061307271321615, 0.6598606109619141,
    0.6780204772949219,
  ],
  [
    0.6412639617919922, 0.7400093078613281, 0.6288661956787109,
    0.7978655497233073,
  ],
  [
    0.6288661956787109, 0.7978655497233073, 0.6412639617919922,
    0.7400093078613281,
  ],
  [
    0.6598606109619141, 0.6780204772949219, 0.6846561431884766,
    0.6242968241373698,
  ],
  [
    0.6970539093017578, 0.6201642354329427, 0.7218494415283203,
    0.6201642354329427,
  ],
  [
    0.7218494415283203, 0.6201642354329427, 0.7094516754150391,
    0.6242968241373698,
  ],
  [
    0.7094516754150391, 0.6242968241373698, 0.7218494415283203,
    0.6201642354329427,
  ],
  [
    0.7218494415283203, 0.6201642354329427, 0.7404460906982422,
    0.6284294128417969,
  ],
  [
    0.7404460906982422, 0.6284294128417969, 0.7776393890380859,
    0.6780204772949219,
  ],
  [
    0.7962360382080078, 0.7524070739746094, 0.7900371551513672,
    0.8102633158365885,
  ],
  [
    0.7900371551513672, 0.8102633158365885, 0.7962360382080078,
    0.7524070739746094,
  ],
  [
    0.7962360382080078, 0.7524070739746094, 0.7776393890380859,
    0.6780204772949219,
  ],
  [
    0.7776393890380859, 0.6780204772949219, 0.7528438568115234,
    0.8061307271321615,
  ],
  [
    0.7528438568115234, 0.8061307271321615, 0.7590427398681641,
    0.8970476786295573,
  ],
  [
    0.7590427398681641, 0.8970476786295573, 0.7652416229248047,
    0.9755668640136719,
  ],
];
const skeletonTwo = [
  [
    0.7652416229248047 * innerWidth,
    0.9755668640136719 * innerHeight,
    0.7590427398681641 * innerWidth,
    0.8970476786295573 * innerHeight,
  ],
  [
    0.7590427398681641 * innerWidth,
    0.8970476786295573 * innerHeight,
    0.7528438568115234 * innerWidth,
    0.8061307271321615 * innerHeight,
  ],
  [
    0.7032527923583984 * innerWidth,
    0.9714342753092448 * innerHeight,
    0.6908550262451172 * innerWidth,
    0.8970476786295573 * innerHeight,
  ],
  [
    0.6908550262451172 * innerWidth,
    0.8970476786295573 * innerHeight,
    0.6784572601318359 * innerWidth,
    0.8061307271321615 * innerHeight,
  ],
  [
    0.7528438568115234 * innerWidth,
    0.8061307271321615 * innerHeight,
    0.6784572601318359 * innerWidth,
    0.8061307271321615 * innerHeight,
  ],
  [
    0.7776393890380859 * innerWidth,
    0.6780204772949219 * innerHeight,
    0.7528438568115234 * innerWidth,
    0.8061307271321615 * innerHeight,
  ],
  [
    0.6598606109619141 * innerWidth,
    0.6780204772949219 * innerHeight,
    0.6784572601318359 * innerWidth,
    0.8061307271321615 * innerHeight,
  ],
  [
    0.7776393890380859 * innerWidth,
    0.6780204772949219 * innerHeight,
    0.6598606109619141 * innerWidth,
    0.6780204772949219 * innerHeight,
  ],
  [
    0.7776393890380859 * innerWidth,
    0.6780204772949219 * innerHeight,
    0.7962360382080078 * innerWidth,
    0.7524070739746094 * innerHeight,
  ],
  [
    0.6598606109619141 * innerWidth,
    0.6780204772949219 * innerHeight,
    0.6412639617919922 * innerWidth,
    0.7400093078613281 * innerHeight,
  ],
  [
    0.7962360382080078 * innerWidth,
    0.7524070739746094 * innerHeight,
    0.7900371551513672 * innerWidth,
    0.8102633158365885 * innerHeight,
  ],
  [
    0.6412639617919922 * innerWidth,
    0.7400093078613281 * innerHeight,
    0.6288661956787109 * innerWidth,
    0.7978655497233073 * innerHeight,
  ],
  [
    0.7218494415283203 * innerWidth,
    0.6201642354329427 * innerHeight,
    0.6970539093017578 * innerWidth,
    0.6201642354329427 * innerHeight,
  ],
  [
    0.7094516754150391 * innerWidth,
    0.6242968241373698 * innerHeight,
    0.7218494415283203 * innerWidth,
    0.6201642354329427 * innerHeight,
  ],
  [
    0.7094516754150391 * innerWidth,
    0.6242968241373698 * innerHeight,
    0.6970539093017578 * innerWidth,
    0.6201642354329427 * innerHeight,
  ],
  [
    0.7218494415283203 * innerWidth,
    0.6201642354329427 * innerHeight,
    0.7404460906982422 * innerWidth,
    0.6284294128417969 * innerHeight,
  ],
  [
    0.6970539093017578 * innerWidth,
    0.6201642354329427 * innerHeight,
    0.6846561431884766 * innerWidth,
    0.6242968241373698 * innerHeight,
  ],
  [
    0.7404460906982422 * innerWidth,
    0.6284294128417969 * innerHeight,
    0.7776393890380859 * innerWidth,
    0.6780204772949219 * innerHeight,
  ],
  [
    0.6846561431884766 * innerWidth,
    0.6242968241373698 * innerHeight,
    0.6598606109619141 * innerWidth,
    0.6780204772949219 * innerHeight,
  ],
];

const skeleton = [
  // eslint-disable-next-line no-restricted-globals
  [0.7652416229248047 * innerWidth, 0.8970476786295573 * innerHeight],
  [0.7590427398681641 * innerWidth, 0.8061307271321615 * innerHeight],
  [0.7032527923583984 * innerWidth, 0.8970476786295573 * innerHeight],
  [0.6908550262451172 * innerWidth, 0.8061307271321615 * innerHeight],
  [0.7528438568115234 * innerWidth, 0.8061307271321615 * innerHeight],
  [0.7776393890380859 * innerWidth, 0.8061307271321615 * innerHeight],
  [0.6598606109619141 * innerWidth, 0.8061307271321615 * innerHeight],
  [0.7776393890380859 * innerWidth, 0.6780204772949219 * innerHeight],
  [0.7776393890380859 * innerWidth, 0.7524070739746094 * innerHeight],
  [0.6598606109619141 * innerWidth, 0.7524070739746094 * innerHeight],
  [0.7962360382080078 * innerWidth, 0.8102633158365885 * innerHeight],
  [0.6412639617919922 * innerWidth, 0.7978655497233073 * innerHeight],
  [0.7218494415283203 * innerWidth, 0.6201642354329427 * innerHeight],
  [0.7094516754150391 * innerWidth, 0.6201642354329427 * innerHeight],
  [0.7094516754150391 * innerWidth, 0.6201642354329427 * innerHeight],
  [0.7218494415283203 * innerWidth, 0.6284294128417969 * innerHeight],
  [0.6970539093017578 * innerWidth, 0.6242968241373698 * innerHeight],
  [0.7404460906982422 * innerWidth, 0.6780204772949219 * innerHeight],
  [0.6846561431884766 * innerWidth, 0.6780204772949219 * innerHeight],
];

export const CanvasRendering = () => {
  function getMultipliedOfPostions(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue; // normaliserar dem inkommande kordinaterna till bildens höjd och bredd
  }
  const flattenedPoints = skeletonTwo.reduce((a, b) => a.concat(b), []);
  const newArray = flattenedPoints.map((value, index) => {
    if (index % 2) {
      return getMultipliedOfPostions(value, window.innerHeight);
    }
    return getMultipliedOfPostions(value, window.innerWidth);
  });
  console.log(newArray);

  const [image] = useImage(construction_site);
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={image} />
      </Layer>
      <Layer>
        {/* <Line
          x={120}
          y={0}
          points={newArray}
          stroke="magenta"
          strokeWidth={1}
          //   closed
        /> */}

        {skeletonTwo.map(Skeleton => {
          return (
            <>
              {Skeleton.map((newSkeleton, index) => {
                return <></>;
              })}
            </>
          );
        })}
      </Layer>
    </Stage>
  );
};
