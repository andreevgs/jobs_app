import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

const data = [
  {
    jobkey: '11111',
    jobtitle: 'Junior JS Developer',
    company: 'Pragmatics, Inc',
    longitude: -122,
    latitude: 37,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02,
    formattedRelativeTime: '10 days ago',
    snippet: 'aaaaaa aaa aaaaa aaaa aaaa aaaaa aaaa aaaa aaaa aaa'
  },
  {
    jobkey: '11112',
    jobtitle: 'Junior JS Developer',
    company: 'Pragmatics, Inc',
    longitude: -122,
    latitude: 37,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02,
    formattedRelativeTime: '10 days ago',
    snippet: 'aaaaaa aaa aaaaa aaaa aaaa aaaaa aaaa aaaa aaaa aaa'
  },
  {
    jobkey: '11113',
    jobtitle: 'Junior JS Developer',
    company: 'Pragmatics, Inc',
    longitude: -122,
    latitude: 37,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02,
    formattedRelativeTime: '10 days ago',
    snippet: 'aaaaaa aaa aaaaa aaaa aaaa aaaaa aaaa aaaa aaaa aaa'
  },
  {
    jobkey: '11114',
    jobtitle: 'Junior JS Developer',
    company: 'Pragmatics, Inc',
    longitude: -122,
    latitude: 37,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02,
    formattedRelativeTime: '10 days ago',
    snippet: 'aaaaaa aaa aaaaa aaaa aaaa aaaaa aaaa aaaa aaaa aaa'
  },
  {
    jobkey: '11115',
    jobtitle: 'Junior JS Developer',
    company: 'Pragmatics, Inc',
    longitude: -122,
    latitude: 37,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02,
    formattedRelativeTime: '10 days ago',
    snippet: 'aaaaaa aaa aaaaa aaaa aaaa aaaaa aaaa aaaa aaaa aaa'
  }
]

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) =>  (dispatch) => {
    dispatch({ type: FETCH_JOBS, payload: data })
    callback()
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
};
