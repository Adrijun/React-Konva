import axios from 'axios';

export const baseURL = 'http://localhost:3030';
const request = axios.create({
  baseURL,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getKeypoints = async () => {
  const response = await request
    .get('/keypoints')
    .then(res => res)
    .catch(error => error.response);
  return response;
};

export const getDangerZoneCoordinates = async () => {
  const response = await request
    .get('/danger_zone')
    .then(res => res)
    .catch(error => error.response);
  return response;
};

export const getDetections = async () => {
  const response = await request
    .get('/detections')
    .then(res => res)
    .catch(error => error.response);
  return response;
};
