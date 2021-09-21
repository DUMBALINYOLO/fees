import {
  GET_APPROVED_BOOK_REVIEWS_START,
  GET_APPROVED_BOOK_REVIEWS_SUCCESS,
  GET_APPROVED_BOOK_REVIEWS_FAIL,
  GET_APPROVED_BOOK_REVIEW_START,
  GET_APPROVED_BOOK_REVIEW_SUCCESS,
  GET_APPROVED_BOOK_REVIEW_FAIL,
  } from '../../types/approvedbookreviewTypes';
import { updateObject } from "../../utility";

const initialState = {
    approvedbookreviews: [],
    approvedbookreview: {},
    loading: false,
    error: null,
}

const getApprovedBookReviewListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getApprovedBookReviewListSuccess = (state, action) => {
  return updateObject(state, {
    approvedbookreviews: action.approvedbookreviews,
    error: null,
    loading: false
  });
};

const getApprovedBookReviewListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getApprovedBookReviewDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getApprovedBookReviewDetailSuccess = (state, action) => {
  return updateObject(state, {
    approvedbookreview: action.approvedbookreview,
    error: null,
    loading: false
  });
};

const getApprovedBookReviewDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function approvedbookreviews(state = initialState, action){
    switch(action.type){
        case GET_APPROVED_BOOK_REVIEWS_START:
            return getApprovedBookReviewListStart(state, action);
        case GET_APPROVED_BOOK_REVIEWS_SUCCESS:
            return getApprovedBookReviewListSuccess(state, action);
        case GET_APPROVED_BOOK_REVIEWS_FAIL:
            return getApprovedBookReviewListFail(state, action);
        case GET_APPROVED_BOOK_REVIEW_START:
            return getApprovedBookReviewDetailStart(state, action);
        case GET_APPROVED_BOOK_REVIEW_SUCCESS:
            return getApprovedBookReviewDetailSuccess(state, action);
        case GET_APPROVED_BOOK_REVIEW_FAIL:
            return getApprovedBookReviewDetailFail(state, action);
        default:
            return state;
    }
}
