import axios from 'axios';
import {
  GET_SERIES_START,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAIL,
  CREATE_SERIES_START,
  CREATE_SERIES_SUCCESS,
  CREATE_SERIES_FAIL,
  GET_SINGLE_SERIES_START,
  GET_SINGLE_SERIES_SUCCESS,
  GET_SINGLE_SERIES_FAIL,
  EDIT_SERIES,
  GET_SERIES_IMAGES_START,
  GET_SERIES_IMAGES_SUCCESS,
  GET_SERIES_IMAGES_FAIL,
  CREATE_SERIES_COVER_START,
  CREATE_SERIES_COVER_SUCCESS,
  CREATE_SERIES_COVER_FAIL,
  CREATE_SERIES_IMAGE_START,
  CREATE_SERIES_IMAGE_SUCCESS,
  CREATE_SERIES_IMAGE_FAIL,
  GET_PUBLISHED_SERIES_START,
  GET_PUBLISHED_SERIES_SUCCESS,
  GET_PUBLISHED_SERIES_FAIL,
  GET_SINGLE_PUBLISHED_SERIES_START,
  GET_SINGLE_PUBLISHED_SERIES_SUCCESS,
  GET_SINGLE_PUBLISHED_SERIES_FAIL,
  UNLOCK_SERIES_START,
  UNLOCK_SERIES_FAIL,
  UNLOCK_SERIES_SUCCESS,
} from '../../types/seriesTypes';
import { returnErrors } from '../messages';
import {
  seriesURL,
  seriesimagesURL,
  seriescoversURL,
  publishedseriesURL,
} from '../../constants';


const getPublishedSeriesListStart = () => {
  return {
    type: GET_PUBLISHED_SERIES_START
  };
};

const getPublishedSeriesListSuccess = publishedseries => {
  return {
    type: GET_PUBLISHED_SERIES_SUCCESS,
    publishedseries
  };
};

const getPublishedSeriesListFail = error => {
  return {
    type: GET_PUBLISHED_SERIES_FAIL,
    error: error
  };
};


const getPublishedSeriesDetailStart = () => {
  return {
    type: GET_SINGLE_PUBLISHED_SERIES_START
  };
};

const getPublishedSeriesDetailSuccess = publishedsingleseries => {
  return {
    type: GET_SINGLE_PUBLISHED_SERIES_SUCCESS,
    publishedsingleseries
  };
};

const getPublishedSeriesDetailFail = error => {
  return {
    type: GET_SINGLE_PUBLISHED_SERIES_FAIL,
    error: error
  };
};





const getSeriesImageListStart = () => {
  return {
    type: GET_SERIES_IMAGES_START
  };
};

const getSeriesImageListSuccess = seriesimages => {
  return {
    type: GET_SERIES_IMAGES_SUCCESS,
    seriesimages
  };
};

const getSeriesImageListFail = error => {
  return {
    type: GET_SERIES_IMAGES_FAIL,
    error: error
  };
};

const createSeriesImageStart = () => {
  return {
    type: CREATE_SERIES_IMAGE_START
  };
};


const createSeriesImageSuccess = seriesimage => {
  return {
    type: CREATE_SERIES_IMAGE_SUCCESS,
    seriesimage
  };
};

const createSeriesImageFail = error => {
  return {
    type: CREATE_SERIES_IMAGE_FAIL,
    error: error
  };
};


const createSeriesCoverStart = () => {
  return {
    type: CREATE_SERIES_COVER_START
  };
};


const createSeriesCoverSuccess = seriescover => {
  return {
    type: CREATE_SERIES_COVER_SUCCESS,
    seriescover
  };
};

const createSeriesCoverFail = error => {
  return {
    type: CREATE_SERIES_COVER_FAIL,
    error: error
  };
};




const getSeriesListStart = () => {
  return {
    type: GET_SERIES_START
  };
};

const getSeriesListSuccess = series => {
  return {
    type: GET_SERIES_SUCCESS,
    series
  };
};

const getSeriesListFail = error => {
  return {
    type: GET_SERIES_FAIL,
    error: error
  };
};

const createSeriesStart = () => {
  return {
    type: CREATE_SERIES_START
  };
};


