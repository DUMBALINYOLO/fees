import axios from 'axios';
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
import { ebookURL, ebookimagesURL, ebookcoversURL } from '../../constants';
import { returnErrors } from '../messages';



//ebooks
const getEbookListStart = () => {
  return {
    type: GET_EBOOKS_START
  };
};

const getEbookListSuccess = ebooks => {
  return {
    type: GET_EBOOKS_SUCCESS,
    ebooks
  };
};

const getEbookListFail = error => {
  return {
    type: GET_EBOOKS_FAIL,
    error: error
  };
};

const createEbookStart = () => {
  return {
    type: CREATE_EBOOK_START
  };
};


const createEbookSuccess = ebook => {
  return {
    type: CREATE_EBOOK_SUCCESS,
    ebook
  };
};

const createEbookFail = error => {
  return {
    type: CREATE_EBOOK_FAIL,
    error: error
  };
};

const getEbookDetailStart = () => {
  return {
    type: GET_EBOOK_START
  };
};

const getEbookDetailSuccess = ebook => {
  return {
    type: GET_EBOOK_SUCCESS,
    ebook
  };
};

const getEbookDetailFail = error => {
  return {
    type: GET_EBOOK_FAIL,
    error: error
  };
};


const getEbookImageListStart = () => {
  return {
    type: GET_EBOOK_IMAGES_START
  };
};

const getEbookImageListSuccess = ebookimages => {
  return {
    type: GET_EBOOK_IMAGES_SUCCESS,
    ebookimages
  };
};

const getEbookImageListFail = error => {
  return {
    type: GET_EBOOK_IMAGES_FAIL,
    error: error
  };
};

const createEbookImageStart = () => {
  return {
    type: CREATE_EBOOK_IMAGE_START
  };
};

const createEbookImageSuccess = ebookimage => {
  return {
    type: CREATE_EBOOK_IMAGE_SUCCESS,
    ebookimage
  };
};

const createEbookImageFail = error => {
  return {
    type: CREATE_EBOOK_IMAGE_FAIL,
    error: error
  };
};


const createEbookCoverStart = () => {
  return {
    type: CREATE_EBOOK_COVER_START
  };
};

const createEbookCoverSuccess = ebookcover => {
  return {
    type: CREATE_EBOOK_COVER_SUCCESS,
    ebookcover
  };
};

const createEbookCoverFail = error => {
  return {
    type: CREATE_EBOOK_COVER_FAIL,
    error: error
  };
};



const unlockEbookStart = () => {
  return {
    type: UNLOCK_EBOOK_START
  };
};

const unlockEbookSuccess = ebook => {
  return {
    type: UNLOCK_EBOOK_SUCCESS,
    ebook
  };
};

const unlockEbookFail = error => {
  return {
    type: UNLOCK_EBOOK_FAIL,
    error: error
  };
};


export const unlockEbook = (id, order, token) => {
  return dispatch => {
      dispatch(unlockEbookStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${ebookURL}${id}/unlock/`, order, headers)
        .then(res => {
          dispatch(unlockEbookSuccess(order));
        })
        .catch(err => {
          dispatch(unlockEbookFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};

export const getEbookImages = (id, token) => {
  return dispatch => {
      dispatch(getEbookImageListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${ebookimagesURL}?id=${id}`, headers)
        .then(res => {
          const ebookimages = res.data;
          dispatch(getEbookImageListSuccess(ebookimages));
          })
        .catch(err => {
          dispatch(getEbookImageListStart(err));
        });
    };
};

export const addEbookImage = (image, token) => {
  return dispatch => {
      dispatch(createEbookImageStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(ebookimagesURL, image, headers)
        .then(res => {
          dispatch(createEbookImageSuccess(image));
        })
        .catch(err => {
          dispatch(createEbookImageFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const addEbookCover = (image, token) => {
  return dispatch => {
      dispatch(createEbookCoverStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(ebookcoversURL, image, headers)
        .then(res => {
          dispatch(createEbookCoverSuccess(image));
        })
        .catch(err => {
          dispatch(createEbookCoverFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getEbooks = (id, token) => {
  return dispatch => {
      dispatch(getEbookListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${ebookURL}?id=${id}`, headers)
        .then(res => {
          const ebooks = res.data;
          dispatch(getEbookListSuccess(ebooks));
          })
        .catch(err => {
          dispatch(getEbookListStart(err));
        });
    };
};



export const getEbook = (id, token) => {
  return dispatch => {
      dispatch(getEbookDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${ebookURL}${id}`, headers)
        .then(res => {
          const ebook = res.data;
          dispatch(getEbookDetailSuccess(ebook));
          })
        .catch(err => {
          dispatch(getEbookDetailFail(err));
        });
    };
};

export const addEbook = (ebook, token) => {
  return dispatch => {
      dispatch(createEbookStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(ebookURL, ebook, headers)
        .then(res => {
          dispatch(createEbookSuccess(ebook));
        })
        .catch(err => {
          dispatch(createEbookFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editEbook = (id, ebook, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${ebookURL}${id}/`, ebook, headers)
        .then(res => {
            dispatch({
                type: EDIT_EBOOK,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
