import {
    GET_CUSTOMER_UNPAID_INVOICES_START,
    GET_CUSTOMER_UNPAID_INVOICES_SUCCESS,
    GET_CUSTOMER_UNPAID_INVOICES_FAIL,
    GET_CUSTOMER_UNPAID_INVOICE_START,
    GET_CUSTOMER_UNPAID_INVOICE_SUCCESS,
    GET_CUSTOMER_UNPAID_INVOICE_FAIL,
    GET_CUSTOMER_EBOOK_ORDER_ITEMS_START,
    GET_CUSTOMER_EBOOK_ORDER_ITEMS_SUCCESS,
    GET_CUSTOMER_EBOOK_ORDER_ITEMS_FAIL,
    GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_START,
    GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_SUCCESS,
    GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_FAIL,
    GET_CUSTOMER_PARTIALY_PAID_INVOICES_START,
    GET_CUSTOMER_PARTIALY_PAID_INVOICES_SUCCESS,
    GET_CUSTOMER_PARTIALY_PAID_INVOICES_FAIL,
    GET_CUSTOMER_PARTIALY_PAID_INVOICE_START,
    GET_CUSTOMER_PARTIALY_PAID_INVOICE_SUCCESS,
    GET_CUSTOMER_PARTIALY_PAID_INVOICE_FAIL,
    GET_CUSTOMER_SERIES_ORDER_ITEMS_START,
    GET_CUSTOMER_SERIES_ORDER_ITEMS_SUCCESS,
    GET_CUSTOMER_SERIES_ORDER_ITEMS_FAIL,
    GET_CUSTOMER_FULLY_PAID_INVOICES_START,
    GET_CUSTOMER_FULLY_PAID_INVOICES_SUCCESS,
    GET_CUSTOMER_FULLY_PAID_INVOICES_FAIL,
    GET_CUSTOMER_FULLY_PAID_INVOICE_START,
    GET_CUSTOMER_FULLY_PAID_INVOICE_SUCCESS,
    GET_CUSTOMER_FULLY_PAID_INVOICE_FAIL,
    CREATE_EBOOK_CUSTOMER_ORDER_ITEM_START,
    CREATE_EBOOK_CUSTOMER_ORDER_ITEM_SUCCESS,
    CREATE_EBOOK_CUSTOMER_ORDER_ITEM_FAIL,
    CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_START,
    CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_SUCCESS,
    CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_FAIL,
    CREATE_SERIES_CUSTOMER_ORDER_ITEM_START,
    CREATE_SERIES_CUSTOMER_ORDER_ITEM_SUCCESS,
    CREATE_SERIES_CUSTOMER_ORDER_ITEM_FAIL,
    GET_CUSTOMER_CART_START,
    GET_CUSTOMER_CART_SUCCESS,
    GET_CUSTOMER_CART_FAIL,
    GET_CUSTOMER_PAYMENTS_START,
    GET_CUSTOMER_PAYMENTS_SUCCESS,
    GET_CUSTOMER_PAYMENTS_FAIL,
} from '../../types/customerTypes';
import { updateObject } from "../../utility";


const initialState = {
    customerunpaidinvoices: [],
    customerunpaidinvoice: {},
    customerpartiallypaidinvoices: [],
    customerpartiallypaidinvoice: {},
    customerfullypaidinvoices: [],
    customerfullypaidinvoice: {},
    customerebookorderitems: [],
    customerhardcopyorderitems: [],
    customerseriesorderitems: [],
    customercart: {},
    customerpayments: [],
}


const getCustomerPaymentListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
  };
  
  const getCustomerPaymentListSuccess = (state, action) => {
    return updateObject(state, {
        customerpayments: action.customerpayments,
        error: action.error,
        loading: false
      });
  };
  
  const getCustomerPaymentListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
  };

const getCustomerCartStart = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

const getCustomerCartSuccess = (state, action) => {
  return updateObject(state, {
      customercart: action.customercart,
      error: action.error,
      loading: false
    });
  };

const getCustomerCartFail = (state, action)=> {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
};






const getCustomerUnpaidInvoiceListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
  };

const getCustomerUnpaidInvoiceListSuccess = (state, action) => {
    return updateObject(state, {
        customerunpaidinvoices: action.customerunpaidinvoices,
        error: action.error,
        loading: false
      });
  };

const getCustomerUnpaidInvoiceListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerUnpaidInvoiceDetailStart =(state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
  };

const getCustomerUnpaidInvoiceDetailSuccess = (state, action) => {
    return updateObject(state, {
        customerunpaidinvoice: action.customerunpaidinvoice,
        error: action.error,
        loading: false
      });
};


const getCustomerUnpaidInvoiceDetailFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};


const getCustomerPartiallyPaidInvoiceListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerPartiallyPaidInvoiceListSuccess = (state, action) => {
    return updateObject(state, {
        customerpartiallypaidinvoices: action.customerpartiallypaidinvoices,
        error: action.error,
        loading: false
      });
};

const getCustomerPartiallyPaidInvoiceListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerPartiallyPaidInvoiceDetailStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerPartiallyPaidInvoiceDetailSuccess = (state, action) => {
    return updateObject(state, {
        customerpartiallypaidinvoice: action.customerpartiallypaidinvoice,
        error: action.error,
        loading: false
      });
};

const getCustomerPartiallyPaidInvoiceDetailFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};


const getCustomerFullyPaidInvoiceListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerFullyPaidInvoiceListSuccess = (state, action) => {
    return updateObject(state, {
        customerfullypaidinvoices: action.customerfullypaidinvoices,
        error: action.error,
        loading: false
      });
};

const getCustomerFullyPaidInvoiceListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerFullyPaidInvoiceDetailStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerFullyPaidInvoiceDetailSuccess = (state, action) => {
    return updateObject(state, {
        customerfullypaidinvoice: action.customerfullypaidinvoice,
        error: action.error,
        loading: false
      });
};

const getCustomerFullyPaidInvoiceDetailFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};


const getCustomerEbookOrderItemListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerEbookOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        customerebookorderitems: action.customerebookorderitems,
        error: action.error,
        loading: false
      });
};

const getCustomerEbookOrderItemListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerHardcopyOrderItemListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerHardcopyOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        customerharcopyorderitems: action.customerharcopyorderitems,
        error: action.error,
        loading: false
      });
};

const getCustomerHardcopyOrderItemListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};


const getCustomerSeriesOrderItemListStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const getCustomerSeriesOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        customerseriesorderitems: action.customerseriesorderitems,
        error: action.error,
        loading: false
      });
};

const getCustomerSeriesOrderItemListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};


const createCustomerEbookOrderItemStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const createCustomerEbookOrderItemSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const createCustomerEbookOrderItemFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};



const createCustomerHardcopyOrderItemStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const createCustomerHardcopyOrderItemSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const createCustomerHardcopyOrderItemFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};



const createCustomerSeriesOrderItemStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const createCustomerSeriesOrderItemSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};

const createCustomerSeriesOrderItemFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};



