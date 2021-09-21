import {
    GET_FULLY_PAID_INVOICES_START,
    GET_FULLY_PAID_INVOICES_SUCCESS,
    GET_FULLY_PAID_INVOICES_FAIL,
    GET_FULLY_PAID_INVOICE_START,
    GET_FULLY_PAID_INVOICE_SUCCESS,
    GET_FULLY_PAID_INVOICE_FAIL,
    GET_PARTIALLY_PAID_INVOICES_START,
    GET_PARTIALLY_PAID_INVOICES_SUCCESS,
    GET_PARTIALLY_PAID_INVOICES_FAIL,
    GET_PARTIALLY_PAID_INVOICE_START,
    GET_PARTIALLY_PAID_INVOICE_SUCCESS,
    GET_PARTIALLY_PAID_INVOICE_FAIL,
    GET_UNPAID_INVOICES_START,
    GET_UNPAID_INVOICES_SUCCESS,
    GET_UNPAID_INVOICES_FAIL,
    GET_UNPAID_INVOICE_START,
    GET_UNPAID_INVOICE_SUCCESS,
    GET_UNPAID_INVOICE_FAIL,
    GET_CUSTOMER_ORDERS_START,
    GET_CUSTOMER_ORDERS_SUCCESS,
    GET_CUSTOMER_ORDERS_FAIL,
    GET_CUSTOMER_ORDER_START,
    GET_CUSTOMER_ORDER_SUCCESS,
    GET_CUSTOMER_ORDER_FAIL,
    GET_PENDING_CUSTOMER_ORDERS_START,
    GET_PENDING_CUSTOMER_ORDERS_SUCCESS,
    GET_PENDING_CUSTOMER_ORDERS_FAIL,
    GET_PENDING_CUSTOMER_ORDER_START,
    GET_PENDING_CUSTOMER_ORDER_SUCCESS,
    GET_PENDING_CUSTOMER_ORDER_FAIL,
    GET_REJECTED_CUSTOMER_ORDERS_START,
    GET_REJECTED_CUSTOMER_ORDERS_SUCCESS,
    GET_REJECTED_CUSTOMER_ORDERS_FAIL,
    GET_REJECTED_CUSTOMER_ORDER_START,
    GET_REJECTED_CUSTOMER_ORDER_SUCCESS,
    GET_REJECTED_CUSTOMER_ORDER_FAIL,
    GET_COMPLETED_CUSTOMER_ORDERS_START,
    GET_COMPLETED_CUSTOMER_ORDERS_SUCCESS,
    GET_COMPLETED_CUSTOMER_ORDERS_FAIL,
    GET_COMPLETED_CUSTOMER_ORDER_START,
    GET_COMPLETED_CUSTOMER_ORDER_SUCCESS,
    GET_COMPLETED_CUSTOMER_ORDER_FAIL,
    GET_CANCELLED_CUSTOMER_ORDERS_START,
    GET_CANCELLED_CUSTOMER_ORDERS_SUCCESS,
    GET_CANCELLED_CUSTOMER_ORDERS_FAIL,
    GET_CANCELLED_CUSTOMER_ORDER_START,
    GET_CANCELLED_CUSTOMER_ORDER_SUCCESS,
    GET_CANCELLED_CUSTOMER_ORDER_FAIL,
    GET_REFUNDED_CUSTOMER_ORDERS_START,
    GET_REFUNDED_CUSTOMER_ORDERS_SUCCESS,
    GET_REFUNDED_CUSTOMER_ORDERS_FAIL,
    GET_REFUNDED_CUSTOMER_ORDER_START,
    GET_REFUNDED_CUSTOMER_ORDER_SUCCESS,
    GET_REFUNDED_CUSTOMER_ORDER_FAIL,
    GET_HARDCOPY_ORDER_ITEMS_START,
    GET_HARDCOPY_ORDER_ITEMS_SUCCESS,
    GET_HARDCOPY_ORDER_ITEMS_FAIL,
    GET_EBOOK_ORDER_ITEMS_START,
    GET_EBOOK_ORDER_ITEMS_SUCCESS,
    GET_EBOOK_ORDER_ITEMS_FAIL,
    GET_SERIES_ORDER_ITEMS_START,
    GET_SERIES_ORDER_ITEMS_SUCCESS,
    GET_SERIES_ORDER_ITEMS_FAIL,
    ACCEPT_CUSTOMER_ORDER_START,
    ACCEPT_CUSTOMER_ORDER_SUCCESS ,
    ACCEPT_CUSTOMER_ORDER_FAIL,
    REJECT_CUSTOMER_ORDER_START,
    REJECT_CUSTOMER_ORDER_SUCCESS,
    REJECT_CUSTOMER_ORDER_FAIL,
    ACCEPT_REJECTED_CUSTOMER_ORDER_START,
    ACCEPT_REJECTED_CUSTOMER_ORDER_SUCCESS,
    ACCEPT_REJECTED_CUSTOMER_ORDER_FAIL,
    REFUND_CUSTOMER_ORDER_START,
    REFUND_CUSTOMER_ORDER_SUCCESS,
    REFUND_CUSTOMER_ORDER_FAIL,
    PAY_CUSTOMER_ORDER_START ,
    PAY_CUSTOMER_ORDER_SUCCESS,
    PAY_CUSTOMER_ORDER_FAIL,
    PAY_PARTIALLY_CUSTOMER_ORDER_START,
    PAY_PARTIALLY_CUSTOMER_ORDER_SUCCESS,
    PAY_PARTIALLY_CUSTOMER_ORDER_FAIL,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_START,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_SUCCESS,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_FAIL,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_START,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_SUCCESS,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_FAIL,
    VERIFY_CUSTOMER_ORDER_PAYMENT_START,
    VERIFY_CUSTOMER_ORDER_PAYMENT_SUCCESS,
    VERIFY_CUSTOMER_ORDER_PAYMENT_FAIL,
    GET_CASH_INVOICE_PAYMENTS_START,
    GET_CASH_INVOICE_PAYMENTS_SUCCESS,
    GET_CASH_INVOICE_PAYMENTS_FAIL,
    GET_CASH_INVOICE_PAYMENT_START,
    GET_CASH_INVOICE_PAYMENT_SUCCESS,
    GET_CASH_INVOICE_PAYMENT_FAIL,
    GET_DEBIT_CARD_INVOICE_PAYMENTS_START,
    GET_DEBIT_CARD_INVOICE_PAYMENTS_SUCCESS,
    GET_DEBIT_CARD_INVOICE_PAYMENTS_FAIL,
    GET_DEBIT_CARD_INVOICE_PAYMENT_START,
    GET_DEBIT_CARD_INVOICE_PAYMENT_SUCCESS,
    GET_DEBIT_CARD_INVOICE_PAYMENT_FAIL,
    GET_MOBILE_INVOICE_PAYMENTS_START,
    GET_MOBILE_INVOICE_PAYMENTS_SUCCESS,
    GET_MOBILE_INVOICE_PAYMENTS_FAIL,
    GET_MOBILE_INVOICE_PAYMENT_START,
    GET_MOBILE_INVOICE_PAYMENT_SUCCESS,
    GET_MOBILE_INVOICE_PAYMENT_FAIL,
    GET_TRANSFER_INVOICE_PAYMENTS_START,
    GET_TRANSFER_INVOICE_PAYMENTS_SUCCESS,
    GET_TRANSFER_INVOICE_PAYMENTS_FAIL,
    GET_TRANSFER_INVOICE_PAYMENT_START,
    GET_TRANSFER_INVOICE_PAYMENT_SUCCESS,
    GET_TRANSFER_INVOICE_PAYMENT_FAIL,
    GET_INVOICE_LINES_START,
    GET_INVOICE_LINES_SUCCESS,
    GET_INVOICE_LINES_FAIL,

} from '../../types/customerOrderTypes';
import { updateObject } from "../../utility";

