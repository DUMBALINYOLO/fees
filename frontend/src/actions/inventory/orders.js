import axios from 'axios';
import {
    GET_FULLY_PAID_ORDERS_START,
    GET_FULLY_PAID_ORDERS_SUCCESS,
    GET_FULLY_PAID_ORDERS_FAIL,
    GET_FULLY_PAID_ORDER_START,
    GET_FULLY_PAID_ORDER_SUCCESS,
    GET_FULLY_PAID_ORDER_FAIL,
    GET_PARTIALLY_PAID_ORDERS_START,
    GET_PARTIALLY_PAID_ORDERS_SUCCESS,
    GET_PARTIALLY_PAID_ORDERS_FAIL,
    GET_PARTIALLY_PAID_ORDER_START,
    GET_PARTIALLY_PAID_ORDER_SUCCESS,
    GET_PARTIALLY_PAID_ORDER_FAIL,
    GET_UNPAID_ORDERS_START,
    GET_UNPAID_ORDERS_SUCCESS,
    GET_UNPAID_ORDERS_FAIL,
    GET_UNPAID_ORDER_START,
    GET_UNPAID_ORDER_SUCCESS,
    GET_UNPAID_ORDER_FAIL,
    GET_UNVERIFIED_ORDERS_START,
    GET_UNVERIFIED_ORDERS_SUCCESS,
    GET_UNVERIFIED_ORDERS_FAIL,
    GET_UNVERIFIED_ORDER_START,
    GET_UNVERIFIED_ORDER_SUCCESS,
    GET_UNVERIFIED_ORDER_FAIL,
    GET_FULLY_RECEIVED_ORDERS_START,
    GET_FULLY_RECEIVED_ORDERS_SUCCESS,
    GET_FULLY_RECEIVED_ORDERS_FAIL,
    GET_FULLY_RECEIVED_ORDER_START,
    GET_FULLY_RECEIVED_ORDER_SUCCESS,
    GET_FULLY_RECEIVED_ORDER_FAIL,
    GET_PARTIALLY_RECEIVED_ORDERS_START,
    GET_PARTIALLY_RECEIVED_ORDERS_SUCCESS,
    GET_PARTIALLY_RECEIVED_ORDERS_FAIL,
    GET_PARTIALLY_RECEIVED_ORDER_START,
    GET_PARTIALLY_RECEIVED_ORDER_SUCCESS,
    GET_PARTIALLY_RECEIVED_ORDER_FAIL,
    GET_UNRECEIVED_ORDERS_START,
    GET_UNRECEIVED_ORDERS_SUCCESS,
    GET_UNRECEIVED_ORDERS_FAIL,
    GET_UNRECEIVED_ORDER_START,
    GET_UNRECEIVED_ORDER_SUCCESS,
    GET_UNRECEIVED_ORDER_FAIL,
    GET_UNVERIFIED_DEBIT_NOTES_START,
    GET_UNVERIFIED_DEBIT_NOTES_SUCCESS,
    GET_UNVERIFIED_DEBIT_NOTES_FAIL,
    GET_UNVERIFIED_DEBIT_NOTE_START,
    GET_UNVERIFIED_DEBIT_NOTE_SUCCESS,
    GET_UNVERIFIED_DEBIT_NOTE_FAIL,
    GET_VERIFIED_DEBIT_NOTES_START,
    GET_VERIFIED_DEBIT_NOTES_SUCCESS,
    GET_VERIFIED_DEBIT_NOTES_FAIL,
    GET_VERIFIED_DEBIT_NOTE_START,
    GET_VERIFIED_DEBIT_NOTE_SUCCESS,
    GET_VERIFIED_DEBIT_NOTE_FAIL,
    GET_ORDER_ITEMS_START,
    GET_ORDER_ITEMS_SUCCESS,
    GET_ORDER_ITEMS_FAIL,
    GET_DEBIT_NOTE_LINES_START,
    GET_DEBIT_NOTE_LINES_SUCCESS,
    GET_DEBIT_NOTE_LINES_FAIL,
    GET_UNVERIFIED_ORDER_PAYMENTS_START,
    GET_UNVERIFIED_ORDER_PAYMENTS_SUCCESS,
    GET_UNVERIFIED_ORDER_PAYMENTS_FAIL,
    GET_UNVERIFIED_ORDER_PAYMENT_START,
    GET_UNVERIFIED_ORDER_PAYMENT_SUCCESS,
    GET_UNVERIFIED_ORDER_PAYMENT_FAIL,
    GET_CASH_ORDER_PAYMENTS_START,
    GET_CASH_ORDER_PAYMENTS_SUCCESS,
    GET_CASH_ORDER_PAYMENTS_FAIL,
    GET_CASH_ORDER_PAYMENT_START,
    GET_CASH_ORDER_PAYMENT_SUCCESS,
    GET_CASH_ORDER_PAYMENT_FAIL,
    GET_DEBIT_CARD_ORDER_PAYMENTS_START,
    GET_DEBIT_CARD_ORDER_PAYMENTS_SUCCESS,
    GET_DEBIT_CARD_ORDER_PAYMENTS_FAIL,
    GET_DEBIT_CARD_ORDER_PAYMENT_START,
    GET_DEBIT_CARD_ORDER_PAYMENT_SUCCESS,
    GET_DEBIT_CARD_ORDER_PAYMENT_FAIL,
    GET_MOBILE_ORDER_PAYMENTS_START,
    GET_MOBILE_ORDER_PAYMENTS_SUCCESS,
    GET_MOBILE_ORDER_PAYMENTS_FAIL,
    GET_MOBILE_ORDER_PAYMENT_START,
    GET_MOBILE_ORDER_PAYMENT_SUCCESS,
    GET_MOBILE_ORDER_PAYMENT_FAIL,
    GET_TRANSFER_ORDER_PAYMENTS_START,
    GET_TRANSFER_ORDER_PAYMENTS_SUCCESS,
    GET_TRANSFER_ORDER_PAYMENTS_FAIL,
    GET_TRANSFER_ORDER_PAYMENT_START,
    GET_TRANSFER_ORDER_PAYMENT_SUCCESS,
    GET_TRANSFER_ORDER_PAYMENT_FAIL,
    GET_STOCK_RECEIPTS_START,
    GET_STOCK_RECEIPTS_SUCCESS,
    GET_STOCK_RECEIPTS_FAIL,
    GET_STOCK_RECEIPT_START,
    GET_STOCK_RECEIPT_SUCCESS,
    GET_STOCK_RECEIPT_FAIL,
    GET_STOCK_RECEIPT_LINES_START,
    GET_STOCK_RECEIPT_LINES_SUCCESS,
    GET_STOCK_RECEIPT_LINES_FAIL,
    CREATE_ORDER_START,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_DEBIT_NOTE_START,
    CREATE_DEBIT_NOTE_SUCCESS,
    CREATE_DEBIT_NOTE_FAIL,
    VERIFY_ORDER_START,
    VERIFY_ORDER_SUCCESS,
    VERIFY_ORDER_FAIL,
    PAY_ORDER_START,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,
    PAY_PARTIALLY_ORDER_START,
    PAY_PARTIALLY_ORDER_SUCCESS,
    PAY_PARTIALLY_ORDER_FAIL,
    RECEIVE_STOCK_START,
    RECEIVE_STOCK_SUCCESS,
    RECEIVE_STOCK_FAIL,
    RECEIVE_PARTIALLY_STOCK_START,
    RECEIVE_PARTIALLY_STOCK_SUCCESS,
    RECEIVE_PARTIALLY_STOCK_FAIL,
    VERIFY_PAYMENT_START,
    VERIFY_PAYMENT_SUCCESS,
    VERIFY_PAYMENT_FAIL,

} from '../../types/orderTypes';

