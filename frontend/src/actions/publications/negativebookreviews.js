import axios from 'axios';
import {
    GET_NEGATIVE_BOOK_REVIEWS_START,
    GET_NEGATIVE_BOOK_REVIEWS_SUCCESS,
    GET_NEGATIVE_BOOK_REVIEWS_FAIL,
    GET_NEGATIVE_BOOK_REVIEW_START,
    GET_NEGATIVE_BOOK_REVIEW_SUCCESS,
    GET_NEGATIVE_BOOK_REVIEW_FAIL,
    } from '../../types/negativebookreviewTypes';
import { negativebookreviewsURL } from '../../constants';

//negative book reviews
const getNegativeBookReviewListStart = () => {
  return {
    type: GET_NEGATIVE_BOOK_REVIEWS_START
  };
};

const getNegativeBookReviewListSuccess = negativebookreviews => {
  return {
    type: GET_NEGATIVE_BOOK_REVIEWS_SUCCESS,
    negativebookreviews
  };
};

const getNegativeBookReviewListFail = error => {
  return {
    type: GET_NEGATIVE_BOOK_REVIEWS_FAIL,
    error: error
  };
};

const getNegativeBookReviewDetailStart = () => {
  return {
    type: GET_NEGATIVE_BOOK_REVIEW_START
  };
};

const getNegativeBookReviewDetailSuccess = negativebookreview => {
  return {
    type: GET_NEGATIVE_BOOK_REVIEW_SUCCESS,
    negativebookreview
  };
};

const getNegativeBookReviewDetailFail = error => {
  return {
    type: GET_NEGATIVE_BOOK_REVIEW_FAIL,
    error: error
  };
};

export const getNegativeBookReviews = (token) => {
  return dispatch => {
      dispatch(getNegativeBookReviewListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(negativebookreviewsURL, headers)
        .then(res => {
          const negativebookreviews = res.data;
          dispatch(getNegativeBookReviewListSuccess(negativebookreviews));
          })
        .catch(err => {
          dispatch(getNegativeBookReviewListStart(err));
        });
    };
};

export const getNegativeBookReview = (id, token) => {
  return dispatch => {
      dispatch(getNegativeBookReviewDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${negativebookreviewsURL}${id}`, headers)
        .then(res => {
          const negativebookreview = res.data;
          dispatch(getNegativeBookReviewDetailSuccess(negativebookreview));
          })
        .catch(err => {
          dispatch(getNegativeBookReviewDetailFail(err));
        });
    };
};

