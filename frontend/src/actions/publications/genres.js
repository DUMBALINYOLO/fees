import axios from 'axios';
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
import { genresURL } from '../../constants';
import { returnErrors } from '../messages';

//genres
const getGenreListStart = () => {
  return {
    type: GET_GENRES_START
  };
};

const getGenreListSuccess = genres => {
  return {
    type: GET_GENRES_SUCCESS,
    genres
  };
};

const getGenreListFail = error => {
  return {
    type: GET_GENRES_FAIL,
    error: error
  };
};

const createGenreStart = () => {
  return {
    type: CREATE_GENRE_START
  };
};


const createGenreSuccess = genre => {
  return {
    type: CREATE_GENRE_SUCCESS,
    genre
  };
};

const createGenreFail = error => {
  return {
    type: CREATE_GENRE_FAIL,
    error: error
  };
};

const getGenreDetailStart = () => {
  return {
    type: GET_GENRE_START
  };
};

const getGenreDetailSuccess = genre => {
  return {
    type: GET_GENRE_SUCCESS,
    genre
  };
};

const getGenreDetailFail = error => {
  return {
    type: GET_GENRE_FAIL,
    error: error
  };
};

export const getGenres = (token) => {
  return dispatch => {
      dispatch(getGenreListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(genresURL, headers)
        .then(res => {
          const genres = res.data;
          dispatch(getGenreListSuccess(genres));
          })
        .catch(err => {
          dispatch(getGenreListStart(err));
        });
    };
};

export const getGenre = (id, token) => {
  return dispatch => {
      dispatch(getGenreDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${genresURL}${id}`, headers)
        .then(res => {
          const genre = res.data;
          dispatch(getGenreDetailSuccess(genre));
          })
        .catch(err => {
          dispatch(getGenreDetailFail(err));
        });
    };
};

export const addGenre = (genre, token) => {
  return dispatch => {
      dispatch(createGenreStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(genresURL, genre, headers)
        .then(res => {
          dispatch(createGenreSuccess(genre));
        })
        .catch(err => {
          dispatch(createGenreFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editGenre = (id, genre, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${genresURL}${id}/`, genre, headers)
        .then(res => {
            dispatch({
                type: EDIT_GENRE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
