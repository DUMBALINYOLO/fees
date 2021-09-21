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
  UNLOCK_SERIES_SUCCESS,
  UNLOCK_SERIES_FAIL,
} from '../../types/seriesTypes';


import { updateObject } from "../../utility";

const initialState = {
    seriesimages: [],
    series: [],
    singleseries: {},
    publishedseries: [],
    publishedsingleseries: {},
    loading: false,
    error: null,
}



const getPublishedSeriesListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublishedSeriesListSuccess = (state, action) => {
  return updateObject(state, {
    publishedseries: action.publishedseries,
    error: null,
    loading: false
  });
};

const getPublishedSeriesListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getPublishedSeriesDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublishedSeriesDetailSuccess = (state, action) => {
  return updateObject(state, {
    publishedsingleseries: action.publishedsingleseries,
    error: null,
    loading: false
  });
};

const getPublishedSeriesDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const getSeriesImageListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSeriesImageListSuccess = (state, action) => {
  return updateObject(state, {
    seriesimages: action.seriesimages,
    error: null,
    loading: false
  });
};

const getSeriesImageListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createSeriesImageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createSeriesImageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createSeriesImageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createSeriesCoverStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createSeriesCoverSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createSeriesCoverFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};




const getSeriesListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSeriesListSuccess = (state, action) => {
  return updateObject(state, {
    series: action.series,
    error: null,
    loading: false
  });
};

const getSeriesListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createSeriesStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createSeriesSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createSeriesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getSeriesDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSeriesDetailSuccess = (state, action) => {
  return updateObject(state, {
    singleseries: action.singleseries,
    error: null,
    loading: false
  });
};

const getSeriesDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockSeriesStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockSeriesSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockSeriesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function series(state = initialState, action){
    switch(action.type){
        case GET_SINGLE_SERIES_START:
            return getSeriesDetailStart(state, action);
        case GET_SINGLE_SERIES_SUCCESS:
            return getSeriesDetailSuccess(state, action);
        case GET_SINGLE_SERIES_FAIL:
            return getSeriesDetailFail(state, action);
        case GET_SERIES_START:
            return getSeriesListStart(state, action);
        case GET_SERIES_SUCCESS:
            return getSeriesListSuccess(state, action);
        case GET_SERIES_FAIL:
            return getSeriesListFail(state, action);
        case CREATE_SERIES_START:
            return createSeriesStart(state, action);
        case CREATE_SERIES_SUCCESS:
            return createSeriesSuccess(state, action);
        case CREATE_SERIES_FAIL:
            return createSeriesFail(state, action);
        case GET_SERIES_IMAGES_START:
            return getSeriesImageListStart(state, action);
        case GET_SERIES_IMAGES_SUCCESS:
            return getSeriesImageListSuccess(state, action);
        case GET_SERIES_IMAGES_FAIL:
            return getSeriesImageListFail(state, action);
        case CREATE_SERIES_IMAGE_START:
            return createSeriesImageStart(state, action);
        case CREATE_SERIES_IMAGE_SUCCESS:
            return createSeriesImageSuccess(state, action);
        case CREATE_SERIES_IMAGE_FAIL:
            return createSeriesImageFail(state, action);
        case CREATE_SERIES_COVER_START:
            return createSeriesCoverStart(state, action);
        case CREATE_SERIES_COVER_SUCCESS:
            return createSeriesCoverSuccess(state, action);
        case CREATE_SERIES_COVER_FAIL:
                return createSeriesCoverFail(state, action);
        case GET_SINGLE_PUBLISHED_SERIES_START:
            return getPublishedSeriesDetailStart(state, action);
        case GET_SINGLE_PUBLISHED_SERIES_SUCCESS:
            return getPublishedSeriesDetailSuccess(state, action);
        case GET_SINGLE_PUBLISHED_SERIES_FAIL:
            return getPublishedSeriesDetailFail(state, action);
        case GET_PUBLISHED_SERIES_START:
            return getPublishedSeriesListStart(state, action);
        case GET_PUBLISHED_SERIES_SUCCESS:
            return getPublishedSeriesListSuccess(state, action);
        case GET_PUBLISHED_SERIES_FAIL:
            return getPublishedSeriesListFail(state, action);

        case UNLOCK_SERIES_START:
            return unlockSeriesStart(state, action);
        case UNLOCK_SERIES_SUCCESS:
            return unlockSeriesSuccess(state, action);
        case UNLOCK_SERIES_FAIL:
            return unlockSeriesFail(state, action);




        case EDIT_SERIES:
            const arrayList = state.series;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                series: arrayList,
            };
        default:
            return state;
    }
}