const createSeriesSuccess = series => {
  return {
    type: CREATE_SERIES_SUCCESS,
    series
  };
};

const createSeriesFail = error => {
  return {
    type: CREATE_SERIES_FAIL,
    error: error
  };
};

const getSeriesDetailStart = () => {
  return {
    type: GET_SINGLE_SERIES_START
  };
};

const getSeriesDetailSuccess = singleseries => {
  return {
    type: GET_SINGLE_SERIES_SUCCESS,
    singleseries
  };
};

const getSeriesDetailFail = error => {
  return {
    type: GET_SINGLE_SERIES_FAIL,
    error: error
  };
};



const unlockSeriesStart = () => {
  return {
    type: UNLOCK_SERIES_START
  };
};

const unlockSeriesSuccess = ebook => {
  return {
    type: UNLOCK_SERIES_SUCCESS,
    ebook
  };
};

const unlockSeriesFail = error => {
  return {
    type: UNLOCK_SERIES_FAIL,
    error: error
  };
};

export const unlockSeries = (id, order, token) => {
  return dispatch => {
      dispatch(unlockSeriesStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${seriesURL}${id}/unlock/`, order, headers)
        .then(res => {
          dispatch(unlockSeriesSuccess(order));
        })
        .catch(err => {
          dispatch(unlockSeriesFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};


export const getSeries = (id, token) => {
  return dispatch => {
      dispatch(getSeriesListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${seriesURL}?id=${id}`, headers)
        .then(res => {
          const series = res.data;
          dispatch(getSeriesListSuccess(series));
          })
        .catch(err => {
          dispatch(getSeriesListStart(err));
        });
    };
};

export const getSingleSeries = (id, token) => {
  return dispatch => {
      dispatch(getSeriesDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${seriesURL}${id}/`, headers)
        .then(res => {
          const singleseries = res.data;
          dispatch(getSeriesDetailSuccess(singleseries));
          })
        .catch(err => {
          dispatch(getSeriesDetailFail(err));
        });
    };
};

export const addSeries = (series, token) => {
  return dispatch => {
      dispatch(createSeriesStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(seriesURL, series, headers)
        .then(res => {
          dispatch(createSeriesSuccess(series));
        })
        .catch(err => {
          dispatch(createSeriesFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editSeries = (id, series, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${seriesURL}${id}/`, series, headers)
        .then(res => {
            dispatch({
                type: EDIT_SERIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getSeriesImages = (id, token) => {
  return dispatch => {
      dispatch(getSeriesImageListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${seriesimagesURL}?id=${id}`, headers)
        .then(res => {
          const seriesimages = res.data;
          dispatch(getSeriesImageListSuccess(seriesimages));
          })
        .catch(err => {
          dispatch(getSeriesImageListStart(err));
        });
    };
};


export const addSeriesImage = (image, token) => {
  return dispatch => {
      dispatch(createSeriesImageStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(seriesimagesURL, image, headers)
        .then(res => {
          dispatch(createSeriesImageSuccess(image));
        })
        .catch(err => {
          dispatch(createSeriesImageFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const addSeriesCover = (image, token) => {
  return dispatch => {
      dispatch(createSeriesCoverStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(seriescoversURL, image, headers)
        .then(res => {
          dispatch(createSeriesCoverSuccess(image));
        })
        .catch(err => {
          dispatch(createSeriesCoverFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const getPublishedSeries = (token) => {
  return dispatch => {
      dispatch(getPublishedSeriesListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(publishedseriesURL, headers)
        .then(res => {
          const publishedseries = res.data;
          dispatch(getPublishedSeriesListSuccess(publishedseries));
          })
        .catch(err => {
          dispatch(getPublishedSeriesListStart(err));
        });
    };
};

export const getSinglePublishedSeries = (id, token) => {
  return dispatch => {
      dispatch(getPublishedSeriesDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishedseriesURL}${id}/`, headers)
        .then(res => {
          const publishedsingleseries = res.data;
          dispatch(getPublishedSeriesDetailSuccess(publishedsingleseries));
          })
        .catch(err => {
          dispatch(getPublishedSeriesDetailFail(err));
        });
    };
};