import {
    stockreceiptsURL,
    stockreceiptlinesURL,
    orderitemsURL,
    mobileorderpaymentsURL,
    debitcardorderpaymentsURL,
    cashorderpaymentsURL,
    transferorderpaymentsURL,
    unverifiedorderpaymentsURL,
    fullypaidordersURL,
    partiallypaidordersURL,
    unpaidordersURL,
    fullyreceivedordersURL,
    partiallyreceivedordersURL,
    unreceivedordersURL,
    unverifiedordersURL,
    debitnotelinesURL,
    verifieddebitnotesURL,
    unverifieddebitnotesURL,

} from '../../constants';

import { returnErrors } from '../messages';


const getUnverifiedOrderListStart = () => {
    return {
      type: GET_UNVERIFIED_ORDERS_START
    };
};
  
const getUnverifiedOrderListSuccess = unverifiedorders => {
    return {
        type: GET_UNVERIFIED_ORDERS_SUCCESS,
        unverifiedorders
    };
};

const getUnverifiedOrderListFail = error => {
    return {
        type: GET_UNVERIFIED_ORDERS_FAIL,
        error: error
    };
};


const getUnverifiedOrderDetailStart = () => {
    return {
        type: GET_UNVERIFIED_ORDER_START
    };
};

const getUnverifiedOrderDetailSuccess = unverifiedorder => {
    return {
        type: GET_UNVERIFIED_ORDER_SUCCESS,
        unverifiedorder
    };
};

const getUnverifiedOrderDetailFail = error => {
    return {
        type: GET_UNVERIFIED_ORDER_FAIL,
        error: error
    };
};


const getFullyPaidOrderListStart = () => {
    return {
      type: GET_FULLY_PAID_ORDERS_START
    };
};
  
const getFullyPaidOrderListSuccess = fullypaidorders => {
    return {
        type: GET_FULLY_PAID_ORDERS_SUCCESS,
        fullypaidorders
    };
};

const getFullyPaidOrderListFail = error => {
    return {
        type: GET_FULLY_PAID_ORDERS_FAIL,
        error: error
    };
};


const getFullyPaidOrderDetailStart = () => {
    return {
        type: GET_FULLY_PAID_ORDER_START
    };
};

const getFullyPaidOrderDetailSuccess = fullypaidorder => {
    return {
        type: GET_FULLY_PAID_ORDER_SUCCESS,
        fullypaidorder
    };
};

const getFullyPaidOrderDetailFail = error => {
    return {
        type: GET_FULLY_PAID_ORDER_FAIL,
        error: error
    };
};



const getPartiallyPaidOrderListStart = () => {
    return {
      type: GET_PARTIALLY_PAID_ORDERS_START
    };
};
  
const getPartiallyPaidOrderListSuccess = partiallypaidorders => {
    return {
        type: GET_PARTIALLY_PAID_ORDERS_SUCCESS,
        partiallypaidorders
    };
};

const getPartiallyPaidOrderListFail = error => {
    return {
        type: GET_PARTIALLY_PAID_ORDERS_FAIL,
        error: error
    };
};


const getPartiallyPaidOrderDetailStart = () => {
    return {
        type: GET_PARTIALLY_PAID_ORDER_START
    };
};

