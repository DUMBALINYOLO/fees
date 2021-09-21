import axios from 'axios';
import {
  GET_STOCK_TAKES_START,
  GET_STOCK_TAKES_SUCCESS,
  GET_STOCK_TAKES_FAIL,
  CREATE_STOCK_TAKE_START,
  CREATE_STOCK_TAKE_SUCCESS,
  CREATE_STOCK_TAKE_FAIL,
  GET_STOCK_TAKE_START,
  GET_STOCK_TAKE_SUCCESS,
  GET_STOCK_TAKE_FAIL,
  GET_STOCK_ADJUSTMENTS_START,
  GET_STOCK_ADJUSTMENTS_SUCCESS,
  GET_STOCK_ADJUSTMENTS_FAIL,
  ADJUST_STOCK_START,
  ADJUST_STOCK_SUCCESS,
  ADJUST_STOCK_FAIL,
 
} from '../../types/stockTakeTypes';
import { returnErrors } from '../messages';
import { 
  stocktakesURL,
  stockadjustmentsURL,

  
} from '../../constants';





//stock takes
const getStockTakeListStart = () => {
    return {
      type: GET_STOCK_TAKES_START
    };
};
  
const getStockTakeListSuccess = stocktakes => {
    return {
        type: GET_STOCK_TAKES_SUCCESS,
        stocktakes
    };
};

const getStockTakeListFail = error => {
    return {
        type: GET_STOCK_TAKES_FAIL,
        error: error
    };
};

const createStockTakeStart = () => {
    return {
        type: CREATE_STOCK_TAKE_START
    };
};


const createStockTakeSuccess = stocktake => {
    return {
        type: CREATE_STOCK_TAKE_SUCCESS,
        stocktake
    };
};

const createStockTakeFail = error => {
    return {
        type: CREATE_STOCK_TAKE_FAIL,
        error: error
    };
};

const getStockTakeDetailStart = () => {
    return {
        type: GET_STOCK_TAKE_START
    };
};

const getStockTakeDetailSuccess = stocktake => {
    return {
        type: GET_STOCK_TAKE_SUCCESS,
        stocktake
    };
};

const getStockTakeDetailFail = error => {
  return {
    type: GET_STOCK_TAKE_FAIL,
    error: error
  };
};

//stock adjustments
const getStockAdjustmentListStart = () => {
    return {
      type: GET_STOCK_ADJUSTMENTS_START
    };
};
  
const getStockAdjustmentListSuccess = stockadjustments => {
    return {
        type: GET_STOCK_ADJUSTMENTS_SUCCESS,
        stockadjustments
    };
};

const getStockAdjustmentListFail = error => {
    return {
        type: GET_STOCK_ADJUSTMENTS_FAIL,
        error: error
    };
};




const adjustStockStart = () => {
  return {
      type: ADJUST_STOCK_START
  };
};


const adjustStockSuccess = stock => {
  return {
      type: ADJUST_STOCK_SUCCESS,
      stock
  };
};

const adjustStockFail = error => {
  return {
      type: ADJUST_STOCK_FAIL,
      error: error
  };
};







//stock adjustments
export const getStockAdjustments = (id, token) => {
  return dispatch => {
    dispatch(getStockAdjustmentListStart());
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
    };
    axios
      .get(`${stockadjustmentsURL}?id=${id}`, headers)
      .then(res => {
        const stockadjustments = res.data;
        dispatch(getStockAdjustmentListSuccess(stockadjustments));
        })
      .catch(err => {
        dispatch(getStockAdjustmentListFail(err));
    });
  };
};


 




//stock takes
export const getStockTakes = (token) => {
  return dispatch => {
    dispatch(getStockTakeListStart());
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
    };
    axios
      .get(stocktakesURL, headers)
      .then(res => {
        const stocktakes = res.data;
        dispatch(getStockTakeListSuccess(stocktakes));
        })
      .catch(err => {
        dispatch(getStockTakeListFail(err));
    });
  };
};

export const getStockTake = (id, token) => {
  return dispatch => {
    dispatch(getStockTakeDetailStart());
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
    };
    axios
      .get(`${stocktakesURL}${id}`, headers)
      .then(res => {
        const stocktake = res.data;
        dispatch(getStockTakeDetailSuccess(stocktake));
        })
      .catch(err => {
        dispatch(getStockTakeDetailFail(err));
    });
  };
}; 

export const addStockTake = (stocktake, token) => {
  return dispatch => {
    dispatch(createStockTakeStart());
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
    };
    axios
      .post(stocktakesURL, stocktake, headers)
      .then(res => {
        dispatch(createStockTakeSuccess(stocktake));
      })
      .catch(err => {
        dispatch(createStockTakeFail(err));
        dispatch(returnErrors(err.response.data, err.response.status));
    });
  };
};  


export const adjustStock = (id, stock, token) => {
  return dispatch => {
      dispatch(adjustStockStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${stockadjustmentsURL}${id}/activate/`, stock, headers)
        .then(res => {
          dispatch(adjustStockSuccess(stock));
        })
        .catch(err => {
          dispatch(adjustStockFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
  };
};