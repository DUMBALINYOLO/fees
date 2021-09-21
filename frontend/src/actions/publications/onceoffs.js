import axios from 'axios';
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
import { 
  onceoffsURL, 
  hardcopyimagesURL, 
  hardcopycoversURL,
  lockedhardcopiesURL,
} from '../../constants';
import {
  returnErrors
} from '../messages';


const unlockHardcopyStart = () => {
  return {
    type: UNLOCK_HARDCOPY_START
  };
};

const unlockHardcopySuccess = ebook => {
  return {
    type: UNLOCK_HARDCOPY_SUCCESS,
    ebook
  };
};

const unlockHardcopyFail = error => {
  return {
    type: UNLOCK_HARDCOPY_FAIL,
    error: error
  };
};

//onceoffs
const getOnceOffListStart = () => {
  return {
    type: GET_ONCE_OFFS_START
  };
};

const getOnceOffListSuccess = onceoffs => {
  return {
    type: GET_ONCE_OFFS_SUCCESS,
    onceoffs
  };
};

const getOnceOffListFail = error => {
  return {
    type: GET_ONCE_OFFS_FAIL,
    error: error
  };
};

const createOnceOffStart = () => {
  return {
    type: CREATE_ONCE_OFF_START
  };
};


const createOnceOffSuccess = onceoff => {
  return {
    type: CREATE_ONCE_OFF_SUCCESS,
    onceoff
  };
};

const createOnceOffFail = error => {
  return {
    type: CREATE_ONCE_OFF_FAIL,
    error: error
  };
};

const getOnceOffDetailStart = () => {
  return {
    type: GET_ONCE_OFF_START
  };
};

const getOnceOffDetailSuccess = onceoff => {
  return {
    type: GET_ONCE_OFF_SUCCESS,
    onceoff
  };
};

const getOnceOffDetailFail = error => {
  return {
    type: GET_ONCE_OFF_FAIL,
    error: error
  };
};


const getHardCopyImageListStart = () => {
  return {
    type: GET_HARD_COPY_IMAGES_START
  };
};

const getHardCopyImageListSuccess = hardcopyimages => {
  return {
    type: GET_HARD_COPY_IMAGES_SUCCESS,
    hardcopyimages
  };
};

const getHardCopyImageListFail = error => {
  return {
    type: GET_HARD_COPY_IMAGES_FAIL,
    error: error
  };
};

const createHardCopyImageStart = () => {
  return {
    type: CREATE_HARD_COPY_IMAGE_START
  };
};

const createHardCopyImageSuccess = hardcopyimage => {
  return {
    type: CREATE_HARD_COPY_IMAGE_SUCCESS,
    hardcopyimage
  };
};

const createHardCopyImageFail = error => {
  return {
    type: CREATE_HARD_COPY_IMAGE_FAIL,
    error: error
  };
};


const createHardCopyCoverStart = () => {
  return {
    type: CREATE_HARD_COPY_COVER_START
  };
};

const createHardCopyCoverSuccess = hardcopycover => {
  return {
    type: CREATE_HARD_COPY_COVER_SUCCESS,
    hardcopycover
  };
};

const createHardCopyCoverFail = error => {
  return {
    type: CREATE_HARD_COPY_COVER_FAIL,
    error: error
  };
};

export const getHardCopyImages = (id, token) => {
  return dispatch => {
      dispatch(getHardCopyImageListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${hardcopyimagesURL}?id=${id}`, headers)
        .then(res => {
          const hardcopyimages = res.data;
          dispatch(getHardCopyImageListSuccess(hardcopyimages));
          })
        .catch(err => {
          dispatch(getHardCopyImageListStart(err));
        });
    };
};



export const addHardCopyImage = (image, token) => {
  return dispatch => {
      dispatch(createHardCopyImageStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(hardcopyimagesURL, image, headers)
        .then(res => {
          dispatch(createHardCopyImageSuccess(image));
        })
        .catch(err => {
          dispatch(createHardCopyImageFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const addHardCopyCover = (image, token) => {
  return dispatch => {
      dispatch(createHardCopyCoverStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(hardcopycoversURL, image, headers)
        .then(res => {
          dispatch(createHardCopyCoverSuccess(image));
        })
        .catch(err => {
          dispatch(createHardCopyCoverFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const unlockHardcopy = (id, order, token) => {
  return dispatch => {
      dispatch(unlockHardcopyStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${lockedhardcopiesURL}${id}/unlock/`, order, headers)
        .then(res => {
          dispatch(unlockHardcopySuccess(order));
        })
        .catch(err => {
          dispatch(unlockHardcopyFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};


export const getOnceOffs = (id, token) => {
  return dispatch => {
      dispatch(getOnceOffListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${onceoffsURL}?id=${id}`, headers)
        .then(res => {
          const onceoffs = res.data;
          dispatch(getOnceOffListSuccess(onceoffs));
          })
        .catch(err => {
          dispatch(getOnceOffListStart(err));
        });
    };
};

export const getOnceOff = (id, token) => {
  return dispatch => {
      dispatch(getOnceOffDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${onceoffsURL}${id}`, headers)
        .then(res => {
          const onceoff = res.data;
          dispatch(getOnceOffDetailSuccess(onceoff));
          })
        .catch(err => {
          dispatch(getOnceOffDetailFail(err));
        });
    };
};

export const addOnceOff = (onceoff, token) => {
  return dispatch => {
      dispatch(createOnceOffStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(onceoffsURL, onceoff, headers)
        .then(res => {
          dispatch(createOnceOffSuccess(onceoff));
        })
        .catch(err => {
          dispatch(createOnceOffFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editOnceOff = (id, onceoff, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${onceoffsURL}${id}/`, onceoff, headers)
        .then(res => {
            dispatch({
                type: EDIT_ONCE_OFF,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
