import {
    GET_STATS_START,
    GET_STATS_SUCCESS,
    GET_STATS_FAIL,
  } from '../types/reportTypes';
  import { updateObject } from "../utility";
  
  const initialState = {
      stats: {},
      loading: false,
      error: null,
  }
  
  const getStatStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true,
    });
  };
  
  const getStatSuccess = (state, action) => {
    return updateObject(state, {
      stats: action.stats,
      error: null,
      loading: false
    });
  };
  
  const getStatFail = (state, action) => {
    return updateObject(state, {
      loading: false,
      error: action.error,
    });
  };
  
  export default function stats(state = initialState, action){
      switch(action.type){
          case GET_STATS_START:
              return getStatStart(state, action);
          case GET_STATS_SUCCESS:
              return getStatSuccess(state, action);
              
          case GET_STATS_FAIL:
              return getStatFail(state, action);
          default:
              return state;
      }
  }
  