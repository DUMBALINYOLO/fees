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
import { updateObject } from "../../utility";

const initialState = {
    pendingbookreviews: [],
    pendingbookreview: {},
    loading: false,
    error: null,
}

const getPendingBookReviewListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPendingBookReviewListSuccess = (state, action) => {
  return updateObject(state, {
    pendingbookreviews: action.pendingbookreviews,
    error: null,
    loading: false
  });
};

const getPendingBookReviewListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createPendingBookReviewStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createPendingBookReviewSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createPendingBookReviewFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getPendingBookReviewDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPendingBookReviewDetailSuccess = (state, action) => {
  return updateObject(state, {
    pendingbookreview: action.pendingbookreview,
    error: null,
    loading: false
  });
};

const getPendingBookReviewDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function pendingbookreviews(state = initialState, action){
    switch(action.type){
        case GET_PENDING_BOOK_REVIEWS_START:
            return getPendingBookReviewListStart(state, action);
        case GET_PENDING_BOOK_REVIEWS_SUCCESS:
            return getPendingBookReviewListSuccess(state, action);
        case GET_PENDING_BOOK_REVIEWS_FAIL:
            return getPendingBookReviewListFail(state, action);
        case GET_PENDING_BOOK_REVIEW_START:
            return getPendingBookReviewDetailStart(state, action);
        case GET_PENDING_BOOK_REVIEW_SUCCESS:
            return getPendingBookReviewDetailSuccess(state, action);
        case GET_PENDING_BOOK_REVIEW_FAIL:
            return getPendingBookReviewDetailFail(state, action);
        case CREATE_PENDING_BOOK_REVIEW_START:
            return createPendingBookReviewStart(state, action);
        case CREATE_PENDING_BOOK_REVIEW_SUCCESS:
            return createPendingBookReviewSuccess(state, action);
        case CREATE_PENDING_BOOK_REVIEW_FAIL:
            return createPendingBookReviewFail(state, action);
        case EDIT_PENDING_BOOK_REVIEW:
            const arrayList = state.pendingbookreviews;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                pendingbookreviews: arrayList,
            };
        default:
            return state;
    }
}