const getPartiallyPaidOrderDetailSuccess = partiallypaidorder => {
    return {
        type: GET_PARTIALLY_PAID_ORDER_SUCCESS,
        partiallypaidorder
    };
};

const getPartiallyPaidOrderDetailFail = error => {
    return {
        type: GET_PARTIALLY_PAID_ORDER_FAIL,
        error: error
    };
};




const getUnpaidOrderListStart = () => {
    return {
      type: GET_UNPAID_ORDERS_START
    };
};
  
const getUnpaidOrderListSuccess = unpaidorders => {
    return {
        type: GET_UNPAID_ORDERS_SUCCESS,
        unpaidorders
    };
};

const getUnpaidOrderListFail = error => {
    return {
        type: GET_UNPAID_ORDERS_FAIL,
        error: error
    };
};


const getUnpaidOrderDetailStart = () => {
    return {
        type: GET_UNPAID_ORDER_START
    };
};

const getUnpaidOrderDetailSuccess = unpaidorder => {
    return {
        type: GET_UNPAID_ORDER_SUCCESS,
        unpaidorder
    };
};

const getUnpaidOrderDetailFail = error => {
    return {
        type: GET_UNPAID_ORDER_FAIL,
        error: error
    };
};



const getFullyReceivedOrderListStart = () => {
    return {
      type: GET_FULLY_RECEIVED_ORDERS_START
    };
};
  
const getFullyReceivedOrderListSuccess = fullyreceivedorders => {
    return {
        type: GET_FULLY_RECEIVED_ORDERS_SUCCESS,
        fullyreceivedorders
    };
};

const getFullyReceivedOrderListFail = error => {
    return {
        type: GET_FULLY_RECEIVED_ORDERS_FAIL,
        error: error
    };
};


const getFullyReceivedOrderDetailStart = () => {
    return {
        type: GET_FULLY_RECEIVED_ORDER_START
    };
};

const getFullyReceivedOrderDetailSuccess = fullyreceivedorder => {
    return {
        type: GET_FULLY_RECEIVED_ORDER_SUCCESS,
        fullyreceivedorder
    };
};

const getFullyReceivedOrderDetailFail = error => {
    return {
        type: GET_FULLY_RECEIVED_ORDER_FAIL,
        error: error
    };
};


const getPartiallyReceivedOrderListStart = () => {
    return {
      type: GET_PARTIALLY_RECEIVED_ORDERS_START
    };
};
  
const getPartiallyReceivedOrderListSuccess = partiallyreceivedorders => {
    return {
        type: GET_PARTIALLY_RECEIVED_ORDERS_SUCCESS,
        partiallyreceivedorders
    };
};

const getPartiallyReceivedOrderListFail = error => {
    return {
        type: GET_PARTIALLY_RECEIVED_ORDERS_FAIL,
        error: error
    };
};


const getPartiallyReceivedOrderDetailStart = () => {
    return {
        type: GET_PARTIALLY_RECEIVED_ORDER_START
    };
};

const getPartiallyReceivedOrderDetailSuccess = partiallyreceivedorder => {
    return {
        type: GET_PARTIALLY_RECEIVED_ORDER_SUCCESS,
        partiallyreceivedorder
    };
};

const getPartiallyReceivedOrderDetailFail = error => {
    return {
        type: GET_PARTIALLY_RECEIVED_ORDER_FAIL,
        error: error
    };
};


const getUnreceivedOrderListStart = () => {
    return {
      type: GET_UNRECEIVED_ORDERS_START
    };
};
  
const getUnreceivedOrderListSuccess = unreceivedorders => {
    return {
        type: GET_UNRECEIVED_ORDERS_SUCCESS,
        unreceivedorders
    };
};

const getUnreceivedOrderListFail = error => {
    return {
        type: GET_UNRECEIVED_ORDERS_FAIL,
        error: error
    };
};


const getUnreceivedOrderDetailStart = () => {
    return {
        type: GET_UNRECEIVED_ORDER_START
    };
};

const getUnreceivedOrderDetailSuccess = unreceivedorder => {
    return {
        type: GET_UNRECEIVED_ORDER_SUCCESS,
        unreceivedorder
    };
};

const getUnreceivedOrderDetailFail = error => {
    return {
        type: GET_UNRECEIVED_ORDER_FAIL,
        error: error
    };
};



const getUnverifiedDebitNoteListStart = () => {
    return {
      type: GET_UNVERIFIED_DEBIT_NOTES_START
    };
};
  
const getUnverifiedDebitNoteListSuccess = unverifieddebitnotes => {
    return {
        type: GET_UNVERIFIED_DEBIT_NOTES_SUCCESS,
        unverifieddebitnotes
    };
};

const getUnverifiedDebitNoteListFail = error => {
    return {
        type: GET_UNVERIFIED_DEBIT_NOTES_FAIL,
        error: error
    };
};


const getUnverifiedDebitNoteDetailStart = () => {
    return {
        type: GET_UNVERIFIED_DEBIT_NOTE_START
    };
};

const getUnverifiedDebitNoteDetailSuccess = unverifieddebitnote => {
    return {
        type: GET_UNVERIFIED_DEBIT_NOTE_SUCCESS,
        unverifieddebitnote
    };
};

const getUnverifiedDebitNoteDetailFail = error => {
    return {
        type: GET_UNVERIFIED_DEBIT_NOTE_FAIL,
        error: error
    };
};


const getVerifiedDebitNoteListStart = () => {
    return {
      type: GET_VERIFIED_DEBIT_NOTES_START
    };
};
  
