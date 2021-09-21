import {
  GET_EBOOKS_START,
  GET_EBOOKS_SUCCESS,
  GET_EBOOKS_FAIL,
  CREATE_EBOOK_START,
  CREATE_EBOOK_SUCCESS,
  CREATE_EBOOK_FAIL,
  GET_EBOOK_START,
  GET_EBOOK_SUCCESS,
  GET_EBOOK_FAIL,
  EDIT_EBOOK,
  GET_EBOOK_IMAGES_START,
  GET_EBOOK_IMAGES_SUCCESS,
  GET_EBOOK_IMAGES_FAIL,
  CREATE_EBOOK_IMAGE_START,
  CREATE_EBOOK_IMAGE_SUCCESS,
  CREATE_EBOOK_IMAGE_FAIL,
  CREATE_EBOOK_COVER_START,
  CREATE_EBOOK_COVER_SUCCESS,
  CREATE_EBOOK_COVER_FAIL,
  UNLOCK_EBOOK_START,
  UNLOCK_EBOOK_SUCCESS,
  UNLOCK_EBOOK_FAIL,
} from '../../types/ebookTypes';
import { updateObject } from "../../utility";

const initialState = {
    ebooks: [],
    ebook: {},
    ebookimages: [],
    loading: false,
    error: null,
}


const getEbookListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEbookListSuccess = (state, action) => {
  return updateObject(state, {
    ebooks: action.ebooks,
    error: null,
    loading: false
  });
};

const getEbookListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createEbookStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createEbookSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createEbookFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getEbookDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEbookDetailSuccess = (state, action) => {
  return updateObject(state, {
    ebook: action.ebook,
    error: null,
    loading: false
  });
};

const getEbookDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getEbookImageListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEbookImageListSuccess = (state, action) => {
  return updateObject(state, {
    ebookimages: action.ebookimages,
    error: null,
    loading: false
  });
};

const getEbookImageListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createEbookImageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createEbookImageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createEbookImageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createEbookCoverStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createEbookCoverSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createEbookCoverFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const unlockEbookStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockEbookSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const unlockEbookFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function ebooks(state = initialState, action){
    switch(action.type){
        case GET_EBOOKS_START:
            return getEbookListStart(state, action);
        case GET_EBOOKS_SUCCESS:
            return getEbookListSuccess(state, action);
        case GET_EBOOKS_FAIL:
            return getEbookListFail(state, action);
        case GET_EBOOK_START:
            return getEbookDetailStart(state, action);
        case GET_EBOOK_SUCCESS:
            return getEbookDetailSuccess(state, action);
        case GET_EBOOK_FAIL:
            return getEbookDetailFail(state, action);
        case CREATE_EBOOK_START:
            return createEbookStart(state, action);
        case CREATE_EBOOK_SUCCESS:
            return createEbookSuccess(state, action);
        case CREATE_EBOOK_FAIL:
            return createEbookFail(state, action);
        case GET_EBOOK_IMAGES_START:
            return getEbookImageListStart(state, action);
        case GET_EBOOK_IMAGES_SUCCESS:
            return getEbookImageListSuccess(state, action);
        case GET_EBOOK_IMAGES_FAIL:
            return getEbookImageListFail(state, action);
        case CREATE_EBOOK_IMAGE_START:
            return createEbookImageStart(state, action);
        case CREATE_EBOOK_IMAGE_SUCCESS:
            return createEbookImageSuccess(state, action);
        case CREATE_EBOOK_IMAGE_FAIL:
            return createEbookImageFail(state, action);
        case CREATE_EBOOK_COVER_START:
            return createEbookCoverStart(state, action);
        case CREATE_EBOOK_COVER_SUCCESS:
            return createEbookCoverSuccess(state, action);
        case CREATE_EBOOK_COVER_FAIL:
            return createEbookCoverFail(state, action);
          case UNLOCK_EBOOK_START:
            return unlockEbookStart(state, action);
        case UNLOCK_EBOOK_SUCCESS:
            return unlockEbookSuccess(state, action);
        case UNLOCK_EBOOK_FAIL:
            return unlockEbookFail(state, action);
        case EDIT_EBOOK:
            const arrayList = state.ebooks;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                ebooks: arrayList,
            };
        default:
            return state;
    }
}
