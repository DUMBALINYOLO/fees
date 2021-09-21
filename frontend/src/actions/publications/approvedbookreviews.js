import axios from 'axios';
import {
    GET_APPROVED_BOOK_REVIEWS_START,
    GET_APPROVED_BOOK_REVIEWS_SUCCESS,
    GET_APPROVED_BOOK_REVIEWS_FAIL,
    GET_APPROVED_BOOK_REVIEW_START,
    GET_APPROVED_BOOK_REVIEW_SUCCESS,
    GET_APPROVED_BOOK_REVIEW_FAIL,
    } from '../../types/approvedbookreviewTypes';
import { approvedbookreviewsURL } from '../../constants';

//approved book reviews
const getApprovedBookReviewListStart = () => {
  return {
    type: GET_APPROVED_BOOK_REVIEWS_START
  };
};

const getApprovedBookReviewListSuccess = approvedbookreviews => {
  return {
    type: GET_APPROVED_BOOK_REVIEWS_SUCCESS,
    approvedbookreviews
  };
};

const getApprovedBookReviewListFail = error => {
  return {
    type: GET_APPROVED_BOOK_REVIEWS_FAIL,
    error: error
  };
};

const getApprovedBookReviewDetailStart = () => {
  return {
    type: GET_APPROVED_BOOK_REVIEW_START
  };
};

const getApprovedBookReviewDetailSuccess = approvedbookreview => {
  return {
    type: GET_APPROVED_BOOK_REVIEW_SUCCESS,
    approvedbookreview
  };
};

const getApprovedBookReviewDetailFail = error => {
  return {
    type: GET_APPROVED_BOOK_REVIEW_FAIL,
    error: error
  };
};

export const getApprovedBookReviews = (token) => {
  return dispatch => {
      dispatch(getApprovedBookReviewListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(approvedbookreviewsURL, headers)
        .then(res => {
          const approvedbookreviews = res.data;
          dispatch(getApprovedBookReviewListSuccess(approvedbookreviews));
          })
        .catch(err => {
          dispatch(getApprovedBookReviewListStart(err));
        });
    };
};

export const getApprovedBookReview = (id, token) => {
  return dispatch => {
      dispatch(getApprovedBookReviewDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${approvedbookreviewsURL}${id}`, headers)
        .then(res => {
          const approvedbookreview = res.data;
          dispatch(getApprovedBookReviewDetailSuccess(approvedbookreview));
          })
        .catch(err => {
          dispatch(getApprovedBookReviewDetailFail(err));
        });
    };
};

