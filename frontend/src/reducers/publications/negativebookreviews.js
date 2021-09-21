import {
  GET_NEGATIVE_BOOK_REVIEWS_START,
  GET_NEGATIVE_BOOK_REVIEWS_SUCCESS,
  GET_NEGATIVE_BOOK_REVIEWS_FAIL,
  GET_NEGATIVE_BOOK_REVIEW_START,
  GET_NEGATIVE_BOOK_REVIEW_SUCCESS,
  GET_NEGATIVE_BOOK_REVIEW_FAIL,
} from '../../types/negativebookreviewTypes';
import { updateObject } from "../../utility";

const initialState = {
    negativebookreviews: [],
    negativebookreview: {},
    loading: false,
    error: null,
}

const getNegativeBookReviewListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getNegativeBookReviewListSuccess = (state, action) => {
  return updateObject(state, {
    negativebookreviews: action.negativebookreviews,
    error: null,
    loading: false
  });
};

const getNegativeBookReviewListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getNegativeBookReviewDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getNegativeBookReviewDetailSuccess = (state, action) => {
  return updateObject(state, {
    negativebookreview: action.negativebookreview,
    error: null,
    loading: false
  });
};

const getNegativeBookReviewDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function negativebookreviews(state = initialState, action){
    switch(action.type){
        case GET_NEGATIVE_BOOK_REVIEWS_START:
            return getNegativeBookReviewListStart(state, action);
        case GET_NEGATIVE_BOOK_REVIEWS_SUCCESS:
            return getNegativeBookReviewListSuccess(state, action);
        case GET_NEGATIVE_BOOK_REVIEWS_FAIL:
            return getNegativeBookReviewListFail(state, action);
        case GET_NEGATIVE_BOOK_REVIEW_START:
            return getNegativeBookReviewDetailStart(state, action);
        case GET_NEGATIVE_BOOK_REVIEW_SUCCESS:
            return getNegativeBookReviewDetailSuccess(state, action);
        case GET_NEGATIVE_BOOK_REVIEW_FAIL:
            return getNegativeBookReviewDetailFail(state, action);
        default:
            return state;
    }
}
