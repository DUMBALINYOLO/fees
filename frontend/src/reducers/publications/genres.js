import {
  GET_GENRES_START,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAIL,
  CREATE_GENRE_START,
  CREATE_GENRE_SUCCESS,
  CREATE_GENRE_FAIL,
  GET_GENRE_START,
  GET_GENRE_SUCCESS,
  GET_GENRE_FAIL,
  EDIT_GENRE
} from '../../types/genreTypes';
import { updateObject } from "../../utility";

const initialState = {
    genres: [],
    genre: {},
    loading: false,
    error: null,
}

const getGenreListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGenreListSuccess = (state, action) => {
  return updateObject(state, {
    genres: action.genres,
    error: null,
    loading: false
  });
};

const getGenreListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createGenreStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createGenreSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createGenreFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getGenreDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGenreDetailSuccess = (state, action) => {
  return updateObject(state, {
    genre: action.genre,
    error: null,
    loading: false
  });
};

const getGenreDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function genres(state = initialState, action){
    switch(action.type){
        case GET_GENRES_START:
            return getGenreListStart(state, action);
        case GET_GENRES_SUCCESS:
            return getGenreListSuccess(state, action);
        case GET_GENRES_FAIL:
            return getGenreListFail(state, action);
        case GET_GENRE_START:
            return getGenreDetailStart(state, action);
        case GET_GENRE_SUCCESS:
            return getGenreDetailSuccess(state, action);
        case GET_GENRE_FAIL:
            return getGenreDetailFail(state, action);
        case CREATE_GENRE_START:
            return createGenreStart(state, action);
        case CREATE_GENRE_SUCCESS:
            return createGenreSuccess(state, action);
        case CREATE_GENRE_FAIL:
            return createGenreFail(state, action);
        case EDIT_GENRE:
            const arrayList = state.genres;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                genres: arrayList,
            };
        default:
            return state;
    }
}
