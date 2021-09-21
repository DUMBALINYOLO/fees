import axios from 'axios';
import {
    GET_PENDING_BOOK_REVIEWS_START,
    GET_PENDING_BOOK_REVIEWS_SUCCESS,
    GET_PENDING_BOOK_REVIEWS_FAIL,
    CREATE_PENDING_BOOK_REVIEW_START,
    CREATE_PENDING_BOOK_REVIEW_SUCCESS,
    CREATE_PENDING_BOOK_REVIEW_FAIL,
    GET_PENDING_BOOK_REVIEW_START,
    GET_PENDING_BOOK_REVIEW_SUCCESS,
    GET_PENDING_BOOK_REVIEW_FAIL,
    EDIT_PENDING_BOOK_REVIEW
    } from '../../types/pendingbookreviewTypes';
import { pendingbookreviewsURL } from '../../constants';

//pending book reviews
const getPendingBookReviewListStart = () => {
  return {
    type: GET_PENDING_BOOK_REVIEWS_START
  };
};

const getPendingBookReviewListSuccess = pendingbookreviews => {
  return {
    type: GET_PENDING_BOOK_REVIEWS_SUCCESS,
    pendingbookreviews
  };
};

const getPendingBookReviewListFail = error => {
  return {
    type: GET_PENDING_BOOK_REVIEWS_FAIL,
    error: error
  };
};

const createPendingBookReviewStart = () => {
  return {
    type: CREATE_PENDING_BOOK_REVIEW_START
  };
};


const createPendingBookReviewSuccess = pendingbookreview => {
  return {
    type: CREATE_PENDING_BOOK_REVIEW_SUCCESS,
    pendingbookreview
  };
};

const createPendingBookReviewFail = error => {
  return {
    type: CREATE_PENDING_BOOK_REVIEW_FAIL,
    error: error
  };
};

const getPendingBookReviewDetailStart = () => {
  return {
    type: GET_PENDING_BOOK_REVIEW_START
  };
};

const getPendingBookReviewDetailSuccess = pendingbookreview => {
  return {
    type: GET_PENDING_BOOK_REVIEW_SUCCESS,
    pendingbookreview
  };
};

const getPendingBookReviewDetailFail = error => {
  return {
    type: GET_PENDING_BOOK_REVIEW_FAIL,
    error: error
  };
};

export const getPendingBookReviews = (token) => {
  return dispatch => {
      dispatch(getPendingBookReviewListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(pendingbookreviewsURL, headers)
        .then(res => {
          const pendingbookreviews = res.data;
          dispatch(getPendingBookReviewListSuccess(pendingbookreviews));
          })
        .catch(err => {
          dispatch(getPendingBookReviewListStart(err));
        });
    };
};

export const getPendingBookReview = (id, token) => {
  return dispatch => {
      dispatch(getPendingBookReviewDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${pendingbookreviewsURL}${id}`, headers)
        .then(res => {
          const pendingbookreview = res.data;
          dispatch(getPendingBookReviewDetailSuccess(pendingbookreview));
          })
        .catch(err => {
          dispatch(getPendingBookReviewDetailFail(err));
        });
    };
};

export const addPendingBookReview = (pendingbookreview, token) => {
  return dispatch => {
      dispatch(createPendingBookReviewStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(pendingbookreviewsURL, pendingbookreview, headers)
        .then(res => {
          dispatch(createPendingBookReviewSuccess(pendingbookreview));
        })
        .catch(err => {
          dispatch(createPendingBookReviewFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editPendingBookReview = (id, pendingbookreview, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${pendingbookreviewsURL}${id}/`, pendingbookreview, headers)
        .then(res => {
            dispatch({
                type: EDIT_PENDING_BOOK_REVIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