const initialState = {
    fullypaidinvoices: [],
    fullypaidinvoice: {},
    partiallypaidinvoices: [],
    partiallypaidinvoice: {},
    unpaidinvoices: [],
    unpaidinvoice: {},
    customerorders: [],
    customerorder: {},
    pendingcustomerorders: [],
    pendingcustomerorder: {},
    rejectedcustomerorders: [],
    rejectedcustomerorder: {},
    cancelledcustomerorders: [],
    cancelledcustomerorder: {},
    completedcustomerorders: [],
    completedcustomerorder: {},
    refundedcustomerorders: [],
    hardcopyorderitems: [],
    ebookorderitems: [],
    seriesorderitems: [],
    unverifiedcustomerorderpayments: [],
    unverifiedcustomerorderpayment: {},
    cashinvoicepayments: [],
    cashinvoicepayment: {},
    mobileinvoicepayments: [],
    mobileinvoicepayment: {},
    debitcardinvoicepayments: [],
    debitcardinvoicepayment: {},
    transferinvoicepayments: [],
    transferinvoicepayment: {},    
    loading: false,
    error: null,
    invoicelines: []
}


const getInvoiceLineListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const getInvoiceLineListSuccess = (state, action) => {
    return updateObject(state, {
        invoicelines: action.invoicelines,
        error: null,
        loading: true
      });
  };
  
  const getInvoiceLineListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  



const getFullyPaidInvoiceListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getFullyPaidInvoiceListSuccess = (state, action) => {
    return updateObject(state, {
      fullypaidinvoices: action.fullypaidinvoices,
      error: null,
      loading: false
    });
};
  
const getFullyPaidInvoiceListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getFullyPaidInvoiceDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getFullyPaidInvoiceDetailSuccess = (state, action) => {
    return updateObject(state, {
      fullypaidinvoice: action.fullypaidinvoice,
      error: null,
      loading: false
    });
};
  
const getFullyPaidInvoiceDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getPartiallyPaidInvoiceListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getPartiallyPaidInvoiceListSuccess = (state, action) => {
    return updateObject(state, {
        partiallypaidinvoices: action.partiallypaidinvoices,
        error: null,
        loading: false
    });
};
  
const getPartiallyPaidInvoiceListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getPartiallyPaidInvoiceDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getPartiallyPaidInvoiceDetailSuccess = (state, action) => {
    return updateObject(state, {
      partiallypaidinvoice: action.partiallypaidinvoice,
      error: null,
      loading: false
    });
};
  
const getPartiallyPaidInvoiceDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getUnpaidInvoiceDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getUnpaidInvoiceDetailSuccess = (state, action) => {
    return updateObject(state, {
      unpaidinvoice: action.unpaidinvoice,
      error: null,
      loading: false
    });
};
  
const getUnpaidInvoiceDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getUnpaidInvoiceListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getUnpaidInvoiceListSuccess = (state, action) => {
    return updateObject(state, {
        unpaidinvoices: action.unpaidinvoices,
        error: null,
        loading: false
    });
};
  
const getUnpaidInvoiceListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getCustomerOrderListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCustomerOrderListSuccess = (state, action) => {
    return updateObject(state, {
        customerorders: action.customerorder,
        error: null,
        loading: false
    });
};
  
const getCustomerOrderListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getCustomerOrderDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCustomerOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
      customerorder: action.customerorder,
      error: null,
      loading: false
    });
};
  
const getCustomerOrderDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};




const getPendingCustomerOrderListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getPendingCustomerOrderListSuccess = (state, action) => {
    return updateObject(state, {
        pendingcustomerorders: action.pendingcustomerorders,
        error: null,
        loading: false
    });
};
  
const getPendingCustomerOrderListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getPendingCustomerOrderDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getPendingCustomerOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
      pendingcustomerorder: action.pendingcustomerorder,
      error: null,
      loading: false
    });
};
  
const getPendingCustomerOrderDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getRejectedCustomerOrderListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getRejectedCustomerOrderListSuccess = (state, action) => {
    return updateObject(state, {
        rejectedcustomerorders: action.rejectedcustomerorder,
        error: null,
        loading: false
    });
};
  
const getRejectedCustomerOrderListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getRejectedCustomerOrderDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getRejectedCustomerOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
      rejectedcustomerorder: action.rejectedcustomerorder,
      error: null,
      loading: false
    });
};
  
const getRejectedCustomerOrderDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getCancelledCustomerOrderListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCancelledCustomerOrderListSuccess = (state, action) => {
    return updateObject(state, {
        cancelledcustomerorders: action.cancelledcustomerorder,
        error: null,
        loading: false
    });
};
  
const getCancelledCustomerOrderListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getCancelledCustomerOrderDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCancelledCustomerOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        cancelledcustomerorder: action.cancelledcustomerorder,
        error: null,
        loading: false
    });
};
  
const getCancelledCustomerOrderDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getCompletedCustomerOrderListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCompletedCustomerOrderListSuccess = (state, action) => {
    return updateObject(state, {
        completedcustomerorders: action.completedcustomerorder,
        error: null,
        loading: false
    });
};
  
const getCompletedCustomerOrderListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getCompletedCustomerOrderDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCompletedCustomerOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        completedcustomerorder: action.completedcustomerorder,
        error: null,
        loading: false
    });
};
  
const getCompletedCustomerOrderDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getRefundedCustomerOrderListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getRefundedCustomerOrderListSuccess = (state, action) => {
    return updateObject(state, {
        refundedcustomerorders: action.refundedcustomerorder,
        error: null,
        loading: false
    });
};
  
const getRefundedCustomerOrderListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getRefundedCustomerOrderDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getRefundedCustomerOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        refundedcustomerorder: action.refundedcustomerorder,
        error: null,
        loading: false
    });
};
  
const getRefundedCustomerOrderDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getHardcopyOrderItemListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getHardcopyOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        hardcopyorderitems: action.hardcopyorderitems,
        error: null,
        loading: false
    });
};
  
const getHardcopyOrderItemListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getSeriesOrderItemListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getSeriesOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        seriesorderitems: action.seriesorderitems,
        error: null,
        loading: false
    });
};
  
const getSeriesOrderItemListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getEbookOrderItemListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getEbookOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        ebookorderitems: action.ebookorderitems,
        error: null,
        loading: false
    });
};
  
const getEbookOrderItemListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const acceptCustomerOrderStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const acceptCustomerOrderSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const acceptCustomerOrderFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const rejectCustomerOrderStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const rejectCustomerOrderSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const rejectCustomerOrderFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const acceptRejectedCustomerOrderStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const acceptRejectedCustomerOrderSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const acceptRejectedCustomerOrderFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const refundCustomerOrderStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const refundCustomerOrderSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const refundCustomerOrderFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const payCustomerOrderStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const payCustomerOrderSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const payCustomerOrderFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const payPartiallyCustomerOrderStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const payPartiallyCustomerOrderSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const payPartiallyCustomerOrderFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};




const getUnverifiedCustomerOrderPaymentListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getUnverifiedCustomerOrderPaymentListSuccess = (state, action) => {
    return updateObject(state, {
        unverifiedcustomerorderpayments: action.unverifiedcustomerorderpayment,
        error: null,
        loading: false
    });
};
  
const getUnverifiedCustomerOrderPaymentListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getUnverifiedCustomerOrderPaymentDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getUnverifiedCustomerOrderPaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
        unverifiedcustomerorderpayment: action.unverifiedcustomerorderpayment,
        error: null,
        loading: false
    });
};
  
const getUnverifiedCustomerOrderPaymentDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};

const verifyCustomerOrderPaymentStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const verifyCustomerOrderPaymentSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const verifyCustomerOrderPaymentFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getCashInvoicePaymentListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCashInvoicePaymentListSuccess = (state, action) => {
    return updateObject(state, {
        cashinvoicepayments: action.cashinvoicepayments,
        error: null,
        loading: false
    });
};
  
const getCashInvoicePaymentListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getCashInvoicePaymentDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getCashInvoicePaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
      cashinvoicepayment: action.cashinvoicepayment,
      error: null,
      loading: false
    });
};
  
const getCashInvoicePaymentDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


const getDebitCardInvoicePaymentListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getDebitCardInvoicePaymentListSuccess = (state, action) => {
    return updateObject(state, {
        debitcardinvoicepayments: action.debitcardinvoicepayments,
        error: null,
        loading: false
    });
};
  
const getDebitCardInvoicePaymentListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getDebitCardInvoicePaymentDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getDebitCardInvoicePaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
      debitcardinvoicepayment: action.debitcardinvoicepayment,
      error: null,
      loading: false
    });
};
  
const getDebitCardInvoicePaymentDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};





const getMobileInvoicePaymentListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getMobileInvoicePaymentListSuccess = (state, action) => {
    return updateObject(state, {
        mobileinvoicepayments: action.mobileinvoicepayments,
        error: null,
        loading: false
    });
};
  
const getMobileInvoicePaymentListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getMobileInvoicePaymentDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getMobileInvoicePaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
      mobileinvoicepayment: action.mobileinvoicepayment,
      error: null,
      loading: false
    });
};
  
const getMobileInvoicePaymentDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};




const getTransferInvoicePaymentListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getTransferInvoicePaymentListSuccess = (state, action) => {
    return updateObject(state, {
        transferinvoicepayments: action.transferinvoicepayments,
        error: null,
        loading: false
    });
};
  
const getTransferInvoicePaymentListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getTransferInvoicePaymentDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getTransferInvoicePaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
      transferinvoicepayment: action.transferinvoicepayment,
      error: null,
      loading: false
    });
};
  
const getTransferInvoicePaymentDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};




export default function invoices(state = initialState, action){
    switch(action.type){
        case GET_FULLY_PAID_INVOICES_START:
            return getFullyPaidInvoiceListStart(state, action);
        case GET_FULLY_PAID_INVOICES_SUCCESS:
            return getFullyPaidInvoiceListSuccess(state, action);
        case GET_FULLY_PAID_INVOICES_FAIL:
            return getFullyPaidInvoiceListFail(state, action);
        case GET_FULLY_PAID_INVOICE_START:
            return getFullyPaidInvoiceDetailStart(state, action);
        case GET_FULLY_PAID_INVOICE_SUCCESS:
            return getFullyPaidInvoiceDetailSuccess(state, action);
        case GET_FULLY_PAID_INVOICE_FAIL:
            return getFullyPaidInvoiceDetailFail(state, action);
        case GET_PARTIALLY_PAID_INVOICES_START:
            return getPartiallyPaidInvoiceListStart(state, action);
        case GET_PARTIALLY_PAID_INVOICES_SUCCESS:
            return getPartiallyPaidInvoiceListSuccess(state, action);
        case GET_PARTIALLY_PAID_INVOICES_FAIL:
            return getPartiallyPaidInvoiceListFail(state, action);
        case GET_PARTIALLY_PAID_INVOICE_START:
            return getPartiallyPaidInvoiceDetailStart(state, action);
        case GET_PARTIALLY_PAID_INVOICE_SUCCESS:
            return getPartiallyPaidInvoiceDetailSuccess(state, action);
        case GET_PARTIALLY_PAID_INVOICE_FAIL:
            return getPartiallyPaidInvoiceDetailFail(state, action);
        case GET_UNPAID_INVOICES_START:
            return getUnpaidInvoiceListStart(state, action);
        case GET_UNPAID_INVOICES_SUCCESS:
            return getUnpaidInvoiceListSuccess(state, action);
        case GET_UNPAID_INVOICES_FAIL:
            return getUnpaidInvoiceListFail(state, action);
        case GET_UNPAID_INVOICE_START:
            return getUnpaidInvoiceDetailStart(state, action);
        case GET_UNPAID_INVOICE_SUCCESS:
            return getUnpaidInvoiceDetailSuccess(state, action);
        case GET_UNPAID_INVOICE_FAIL:
            return getUnpaidInvoiceDetailFail(state, action);
        case GET_CUSTOMER_ORDERS_START:
            return getCustomerOrderListStart(state, action);
        case GET_CUSTOMER_ORDERS_SUCCESS:
            return getCustomerOrderListSuccess(state, action);
        case GET_CUSTOMER_ORDERS_FAIL:
            return getCustomerOrderListFail(state, action);
        case GET_CUSTOMER_ORDER_START:
            return getCustomerOrderDetailStart(state, action);
        case GET_CUSTOMER_ORDER_SUCCESS:
            return getCustomerOrderDetailSuccess(state, action);
        case GET_CUSTOMER_ORDER_FAIL:
            return getCustomerOrderDetailFail(state, action);
        case GET_PENDING_CUSTOMER_ORDERS_START:
            return getPendingCustomerOrderListStart(state, action);
        case GET_PENDING_CUSTOMER_ORDERS_SUCCESS:
            return getPendingCustomerOrderListSuccess(state, action);
        case GET_PENDING_CUSTOMER_ORDERS_FAIL:
            return getPendingCustomerOrderListFail(state, action);
        case GET_PENDING_CUSTOMER_ORDER_START:
            return getPendingCustomerOrderDetailStart(state, action);
        case GET_PENDING_CUSTOMER_ORDER_SUCCESS:
            return getPendingCustomerOrderDetailSuccess(state, action);
        case GET_PENDING_CUSTOMER_ORDER_FAIL:
            return getPendingCustomerOrderDetailFail(state, action);
        case GET_REJECTED_CUSTOMER_ORDERS_START:
            return getRejectedCustomerOrderListStart(state, action);
        case GET_REJECTED_CUSTOMER_ORDERS_SUCCESS:
            return getRejectedCustomerOrderListSuccess(state, action);
        case GET_REJECTED_CUSTOMER_ORDERS_FAIL:
            return getRejectedCustomerOrderListFail(state, action);
        case GET_REJECTED_CUSTOMER_ORDER_START:
            return getRejectedCustomerOrderDetailStart(state, action);
        case GET_REJECTED_CUSTOMER_ORDER_SUCCESS:
            return getRejectedCustomerOrderDetailSuccess(state, action);
        case GET_REJECTED_CUSTOMER_ORDER_FAIL:
            return getRejectedCustomerOrderDetailFail(state, action);
        case GET_CANCELLED_CUSTOMER_ORDERS_START:
            return getCancelledCustomerOrderListStart(state, action);
        case GET_CANCELLED_CUSTOMER_ORDERS_SUCCESS:
            return getCancelledCustomerOrderListSuccess(state, action);
        case GET_CANCELLED_CUSTOMER_ORDERS_FAIL:
            return getCancelledCustomerOrderListFail(state, action);
        case GET_CANCELLED_CUSTOMER_ORDER_START:
            return getCancelledCustomerOrderDetailStart(state, action);
        case GET_CANCELLED_CUSTOMER_ORDER_SUCCESS:
            return getCancelledCustomerOrderDetailSuccess(state, action);
        case GET_CANCELLED_CUSTOMER_ORDER_FAIL:
            return getCancelledCustomerOrderDetailFail(state, action);
        case GET_COMPLETED_CUSTOMER_ORDERS_START:
            return getCompletedCustomerOrderListStart(state, action);
        case GET_COMPLETED_CUSTOMER_ORDERS_SUCCESS:
            return getCompletedCustomerOrderListSuccess(state, action);
        case GET_COMPLETED_CUSTOMER_ORDERS_FAIL:
            return getCompletedCustomerOrderListFail(state, action);
        case GET_COMPLETED_CUSTOMER_ORDER_START:
            return getCompletedCustomerOrderDetailStart(state, action);
        case GET_COMPLETED_CUSTOMER_ORDER_SUCCESS:
            return getCompletedCustomerOrderDetailSuccess(state, action);
        case GET_COMPLETED_CUSTOMER_ORDER_FAIL:
            return getCompletedCustomerOrderDetailFail(state, action);
        case GET_REFUNDED_CUSTOMER_ORDERS_START:
            return getRefundedCustomerOrderListStart(state, action);
        case GET_REFUNDED_CUSTOMER_ORDERS_SUCCESS:
            return getRefundedCustomerOrderListSuccess(state, action);
        case GET_REFUNDED_CUSTOMER_ORDERS_FAIL:
            return getRefundedCustomerOrderListFail(state, action);
        case GET_REFUNDED_CUSTOMER_ORDER_START:
            return getRefundedCustomerOrderDetailStart(state, action);
        case GET_REFUNDED_CUSTOMER_ORDER_SUCCESS:
            return getRefundedCustomerOrderDetailSuccess(state, action);
        case GET_REFUNDED_CUSTOMER_ORDER_FAIL:
            return getRefundedCustomerOrderDetailFail(state, action);
        case GET_HARDCOPY_ORDER_ITEMS_START:
            return getHardcopyOrderItemListStart(state, action);
        case GET_HARDCOPY_ORDER_ITEMS_SUCCESS:
            return getHardcopyOrderItemListSuccess(state, action);
        case GET_HARDCOPY_ORDER_ITEMS_FAIL:
            return getHardcopyOrderItemListFail(state, action);
        case GET_SERIES_ORDER_ITEMS_START:
            return getSeriesOrderItemListStart(state, action);
        case GET_SERIES_ORDER_ITEMS_SUCCESS:
            return getSeriesOrderItemListSuccess(state, action);
        case GET_SERIES_ORDER_ITEMS_FAIL:
            return getSeriesOrderItemListFail(state, action);
        case GET_EBOOK_ORDER_ITEMS_START:
            return getEbookOrderItemListStart(state, action);
        case GET_EBOOK_ORDER_ITEMS_SUCCESS:
            return getEbookOrderItemListSuccess(state, action);
        case GET_EBOOK_ORDER_ITEMS_FAIL:
            return getEbookOrderItemListFail(state, action);

        case ACCEPT_CUSTOMER_ORDER_START:
            return acceptCustomerOrderStart(state, action);
        case ACCEPT_CUSTOMER_ORDER_SUCCESS:
            return acceptCustomerOrderSuccess(state, action);
        case ACCEPT_CUSTOMER_ORDER_FAIL:
            return acceptCustomerOrderFail(state, action);

        case REJECT_CUSTOMER_ORDER_START:
            return rejectCustomerOrderStart(state, action);
        case REJECT_CUSTOMER_ORDER_SUCCESS:
            return rejectCustomerOrderSuccess(state, action);
        case REJECT_CUSTOMER_ORDER_FAIL:
            return rejectCustomerOrderFail(state, action);
        case ACCEPT_REJECTED_CUSTOMER_ORDER_START:
            return acceptRejectedCustomerOrderStart(state, action);
        case ACCEPT_REJECTED_CUSTOMER_ORDER_SUCCESS:
            return acceptRejectedCustomerOrderSuccess(state, action);
        case ACCEPT_REJECTED_CUSTOMER_ORDER_FAIL:
            return acceptRejectedCustomerOrderFail(state, action);
        case REFUND_CUSTOMER_ORDER_START:
            return refundCustomerOrderStart(state, action);
        case REFUND_CUSTOMER_ORDER_SUCCESS:
            return refundCustomerOrderSuccess(state, action);
        case REFUND_CUSTOMER_ORDER_FAIL:
            return refundCustomerOrderFail(state, action);
        case PAY_CUSTOMER_ORDER_START:
            return payCustomerOrderStart(state, action);
        case PAY_CUSTOMER_ORDER_SUCCESS:
            return payCustomerOrderSuccess(state, action);
        case PAY_CUSTOMER_ORDER_FAIL:
            return payCustomerOrderFail(state, action);
        case PAY_PARTIALLY_CUSTOMER_ORDER_START:
            return payPartiallyCustomerOrderStart(state, action);
        case PAY_PARTIALLY_CUSTOMER_ORDER_SUCCESS:
            return payPartiallyCustomerOrderSuccess(state, action);
        case PAY_PARTIALLY_CUSTOMER_ORDER_FAIL:
            return payPartiallyCustomerOrderFail(state, action);
        case GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_START:
            return getUnverifiedCustomerOrderPaymentListStart(state, action);
        case GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_SUCCESS:
            return getUnverifiedCustomerOrderPaymentListSuccess(state, action);
        case GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_FAIL:
            return getUnverifiedCustomerOrderPaymentListFail(state, action);
        case GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_START:
            return getUnverifiedCustomerOrderPaymentDetailStart(state, action);
        case GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_SUCCESS:
            return getUnverifiedCustomerOrderPaymentDetailSuccess(state, action);
        case GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_FAIL:
            return getUnverifiedCustomerOrderPaymentDetailFail(state, action);
        case VERIFY_CUSTOMER_ORDER_PAYMENT_START:
            return verifyCustomerOrderPaymentStart(state, action);
        case VERIFY_CUSTOMER_ORDER_PAYMENT_SUCCESS:
            return verifyCustomerOrderPaymentSuccess(state, action);
        case VERIFY_CUSTOMER_ORDER_PAYMENT_FAIL:
            return verifyCustomerOrderPaymentFail(state, action);

        case GET_CASH_INVOICE_PAYMENTS_START:
            return getCashInvoicePaymentListStart(state, action);
        case GET_CASH_INVOICE_PAYMENTS_SUCCESS:
            return getCashInvoicePaymentListSuccess(state, action);
        case GET_CASH_INVOICE_PAYMENTS_FAIL:
            return getCashInvoicePaymentListFail(state, action);
        case GET_CASH_INVOICE_PAYMENT_START:
            return getCashInvoicePaymentDetailStart(state, action);
        case GET_CASH_INVOICE_PAYMENT_SUCCESS:
            return getCashInvoicePaymentDetailSuccess(state, action);
        case GET_CASH_INVOICE_PAYMENT_FAIL:
            return getCashInvoicePaymentDetailFail(state, action);

        case GET_DEBIT_CARD_INVOICE_PAYMENTS_START:
            return getDebitCardInvoicePaymentListStart(state, action);
        case GET_DEBIT_CARD_INVOICE_PAYMENTS_SUCCESS:
            return getDebitCardInvoicePaymentListSuccess(state, action);
        case GET_DEBIT_CARD_INVOICE_PAYMENTS_FAIL:
            return getDebitCardInvoicePaymentListFail(state, action);
        case GET_DEBIT_CARD_INVOICE_PAYMENT_START:
            return getDebitCardInvoicePaymentDetailStart(state, action);
        case GET_DEBIT_CARD_INVOICE_PAYMENT_SUCCESS:
            return getDebitCardInvoicePaymentDetailSuccess(state, action);
        case GET_DEBIT_CARD_INVOICE_PAYMENT_FAIL:
            return getDebitCardInvoicePaymentDetailFail(state, action);

        case GET_MOBILE_INVOICE_PAYMENTS_START:
            return getMobileInvoicePaymentListStart(state, action);
        case GET_MOBILE_INVOICE_PAYMENTS_SUCCESS:
            return getMobileInvoicePaymentListSuccess(state, action);
        case GET_MOBILE_INVOICE_PAYMENTS_FAIL:
            return getMobileInvoicePaymentListFail(state, action);
        case GET_MOBILE_INVOICE_PAYMENT_START:
            return getMobileInvoicePaymentDetailStart(state, action);
        case GET_MOBILE_INVOICE_PAYMENT_SUCCESS:
            return getMobileInvoicePaymentDetailSuccess(state, action);
        case GET_MOBILE_INVOICE_PAYMENT_FAIL:
            return getMobileInvoicePaymentDetailFail(state, action);
        case GET_TRANSFER_INVOICE_PAYMENTS_START:
            return getTransferInvoicePaymentListStart(state, action);
        case GET_TRANSFER_INVOICE_PAYMENTS_SUCCESS:
            return getTransferInvoicePaymentListSuccess(state, action);
        case GET_TRANSFER_INVOICE_PAYMENTS_FAIL:
            return getTransferInvoicePaymentListFail(state, action);
        case GET_TRANSFER_INVOICE_PAYMENT_START:
            return getTransferInvoicePaymentDetailStart(state, action);
        case GET_TRANSFER_INVOICE_PAYMENT_SUCCESS:
            return getTransferInvoicePaymentDetailSuccess(state, action);
        case GET_TRANSFER_INVOICE_PAYMENT_FAIL:
            return getTransferInvoicePaymentDetailFail(state, action);
        case GET_INVOICE_LINES_START:
            return getInvoiceLineListStart(state, action);
        case GET_INVOICE_LINES_SUCCESS:
            return getInvoiceLineListSuccess(state, action);
        case GET_INVOICE_LINES_FAIL:
            return getInvoiceLineListFail(state, action);

       
        default:
            return state;
    }
}