const getVerifiedDebitNoteListSuccess = verifieddebitnotes => {
    return {
        type: GET_VERIFIED_DEBIT_NOTES_SUCCESS,
        verifieddebitnotes
    };
};

const getVerifiedDebitNoteListFail = error => {
    return {
        type: GET_VERIFIED_DEBIT_NOTES_FAIL,
        error: error
    };
};


const getVerifiedDebitNoteDetailStart = () => {
    return {
        type: GET_VERIFIED_DEBIT_NOTE_START
    };
};

const getVerifiedDebitNoteDetailSuccess = verifieddebitnote => {
    return {
        type: GET_VERIFIED_DEBIT_NOTE_SUCCESS,
        verifieddebitnote
    };
};

const getVerifiedDebitNoteDetailFail = error => {
    return {
        type: GET_VERIFIED_DEBIT_NOTE_FAIL,
        error: error
    };
};


const getDebitNoteLineListStart = () => {
    return {
      type: GET_DEBIT_NOTE_LINES_START
    };
};
  
const getDebitNoteLineListSuccess = debitnotelines => {
    return {
        type: GET_DEBIT_NOTE_LINES_SUCCESS,
        debitnotelines
    };
};

const getDebitNoteLineListFail = error => {
    return {
        type: GET_DEBIT_NOTE_LINES_FAIL,
        error: error
    };
};


const getOrderItemListStart = () => {
    return {
      type: GET_ORDER_ITEMS_START
    };
};
  
const getOrderItemListSuccess = orderitems => {
    return {
        type: GET_ORDER_ITEMS_SUCCESS,
        orderitems
    };
};


const getOrderItemListFail = error => {
    return {
        type: GET_ORDER_ITEMS_FAIL,
        error: error
    };
};




const getUnverifiedOrderPaymentListStart = () => {
    return {
      type: GET_UNVERIFIED_ORDER_PAYMENTS_START
    };
};
  
const getUnverifiedOrderPaymentListSuccess = unverifiedorderpayments => {
    return {
        type: GET_UNVERIFIED_ORDER_PAYMENTS_SUCCESS,
        unverifiedorderpayments
    };
};

const getUnverifiedOrderPaymentListFail = error => {
    return {
        type: GET_UNVERIFIED_ORDER_PAYMENTS_FAIL,
        error: error
    };
};


const getUnverifiedOrderPaymentDetailStart = () => {
    return {
        type: GET_UNVERIFIED_ORDER_PAYMENT_START
    };
};

const getUnverifiedOrderPaymentDetailSuccess = unverifiedorderpayment => {
    return {
        type: GET_UNVERIFIED_ORDER_PAYMENT_SUCCESS,
        unverifiedorderpayment
    };
};

const getUnverifiedOrderPaymentDetailFail = error => {
    return {
        type: GET_UNVERIFIED_ORDER_PAYMENT_FAIL,
        error: error
    };
};


const getCashOrderPaymentListStart = () => {
    return {
      type: GET_CASH_ORDER_PAYMENTS_START
    };
};
  
const getCashOrderPaymentListSuccess = cashorderpayments => {
    return {
        type: GET_CASH_ORDER_PAYMENTS_SUCCESS,
        cashorderpayments
    };
};

const getCashOrderPaymentListFail = error => {
    return {
        type: GET_CASH_ORDER_PAYMENTS_FAIL,
        error: error
    };
};


const getCashOrderPaymentDetailStart = () => {
    return {
        type: GET_CASH_ORDER_PAYMENT_START
    };
};

const getCashOrderPaymentDetailSuccess = cashorderpayment => {
    return {
        type: GET_CASH_ORDER_PAYMENT_SUCCESS,
        cashorderpayment
    };
};

const getCashOrderPaymentDetailFail = error => {
    return {
        type: GET_CASH_ORDER_PAYMENT_FAIL,
        error: error
    };
};



const getDebitCardOrderPaymentListStart = () => {
    return {
      type: GET_DEBIT_CARD_ORDER_PAYMENTS_START
    };
};
  
const getDebitCardOrderPaymentListSuccess = debitcardorderpayments => {
    return {
        type: GET_DEBIT_CARD_ORDER_PAYMENTS_SUCCESS,
        debitcardorderpayments
    };
};

const getDebitCardOrderPaymentListFail = error => {
    return {
        type: GET_DEBIT_CARD_ORDER_PAYMENTS_FAIL,
        error: error
    };
};


const getDebitCardOrderPaymentDetailStart = () => {
    return {
        type: GET_DEBIT_CARD_ORDER_PAYMENT_START
    };
};

const getDebitCardOrderPaymentDetailSuccess = debitcardorderpayment => {
    return {
        type: GET_DEBIT_CARD_ORDER_PAYMENT_SUCCESS,
        debitcardorderpayment
    };
};

const getDebitCardOrderPaymentDetailFail = error => {
    return {
        type: GET_DEBIT_CARD_ORDER_PAYMENT_FAIL,
        error: error
    };
};



const getMobileOrderPaymentListStart = () => {
    return {
      type: GET_MOBILE_ORDER_PAYMENTS_START
    };
};
  
const getMobileOrderPaymentListSuccess = mobileorderpayments => {
    return {
        type: GET_MOBILE_ORDER_PAYMENTS_SUCCESS,
        mobileorderpayments
    };
};

const getMobileOrderPaymentListFail = error => {
    return {
        type: GET_MOBILE_ORDER_PAYMENTS_FAIL,
        error: error
    };
};


