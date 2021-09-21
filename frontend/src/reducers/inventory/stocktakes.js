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

  import { updateObject } from "../../utility";


const initialState ={
    stocktakes: [],
    stocktake: {},
    stockadjustments: [],
    error: null,
}
 
  
  
  
  //stock takes
const getStockTakeListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getStockTakeListSuccess = (state, action)  => {
    return updateObject(state, {
        stocktakes: action.stocktakes,
        error: null,
        loading: true
    });
};

const getStockTakeListFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const createStockTakeStart = (state, action)  => {
return updateObject(state, {
    error: null,
    loading: true
});
};


const createStockTakeSuccess = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const createStockTakeFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getStockTakeDetailStart = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getStockTakeDetailSuccess = (state, action)  => {
    return updateObject(state, {
        stocktake: action.stocktake,
        error: null,
        loading: true
    });
};

const getStockTakeDetailFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

//stock adjustments
const getStockAdjustmentListStart = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getStockAdjustmentListSuccess = (state, action) => {
    return updateObject(state, {
        stockadjustments: action.stockadjustments,
        error: null,
        loading: true
    });

};

const getStockAdjustmentListFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const adjustStockStart = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const adjustStockSuccess = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const adjustStockFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};




export default function suppliers(state = initialState, action){
    switch(action.type){
        case GET_STOCK_TAKES_START:
            return getStockTakeListStart(state, action);
        case GET_STOCK_TAKES_SUCCESS:
            return getStockTakeListSuccess(state, action);
        case GET_STOCK_TAKES_FAIL:
            return getStockTakeListFail(state, action);
        case GET_STOCK_TAKE_START:
            return getStockTakeDetailStart(state, action);
        case GET_STOCK_TAKE_SUCCESS:
            return getStockTakeDetailSuccess(state, action);
        case GET_STOCK_TAKE_FAIL:
            return getStockTakeDetailFail(state, action);
        case GET_STOCK_ADJUSTMENTS_START:
            return getStockAdjustmentListStart(state, action);
        case GET_STOCK_ADJUSTMENTS_SUCCESS:
            return getStockAdjustmentListSuccess(state, action);
        case GET_STOCK_ADJUSTMENTS_FAIL:
            return getStockAdjustmentListFail(state, action);
        
        case CREATE_STOCK_TAKE_START:
            return createStockTakeStart(state, action);
        case CREATE_STOCK_TAKE_SUCCESS:
            return createStockTakeSuccess(state, action);
        case CREATE_STOCK_TAKE_FAIL:
            return createStockTakeFail(state, action);

        case ADJUST_STOCK_START:
            return adjustStockStart(state, action);
        case ADJUST_STOCK_SUCCESS:
            return adjustStockSuccess(state, action);
        case ADJUST_STOCK_FAIL:
            return adjustStockFail(state, action);
        
        
        
        default:
            return state;
    }
}
  