export default function customerinvoices(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMER_UNPAID_INVOICES_START:
            return getCustomerUnpaidInvoiceListStart(state, action);
        case GET_CUSTOMER_UNPAID_INVOICES_SUCCESS:
            return getCustomerUnpaidInvoiceListSuccess(state, action);
        case GET_CUSTOMER_UNPAID_INVOICES_FAIL:
            return getCustomerUnpaidInvoiceListFail(state, action);
        case GET_CUSTOMER_UNPAID_INVOICE_START:
        return getCustomerUnpaidInvoiceDetailStart(state, action);
        case GET_CUSTOMER_UNPAID_INVOICE_SUCCESS:
            return getCustomerUnpaidInvoiceDetailSuccess(state, action);
        case GET_CUSTOMER_UNPAID_INVOICE_FAIL:
            return getCustomerUnpaidInvoiceDetailFail(state, action);
        case GET_CUSTOMER_PARTIALY_PAID_INVOICES_START:
            return getCustomerPartiallyPaidInvoiceListStart(state, action);
        case GET_CUSTOMER_PARTIALY_PAID_INVOICES_SUCCESS:
            return getCustomerPartiallyPaidInvoiceListSuccess(state, action);
        case GET_CUSTOMER_PARTIALY_PAID_INVOICES_FAIL:
            return getCustomerPartiallyPaidInvoiceListFail(state, action);
        case GET_CUSTOMER_PARTIALY_PAID_INVOICE_START:
        return getCustomerPartiallyPaidInvoiceDetailStart(state, action);
        case GET_CUSTOMER_PARTIALY_PAID_INVOICE_SUCCESS:
            return getCustomerPartiallyPaidInvoiceDetailSuccess(state, action);
        case GET_CUSTOMER_PARTIALY_PAID_INVOICE_FAIL:
            return getCustomerPartiallyPaidInvoiceDetailFail(state, action);
        case GET_CUSTOMER_FULLY_PAID_INVOICES_START:
            return getCustomerFullyPaidInvoiceListStart(state, action);
        case GET_CUSTOMER_FULLY_PAID_INVOICES_SUCCESS:
            return getCustomerFullyPaidInvoiceListSuccess(state, action);
        case GET_CUSTOMER_FULLY_PAID_INVOICES_FAIL:
            return getCustomerFullyPaidInvoiceListFail(state, action);
        case GET_CUSTOMER_FULLY_PAID_INVOICE_START:
        return getCustomerFullyPaidInvoiceDetailStart(state, action);
        case GET_CUSTOMER_FULLY_PAID_INVOICE_SUCCESS:
            return getCustomerFullyPaidInvoiceDetailSuccess(state, action);
        case GET_CUSTOMER_FULLY_PAID_INVOICE_FAIL:
            return getCustomerFullyPaidInvoiceDetailFail(state, action);
        case GET_CUSTOMER_EBOOK_ORDER_ITEMS_START:
            return getCustomerEbookOrderItemListStart(state, action);
        case GET_CUSTOMER_EBOOK_ORDER_ITEMS_SUCCESS:
            return getCustomerEbookOrderItemListSuccess(state, action);
        case GET_CUSTOMER_EBOOK_ORDER_ITEMS_FAIL:
            return getCustomerEbookOrderItemListFail(state, action);
        case GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_START:
            return getCustomerHardcopyOrderItemListStart(state, action);
        case GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_SUCCESS:
            return getCustomerHardcopyOrderItemListSuccess(state, action);
        case GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_FAIL:
            return getCustomerHardcopyOrderItemListFail(state, action);
        case GET_CUSTOMER_SERIES_ORDER_ITEMS_START:
            return getCustomerSeriesOrderItemListStart(state, action);
        case GET_CUSTOMER_SERIES_ORDER_ITEMS_SUCCESS:
            return getCustomerSeriesOrderItemListSuccess(state, action);
        case GET_CUSTOMER_SERIES_ORDER_ITEMS_FAIL:
            return getCustomerSeriesOrderItemListFail(state, action);
        case CREATE_EBOOK_CUSTOMER_ORDER_ITEM_START:
            return createCustomerEbookOrderItemStart(state, action);
        case CREATE_EBOOK_CUSTOMER_ORDER_ITEM_SUCCESS:
            return createCustomerEbookOrderItemSuccess(state, action);
        case CREATE_EBOOK_CUSTOMER_ORDER_ITEM_FAIL:
            return createCustomerEbookOrderItemFail(state, action);
        case CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_START:
            return createCustomerHardcopyOrderItemStart(state, action);
        case CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_SUCCESS:
            return createCustomerHardcopyOrderItemSuccess(state, action);
        case CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_FAIL:
            return createCustomerHardcopyOrderItemFail(state, action);
        case CREATE_SERIES_CUSTOMER_ORDER_ITEM_START:
            return createCustomerSeriesOrderItemStart(state, action);
        case CREATE_SERIES_CUSTOMER_ORDER_ITEM_SUCCESS:
            return createCustomerSeriesOrderItemSuccess(state, action);
        case CREATE_SERIES_CUSTOMER_ORDER_ITEM_FAIL:
            return createCustomerSeriesOrderItemFail(state, action);
        case GET_CUSTOMER_CART_START:
            return getCustomerCartStart(state, action);
        case GET_CUSTOMER_CART_SUCCESS:
            return getCustomerCartSuccess(state, action);
        case GET_CUSTOMER_CART_FAIL:
            return getCustomerCartFail(state, action);
        case GET_CUSTOMER_PAYMENTS_START:
            return getCustomerPaymentListStart(state, action);
        case GET_CUSTOMER_PAYMENTS_SUCCESS:
            return getCustomerPaymentListSuccess(state, action);
        case GET_CUSTOMER_PAYMENTS_FAIL:
            return getCustomerPaymentListFail(state, action);



        default:
            return state;
    }
}
