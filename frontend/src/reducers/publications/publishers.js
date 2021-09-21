import {
  GET_PUBLISHERS_START,
  GET_PUBLISHERS_SUCCESS,
  GET_PUBLISHERS_FAIL,
  CREATE_PUBLISHER_START,
  CREATE_PUBLISHER_SUCCESS,
  CREATE_PUBLISHER_FAIL,
  GET_PUBLISHER_START,
  GET_PUBLISHER_SUCCESS,
  GET_PUBLISHER_FAIL,
  EDIT_PUBLISHER
} from '../../types/publisherTypes';
import { updateObject } from "../../utility";

const initialState = {
    publishers: [],
    publisher: {},
    loading: false,
    error: null,
}

const getPublisherListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublisherListSuccess = (state, action) => {
  return updateObject(state, {
    publishers: action.publishers,
    error: null,
    loading: false
  });
};

const getPublisherListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createPublisherStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createPublisherSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createPublisherFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getPublisherDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublisherDetailSuccess = (state, action) => {
  return updateObject(state, {
    publisher: action.publisher,
    error: null,
    loading: false
  });
};

const getPublisherDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function publishers(state = initialState, action){
    switch(action.type){
        case GET_PUBLISHERS_START:
            return getPublisherListStart(state, action);
        case GET_PUBLISHERS_SUCCESS:
            return getPublisherListSuccess(state, action);
        case GET_PUBLISHERS_FAIL:
            return getPublisherListFail(state, action);
        case GET_PUBLISHER_START:
            return getPublisherDetailStart(state, action);
        case GET_PUBLISHER_SUCCESS:
            return getPublisherDetailSuccess(state, action);
        case GET_PUBLISHER_FAIL:
            return getPublisherDetailFail(state, action);
        case CREATE_PUBLISHER_START:
            return createPublisherStart(state, action);
        case CREATE_PUBLISHER_SUCCESS:
            return createPublisherSuccess(state, action);
        case CREATE_PUBLISHER_FAIL:
            return createPublisherFail(state, action);
        case EDIT_PUBLISHER:
            const arrayList = state.publishers;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                publishers: arrayList,
            };
        default:
            return state;
    }
}