const getMobileOrderPaymentDetailStart = () => {
    return {
        type: GET_MOBILE_ORDER_PAYMENT_START
    };
};

const getMobileOrderPaymentDetailSuccess = mobileorderpayment => {
    return {
        type: GET_MOBILE_ORDER_PAYMENT_SUCCESS,
        mobileorderpayment
    };
};

const getMobileOrderPaymentDetailFail = error => {
    return {
        type: GET_MOBILE_ORDER_PAYMENT_FAIL,
        error: error
    };
};



const getTransferOrderPaymentListStart = () => {
    return {
      type: GET_TRANSFER_ORDER_PAYMENTS_START
    };
};
  
const getTransferOrderPaymentListSuccess = transferorderpayments => {
    return {
        type: GET_TRANSFER_ORDER_PAYMENTS_SUCCESS,
        transferorderpayments
    };
};

const getTransferOrderPaymentListFail = error => {
    return {
        type: GET_TRANSFER_ORDER_PAYMENTS_FAIL,
        error: error
    };
};


const getTransferOrderPaymentDetailStart = () => {
    return {
        type: GET_TRANSFER_ORDER_PAYMENT_START
    };
};

const getTransferOrderPaymentDetailSuccess = transferorderpayment => {
    return {
        type: GET_TRANSFER_ORDER_PAYMENT_SUCCESS,
        transferorderpayment
    };
};

const getTransferOrderPaymentDetailFail = error => {
    return {
        type: GET_TRANSFER_ORDER_PAYMENT_FAIL,
        error: error
    };
};







const getStockReceiptListStart = () => {
    return {
      type: GET_STOCK_RECEIPTS_START
    };
};
  
const getStockReceiptListSuccess = stockreceipts => {
    return {
        type: GET_STOCK_RECEIPTS_SUCCESS,
        stockreceipts
    };
};

const getStockReceiptListFail = error => {
    return {
        type: GET_STOCK_RECEIPTS_FAIL,
        error: error
    };
};


const getStockReceiptDetailStart = () => {
    return {
        type: GET_STOCK_RECEIPT_START
    };
};

const getStockReceiptDetailSuccess = stockreceipt => {
    return {
        type: GET_STOCK_RECEIPT_SUCCESS,
        stockreceipt
    };
};

const getStockReceiptDetailFail = error => {
    return {
        type: GET_STOCK_RECEIPT_FAIL,
        error: error
    };
};



const getStockReceiptLineListStart = () => {
    return {
      type: GET_STOCK_RECEIPT_LINES_START
    };
};
  
const getStockReceiptLineListSuccess = stockreceipts => {
    return {
        type: GET_STOCK_RECEIPT_LINES_SUCCESS,
        stockreceipts
    };
};

const getStockReceiptLineListFail = error => {
    return {
        type: GET_STOCK_RECEIPT_LINES_FAIL,
        error: error
    };
};


const createOrderStart = () => {
    return {
        type: CREATE_ORDER_START
    };
};


const createOrderSuccess = order => {
    return {
        type: CREATE_ORDER_SUCCESS,
        order
    };
};

const createOrderFail = error => {
    return {
        type: CREATE_ORDER_FAIL,
        error: error
    };
};


const verifyOrderStart = () => {
    return {
        type: VERIFY_ORDER_START
    };
};


const verifyOrderSuccess = order => {
    return {
        type: VERIFY_ORDER_SUCCESS,
        order
    };
};

const verifyOrderFail = error => {
    return {
        type: VERIFY_ORDER_FAIL,
        error: error
    };
};


const createDebitNoteStart = () => {
    return {
        type: CREATE_DEBIT_NOTE_START
    };
};


const createDebitNoteSuccess = order => {
    return {
        type: CREATE_DEBIT_NOTE_SUCCESS,
        order
    };
};

const createDebitNoteFail = error => {
    return {
        type: CREATE_DEBIT_NOTE_FAIL,
        error: error
    };
};


const receiveStockStart = () => {
    return {
        type: RECEIVE_STOCK_START
    };
};


const receiveStockSuccess = order => {
    return {
        type: RECEIVE_STOCK_SUCCESS,
        order
    };
};

const receiveStockFail = error => {
    return {
        type: RECEIVE_STOCK_FAIL,
        error: error
    };
};

const receivePartiallyStockStart = () => {
    return {
        type: RECEIVE_PARTIALLY_STOCK_START
    };
};


const receivePartiallyStockSuccess = order => {
    return {
        type: RECEIVE_PARTIALLY_STOCK_SUCCESS,
        order
    };
};

const receivePartiallyStockFail = error => {
    return {
        type: RECEIVE_PARTIALLY_STOCK_FAIL,
        error: error
    };
};


const payOrderStart = () => {
    return {
        type: PAY_ORDER_START
    };
};


const payOrderSuccess = order => {
    return {
        type: PAY_ORDER_SUCCESS,
        order
    };
};

const payOrderFail = error => {
    return {
        type: PAY_ORDER_FAIL,
        error: error
    };
};


const payPartiallyOrderStart = () => {
    return {
        type: PAY_PARTIALLY_ORDER_START
    };
};


const payPartiallyOrderSuccess = order => {
    return {
        type: PAY_PARTIALLY_ORDER_SUCCESS,
        order
    };
};

const payPartiallyOrderFail = error => {
    return {
        type: PAY_PARTIALLY_ORDER_FAIL,
        error: error
    };
};



const verifyPaymentStart = () => {
    return {
        type: VERIFY_PAYMENT_START
    };
};


