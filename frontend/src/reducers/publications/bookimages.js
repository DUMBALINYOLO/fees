import {
  GET_BOOK_IMAGES_START,
  GET_BOOK_IMAGES_SUCCESS,
  GET_BOOK_IMAGES_FAIL,
  CREATE_BOOK_IMAGE_START,
  CREATE_BOOK_IMAGE_SUCCESS,
  CREATE_BOOK_IMAGE_FAIL,
  GET_BOOK_IMAGE_START,
  GET_BOOK_IMAGE_SUCCESS,
  GET_BOOK_IMAGE_FAIL,
  EDIT_BOOK_IMAGE,
  GET_SERIES_IMAGES,
  CREATE_SERIES_IMAGE,
  GET_EBOOK_IMAGES,
  CREATE_EBOOK_IMAGE,
  GET_HARCOPY_IMAGES,
  CREATE_HARCOPY_IMAGE,
} from '../../types/bookimageTypes';
import { updateObject } from "../../utility";

const initialState = {
    bookimages: [],
    bookimage: {},
    loading: false,
    error: null,
    seriesimages: [],
    hardcopyimages: [],
    ebookimages: [],

}

const getBookImageListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBookImageListSuccess = (state, action) => {
  return updateObject(state, {
    bookimages: action.bookimages,
    error: null,
    loading: false
  });
};

const getBookImageListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBookImageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBookImageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBookImageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBookImageDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBookImageDetailSuccess = (state, action) => {
  return updateObject(state, {
    bookimage: action.bookimage,
    error: null,
    loading: false
  });
};

const getBookImageDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function bookimages(state = initialState, action){
    switch(action.type){
        case GET_BOOK_IMAGES_START:
            return getBookImageListStart(state, action);
        case GET_BOOK_IMAGES_SUCCESS:
            return getBookImageListSuccess(state, action);
        case GET_BOOK_IMAGES_FAIL:
            return getBookImageListFail(state, action);
        case GET_BOOK_IMAGE_START:
            return getBookImageDetailStart(state, action);
        case GET_BOOK_IMAGE_SUCCESS:
            return getBookImageDetailSuccess(state, action);
        case GET_BOOK_IMAGE_FAIL:
            return getBookImageDetailFail(state, action);
        case CREATE_BOOK_IMAGE_START:
            return createBookImageStart(state, action);
        case CREATE_BOOK_IMAGE_SUCCESS:
            return createBookImageSuccess(state, action);
        case CREATE_BOOK_IMAGE_FAIL:
            return createBookImageFail(state, action);

        case GET_SERIES_IMAGES:
            return {
                ...state,
                seriesimages: action.payload
            };
        case CREATE_SERIES_IMAGE:
            return {
                ...state,
                image: [...state.seriesimages, action.payload]
            }
        case GET_EBOOK_IMAGES:
            return {
                ...state,
                ebookimages: action.payload
            };
        case CREATE_EBOOK_IMAGE:
            return {
                ...state,
                image: [...state.ebookimages, action.payload]
            }
        case GET_HARCOPY_IMAGES:
            return {
                ...state,
                hardcopyimages: action.payload
            };
        case CREATE_HARCOPY_IMAGE:
            return {
                ...state,
                image: [...state.hardcopyimages, action.payload]
            }
        case EDIT_BOOK_IMAGE:
            const arrayList = state.bookimages;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                bookimages: arrayList,
            };
        default:
            return state;
    }
}
