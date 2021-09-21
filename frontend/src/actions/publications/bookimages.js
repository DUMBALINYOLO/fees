import axios from 'axios';
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
import {
  bookimagesURL,
  seriesimagesURL,
  ebookimagesURL,
  hardcopyimagesURL,
 } from '../../constants';
import { returnErrors } from '../messages';

//book images
const getBookImageListStart = () => {
  return {
    type: GET_BOOK_IMAGES_START
  };
};

const getBookImageListSuccess = bookimages => {
  return {
    type: GET_BOOK_IMAGES_SUCCESS,
    bookimages
  };
};

const getBookImageListFail = error => {
  return {
    type: GET_BOOK_IMAGES_FAIL,
    error: error
  };
};

const createBookImageStart = () => {
  return {
    type: CREATE_BOOK_IMAGE_START
  };
};


const createBookImageSuccess = bookimage => {
  return {
    type: CREATE_BOOK_IMAGE_SUCCESS,
    bookimage
  };
};

const createBookImageFail = error => {
  return {
    type: CREATE_BOOK_IMAGE_FAIL,
    error: error
  };
};

const getBookImageDetailStart = () => {
  return {
    type: GET_BOOK_IMAGE_START
  };
};

const getBookImageDetailSuccess = bookimage => {
  return {
    type: GET_BOOK_IMAGE_SUCCESS,
    bookimage
  };
};

const getBookImageDetailFail = error => {
  return {
    type: GET_BOOK_IMAGE_FAIL,
    error: error
  };
};

export const getBookImages = (token) => {
  return dispatch => {
      dispatch(getBookImageListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(bookimagesURL, headers)
        .then(res => {
          const bookimages = res.data;
          dispatch(getBookImageListSuccess(bookimages));
          })
        .catch(err => {
          dispatch(getBookImageListStart(err));
        });
    };
};

export const getBookImage = (id, token) => {
  return dispatch => {
      dispatch(getBookImageDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${bookimagesURL}${id}`, headers)
        .then(res => {
          const bookimage = res.data;
          dispatch(getBookImageDetailSuccess(bookimage));
          })
        .catch(err => {
          dispatch(getBookImageDetailFail(err));
        });
    };
};

export const addBookImage = (bookimage, token) => {
  return dispatch => {
      dispatch(createBookImageStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(bookimagesURL, bookimage, headers)
        .then(res => {
          dispatch(createBookImageSuccess(bookimage));
        })
        .catch(err => {
          dispatch(createBookImageFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editBookImage = (id, bookimage, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${bookimagesURL}${id}/`, bookimage, headers)
        .then(res => {
            dispatch({
                type: EDIT_BOOK_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getSeriesImages = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${seriesimagesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_SERIES_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addSeriesImage = (image, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(seriesimagesURL, image, headers)
        .then(res => {
            dispatch({
                type: CREATE_SERIES_IMAGE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getEbookImages = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${ebookimagesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_EBOOK_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addEbookImage = (image, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(ebookimagesURL, image, headers)
        .then(res => {
            dispatch({
                type: CREATE_EBOOK_IMAGE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getHardCopyImages = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${hardcopyimagesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_HARCOPY_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addHardCopyImage = (image, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(hardcopyimagesURL, image, headers)
        .then(res => {
            dispatch({
                type: CREATE_HARCOPY_IMAGE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