const verifyPaymentSuccess = payment => {
    return {
        type: VERIFY_PAYMENT_SUCCESS,
        payment
    };
};

const verifyPaymentFail = error => {
    return {
        type: VERIFY_PAYMENT_FAIL,
        error: error
    };
};



export const getUnverifiedOrders = (token) => {
    return dispatch => {
      dispatch(getUnverifiedOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(unverifiedordersURL, headers)
        .then(res => {
          const unverifiedorders = res.data;
          dispatch(getUnverifiedOrderListSuccess(unverifiedorders));
          })
        .catch(err => {
          dispatch(getUnverifiedOrderListFail(err));
      });
    };
};
  
export const getUnverifiedOrder = (id, token) => {
    return dispatch => {
      dispatch(getUnverifiedOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unverifiedordersURL}${id}`, headers)
        .then(res => {
          const unverifiedorder = res.data;
          dispatch(getUnverifiedOrderDetailSuccess(unverifiedorder));
          })
        .catch(err => {
          dispatch(getUnverifiedOrderDetailFail(err));
      });
    };
};

  
export const addOrder = (order, token) => {
    return dispatch => {
      dispatch(createOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(unverifiedordersURL, order, headers)
        .then(res => {
          dispatch(createOrderSuccess(order));
        })
        .catch(err => {
          dispatch(createOrderFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};  


export const getFullyPaidOrders = (token) => {
    return dispatch => {
      dispatch(getFullyPaidOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(fullypaidordersURL, headers)
        .then(res => {
          const fullypaidorders = res.data;
          dispatch(getFullyPaidOrderListSuccess(fullypaidorders));
          })
        .catch(err => {
          dispatch(getFullyPaidOrderListFail(err));
      });
    };
};
  
export const getFullyPaidOrder = (id, token) => {
    return dispatch => {
      dispatch(getFullyPaidOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${fullypaidordersURL}${id}`, headers)
        .then(res => {
          const fullypaidorder = res.data;
          dispatch(getFullyPaidOrderDetailSuccess(fullypaidorder));
          })
        .catch(err => {
          dispatch(getFullyPaidOrderDetailFail(err));
      });
    };
};



