import { parts } from './Parts';
const green = 'rgb(17,244,8)';
const blue = 'rgb(12,123,241)';
const orange = 'rgb(250,152,58)';
const purple = 'rgb(104,47,100)';
export const connectSkeleton = [
  {
    name: 'right_ankle-right_knee',
    coordinates: [
      {
        x: parts[15].x,
        y: parts[15].y,
        x1: parts[13].x,
        y1: parts[13].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: blue,
      },
    ],
  },
  {
    name: 'right_knee-right_hip',
    coordinates: [
      {
        x: parts[13].x,
        y: parts[13].y,
        x1: parts[11].x,
        y1: parts[11].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: blue,
      },
    ],
  },
  {
    name: 'left_ankle-left_knee',
    coordinates: [
      {
        x: parts[16].x,
        y: parts[16].y,
        x1: parts[14].x,
        y1: parts[14].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: blue,
      },
    ],
  },
  {
    name: 'left_knee-left_hip',
    coordinates: [
      {
        x: parts[14].x,
        y: parts[14].y,
        x1: parts[12].x,
        y1: parts[12].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: blue,
      },
    ],
  },

  {
    name: 'left_hip-right_hip',
    coordinates: [
      {
        x: parts[11].x,
        y: parts[11].y,
        x1: parts[12].x,
        y1: parts[12].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: purple,
      },
    ],
  },
  {
    name: 'right_shoulder-right_hip',
    coordinates: [
      {
        x: parts[5].x,
        y: parts[5].y,
        x1: parts[11].x,
        y1: parts[11].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: purple,
      },
    ],
  },
  {
    name: 'left_shoulder-left_hip',
    coordinates: [
      {
        x: parts[6].x,
        y: parts[6].y,
        x1: parts[12].x,
        y1: parts[12].y,
        colorDotOne: blue,
        colorDotTwo: blue,
        colorSkeletonLines: purple,
      },
    ],
  },
  {
    name: 'left_shoulder-right_shoulder',
    coordinates: [
      {
        x: parts[5].x,
        y: parts[5].y,
        x1: parts[6].x,
        y1: parts[6].y,
        colorDotOne: orange,
        colorDotTwo: orange,
        colorSkeletonLines: orange,
      },
    ],
  },

  {
    name: 'right_shoulder-right_elbow',
    coordinates: [
      {
        x: parts[5].x,
        y: parts[5].y,
        x1: parts[7].x,
        y1: parts[7].y,
        colorDotOne: orange,
        colorDotTwo: orange,
        colorSkeletonLines: orange,
      },
    ],
  },

  {
    name: 'left_shoulder-left_elbow',
    coordinates: [
      {
        x: parts[6].x,
        y: parts[6].y,
        x1: parts[8].x,
        y1: parts[8].y,
        colorDotOne: orange,
        colorDotTwo: orange,
        colorSkeletonLines: orange,
      },
    ],
  },
  {
    name: 'right_elbow-right_wrist',
    coordinates: [
      {
        x: parts[7].x,
        y: parts[7].y,
        x1: parts[9].x,
        y1: parts[9].y,
        colorDotOne: orange,
        colorDotTwo: orange,
        colorSkeletonLines: orange,
      },
    ],
  },

  {
    name: 'left_elbow-left_wrist',
    coordinates: [
      {
        x: parts[8].x,
        y: parts[8].y,
        x1: parts[10].x,
        y1: parts[10].y,
        colorDotOne: orange,
        colorDotTwo: orange,
        colorSkeletonLines: orange,
      },
    ],
  },

  {
    name: 'left_eye-right_eye',
    coordinates: [
      {
        x: parts[1].x,
        y: parts[1].y,
        x1: parts[2].x,
        y1: parts[2].y,
        colorDotOne: green,
        colorDotTwo: green,
        colorSkeletonLines: green,
      },
    ],
  },

  {
    name: 'nose-left_eye',
    coordinates: [
      {
        x: parts[0].x,
        y: parts[0].y,
        x1: parts[1].x,
        y1: parts[1].y,
        colorDotOne: green,
        colorDotTwo: green,
        colorSkeletonLines: green,
      },
    ],
  },

  {
    name: 'nose-right_eye',
    coordinates: [
      {
        x: parts[0].x,
        y: parts[0].y,
        x1: parts[2].x,
        y1: parts[2].y,
        colorDotOne: green,
        colorDotTwo: green,
        colorSkeletonLines: green,
      },
    ],
  },
  {
    name: 'right_eye-right_ear',
    coordinates: [
      {
        x: parts[1].x,
        y: parts[1].y,
        x1: parts[3].x,
        y1: parts[3].y,
        colorDotOne: green,
        colorDotTwo: green,
        colorSkeletonLines: green,
      },
    ],
  },
  {
    name: 'left_eye-left_ear',
    coordinates: [
      {
        x: parts[2].x,
        y: parts[2].y,
        x1: parts[4].x,
        y1: parts[4].y,
        colorDotOne: green,
        colorDotTwo: green,
        colorSkeletonLines: green,
      },
    ],
  },
  {
    name: 'right_ear-right_shoulder',
    coordinates: [
      {
        x: parts[3].x,
        y: parts[3].y,
        x1: parts[5].x,
        y1: parts[5].y,
        colorDotOne: green,
        colorDotTwo: orange,
        colorSkeletonLines: green,
      },
    ],
  },
  {
    name: 'left_ear-left_shoulder',
    coordinates: [
      {
        x: parts[4].x,
        y: parts[4].y,
        x1: parts[6].x,
        y1: parts[6].y,
        colorDotOne: green,
        colorDotTwo: orange,
        colorSkeletonLines: green,
      },
    ],
  },
];
