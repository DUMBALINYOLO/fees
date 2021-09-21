import axios from 'axios';
import {
  GET_STATS_START,
  GET_STATS_SUCCESS,
  GET_STATS_FAIL,
} from '../../types/reportTypes';
import { statsURL } from '../../constants';

//stats
const getStatStart = () => {
  return {
    type: GET_STATS_START
  };
};

const getStatSuccess = stats => {
  return {
    type: GET_STATS_SUCCESS,
    stats
  };
};

const getStatFail = error => {
  return {
    type: GET_STATS_FAIL,
    error: error
  };
};

export const getStats = (token) => {
  return dispatch => {
      dispatch(getStatStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(statsURL, headers)
        .then(res => {
          const stats = res.data;
          console.log(stats)
            dispatch(getStatSuccess(stats));
          })
        .catch(err => {
          dispatch(getStatFail(err));
        });
    };
};
