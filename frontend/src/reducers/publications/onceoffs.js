import {
  GET_ONCE_OFFS_START,
  GET_ONCE_OFFS_SUCCESS,
  GET_ONCE_OFFS_FAIL,
  CREATE_ONCE_OFF_START,
  CREATE_ONCE_OFF_SUCCESS,
  CREATE_ONCE_OFF_FAIL,
  GET_ONCE_OFF_START,
  GET_ONCE_OFF_SUCCESS,
  GET_ONCE_OFF_FAIL,
  EDIT_ONCE_OFF,
  GET_HARD_COPY_IMAGES_START,
  GET_HARD_COPY_IMAGES_SUCCESS,
  GET_HARD_COPY_IMAGES_FAIL,
  CREATE_HARD_COPY_IMAGE_START,
  CREATE_HARD_COPY_IMAGE_SUCCESS,
  CREATE_HARD_COPY_IMAGE_FAIL,
  CREATE_HARD_COPY_COVER_START,
  CREATE_HARD_COPY_COVER_SUCCESS,
  CREATE_HARD_COPY_COVER_FAIL,
  UNLOCK_HARDCOPY_START,
  UNLOCK_HARDCOPY_SUCCESS,
  UNLOCK_HARDCOPY_FAIL,
} from '../../types/onceoffTypes';
import { updateObject } from "../../utility";

const initialState = {
    onceoffs: [],
    onceoff: {},
    hardcopyimages: [],
    loading: false,
    error: null,
}

const getOnceOffListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffListSuccess = (state, action) => {
  return updateObject(state, {
    onceoffs: action.onceoffs,
    error: null,
    loading: false
  });
};

const getOnceOffListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createOnceOffStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createOnceOffSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createOnceOffFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOnceOffDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffDetailSuccess = (state, action) => {
  return updateObject(state, {
    onceoff: action.onceoff,
    error: null,
    loading: false
  });
};

const getOnceOffDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getHardCopyImageListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getHardCopyImageListSuccess = (state, action) => {
  return updateObject(state, {
    hardcopyimages: action.hardcopyimages,
    error: null,
    loading: false
  });
};

const getHardCopyImageListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createHardCopyImageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createHardCopyImageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createHardCopyImageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createHardCopyCoverStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createHardCopyCoverSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createHardCopyCoverFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const unlockHardcopyStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockHardcopySuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockHardcopyFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function onceoffs(state = initialState, action){
    switch(action.type){
        case GET_ONCE_OFFS_START:
            return getOnceOffListStart(state, action);
        case GET_ONCE_OFFS_SUCCESS:
            return getOnceOffListSuccess(state, action);
        case GET_ONCE_OFFS_FAIL:
            return getOnceOffListFail(state, action);
        case GET_ONCE_OFF_START:
            return getOnceOffDetailStart(state, action);
        case GET_ONCE_OFF_SUCCESS:
            return getOnceOffDetailSuccess(state, action);
        case GET_ONCE_OFF_FAIL:
            return getOnceOffDetailFail(state, action);
        case CREATE_ONCE_OFF_START:
            return createOnceOffStart(state, action);
        case CREATE_ONCE_OFF_SUCCESS:
            return createOnceOffSuccess(state, action);
        case CREATE_ONCE_OFF_FAIL:
            return createOnceOffFail(state, action);
        case GET_HARD_COPY_IMAGES_START:
            return getHardCopyImageListStart(state, action);
        case GET_HARD_COPY_IMAGES_SUCCESS:
            return getHardCopyImageListSuccess(state, action);
        case GET_HARD_COPY_IMAGES_FAIL:
            return getHardCopyImageListFail(state, action);
        case CREATE_HARD_COPY_IMAGE_START:
            return createHardCopyImageStart(state, action);
        case CREATE_HARD_COPY_IMAGE_SUCCESS:
            return createHardCopyImageSuccess(state, action);
        case CREATE_HARD_COPY_IMAGE_FAIL:
            return createHardCopyImageFail(state, action);
        case CREATE_HARD_COPY_COVER_START:
            return createHardCopyCoverStart(state, action);
        case CREATE_HARD_COPY_COVER_SUCCESS:
            return createHardCopyCoverSuccess(state, action);
        case CREATE_HARD_COPY_COVER_FAIL:
            return createHardCopyCoverFail(state, action);
        case UNLOCK_HARDCOPY_START:
            return unlockHardcopyStart(state, action);
        case UNLOCK_HARDCOPY_SUCCESS:
            return unlockHardcopySuccess(state, action);
        case UNLOCK_HARDCOPY_FAIL:
            return unlockHardcopyFail(state, action);


        case EDIT_ONCE_OFF:
            const arrayList = state.onceoffs;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                onceoffs: arrayList,
            };
        default:
            return state;
    }
}