export const getPartiallyPaidOrders = (token) => {
    return dispatch => {
      dispatch(getPartiallyPaidOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(partiallypaidordersURL, headers)
        .then(res => {
          const partiallypaidorders = res.data;
          dispatch(getPartiallyPaidOrderListSuccess(partiallypaidorders));
          })
        .catch(err => {
          dispatch(getPartiallyPaidOrderListFail(err));
      });
    };
};
  
export const getPartiallyPaidOrder = (id, token) => {
    return dispatch => {
      dispatch(getPartiallyPaidOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${partiallypaidordersURL}${id}`, headers)
        .then(res => {
          const partiallypaidorder = res.data;
          dispatch(getPartiallyPaidOrderDetailSuccess(partiallypaidorder));
          })
        .catch(err => {
          dispatch(getPartiallyPaidOrderDetailFail(err));
      });
    };
};



export const getUnpaidPaidOrders = (token) => {
    return dispatch => {
      dispatch(getUnpaidOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(unpaidordersURL, headers)
        .then(res => {
          const unpaidorders = res.data;
          dispatch(getUnpaidOrderListSuccess(unpaidorders));
          })
        .catch(err => {
          dispatch(getUnpaidOrderListFail(err));
      });
    };
};
  
export const getUnpaidOrder = (id, token) => {
    return dispatch => {
      dispatch(getUnpaidOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unpaidordersURL}${id}`, headers)
        .then(res => {
          const unpaidorder = res.data;
          dispatch(getUnpaidOrderDetailSuccess(unpaidorder));
          })
        .catch(err => {
          dispatch(getUnpaidOrderDetailFail(err));
      });
    };
};



export const getFullyReceivedPaidOrders = (token) => {
    return dispatch => {
      dispatch(getFullyReceivedOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(fullyreceivedordersURL, headers)
        .then(res => {
          const fullyreceivedorders = res.data;
          dispatch(getFullyReceivedOrderListSuccess(fullyreceivedorders));
          })
        .catch(err => {
          dispatch(getFullyReceivedOrderListFail(err));
      });
    };
};


export const getFullyReceivedOrder = (id, token) => {
    return dispatch => {
      dispatch(getFullyReceivedOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${fullyreceivedordersURL}${id}`, headers)
        .then(res => {
          const fullyreceivedorders = res.data;
          dispatch(getFullyReceivedOrderDetailSuccess(fullyreceivedorders));
          })
        .catch(err => {
          dispatch(getFullyReceivedOrderDetailFail(err));
      });
    };
};


export const getPartiallyReceivedPaidOrders = (token) => {
    return dispatch => {
      dispatch(getPartiallyReceivedOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(partiallyreceivedordersURL, headers)
        .then(res => {
          const partiallyreceivedorders = res.data;
          dispatch(getPartiallyReceivedOrderListSuccess(partiallyreceivedorders));
          })
        .catch(err => {
          dispatch(getPartiallyReceivedOrderListFail(err));
      });
    };
};

  

export const getPartiallyReceivedOrder = (id, token) => {
    return dispatch => {
      dispatch(getPartiallyReceivedOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${partiallyreceivedordersURL}${id}`, headers)
        .then(res => {
          const partiallyreceivedorders = res.data;
          dispatch(getPartiallyReceivedOrderDetailSuccess(partiallyreceivedorders));
          })
        .catch(err => {
          dispatch(getPartiallyReceivedOrderDetailFail(err));
      });
    };
};




export const getUnreceivedOrders = (token) => {
    return dispatch => {
      dispatch(getUnreceivedOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(unreceivedordersURL, headers)
        .then(res => {
          const unreceivedorders = res.data;
          dispatch(getUnreceivedOrderListSuccess(unreceivedorders));
          })
        .catch(err => {
          dispatch(getUnreceivedOrderListFail(err));
      });
    };
};
  

export const getUnreceivedOrder = (id, token) => {
    return dispatch => {
      dispatch(getUnreceivedOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unreceivedordersURL}${id}/`, headers)
        .then(res => {
          const unreceivedorder = res.data;
          dispatch(getUnreceivedOrderDetailSuccess(unreceivedorder));
          })
        .catch(err => {
          dispatch(getUnreceivedOrderDetailFail(err));
      });
    };
};



export const getUnverifiedDebitNotes = (id, token) => {
    return dispatch => {
      dispatch(getUnverifiedDebitNoteListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unverifieddebitnotesURL}?id=${id}`, headers)
        .then(res => {
          const unverifieddebitnotes = res.data;
          dispatch(getUnverifiedDebitNoteListSuccess(unverifieddebitnotes));
          })
        .catch(err => {
          dispatch(getUnverifiedDebitNoteListFail(err));
      });
    };
};
  

export const getUnverifiedDebitNote = (id, token) => {
    return dispatch => {
      dispatch(getUnverifiedDebitNoteDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unverifieddebitnotesURL}${id}`, headers)
        .then(res => {
          const unverifieddebitnote = res.data;
          dispatch(getUnverifiedDebitNoteDetailSuccess(unverifieddebitnote));
          })
        .catch(err => {
          dispatch(getUnverifiedDebitNoteDetailFail(err));
      });
    };
};


export const addDebitNote = (note, token) => {
    return dispatch => {
      dispatch(createDebitNoteStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(unverifieddebitnotesURL, note, headers)
        .then(res => {
          dispatch(createDebitNoteSuccess(note));
        })
        .catch(err => {
          dispatch(createDebitNoteFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
}; 



export const getVerifiedDebitNotes = (id, token) => {
    return dispatch => {
      dispatch(getVerifiedDebitNoteListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${verifieddebitnotesURL}?id=${id}`, headers)
        .then(res => {
          const verifieddebitnotes = res.data;
          dispatch(getVerifiedDebitNoteListSuccess(verifieddebitnotes));
          })
        .catch(err => {
          dispatch(getVerifiedDebitNoteListFail(err));
      });
    };
};
  

export const getVerifiedDebitNote = (id, token) => {
    return dispatch => {
      dispatch(getVerifiedDebitNoteDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${verifieddebitnotesURL}${id}`, headers)
        .then(res => {
          const verifieddebitnote = res.data;
          dispatch(getVerifiedDebitNoteDetailSuccess(verifieddebitnote));
          })
        .catch(err => {
          dispatch(getVerifiedDebitNoteDetailFail(err));
      });
    };
};


export const getDebitNoteLines = (id, token) => {
    return dispatch => {
      dispatch(getDebitNoteLineListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${debitnotelinesURL}?id=${id}`, headers)
        .then(res => {
          const debitnotelines = res.data;
          dispatch(getDebitNoteLineListSuccess(debitnotelines));
          })
        .catch(err => {
          dispatch(getDebitNoteLineListFail(err));
      });
    };
};


export const getOrderItems = (id, token) => {
    return dispatch => {
      dispatch(getOrderItemListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${orderitemsURL}?id=${id}`, headers)
        .then(res => {
          const orderitems = res.data;
          dispatch(getOrderItemListSuccess(orderitems));
          })
        .catch(err => {
          dispatch(getOrderItemListFail(err));
      });
    };
};


export const getUnverifiedOrderPayments = (id, token) => {
    return dispatch => {
      dispatch(getUnverifiedOrderPaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unverifiedorderpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const unverifiedorderpayments = res.data;
          dispatch(getUnverifiedOrderPaymentListSuccess(unverifiedorderpayments));
          })
        .catch(err => {
          dispatch(getUnverifiedOrderPaymentListFail(err));
      });
    };
};



export const getUnverifiedOrderPayment = (id, token) => {
    return dispatch => {
      dispatch(getUnverifiedOrderPaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${unverifiedorderpaymentsURL}${id}`, headers)
        .then(res => {
          const unverifiedorderpayment = res.data;
          dispatch(getUnverifiedOrderPaymentDetailSuccess(unverifiedorderpayment));
          })
        .catch(err => {
          dispatch(getUnverifiedOrderPaymentDetailFail(err));
      });
    };
};




export const getCashOrderPayments = (id, token) => {
    return dispatch => {
      dispatch(getCashOrderPaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${cashorderpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const cashorderpayments = res.data;
          dispatch(getCashOrderPaymentListSuccess(cashorderpayments));
          })
        .catch(err => {
          dispatch(getCashOrderPaymentListFail(err));
      });
    };
};



export const getCashOrderPayment = (id, token) => {
    return dispatch => {
      dispatch(getCashOrderPaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${cashorderpaymentsURL}${id}`, headers)
        .then(res => {
          const cashorderpayment = res.data;
          dispatch(getCashOrderPaymentDetailSuccess(cashorderpayment));
          })
        .catch(err => {
          dispatch(getCashOrderPaymentDetailFail(err));
      });
    };
};



export const getDebitCardOrderPayments = (id, token) => {
    return dispatch => {
      dispatch(getDebitCardOrderPaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${debitcardorderpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const debitcardorderpayments = res.data;
          dispatch(getDebitCardOrderPaymentListSuccess(debitcardorderpayments));
          })
        .catch(err => {
          dispatch(getDebitCardOrderPaymentListFail(err));
      });
    };
};



export const getDebitCardOrderPayment = (id, token) => {
    return dispatch => {
      dispatch(getDebitCardOrderPaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${debitcardorderpaymentsURL}${id}`, headers)
        .then(res => {
          const debitcardorderpayment = res.data;
          dispatch(getDebitCardOrderPaymentDetailSuccess(debitcardorderpayment));
          })
        .catch(err => {
          dispatch(getDebitCardOrderPaymentDetailFail(err));
      });
    };
};



export const getTransferOrderPayments = (id, token) => {
    return dispatch => {
      dispatch(getTransferOrderPaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${transferorderpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const transferorderpayments = res.data;
          dispatch(getTransferOrderPaymentListSuccess(transferorderpayments));
          })
        .catch(err => {
          dispatch(getTransferOrderPaymentListFail(err));
      });
    };
};



export const getTransferOrderPayment = (id, token) => {
    return dispatch => {
      dispatch(getTransferOrderPaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${transferorderpaymentsURL}${id}`, headers)
        .then(res => {
          const transferorderpayment = res.data;
          dispatch(getTransferOrderPaymentDetailSuccess(transferorderpayment));
          })
        .catch(err => {
          dispatch(getTransferOrderPaymentDetailFail(err));
      });
    };
};



export const getMobileOrderPayments = (id, token) => {
    return dispatch => {
      dispatch(getMobileOrderPaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${mobileorderpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const mobileorderpayments = res.data;
          dispatch(getMobileOrderPaymentListSuccess(mobileorderpayments));
          })
        .catch(err => {
          dispatch(getMobileOrderPaymentListFail(err));
      });
    };
};



export const getMobileOrderPayment = (id, token) => {
    return dispatch => {
      dispatch(getMobileOrderPaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${mobileorderpaymentsURL}${id}`, headers)
        .then(res => {
          const mobileorderpayment = res.data;
          dispatch(getMobileOrderPaymentDetailSuccess(mobileorderpayment));
          })
        .catch(err => {
          dispatch(getMobileOrderPaymentDetailFail(err));
      });
    };
};


export const getStockReceipts = (id, token) => {
    return dispatch => {
      dispatch(getStockReceiptListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${stockreceiptsURL}?id=${id}`, headers)
        .then(res => {
          const stockreceipts = res.data;
          dispatch(getStockReceiptListSuccess(stockreceipts));
          })
        .catch(err => {
          dispatch(getStockReceiptListFail(err));
      });
    };
};



export const getStockReceipt = (id, token) => {
    return dispatch => {
      dispatch(getStockReceiptDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${stockreceiptsURL}${id}/`, headers)
        .then(res => {
          const stockreceipt = res.data;
          dispatch(getStockReceiptDetailSuccess(stockreceipt));
          })
        .catch(err => {
          dispatch(getStockReceiptDetailFail(err));
      });
    };
};


export const getStockReceiptLines = (id, token) => {
    return dispatch => {
      dispatch(getStockReceiptLineListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${stockreceiptlinesURL}?id=${id}`, headers)
        .then(res => {
          const stockreceiptlines = res.data;
          dispatch(getStockReceiptLineListSuccess(stockreceiptlines));
          })
        .catch(err => {
          dispatch(getStockReceiptLineListFail(err));
      });
    };
};



export const verifyOrder = (id, order, token) => {
    return dispatch => {
        dispatch(verifyOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${unverifiedordersURL}${id}/verify/`, order, headers)
          .then(res => {
            dispatch(verifyOrderSuccess(order));
          })
          .catch(err => {
            dispatch(verifyOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
    };
};


export const receiveStock = (id, order, token) => {
    return dispatch => {
        dispatch(receiveStockStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${unreceivedordersURL}${id}/receive/`, order, headers)
          .then(res => {
            dispatch(receiveStockSuccess(order));
          })
          .catch(err => {
            dispatch(receiveStockFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
    };
};


export const receivePartiallyStock = (id, order, token) => {
    return dispatch => {
        dispatch(receivePartiallyStockStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${partiallyreceivedordersURL}${id}/receive/`, order, headers)
          .then(res => {
            dispatch(receivePartiallyStockSuccess(order));
          })
          .catch(err => {
            dispatch(receivePartiallyStockFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payOrder = (id, order, token) => {
    return dispatch => {
        dispatch(payOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${unpaidordersURL}${id}/pay/`, order, headers)
          .then(res => {
            dispatch(payOrderSuccess(order));
          })
          .catch(err => {
            dispatch(payOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payPartiallyOrder = (id, order, token) => {
    return dispatch => {
        dispatch(payPartiallyOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${partiallypaidordersURL}${id}/pay/`, order, headers)
          .then(res => {
            dispatch(payPartiallyOrderSuccess(order));
          })
          .catch(err => {
            dispatch(payPartiallyOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const verifyPayment = (id, order, token) => {
    return dispatch => {
        dispatch(verifyPaymentStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${unverifiedorderpaymentsURL}${id}/verify/`, order, headers)
          .then(res => {
            dispatch(verifyPaymentSuccess(order));
          })
          .catch(err => {
            dispatch(verifyPaymentFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};