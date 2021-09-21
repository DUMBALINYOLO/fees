import axios from 'axios';
import {
  GET_BILL_PAYMENTS_START,
  GET_BILL_PAYMENTS_SUCCESS,
  GET_BILL_PAYMENTS_FAIL,
  CREATE_BILL_PAYMENT_START,
  CREATE_BILL_PAYMENT_SUCCESS,
  CREATE_BILL_PAYMENT_FAIL,
  GET_BILL_PAYMENT_START,
  GET_BILL_PAYMENT_SUCCESS,
  GET_BILL_PAYMENT_FAIL,
  EDIT_BILL_PAYMENT,
  GET_UNVERIFIED_BILL_PAYMENTS_START,
  GET_UNVERIFIED_BILL_PAYMENTS_SUCCESS,
  GET_UNVERIFIED_BILL_PAYMENTS_FAIL,
  CREATE_UNVERIFIED_BILL_PAYMENT_START,
  CREATE_UNVERIFIED_BILL_PAYMENT_SUCCESS,
  CREATE_UNVERIFIED_BILL_PAYMENT_FAIL,
  GET_UNVERIFIED_BILL_PAYMENT_START,
  GET_UNVERIFIED_BILL_PAYMENT_SUCCESS,
  GET_UNVERIFIED_BILL_PAYMENT_FAIL,
  GET_BILL_CASH_PAYMENTS_START,
  GET_BILL_CASH_PAYMENTS_SUCCESS,
  GET_BILL_CASH_PAYMENTS_FAIL,
  CREATE_BILL_CASH_PAYMENT_START,
  CREATE_BILL_CASH_PAYMENT_SUCCESS,
  CREATE_BILL_CASH_PAYMENT_FAIL,
  GET_BILL_CASH_PAYMENT_START,
  GET_BILL_CASH_PAYMENT_SUCCESS,
  GET_BILL_CASH_PAYMENT_FAIL,
  GET_BILL_TRANSFER_PAYMENTS_START,
  GET_BILL_TRANSFER_PAYMENTS_SUCCESS,
  GET_BILL_TRANSFER_PAYMENTS_FAIL,
  CREATE_BILL_TRANSFER_PAYMENT_START,
  CREATE_BILL_TRANSFER_PAYMENT_SUCCESS,
  CREATE_BILL_TRANSFER_PAYMENT_FAIL,
  GET_BILL_TRANSFER_PAYMENT_START,
  GET_BILL_TRANSFER_PAYMENT_SUCCESS,
  GET_BILL_TRANSFER_PAYMENT_FAIL,
  GET_BILL_DEBIT_CARD_PAYMENTS_START,
  GET_BILL_DEBIT_CARD_PAYMENTS_SUCCESS,
  GET_BILL_DEBIT_CARD_PAYMENTS_FAIL,
  CREATE_BILL_DEBIT_CARD_PAYMENT_START,
  CREATE_BILL_DEBIT_CARD_PAYMENT_SUCCESS,
  CREATE_BILL_DEBIT_CARD_PAYMENT_FAIL,
  GET_BILL_DEBIT_CARD_PAYMENT_START,
  GET_BILL_DEBIT_CARD_PAYMENT_SUCCESS,
  GET_BILL_DEBIT_CARD_PAYMENT_FAIL,
  GET_BILL_MOBILE_PAYMENTS_START,
  GET_BILL_MOBILE_PAYMENTS_SUCCESS,
  GET_BILL_MOBILE_PAYMENTS_FAIL,
  CREATE_BILL_MOBILE_PAYMENT_START,
  CREATE_BILL_MOBILE_PAYMENT_SUCCESS,
  CREATE_BILL_MOBILE_PAYMENT_FAIL,
  GET_BILL_MOBILE_PAYMENT_START,
  GET_BILL_MOBILE_PAYMENT_SUCCESS,
  GET_BILL_MOBILE_PAYMENT_FAIL,
  GET_DAILY_PENDING_PAYMENT_BILLS_START,
  GET_DAILY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_DAILY_PENDING_PAYMENT_BILLS_FAIL,
  GET_DAILY_PENDING_PAYMENT_BILL_START,
  GET_DAILY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_DAILY_PENDING_PAYMENT_BILL_FAIL,
  GET_WEEKLY_PENDING_PAYMENT_BILLS_START,
  GET_WEEKLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_WEEKLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_WEEKLY_PENDING_PAYMENT_BILL_START,
  GET_WEEKLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_WEEKLY_PENDING_PAYMENT_BILL_FAIL,
  GET_BIMONTHLY_PENDING_PAYMENT_BILLS_START,
  GET_BIMONTHLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_BIMONTHLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_BIMONTHLY_PENDING_PAYMENT_BILL_START,
  GET_BIMONTHLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_BIMONTHLY_PENDING_PAYMENT_BILL_FAIL,
  GET_MONTHLY_PENDING_PAYMENT_BILLS_START,
  GET_MONTHLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_MONTHLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_MONTHLY_PENDING_PAYMENT_BILL_START,
  GET_MONTHLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_MONTHLY_PENDING_PAYMENT_BILL_FAIL,
  GET_QUARTERLY_PENDING_PAYMENT_BILLS_START,
  GET_QUARTERLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_QUARTERLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_QUARTERLY_PENDING_PAYMENT_BILL_START,
  GET_QUARTERLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_QUARTERLY_PENDING_PAYMENT_BILL_FAIL,
  GET_BIANNUALLY_PENDING_PAYMENT_BILLS_START,
  GET_BIANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_BIANNUALLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_BIANNUALLY_PENDING_PAYMENT_BILL_START,
  GET_BIANNUALLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_BIANNUALLY_PENDING_PAYMENT_BILL_FAIL,
  GET_ANNUALLY_PENDING_PAYMENT_BILLS_START,
  GET_ANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_ANNUALLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_ANNUALLY_PENDING_PAYMENT_BILL_START,
  GET_ANNUALLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_ANNUALLY_PENDING_PAYMENT_BILL_FAIL,
  GET_ONCE_OFF_PENDING_PAYMENT_BILLS_START,
  GET_ONCE_OFF_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_ONCE_OFF_PENDING_PAYMENT_BILLS_FAIL,
  GET_ONCE_OFF_PENDING_PAYMENT_BILL_START,
  GET_ONCE_OFF_PENDING_PAYMENT_BILL_SUCCESS,
  GET_ONCE_OFF_PENDING_PAYMENT_BILL_FAIL,
  EDIT_UNVERIFIED_BILL_PAYMENT,
  EDIT_BILL_CASH_PAYMENT,
  EDIT_BILL_TRANSFER_PAYMENT,
  EDIT_BILL_DEBIT_CARD_PAYMENT,
  EDIT_BILL_MOBILE_PAYMENT,
  GET_BILL_LINES_START,
  GET_BILL_LINES_SUCCESS,
  GET_BILL_LINES_FAIL,
  GET_ONCE_OFF_FULLY_PAID_BILLS_START,
  GET_ONCE_OFF_FULLY_PAID_BILLS_SUCCESS,
  GET_ONCE_OFF_FULLY_PAID_BILLS_FAIL,
  GET_ONCE_OFF_FULLY_PAID_BILL_START,
  GET_ONCE_OFF_FULLY_PAID_BILL_SUCCESS,
  GET_ONCE_OFF_FULLY_PAID_BILL_FAIL,
  GET_ONCE_OFF_UNVERIFIED_BILLS_START,
  GET_ONCE_OFF_UNVERIFIED_BILLS_SUCCESS,
  GET_ONCE_OFF_UNVERIFIED_BILLS_FAIL,
  CREATE_ONCE_OFF_UNVERIFIED_BILL_START,
  CREATE_ONCE_OFF_UNVERIFIED_BILL_SUCCESS,
  CREATE_ONCE_OFF_UNVERIFIED_BILL_FAIL,
  GET_ONCE_OFF_UNVERIFIED_BILL_START,
  GET_ONCE_OFF_UNVERIFIED_BILL_SUCCESS,
  GET_ONCE_OFF_UNVERIFIED_BILL_FAIL,
  GET_ANNUALLY_FULLY_PAID_BILLS_START,
  GET_ANNUALLY_FULLY_PAID_BILLS_SUCCESS,
  GET_ANNUALLY_FULLY_PAID_BILLS_FAIL,
  GET_ANNUALLY_FULLY_PAID_BILL_START,
  GET_ANNUALLY_FULLY_PAID_BILL_SUCCESS,
  GET_ANNUALLY_FULLY_PAID_BILL_FAIL,
  GET_ANNUALLY_UNVERIFIED_BILLS_START,
  GET_ANNUALLY_UNVERIFIED_BILLS_SUCCESS,
  GET_ANNUALLY_UNVERIFIED_BILLS_FAIL,
  CREATE_ANNUALLY_UNVERIFIED_BILL_START,
  CREATE_ANNUALLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_ANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_ANNUALLY_UNVERIFIED_BILL_START,
  GET_ANNUALLY_UNVERIFIED_BILL_SUCCESS,
  GET_ANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_BIANNUALLY_FULLY_PAID_BILLS_START,
  GET_BIANNUALLY_FULLY_PAID_BILLS_SUCCESS,
  GET_BIANNUALLY_FULLY_PAID_BILLS_FAIL,
  GET_BIANNUALLY_FULLY_PAID_BILL_START,
  GET_BIANNUALLY_FULLY_PAID_BILL_SUCCESS,
  GET_BIANNUALLY_FULLY_PAID_BILL_FAIL,
  GET_BIANNUALLY_UNVERIFIED_BILLS_START,
  GET_BIANNUALLY_UNVERIFIED_BILLS_SUCCESS,
  GET_BIANNUALLY_UNVERIFIED_BILLS_FAIL,
  CREATE_BIANNUALLY_UNVERIFIED_BILL_START,
  CREATE_BIANNUALLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_BIANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_BIANNUALLY_UNVERIFIED_BILL_START,
  GET_BIANNUALLY_UNVERIFIED_BILL_SUCCESS,
  GET_BIANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_QUARTERLY_FULLY_PAID_BILLS_START,
  GET_QUARTERLY_FULLY_PAID_BILLS_SUCCESS,
  GET_QUARTERLY_FULLY_PAID_BILLS_FAIL,
  GET_QUARTERLY_FULLY_PAID_BILL_START,
  GET_QUARTERLY_FULLY_PAID_BILL_SUCCESS,
  GET_QUARTERLY_FULLY_PAID_BILL_FAIL,
  GET_QUARTERLY_UNVERIFIED_BILLS_START,
  GET_QUARTERLY_UNVERIFIED_BILLS_SUCCESS,
  GET_QUARTERLY_UNVERIFIED_BILLS_FAIL,
  CREATE_QUARTERLY_UNVERIFIED_BILL_START,
  CREATE_QUARTERLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_QUARTERLY_UNVERIFIED_BILL_FAIL,
  GET_QUARTERLY_UNVERIFIED_BILL_START,
  GET_QUARTERLY_UNVERIFIED_BILL_SUCCESS,
  GET_QUARTERLY_UNVERIFIED_BILL_FAIL,
  GET_MONTHLY_FULLY_PAID_BILLS_START,
  GET_MONTHLY_FULLY_PAID_BILLS_SUCCESS,
  GET_MONTHLY_FULLY_PAID_BILLS_FAIL,
  GET_MONTHLY_FULLY_PAID_BILL_START,
  GET_MONTHLY_FULLY_PAID_BILL_SUCCESS,
  GET_MONTHLY_FULLY_PAID_BILL_FAIL,
  GET_MONTHLY_UNVERIFIED_BILLS_START,
  GET_MONTHLY_UNVERIFIED_BILLS_SUCCESS,
  GET_MONTHLY_UNVERIFIED_BILLS_FAIL,
  CREATE_MONTHLY_UNVERIFIED_BILL_START,
  CREATE_MONTHLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_MONTHLY_UNVERIFIED_BILL_FAIL,
  GET_MONTHLY_UNVERIFIED_BILL_START,
  GET_MONTHLY_UNVERIFIED_BILL_SUCCESS,
  GET_MONTHLY_UNVERIFIED_BILL_FAIL,
  GET_BIMONTHLY_FULLY_PAID_BILLS_START,
  GET_BIMONTHLY_FULLY_PAID_BILLS_SUCCESS,
  GET_BIMONTHLY_FULLY_PAID_BILLS_FAIL,
  GET_BIMONTHLY_FULLY_PAID_BILL_START,
  GET_BIMONTHLY_FULLY_PAID_BILL_FAIL,
  GET_BIMONTHLY_UNVERIFIED_BILLS_START,
  GET_BIMONTHLY_UNVERIFIED_BILLS_SUCCESS,
  GET_BIMONTHLY_UNVERIFIED_BILLS_FAIL,
  CREATE_BIMONTHLY_UNVERIFIED_BILL_START,
  CREATE_BIMONTHLY_UNVERIFIED_BILL_SUCCESS,
  GET_BIMONTHLY_FULLY_PAID_BILL_SUCCESS,
  CREATE_BIMONTHLY_UNVERIFIED_BILL_FAIL,
  GET_BIMONTHLY_UNVERIFIED_BILL_START,
  GET_BIMONTHLY_UNVERIFIED_BILL_SUCCESS,
  GET_BIMONTHLY_UNVERIFIED_BILL_FAIL,
  GET_WEEKLY_FULLY_PAID_BILLS_START,
  GET_WEEKLY_FULLY_PAID_BILLS_SUCCESS,
  GET_WEEKLY_FULLY_PAID_BILLS_FAIL,
  GET_WEEKLY_FULLY_PAID_BILL_START,
  GET_WEEKLY_FULLY_PAID_BILL_SUCCESS,
  GET_WEEKLY_FULLY_PAID_BILL_FAIL,
  GET_WEEKLY_UNVERIFIED_BILLS_START,
  GET_WEEKLY_UNVERIFIED_BILLS_SUCCESS,
  GET_WEEKLY_UNVERIFIED_BILLS_FAIL,
  CREATE_WEEKLY_UNVERIFIED_BILL_START,
  CREATE_WEEKLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_WEEKLY_UNVERIFIED_BILL_FAIL,
  GET_WEEKLY_UNVERIFIED_BILL_START,
  GET_WEEKLY_UNVERIFIED_BILL_SUCCESS,
  GET_WEEKLY_UNVERIFIED_BILL_FAIL,
  GET_DAILY_FULLY_PAID_BILLS_START,
  GET_DAILY_FULLY_PAID_BILLS_SUCCESS,
  GET_DAILY_FULLY_PAID_BILLS_FAIL,
  GET_DAILY_FULLY_PAID_BILL_START,
  GET_DAILY_FULLY_PAID_BILL_SUCCESS,
  GET_DAILY_FULLY_PAID_BILL_FAIL,
  GET_DAILY_UNVERIFIED_BILLS_START,
  GET_DAILY_UNVERIFIED_BILLS_SUCCESS,
  GET_DAILY_UNVERIFIED_BILLS_FAIL,
  CREATE_DAILY_UNVERIFIED_BILL_START,
  CREATE_DAILY_UNVERIFIED_BILL_SUCCESS,
  CREATE_DAILY_UNVERIFIED_BILL_FAIL,
  GET_DAILY_UNVERIFIED_BILL_START,
  GET_DAILY_UNVERIFIED_BILL_SUCCESS,
  GET_DAILY_UNVERIFIED_BILL_FAIL,
  GET_BILLS_START,
  GET_BILLS_SUCCESS,
  GET_BILLS_FAIL,
  CREATE_BILL_START,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAIL,
  GET_BILL_START,
  GET_BILL_SUCCESS,
  GET_BILL_FAIL,
  EDIT_DAILY_UNVERIFIED_BILL,
  EDIT_BILL,
  EDIT_WEEKLY_UNVERIFIED_BILL,
  EDIT_BIMONTHLY_UNVERIFIED_BILL,
  EDIT_MONTHLY_UNVERIFIED_BILL,
  EDIT_QUARTERLY_UNVERIFIED_BILL,
  EDIT_BIANNUALLY_UNVERIFIED_BILL,
  EDIT_ANNUALLY_UNVERIFIED_BILL,
  EDIT_ONCE_OFF_UNVERIFIED_BILL,
  GET_BILL_SUPPLIERS_START,
  GET_BILL_SUPPLIERS_SUCCESS,
  GET_BILL_SUPPLIERS_FAIL,
  VERIFY_DAILY_BILL_START,
  VERIFY_DAILY_BILL_SUCCESS,
  VERIFY_DAILY_BILL_FAIL,
  VERIFY_WEEKLY_BILL_START,
  VERIFY_WEEKLY_BILL_SUCCESS,
  VERIFY_WEEKLY_BILL_FAIL,
  VERIFY_BIMONTHLY_BILL_START,
  VERIFY_BIMONTHLY_BILL_SUCCESS,
  VERIFY_BIMONTHLY_BILL_FAIL,
  VERIFY_MONTHLY_BILL_START,
  VERIFY_MONTHLY_BILL_SUCCESS,
  VERIFY_MONTHLY_BILL_FAIL,
  VERIFY_QUARTERLY_BILL_START,
  VERIFY_QUARTERLY_BILL_SUCCESS,
  VERIFY_QUARTERLY_BILL_FAIL,
  VERIFY_BIANNUALLY_BILL_START,
  VERIFY_BIANNUALLY_BILL_SUCCESS,
  VERIFY_BIANNUALLY_BILL_FAIL,
  VERIFY_ANNUALLY_BILL_START,
  VERIFY_ANNUALLY_BILL_SUCCESS,
  VERIFY_ANNUALLY_BILL_FAIL,
  VERIFY_ONCEOFF_BILL_START,
  VERIFY_ONCEOFF_BILL_SUCCESS,
  VERIFY_ONCEOFF_BILL_FAIL,
  PAY_DAILY_BILL_START,
  PAY_DAILY_BILL_SUCCESS,
  PAY_DAILY_BILL_FAIL,
  PAY_WEEKLY_BILL_START,
  PAY_WEEKLY_BILL_SUCCESS,
  PAY_WEEKLY_BILL_FAIL,
  PAY_BIMONTHLY_BILL_START,
  PAY_BIMONTHLY_BILL_SUCCESS,
  PAY_BIMONTHLY_BILL_FAIL,
  PAY_MONTHLY_BILL_START,
  PAY_MONTHLY_BILL_SUCCESS,
  PAY_MONTHLY_BILL_FAIL,
  PAY_QUARTERLY_BILL_START,
  PAY_QUARTERLY_BILL_SUCCESS,
  PAY_QUARTERLY_BILL_FAIL,
  PAY_BIANNUALLY_BILL_START,
  PAY_BIANNUALLY_BILL_SUCCESS,
  PAY_BIANNUALLY_BILL_FAIL,
  PAY_ANNUALLY_BILL_START,
  PAY_ANNUALLY_BILL_SUCCESS,
  PAY_ANNUALLY_BILL_FAIL,
  PAY_ONCEOFF_BILL_START,
  PAY_ONCEOFF_BILL_SUCCESS,
  PAY_ONCEOFF_BILL_FAIL,
  VERIFY_BILL_PAYMENT_START,
  VERIFY_BILL_PAYMENT_SUCCESS,
  VERIFY_BILL_PAYMENT_FAIL,
} from '../../types/expenseTypes';

import {
  billpaymentsURL,
  billsuppliersURL,
  unverifiedbillpaymentsURL,
  billcashpaymentsURL,
  billtransferpaymentsURL,
  billdebitcardpaymentsURL,
  billmobilepaymentsURL,
  dailypendingpaymentbillsURL,
  weeklypendingpaymentbillsURL,
  bimonthlypendingpaymentbillsURL,
  monthlypendingpaymentbillsURL,
  quarterlypendingpaymentbillsURL,
  biannuallypendingpaymentbillsURL,
  annuallypendingpaymentbillsURL,
  onceoffpendingpaymentbillsURL,
  billsURL,
  dailyunverifiedbillsURL,
  dailyfullypaidbillsURL,
  weeklyunverifiedbillsURL,
  weeklyfullypaidbillsURL,
  bimonthlyunverifiedbillsURL,
  bimonthlyfullypaidbillsURL,
  monthlyunverifiedbillsURL,
  monthlyfullypaidbillsURL,
  quarterlyunverifiedbillsURL,
  quarterlyfullypaidbillsURL,
  biannuallyunverifiedbillsURL,
  biannuallyfullypaidbillsURL,
  annuallyunverifiedbillsURL,
  annuallyfullypaidbillsURL,
  onceoffunverifiedbillsURL,
  onceofffullypaidbillsURL,
  billlinesURL
} from '../../constants';
import { returnErrors } from '../messages';



const verifyBillPaymentStart = () => {
  return {
    type: VERIFY_BILL_PAYMENT_START
  };
};

const verifyBillPaymentSuccess = bill => {
  return {
    type: VERIFY_BILL_PAYMENT_SUCCESS,
    bill
  };
};

const verifyBillPaymentFail = error => {
  return {
    type: VERIFY_BILL_PAYMENT_FAIL,
    error: error
  };
};




const verifyDailyBillStart = () => {
  return {
    type: VERIFY_DAILY_BILL_START
  };
};

const verifyDailyBillSuccess = bill => {
  return {
    type: VERIFY_DAILY_BILL_SUCCESS,
    bill
  };
};

const verifyDailyBillFail = error => {
  return {
    type: VERIFY_DAILY_BILL_FAIL,
    error: error
  };
};


const verifyWeeklyBillStart = () => {
  return {
    type: VERIFY_WEEKLY_BILL_START
  };
};

const verifyWeeklyBillSuccess = bill => {
  return {
    type: VERIFY_WEEKLY_BILL_SUCCESS,
    bill
  };
};

const verifyWeeklyBillFail = error => {
  return {
    type: VERIFY_WEEKLY_BILL_FAIL,
    error: error
  };
};


const verifyBiMonthlyBillStart = () => {
  return {
    type: VERIFY_BIMONTHLY_BILL_START
  };
};

const verifyBiMonthlyBillSuccess = bill => {
  return {
    type: VERIFY_BIMONTHLY_BILL_SUCCESS,
    bill
  };
};

const verifyBiMonthlyBillFail = error => {
  return {
    type: VERIFY_BIMONTHLY_BILL_FAIL,
    error: error
  };
};


const verifyMonthlyBillStart = () => {
  return {
    type: VERIFY_MONTHLY_BILL_START
  };
};

const verifyMonthlyBillSuccess = bill => {
  return {
    type: VERIFY_MONTHLY_BILL_SUCCESS,
    bill
  };
};

const verifyMonthlyBillFail = error => {
  return {
    type: VERIFY_MONTHLY_BILL_FAIL,
    error: error
  };
};


const verifyQuarterlyBillStart = () => {
  return {
    type: VERIFY_QUARTERLY_BILL_START
  };
};

const verifyQuarterlyBillSuccess = bill => {
  return {
    type: VERIFY_QUARTERLY_BILL_SUCCESS,
    bill
  };
};

const verifyQuarterlyBillFail = error => {
  return {
    type: VERIFY_QUARTERLY_BILL_FAIL,
    error: error
  };
};


const verifyBiAnnuallyBillStart = () => {
  return {
    type: VERIFY_BIANNUALLY_BILL_START
  };
};

const verifyBiAnnuallyBillSuccess = bill => {
  return {
    type: VERIFY_BIANNUALLY_BILL_SUCCESS,
    bill
  };
};

const verifyBiAnnuallyBillFail = error => {
  return {
    type: VERIFY_BIANNUALLY_BILL_FAIL,
    error: error
  };
};


const verifyAnnuallyBillStart = () => {
  return {
    type: VERIFY_ANNUALLY_BILL_START
  };
};

const verifyAnnuallyBillSuccess = bill => {
  return {
    type: VERIFY_ANNUALLY_BILL_SUCCESS,
    bill
  };
};

const verifyAnnuallyBillFail = error => {
  return {
    type: VERIFY_ANNUALLY_BILL_FAIL,
    error: error
  };
};


const verifyOnceOffBillStart = () => {
  return {
    type: VERIFY_ONCEOFF_BILL_START
  };
};

const verifyOnceOffBillSuccess = bill => {
  return {
    type: VERIFY_ONCEOFF_BILL_SUCCESS,
    bill
  };
};

const verifyOnceOffBillFail = error => {
  return {
    type: VERIFY_ONCEOFF_BILL_FAIL,
    error: error
  };
};



const payDailyBillStart = () => {
  return {
    type: PAY_DAILY_BILL_START
  };
};

const payDailyBillSuccess = bill => {
  return {
    type: PAY_DAILY_BILL_SUCCESS,
    bill
  };
};

const payDailyBillFail = error => {
  return {
    type: PAY_DAILY_BILL_FAIL,
    error: error
  };
};


const payWeeklyBillStart = () => {
  return {
    type: PAY_WEEKLY_BILL_START
  };
};

const payWeeklyBillSuccess = bill => {
  return {
    type: PAY_WEEKLY_BILL_SUCCESS,
    bill
  };
};

const payWeeklyBillFail = error => {
  return {
    type: PAY_WEEKLY_BILL_FAIL,
    error: error
  };
};


const payBiMonthlyBillStart = () => {
  return {
    type: PAY_BIMONTHLY_BILL_START
  };
};

const payBiMonthlyBillSuccess = bill => {
  return {
    type: PAY_BIMONTHLY_BILL_SUCCESS,
    bill
  };
};

const payBiMonthlyBillFail = error => {
  return {
    type: PAY_BIMONTHLY_BILL_FAIL,
    error: error
  };
};


const payMonthlyBillStart = () => {
  return {
    type: PAY_MONTHLY_BILL_START
  };
};

const payMonthlyBillSuccess = bill => {
  return {
    type: PAY_MONTHLY_BILL_SUCCESS,
    bill
  };
};

const payMonthlyBillFail = error => {
  return {
    type: PAY_MONTHLY_BILL_FAIL,
    error: error
  };
};


const payQuarterlyBillStart = () => {
  return {
    type: PAY_QUARTERLY_BILL_START
  };
};

const payQuarterlyBillSuccess = bill => {
  return {
    type: PAY_QUARTERLY_BILL_SUCCESS,
    bill
  };
};

const payQuarterlyBillFail = error => {
  return {
    type: PAY_QUARTERLY_BILL_FAIL,
    error: error
  };
};


const payBiAnnuallyBillStart = () => {
  return {
    type: PAY_BIANNUALLY_BILL_START
  };
};

const payBiAnnuallyBillSuccess = bill => {
  return {
    type: PAY_BIANNUALLY_BILL_SUCCESS,
    bill
  };
};

const payBiAnnuallyBillFail = error => {
  return {
    type: PAY_BIANNUALLY_BILL_FAIL,
    error: error
  };
};


const payAnnuallyBillStart = () => {
  return {
    type: PAY_ANNUALLY_BILL_START
  };
};

const payAnnuallyBillSuccess = bill => {
  return {
    type: PAY_ANNUALLY_BILL_SUCCESS,
    bill
  };
};

const payAnnuallyBillFail = error => {
  return {
    type: PAY_ANNUALLY_BILL_FAIL,
    error: error
  };
};


const payOnceOffBillStart = () => {
  return {
    type: PAY_ONCEOFF_BILL_START
  };
};

const payOnceOffBillSuccess = bill => {
  return {
    type: PAY_ONCEOFF_BILL_SUCCESS,
    bill
  };
};

const payOnceOffBillFail = error => {
  return {
    type: PAY_ONCEOFF_BILL_FAIL,
    error: error
  };
};





const getBillSupplierListStart = () => {
  return {
    type: GET_BILL_SUPPLIERS_START
  };
};

const getBillSupplierListSuccess = billsuppliers => {
  return {
    type: GET_BILL_SUPPLIERS_SUCCESS,
    billsuppliers
  };
};

const getBillSupplierListFail = error => {
  return {
    type: GET_BILL_SUPPLIERS_FAIL,
    error: error
  };
};


//bill payments
const getBillPaymentListStart = () => {
  return {
    type: GET_BILL_PAYMENTS_START
  };
};

const getBillPaymentListSuccess = billpayments => {
  return {
    type: GET_BILL_PAYMENTS_SUCCESS,
    billpayments
  };
};

const getBillPaymentListFail = error => {
  return {
    type: GET_BILL_PAYMENTS_FAIL,
    error: error
  };
};

const createBillPaymentStart = () => {
  return {
    type: CREATE_BILL_PAYMENT_START
  };
};

const createBillPaymentSuccess = billpayment => {
  return {
    type: CREATE_BILL_PAYMENT_SUCCESS,
    billpayment
  };
};

const createBillPaymentFail = error => {
  return {
    type: CREATE_BILL_PAYMENT_FAIL,
    error: error
  };
};

const getBillPaymentDetailStart = () => {
  return {
    type: GET_BILL_PAYMENT_START
  };
};

const getBillPaymentDetailSuccess = billpayment => {
  return {
    type: GET_BILL_PAYMENT_SUCCESS,
    billpayment
  };
};

const getBillPaymentDetailFail = error => {
  return {
    type: GET_BILL_PAYMENT_FAIL,
    error: error
  };
};

//unverified bill payments
const getUnverifiedBillPaymentListStart = () => {
  return {
    type: GET_UNVERIFIED_BILL_PAYMENTS_START
  };
};

const getUnverifiedBillPaymentListSuccess = unverifiedbillpayments => {
  return {
    type: GET_UNVERIFIED_BILL_PAYMENTS_SUCCESS,
    unverifiedbillpayments
  };
};

const getUnverifiedBillPaymentListFail = error => {
  return {
    type: GET_UNVERIFIED_BILL_PAYMENTS_FAIL,
    error: error
  };
};

const createUnverifiedBillPaymentStart = () => {
  return {
    type: CREATE_UNVERIFIED_BILL_PAYMENT_START
  };
};

const createUnverifiedBillPaymentSuccess = unverifiedbillpayment => {
  return {
    type: CREATE_UNVERIFIED_BILL_PAYMENT_SUCCESS,
    unverifiedbillpayment
  };
};

const createUnverifiedBillPaymentFail = error => {
  return {
    type: CREATE_UNVERIFIED_BILL_PAYMENT_FAIL,
    error: error
  };
};

const getUnverifiedBillPaymentDetailStart = () => {
  return {
    type: GET_UNVERIFIED_BILL_PAYMENT_START
  };
};

const getUnverifiedBillPaymentDetailSuccess = unverifiedbillpayment => {
  return {
    type: GET_UNVERIFIED_BILL_PAYMENT_SUCCESS,
    unverifiedbillpayment
  };
};

const getUnverifiedBillPaymentDetailFail = error => {
  return {
    type: GET_UNVERIFIED_BILL_PAYMENT_FAIL,
    error: error
  };
};

//bill cash payments
const getBillCashPaymentListStart = () => {
  return {
    type: GET_BILL_CASH_PAYMENTS_START
  };
};

const getBillCashPaymentListSuccess = billcashpayments => {
  return {
    type: GET_BILL_CASH_PAYMENTS_SUCCESS,
    billcashpayments
  };
};

const getBillCashPaymentListFail = error => {
  return {
    type: GET_BILL_CASH_PAYMENTS_FAIL,
    error: error
  };
};

const createBillCashPaymentStart = () => {
  return {
    type: CREATE_BILL_CASH_PAYMENT_START
  };
};

const createBillCashPaymentSuccess = billcashpayment => {
  return {
    type: CREATE_BILL_CASH_PAYMENT_SUCCESS,
    billcashpayment
  };
};

const createBillCashPaymentFail = error => {
  return {
    type: CREATE_BILL_CASH_PAYMENT_FAIL,
    error: error
  };
};

const getBillCashPaymentDetailStart = () => {
  return {
    type: GET_BILL_CASH_PAYMENT_START
  };
};

const getBillCashPaymentDetailSuccess = billcashpayment => {
  return {
    type: GET_BILL_CASH_PAYMENT_SUCCESS,
    billcashpayment
  };
};

const getBillCashPaymentDetailFail = error => {
  return {
    type: GET_BILL_CASH_PAYMENT_FAIL,
    error: error
  };
};

//bill transfer payments
const getBillTransferPaymentListStart = () => {
  return {
    type: GET_BILL_TRANSFER_PAYMENTS_START
  };
};

const getBillTransferPaymentListSuccess = billtransferpayments => {
  return {
    type: GET_BILL_TRANSFER_PAYMENTS_SUCCESS,
    billtransferpayments
  };
};

const getBillTransferPaymentListFail = error => {
  return {
    type: GET_BILL_TRANSFER_PAYMENTS_FAIL,
    error: error
  };
};

const createBillTransferPaymentStart = () => {
  return {
    type: CREATE_BILL_TRANSFER_PAYMENT_START
  };
};

const createBillTransferPaymentSuccess = billtransferpayment => {
  return {
    type: CREATE_BILL_TRANSFER_PAYMENT_SUCCESS,
    billtransferpayment
  };
};

const createBillTransferPaymentFail = error => {
  return {
    type: CREATE_BILL_TRANSFER_PAYMENT_FAIL,
    error: error
  };
};

const getBillTransferPaymentDetailStart = () => {
  return {
    type: GET_BILL_TRANSFER_PAYMENT_START
  };
};

const getBillTransferPaymentDetailSuccess = billtransferpayment => {
  return {
    type: GET_BILL_TRANSFER_PAYMENT_SUCCESS,
    billtransferpayment
  };
};

const getBillTransferPaymentDetailFail = error => {
  return {
    type: GET_BILL_TRANSFER_PAYMENT_FAIL,
    error: error
  };
};

//bill debit card payments
const getBillDebitCardPaymentListStart = () => {
  return {
    type: GET_BILL_DEBIT_CARD_PAYMENTS_START
  };
};

const getBillDebitCardPaymentListSuccess = billdebitcardpayments => {
  return {
    type: GET_BILL_DEBIT_CARD_PAYMENTS_SUCCESS,
    billdebitcardpayments
  };
};

const getBillDebitCardPaymentListFail = error => {
  return {
    type: GET_BILL_DEBIT_CARD_PAYMENTS_FAIL,
    error: error
  };
};

const createBillDebitCardPaymentStart = () => {
  return {
    type: CREATE_BILL_DEBIT_CARD_PAYMENT_START
  };
};

const createBillDebitCardPaymentSuccess = billdebitcardpayment => {
  return {
    type: CREATE_BILL_DEBIT_CARD_PAYMENT_SUCCESS,
    billdebitcardpayment
  };
};

const createBillDebitCardPaymentFail = error => {
  return {
    type: CREATE_BILL_DEBIT_CARD_PAYMENT_FAIL,
    error: error
  };
};

const getBillDebitCardPaymentDetailStart = () => {
  return {
    type: GET_BILL_DEBIT_CARD_PAYMENT_START
  };
};

const getBillDebitCardPaymentDetailSuccess = billdebitcardpayment => {
  return {
    type: GET_BILL_DEBIT_CARD_PAYMENT_SUCCESS,
    billdebitcardpayment
  };
};

const getBillDebitCardPaymentDetailFail = error => {
  return {
    type: GET_BILL_DEBIT_CARD_PAYMENT_FAIL,
    error: error
  };
};

//bill mobile payments
const getBillMobilePaymentListStart = () => {
  return {
    type: GET_BILL_MOBILE_PAYMENTS_START
  };
};

const getBillMobilePaymentListSuccess = billmobilepayments => {
  return {
    type: GET_BILL_MOBILE_PAYMENTS_SUCCESS,
    billmobilepayments
  };
};

const getBillMobilePaymentListFail = error => {
  return {
    type: GET_BILL_MOBILE_PAYMENTS_FAIL,
    error: error
  };
};

const createBillMobilePaymentStart = () => {
  return {
    type: CREATE_BILL_MOBILE_PAYMENT_START
  };
};

const createBillMobilePaymentSuccess = billmobilepayment => {
  return {
    type: CREATE_BILL_MOBILE_PAYMENT_SUCCESS,
    billmobilepayment
  };
};

const createBillMobilePaymentFail = error => {
  return {
    type: CREATE_BILL_MOBILE_PAYMENT_FAIL,
    error: error
  };
};

const getBillMobilePaymentDetailStart = () => {
  return {
    type: GET_BILL_MOBILE_PAYMENT_START
  };
};

const getBillMobilePaymentDetailSuccess = billmobilepayment => {
  return {
    type: GET_BILL_MOBILE_PAYMENT_SUCCESS,
    billmobilepayment
  };
};

const getBillMobilePaymentDetailFail = error => {
  return {
    type: GET_BILL_MOBILE_PAYMENT_FAIL,
    error: error
  };
};

//daily pending payment bills
const getDailyPendingPaymentBillListStart = () => {
  return {
    type: GET_DAILY_PENDING_PAYMENT_BILLS_START
  };
};

const getDailyPendingPaymentBillListSuccess = dailypendingpaymentbills => {
  return {
    type: GET_DAILY_PENDING_PAYMENT_BILLS_SUCCESS,
    dailypendingpaymentbills
  };
};

const getDailyPendingPaymentBillListFail = error => {
  return {
    type: GET_DAILY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getDailyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_DAILY_PENDING_PAYMENT_BILL_START
  };
};

const getDailyPendingPaymentBillDetailSuccess = dailypendingpaymentbill => {
  return {
    type: GET_DAILY_PENDING_PAYMENT_BILL_SUCCESS,
    dailypendingpaymentbill
  };
};

const getDailyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_DAILY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//weekly pending payment bills
const getWeeklyPendingPaymentBillListStart = () => {
  return {
    type: GET_WEEKLY_PENDING_PAYMENT_BILLS_START
  };
};

const getWeeklyPendingPaymentBillListSuccess = weeklypendingpaymentbills => {
  return {
    type: GET_WEEKLY_PENDING_PAYMENT_BILLS_SUCCESS,
    weeklypendingpaymentbills
  };
};

const getWeeklyPendingPaymentBillListFail = error => {
  return {
    type: GET_WEEKLY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getWeeklyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_WEEKLY_PENDING_PAYMENT_BILL_START
  };
};

const getWeeklyPendingPaymentBillDetailSuccess = weeklypendingpaymentbill => {
  return {
    type: GET_WEEKLY_PENDING_PAYMENT_BILL_SUCCESS,
    weeklypendingpaymentbill
  };
};

const getWeeklyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_WEEKLY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//bimonthly pending payment bills
const getBiMonthlyPendingPaymentBillListStart = () => {
  return {
    type: GET_BIMONTHLY_PENDING_PAYMENT_BILLS_START
  };
};

const getBiMonthlyPendingPaymentBillListSuccess = bimonthlypendingpaymentbills => {
  return {
    type: GET_BIMONTHLY_PENDING_PAYMENT_BILLS_SUCCESS,
    bimonthlypendingpaymentbills
  };
};

const getBiMonthlyPendingPaymentBillListFail = error => {
  return {
    type: GET_BIMONTHLY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getBiMonthlyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_BIMONTHLY_PENDING_PAYMENT_BILL_START
  };
};

const getBiMonthlyPendingPaymentBillDetailSuccess = bimonthlypendingpaymentbill => {
  return {
    type: GET_BIMONTHLY_PENDING_PAYMENT_BILL_SUCCESS,
    bimonthlypendingpaymentbill
  };
};

const getBiMonthlyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_BIMONTHLY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//monthly pending payment bills
const getMonthlyPendingPaymentBillListStart = () => {
  return {
    type: GET_MONTHLY_PENDING_PAYMENT_BILLS_START
  };
};

const getMonthlyPendingPaymentBillListSuccess = monthlypendingpaymentbills => {
  return {
    type: GET_MONTHLY_PENDING_PAYMENT_BILLS_SUCCESS,
    monthlypendingpaymentbills
  };
};

const getMonthlyPendingPaymentBillListFail = error => {
  return {
    type: GET_MONTHLY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getMonthlyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_MONTHLY_PENDING_PAYMENT_BILL_START
  };
};

const getMonthlyPendingPaymentBillDetailSuccess = monthlypendingpaymentbill => {
  return {
    type: GET_MONTHLY_PENDING_PAYMENT_BILL_SUCCESS,
    monthlypendingpaymentbill
  };
};

const getMonthlyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_MONTHLY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//Quarterly pending payment bills
const getQuarterlyPendingPaymentBillListStart = () => {
  return {
    type: GET_QUARTERLY_PENDING_PAYMENT_BILLS_START
  };
};

const getQuarterlyPendingPaymentBillListSuccess = quarterlypendingpaymentbills => {
  return {
    type: GET_QUARTERLY_PENDING_PAYMENT_BILLS_SUCCESS,
    quarterlypendingpaymentbills
  };
};

const getQuarterlyPendingPaymentBillListFail = error => {
  return {
    type: GET_QUARTERLY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getQuarterlyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_QUARTERLY_PENDING_PAYMENT_BILL_START
  };
};

const getQuarterlyPendingPaymentBillDetailSuccess = quarterlypendingpaymentbill => {
  return {
    type: GET_QUARTERLY_PENDING_PAYMENT_BILL_SUCCESS,
    quarterlypendingpaymentbill
  };
};

const getQuarterlyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_QUARTERLY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//biannually pending payment bills
const getBiAnnuallyPendingPaymentBillListStart = () => {
  return {
    type: GET_BIANNUALLY_PENDING_PAYMENT_BILLS_START
  };
};

const getBiAnnuallyPendingPaymentBillListSuccess = biannuallypendingpaymentbills => {
  return {
    type: GET_BIANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS,
    biannuallypendingpaymentbills
  };
};

const getBiAnnuallyPendingPaymentBillListFail = error => {
  return {
    type: GET_BIANNUALLY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getBiAnnuallyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_BIANNUALLY_PENDING_PAYMENT_BILL_START
  };
};

const getBiAnnuallyPendingPaymentBillDetailSuccess = biannuallypendingpaymentbill => {
  return {
    type: GET_BIANNUALLY_PENDING_PAYMENT_BILL_SUCCESS,
    biannuallypendingpaymentbill
  };
};

const getBiAnnuallyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_BIANNUALLY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//annually pending payment bills
const getAnnuallyPendingPaymentBillListStart = () => {
  return {
    type: GET_ANNUALLY_PENDING_PAYMENT_BILLS_START
  };
};

const getAnnuallyPendingPaymentBillListSuccess = annuallypendingpaymentbills => {
  return {
    type: GET_ANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS,
    annuallypendingpaymentbills
  };
};

const getAnnuallyPendingPaymentBillListFail = error => {
  return {
    type: GET_ANNUALLY_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getAnnuallyPendingPaymentBillDetailStart = () => {
  return {
    type: GET_ANNUALLY_PENDING_PAYMENT_BILL_START
  };
};

const getAnnuallyPendingPaymentBillDetailSuccess = annuallypendingpaymentbill => {
  return {
    type: GET_ANNUALLY_PENDING_PAYMENT_BILL_SUCCESS,
    annuallypendingpaymentbill
  };
};

const getAnnuallyPendingPaymentBillDetailFail = error => {
  return {
    type: GET_ANNUALLY_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//once off pending payment bills
const getOnceOffPendingPaymentBillListStart = () => {
  return {
    type: GET_ONCE_OFF_PENDING_PAYMENT_BILLS_START
  };
};

const getOnceOffPendingPaymentBillListSuccess = onceoffpendingpaymentbills => {
  return {
    type: GET_ONCE_OFF_PENDING_PAYMENT_BILLS_SUCCESS,
    onceoffpendingpaymentbills
  };
};

const getOnceOffPendingPaymentBillListFail = error => {
  return {
    type: GET_ONCE_OFF_PENDING_PAYMENT_BILLS_FAIL,
    error: error
  };
};

const getOnceOffPendingPaymentBillDetailStart = () => {
  return {
    type: GET_ONCE_OFF_PENDING_PAYMENT_BILL_START
  };
};

const getOnceOffPendingPaymentBillDetailSuccess = onceoffpendingpaymentbill => {
  return {
    type: GET_ONCE_OFF_PENDING_PAYMENT_BILL_SUCCESS,
    onceoffpendingpaymentbill
  };
};

const getOnceOffPendingPaymentBillDetailFail = error => {
  return {
    type: GET_ONCE_OFF_PENDING_PAYMENT_BILL_FAIL,
    error: error
  };
};

//bill lines
const getBillLineListStart = () => {
  return {
    type: GET_BILL_LINES_START
  };
};

const getBillLineListSuccess = billlines => {
  return {
    type: GET_BILL_LINES_SUCCESS,
    billlines
  };
};

const getBillLineListFail = error => {
  return {
    type: GET_BILL_LINES_FAIL,
    error: error
  };
};

//onceoff fully paid bills
const getOnceOffFullyPaidBillListStart = () => {
  return {
    type: GET_ONCE_OFF_FULLY_PAID_BILLS_START
  };
};

const getOnceOffFullyPaidBillListSuccess = onceofffullypaidbills => {
  return {
    type: GET_ONCE_OFF_FULLY_PAID_BILLS_SUCCESS,
    onceofffullypaidbills
  };
};

const getOnceOffFullyPaidBillListFail = error => {
  return {
    type: GET_ONCE_OFF_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getOnceOffFullyPaidBillDetailStart = () => {
  return {
    type: GET_ONCE_OFF_FULLY_PAID_BILL_START
  };
};

const getOnceOffFullyPaidBillDetailSuccess = onceofffullypaidbill => {
  return {
    type: GET_ONCE_OFF_FULLY_PAID_BILL_SUCCESS,
    onceofffullypaidbill
  };
};

const getOnceOffFullyPaidBillDetailFail = error => {
  return {
    type: GET_ONCE_OFF_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//onceoff unverified bills
const getOnceOffUnverifiedBillListStart = () => {
  return {
    type: GET_ONCE_OFF_UNVERIFIED_BILLS_START
  };
};

const getOnceOffUnverifiedBillListSuccess = onceoffunverifiedbills => {
  return {
    type: GET_ONCE_OFF_UNVERIFIED_BILLS_SUCCESS,
    onceoffunverifiedbills
  };
};

const getOnceOffUnverifiedBillListFail = error => {
  return {
    type: GET_ONCE_OFF_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createOnceOffUnverifiedBillStart = () => {
  return {
    type: CREATE_ONCE_OFF_UNVERIFIED_BILL_START
  };
};

const createOnceOffUnverifiedBillSuccess = onceoffunverifiedbill => {
  return {
    type: CREATE_ONCE_OFF_UNVERIFIED_BILL_SUCCESS,
    onceoffunverifiedbill
  };
};

const createOnceOffUnverifiedBillFail = error => {
  return {
    type: CREATE_ONCE_OFF_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getOnceOffUnverifiedBillDetailStart = () => {
  return {
    type: GET_ONCE_OFF_UNVERIFIED_BILL_START
  };
};

const getOnceOffUnverifiedBillDetailSuccess = onceoffunverifiedbill => {
  return {
    type: GET_ONCE_OFF_UNVERIFIED_BILL_SUCCESS,
    onceoffunverifiedbill
  };
};

const getOnceOffUnverifiedBillDetailFail = error => {
  return {
    type: GET_ONCE_OFF_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//annually fully paid bills
const getAnnuallyFullyPaidBillListStart = () => {
  return {
    type: GET_ANNUALLY_FULLY_PAID_BILLS_START
  };
};

const getAnnuallyFullyPaidBillListSuccess = annuallyfullypaidbills => {
  return {
    type: GET_ANNUALLY_FULLY_PAID_BILLS_SUCCESS,
    annuallyfullypaidbills
  };
};

const getAnnuallyFullyPaidBillListFail = error => {
  return {
    type: GET_ANNUALLY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getAnnuallyFullyPaidBillDetailStart = () => {
  return {
    type: GET_ANNUALLY_FULLY_PAID_BILL_START
  };
};

const getAnnuallyFullyPaidBillDetailSuccess = annuallyfullypaidbill => {
  return {
    type: GET_ANNUALLY_FULLY_PAID_BILL_SUCCESS,
    annuallyfullypaidbill
  };
};

const getAnnuallyFullyPaidBillDetailFail = error => {
  return {
    type: GET_ANNUALLY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//annually unverified bills
const getAnnuallyUnverifiedBillListStart = () => {
  return {
    type: GET_ANNUALLY_UNVERIFIED_BILLS_START
  };
};

const getAnnuallyUnverifiedBillListSuccess = annuallyunverifiedbills => {
  return {
    type: GET_ANNUALLY_UNVERIFIED_BILLS_SUCCESS,
    annuallyunverifiedbills
  };
};

const getAnnuallyUnverifiedBillListFail = error => {
  return {
    type: GET_ANNUALLY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createAnnuallyUnverifiedBillStart = () => {
  return {
    type: CREATE_ANNUALLY_UNVERIFIED_BILL_START
  };
};

const createAnnuallyUnverifiedBillSuccess = annuallyunverifiedbill => {
  return {
    type: CREATE_ANNUALLY_UNVERIFIED_BILL_SUCCESS,
    annuallyunverifiedbill
  };
};

const createAnnuallyUnverifiedBillFail = error => {
  return {
    type: CREATE_ANNUALLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getAnnuallyUnverifiedBillDetailStart = () => {
  return {
    type: GET_ANNUALLY_UNVERIFIED_BILL_START
  };
};

const getAnnuallyUnverifiedBillDetailSuccess = annuallyunverifiedbill => {
  return {
    type: GET_ANNUALLY_UNVERIFIED_BILL_SUCCESS,
    annuallyunverifiedbill
  };
};

const getAnnuallyUnverifiedBillDetailFail = error => {
  return {
    type: GET_ANNUALLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//biannually fully paid bills
const getBiAnnuallyFullyPaidBillListStart = () => {
  return {
    type: GET_BIANNUALLY_FULLY_PAID_BILLS_START
  };
};

const getBiAnnuallyFullyPaidBillListSuccess = biannuallyfullypaidbills => {
  return {
    type: GET_BIANNUALLY_FULLY_PAID_BILLS_SUCCESS,
    biannuallyfullypaidbills
  };
};

const getBiAnnuallyFullyPaidBillListFail = error => {
  return {
    type: GET_BIANNUALLY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getBiAnnuallyFullyPaidBillDetailStart = () => {
  return {
    type: GET_BIANNUALLY_FULLY_PAID_BILL_START
  };
};

const getBiAnnuallyFullyPaidBillDetailSuccess = biannuallyfullypaidbill => {
  return {
    type: GET_BIANNUALLY_FULLY_PAID_BILL_SUCCESS,
    biannuallyfullypaidbill
  };
};

const getBiAnnuallyFullyPaidBillDetailFail = error => {
  return {
    type: GET_BIANNUALLY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//biannually unverified bills
const getBiAnnuallyUnverifiedBillListStart = () => {
  return {
    type: GET_BIANNUALLY_UNVERIFIED_BILLS_START
  };
};

const getBiAnnuallyUnverifiedBillListSuccess = biannuallyunverifiedbills => {
  return {
    type: GET_BIANNUALLY_UNVERIFIED_BILLS_SUCCESS,
    biannuallyunverifiedbills
  };
};

const getBiAnnuallyUnverifiedBillListFail = error => {
  return {
    type: GET_BIANNUALLY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createBiAnnuallyUnverifiedBillStart = () => {
  return {
    type: CREATE_BIANNUALLY_UNVERIFIED_BILL_START
  };
};

const createBiAnnuallyUnverifiedBillSuccess = biannuallyunverifiedbill => {
  return {
    type: CREATE_BIANNUALLY_UNVERIFIED_BILL_SUCCESS,
    biannuallyunverifiedbill
  };
};

const createBiAnnuallyUnverifiedBillFail = error => {
  return {
    type: CREATE_BIANNUALLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getBiAnnuallyUnverifiedBillDetailStart = () => {
  return {
    type: GET_BIANNUALLY_UNVERIFIED_BILL_START
  };
};

const getBiAnnuallyUnverifiedBillDetailSuccess = biannuallyunverifiedbill => {
  return {
    type: GET_BIANNUALLY_UNVERIFIED_BILL_SUCCESS,
    biannuallyunverifiedbill
  };
};

const getBiAnnuallyUnverifiedBillDetailFail = error => {
  return {
    type: GET_BIANNUALLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//quarterly fully paid bills
const getQuarterlyFullyPaidBillListStart = () => {
  return {
    type: GET_QUARTERLY_FULLY_PAID_BILLS_START
  };
};

const getQuarterlyFullyPaidBillListSuccess = quarterlyfullypaidbills => {
  return {
    type: GET_QUARTERLY_FULLY_PAID_BILLS_SUCCESS,
    quarterlyfullypaidbills
  };
};

const getQuarterlyFullyPaidBillListFail = error => {
  return {
    type: GET_QUARTERLY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getQuarterlyFullyPaidBillDetailStart = () => {
  return {
    type: GET_QUARTERLY_FULLY_PAID_BILL_START
  };
};

const getQuarterlyFullyPaidBillDetailSuccess = quarterlyfullypaidbill => {
  return {
    type: GET_QUARTERLY_FULLY_PAID_BILL_SUCCESS,
    quarterlyfullypaidbill
  };
};

const getQuarterlyFullyPaidBillDetailFail = error => {
  return {
    type: GET_QUARTERLY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//quarterly unverified bills
const getQuarterlyUnverifiedBillListStart = () => {
  return {
    type: GET_QUARTERLY_UNVERIFIED_BILLS_START
  };
};

const getQuarterlyUnverifiedBillListSuccess = quarterlyunverifiedbills => {
  return {
    type: GET_QUARTERLY_UNVERIFIED_BILLS_SUCCESS,
    quarterlyunverifiedbills
  };
};

const getQuarterlyUnverifiedBillListFail = error => {
  return {
    type: GET_QUARTERLY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createQuarterlyUnverifiedBillStart = () => {
  return {
    type: CREATE_QUARTERLY_UNVERIFIED_BILL_START
  };
};

const createQuarterlyUnverifiedBillSuccess = quarterlyunverifiedbill => {
  return {
    type: CREATE_QUARTERLY_UNVERIFIED_BILL_SUCCESS,
    quarterlyunverifiedbill
  };
};

const createQuarterlyUnverifiedBillFail = error => {
  return {
    type: CREATE_QUARTERLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getQuarterlyUnverifiedBillDetailStart = () => {
  return {
    type: GET_QUARTERLY_UNVERIFIED_BILL_START
  };
};

const getQuarterlyUnverifiedBillDetailSuccess = quarterlyunverifiedbill => {
  return {
    type: GET_QUARTERLY_UNVERIFIED_BILL_SUCCESS,
    quarterlyunverifiedbill
  };
};

const getQuarterlyUnverifiedBillDetailFail = error => {
  return {
    type: GET_QUARTERLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//monthly fully paid bills
const getMonthlyFullyPaidBillListStart = () => {
  return {
    type: GET_MONTHLY_FULLY_PAID_BILLS_START
  };
};

const getMonthlyFullyPaidBillListSuccess = monthlyfullypaidbills => {
  return {
    type: GET_MONTHLY_FULLY_PAID_BILLS_SUCCESS,
    monthlyfullypaidbills
  };
};

const getMonthlyFullyPaidBillListFail = error => {
  return {
    type: GET_MONTHLY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getMonthlyFullyPaidBillDetailStart = () => {
  return {
    type: GET_MONTHLY_FULLY_PAID_BILL_START
  };
};

const getMonthlyFullyPaidBillDetailSuccess = monthlyfullypaidbill => {
  return {
    type: GET_MONTHLY_FULLY_PAID_BILL_SUCCESS,
    monthlyfullypaidbill
  };
};

const getMonthlyFullyPaidBillDetailFail = error => {
  return {
    type: GET_MONTHLY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//monthly unverified bills
const getMonthlyUnverifiedBillListStart = () => {
  return {
    type: GET_MONTHLY_UNVERIFIED_BILLS_START
  };
};

const getMonthlyUnverifiedBillListSuccess = monthlyunverifiedbills => {
  return {
    type: GET_MONTHLY_UNVERIFIED_BILLS_SUCCESS,
    monthlyunverifiedbills
  };
};

const getMonthlyUnverifiedBillListFail = error => {
  return {
    type: GET_MONTHLY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createMonthlyUnverifiedBillStart = () => {
  return {
    type: CREATE_MONTHLY_UNVERIFIED_BILL_START
  };
};

const createMonthlyUnverifiedBillSuccess = monthlyunverifiedbill => {
  return {
    type: CREATE_MONTHLY_UNVERIFIED_BILL_SUCCESS,
    monthlyunverifiedbill
  };
};

const createMonthlyUnverifiedBillFail = error => {
  return {
    type: CREATE_MONTHLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getMonthlyUnverifiedBillDetailStart = () => {
  return {
    type: GET_MONTHLY_UNVERIFIED_BILL_START
  };
};

const getMonthlyUnverifiedBillDetailSuccess = monthlyunverifiedbill => {
  return {
    type: GET_MONTHLY_UNVERIFIED_BILL_SUCCESS,
    monthlyunverifiedbill
  };
};

const getMonthlyUnverifiedBillDetailFail = error => {
  return {
    type: GET_MONTHLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//bimonthly fully paid bills
const getBiMonthlyFullyPaidBillListStart = () => {
  return {
    type: GET_BIMONTHLY_FULLY_PAID_BILLS_START
  };
};

const getBiMonthlyFullyPaidBillListSuccess = bimonthlyfullypaidbills => {
  return {
    type: GET_BIMONTHLY_FULLY_PAID_BILLS_SUCCESS,
    bimonthlyfullypaidbills
  };
};

const getBiMonthlyFullyPaidBillListFail = error => {
  return {
    type: GET_BIMONTHLY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getBiMonthlyFullyPaidBillDetailStart = () => {
  return {
    type: GET_BIMONTHLY_FULLY_PAID_BILL_START
  };
};

const getBiMonthlyFullyPaidBillDetailSuccess = bimonthlyfullypaidbill => {
  return {
    type: GET_BIMONTHLY_FULLY_PAID_BILL_SUCCESS,
    bimonthlyfullypaidbill
  };
};

const getBiMonthlyFullyPaidBillDetailFail = error => {
  return {
    type: GET_BIMONTHLY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//bimonthly unverified bills
const getBiMonthlyUnverifiedBillListStart = () => {
  return {
    type: GET_BIMONTHLY_UNVERIFIED_BILLS_START
  };
};

const getBiMonthlyUnverifiedBillListSuccess = bimonthlyunverifiedbills => {
  return {
    type: GET_BIMONTHLY_UNVERIFIED_BILLS_SUCCESS,
    bimonthlyunverifiedbills
  };
};

const getBiMonthlyUnverifiedBillListFail = error => {
  return {
    type: GET_BIMONTHLY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createBiMonthlyUnverifiedBillStart = () => {
  return {
    type: CREATE_BIMONTHLY_UNVERIFIED_BILL_START
  };
};

const createBiMonthlyUnverifiedBillSuccess = bimonthlyunverifiedbill => {
  return {
    type: CREATE_BIMONTHLY_UNVERIFIED_BILL_SUCCESS,
    bimonthlyunverifiedbill
  };
};

const createBiMonthlyUnverifiedBillFail = error => {
  return {
    type: CREATE_BIMONTHLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getBiMonthlyUnverifiedBillDetailStart = () => {
  return {
    type: GET_BIMONTHLY_UNVERIFIED_BILL_START
  };
};

const getBiMonthlyUnverifiedBillDetailSuccess = bimonthlyunverifiedbill => {
  return {
    type: GET_BIMONTHLY_UNVERIFIED_BILL_SUCCESS,
    bimonthlyunverifiedbill
  };
};

const getBiMonthlyUnverifiedBillDetailFail = error => {
  return {
    type: GET_BIMONTHLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//weekly fully paid bills
const getWeeklyFullyPaidBillListStart = () => {
  return {
    type: GET_WEEKLY_FULLY_PAID_BILLS_START
  };
};

const getWeeklyFullyPaidBillListSuccess = weeklyfullypaidbills => {
  return {
    type: GET_WEEKLY_FULLY_PAID_BILLS_SUCCESS,
    weeklyfullypaidbills
  };
};

const getWeeklyFullyPaidBillListFail = error => {
  return {
    type: GET_WEEKLY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getWeeklyFullyPaidBillDetailStart = () => {
  return {
    type: GET_WEEKLY_FULLY_PAID_BILL_START
  };
};

const getWeeklyFullyPaidBillDetailSuccess = weeklyfullypaidbill => {
  return {
    type: GET_WEEKLY_FULLY_PAID_BILL_SUCCESS,
    weeklyfullypaidbill
  };
};

const getWeeklyFullyPaidBillDetailFail = error => {
  return {
    type: GET_WEEKLY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//weekly unverified bills
const getWeeklyUnverifiedBillListStart = () => {
  return {
    type: GET_WEEKLY_UNVERIFIED_BILLS_START
  };
};

const getWeeklyUnverifiedBillListSuccess = weeklyunverifiedbills => {
  return {
    type: GET_WEEKLY_UNVERIFIED_BILLS_SUCCESS,
    weeklyunverifiedbills
  };
};

const getWeeklyUnverifiedBillListFail = error => {
  return {
    type: GET_WEEKLY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createWeeklyUnverifiedBillStart = () => {
  return {
    type: CREATE_WEEKLY_UNVERIFIED_BILL_START
  };
};

const createWeeklyUnverifiedBillSuccess = weeklyunverifiedbill => {
  return {
    type: CREATE_WEEKLY_UNVERIFIED_BILL_SUCCESS,
    weeklyunverifiedbill
  };
};

const createWeeklyUnverifiedBillFail = error => {
  return {
    type: CREATE_WEEKLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getWeeklyUnverifiedBillDetailStart = () => {
  return {
    type: GET_WEEKLY_UNVERIFIED_BILL_START
  };
};

const getWeeklyUnverifiedBillDetailSuccess = weeklyunverifiedbill => {
  return {
    type: GET_WEEKLY_UNVERIFIED_BILL_SUCCESS,
    weeklyunverifiedbill
  };
};

const getWeeklyUnverifiedBillDetailFail = error => {
  return {
    type: GET_WEEKLY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//daily fully paid bills
const getDailyFullyPaidBillListStart = () => {
  return {
    type: GET_DAILY_FULLY_PAID_BILLS_START
  };
};

const getDailyFullyPaidBillListSuccess = dailyfullypaidbills => {
  return {
    type: GET_DAILY_FULLY_PAID_BILLS_SUCCESS,
    dailyfullypaidbills
  };
};

const getDailyFullyPaidBillListFail = error => {
  return {
    type: GET_DAILY_FULLY_PAID_BILLS_FAIL,
    error: error
  };
};

const getDailyFullyPaidBillDetailStart = () => {
  return {
    type: GET_DAILY_FULLY_PAID_BILL_START
  };
};

const getDailyFullyPaidBillDetailSuccess = dailyfullypaidbill => {
  return {
    type: GET_DAILY_FULLY_PAID_BILL_SUCCESS,
    dailyfullypaidbill
  };
};

const getDailyFullyPaidBillDetailFail = error => {
  return {
    type: GET_DAILY_FULLY_PAID_BILL_FAIL,
    error: error
  };
};

//daily unverified bills
const getDailyUnverifiedBillListStart = () => {
  return {
    type: GET_DAILY_UNVERIFIED_BILLS_START
  };
};

const getDailyUnverifiedBillListSuccess = dailyunverifiedbills => {
  return {
    type: GET_DAILY_UNVERIFIED_BILLS_SUCCESS,
    dailyunverifiedbills
  };
};

const getDailyUnverifiedBillListFail = error => {
  return {
    type: GET_DAILY_UNVERIFIED_BILLS_FAIL,
    error: error
  };
};

const createDailyUnverifiedBillStart = () => {
  return {
    type: CREATE_DAILY_UNVERIFIED_BILL_START
  };
};


const createDailyUnverifiedBillSuccess = dailyunverifiedbill => {
  return {
    type: CREATE_DAILY_UNVERIFIED_BILL_SUCCESS,
    dailyunverifiedbill
  };
};

const createDailyUnverifiedBillFail = error => {
  return {
    type: CREATE_DAILY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

const getDailyUnverifiedBillDetailStart = () => {
  return {
    type: GET_DAILY_UNVERIFIED_BILL_START
  };
};

const getDailyUnverifiedBillDetailSuccess = dailyunverifiedbill => {
  return {
    type: GET_DAILY_UNVERIFIED_BILL_SUCCESS,
    dailyunverifiedbill
  };
};

const getDailyUnverifiedBillDetailFail = error => {
  return {
    type: GET_DAILY_UNVERIFIED_BILL_FAIL,
    error: error
  };
};

//bills
const getBillListStart = () => {
  return {
    type: GET_BILLS_START
  };
};

const getBillListSuccess = bills => {
  return {
    type: GET_BILLS_SUCCESS,
    bills
  };
};

const getBillListFail = error => {
  return {
    type: GET_BILLS_FAIL,
    error: error
  };
};

const createBillStart = () => {
  return {
    type: CREATE_BILL_START
  };
};

const createBillSuccess = bill => {
  return {
    type: CREATE_BILL_SUCCESS,
    bill
  };
};

const createBillFail = error => {
  return {
    type: CREATE_BILL_FAIL,
    error: error
  };
};

const getBillDetailStart = () => {
  return {
    type: GET_BILL_START
  };
};

const getBillDetailSuccess = bill => {
  return {
    type: GET_BILL_SUCCESS,
    bill
  };
};

const getBillDetailFail = error => {
  return {
    type: GET_BILL_FAIL,
    error: error
  };
};


export const verifyBillPayment = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyBillPaymentStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${unverifiedbillpaymentsURL}${id}/verify/`, bill, headers)
        .then(res => {
          dispatch(verifyBillPaymentSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyBillPaymentFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const payDailyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payDailyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${dailypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payDailyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payDailyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const payWeeklyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payWeeklyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${weeklypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payWeeklyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payWeeklyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const payBiMonthlyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payBiMonthlyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${bimonthlypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payBiMonthlyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payBiMonthlyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payMonthlyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payMonthlyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${monthlypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payMonthlyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payMonthlyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payQuarterlyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payQuarterlyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${quarterlypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payQuarterlyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payQuarterlyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payBiAnnuallyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payBiAnnuallyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${biannuallypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payBiAnnuallyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payBiAnnuallyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payAnnuallyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payAnnuallyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${annuallypendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payAnnuallyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payAnnuallyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const payOnceOffBill = (id, bill, token) => {
  return dispatch => {
      dispatch(payOnceOffBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${onceoffpendingpaymentbillsURL}${id}/pay/`, bill, headers)
        .then(res => {
          dispatch(payOnceOffBillSuccess(bill));
        })
        .catch(err => {
          dispatch(payOnceOffBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const verifyDailyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyDailyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${dailyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyDailyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyDailyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const verifyWeeklyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyWeeklyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${weeklyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyWeeklyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyWeeklyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const verifyBiMonthlyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyBiMonthlyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${bimonthlyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyBiMonthlyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyBiMonthlyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const verifyMonthlyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyMonthlyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${monthlyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyMonthlyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyMonthlyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const verifyQuarterlyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyQuarterlyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${quarterlyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyQuarterlyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyQuarterlyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const verifyBiAnnuallyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyBiAnnuallyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${biannuallyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyBiAnnuallyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyBiAnnuallyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const verifyAnnuallyBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyAnnuallyBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${annuallyunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyAnnuallyBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyAnnuallyBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const verifyOnceOffBill = (id, bill, token) => {
  return dispatch => {
      dispatch(verifyOnceOffBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${onceoffunverifiedbillsURL}${id}/verify_bill/`, bill, headers)
        .then(res => {
          dispatch(verifyOnceOffBillSuccess(bill));
        })
        .catch(err => {
          dispatch(verifyOnceOffBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const getBillSuppliers = (token) => {
  return dispatch => {
      dispatch(getBillSupplierListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(billsuppliersURL, headers)
        .then(res => {
          const billsuppliers = res.data;
          dispatch(getBillSupplierListSuccess(billsuppliers));
          })
        .catch(err => {
          dispatch(getBillSupplierListStart(err));
        });
    };
};

//daily unverified bills
export const getDailyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getDailyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(dailyunverifiedbillsURL, headers)
        .then(res => {
          const dailyunverifiedbills = res.data;
          dispatch(getDailyUnverifiedBillListSuccess(dailyunverifiedbills));
          })
        .catch(err => {
          dispatch(getDailyUnverifiedBillListStart(err));
        });
    };
};

export const getDailyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getDailyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${dailyunverifiedbillsURL}${id}/`, headers)
        .then(res => {
          const dailyunverifiedbill = res.data;
          dispatch(getDailyUnverifiedBillDetailSuccess(dailyunverifiedbill));
          })
        .catch(err => {
          dispatch(getDailyUnverifiedBillDetailFail(err));
        });
    };
};

export const addDailyUnverifiedBill = (dailyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createDailyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(dailyunverifiedbillsURL, dailyunverifiedbill, headers)
        .then(res => {
          dispatch(createDailyUnverifiedBillSuccess(dailyunverifiedbill));
        })
        .catch(err => {
          dispatch(createDailyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editDailyUnverifiedBill = (id, dailyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${dailyunverifiedbillsURL}${id}/`, dailyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_DAILY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//bills
export const getBills = (token) => {
  return dispatch => {
      dispatch(getBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(billsURL, headers)
        .then(res => {
          const bills = res.data;
          dispatch(getBillListSuccess(bills));
          })
        .catch(err => {
          dispatch(getBillListStart(err));
        });
    };
};

export const getBill = (id, token) => {
  return dispatch => {
      dispatch(getBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${billsURL}${id}`, headers)
        .then(res => {
          const bill = res.data;
          dispatch(getBillDetailSuccess(bill));
          })
        .catch(err => {
          dispatch(getBillDetailFail(err));
        });
    };
};

export const addBill = (bill, token) => {
  return dispatch => {
      dispatch(createBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(billsURL, bill, headers)
        .then(res => {
          dispatch(createBillSuccess(bill));
        })
        .catch(err => {
          dispatch(createBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editBill = (id, bill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${billsURL}${id}/`, bill, headers)
    .then(res => {
        dispatch({
            type: EDIT_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//daily fully paid bills
export const getDailyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getDailyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(dailyfullypaidbillsURL, headers)
        .then(res => {
          const dailyfullypaidbills = res.data;
          dispatch(getDailyFullyPaidBillListSuccess(dailyfullypaidbills));
          })
        .catch(err => {
          dispatch(getDailyFullyPaidBillListStart(err));
        });
    };
};

export const getDailyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getDailyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${dailyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const dailyfullypaidbill = res.data;
          dispatch(getDailyFullyPaidBillDetailSuccess(dailyfullypaidbill));
          })
        .catch(err => {
          dispatch(getDailyFullyPaidBillDetailFail(err));
        });
    };
};

//weekly unverified bills
export const getWeeklyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getWeeklyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(weeklyunverifiedbillsURL, headers)
        .then(res => {
          const weeklyunverifiedbills = res.data;
          dispatch(getWeeklyUnverifiedBillListSuccess(weeklyunverifiedbills));
          })
        .catch(err => {
          dispatch(getWeeklyUnverifiedBillListStart(err));
        });
    };
};

export const getWeeklyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getWeeklyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${weeklyunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const weeklyunverifiedbill = res.data;
          dispatch(getWeeklyUnverifiedBillDetailSuccess(weeklyunverifiedbill));
          })
        .catch(err => {
          dispatch(getWeeklyUnverifiedBillDetailFail(err));
        });
    };
};

export const addWeeklyUnverifiedBill = (weeklyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createWeeklyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(weeklyunverifiedbillsURL, weeklyunverifiedbill, headers)
        .then(res => {
          dispatch(createWeeklyUnverifiedBillSuccess(weeklyunverifiedbill));
        })
        .catch(err => {
          dispatch(createWeeklyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editWeeklyUnverifiedBill = (id, weeklyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${weeklyunverifiedbillsURL}${id}/`, weeklyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_WEEKLY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//weekly fully paid bills
export const getWeeklyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getWeeklyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(weeklyfullypaidbillsURL, headers)
        .then(res => {
          const weeklyfullypaidbills = res.data;
          dispatch(getWeeklyFullyPaidBillListSuccess(weeklyfullypaidbills));
          })
        .catch(err => {
          dispatch(getWeeklyFullyPaidBillListStart(err));
        });
    };
};

export const getWeeklyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getWeeklyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${weeklyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const weeklyfullypaidbill = res.data;
          dispatch(getWeeklyFullyPaidBillDetailSuccess(weeklyfullypaidbill));
          })
        .catch(err => {
          dispatch(getWeeklyFullyPaidBillDetailFail(err));
        });
    };
};

//bimonthly unverified bills
export const getBiMonthlyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getBiMonthlyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(bimonthlyunverifiedbillsURL, headers)
        .then(res => {
          const bimonthlyunverifiedbills = res.data;
          dispatch(getBiMonthlyUnverifiedBillListSuccess(bimonthlyunverifiedbills));
          })
        .catch(err => {
          dispatch(getBiMonthlyUnverifiedBillListStart(err));
        });
    };
};

export const getBiMonthlyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getBiMonthlyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${bimonthlyunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const bimonthlyunverifiedbill = res.data;
          dispatch(getBiMonthlyUnverifiedBillDetailSuccess(bimonthlyunverifiedbill));
          })
        .catch(err => {
          dispatch(getBiMonthlyUnverifiedBillDetailFail(err));
        });
    };
};

export const addBiMonthlyUnverifiedBill = (bimonthlyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createBiMonthlyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(bimonthlyunverifiedbillsURL, bimonthlyunverifiedbill, headers)
        .then(res => {
          dispatch(createBiMonthlyUnverifiedBillSuccess(bimonthlyunverifiedbill));
        })
        .catch(err => {
          dispatch(createBiMonthlyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editBiMonthlyUnverifiedBill = (id, bimonthlyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${bimonthlyunverifiedbillsURL}${id}/`, bimonthlyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_BIMONTHLY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//bimonthly fully paid bills
export const getBiMonthlyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getBiMonthlyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(bimonthlyfullypaidbillsURL, headers)
        .then(res => {
          const bimonthlyfullypaidbills = res.data;
          dispatch(getBiMonthlyFullyPaidBillListSuccess(bimonthlyfullypaidbills));
          })
        .catch(err => {
          dispatch(getBiMonthlyFullyPaidBillListStart(err));
        });
    };
};

export const getBiMonthlyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getBiMonthlyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${bimonthlyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const bimonthlyfullypaidbill = res.data;
          dispatch(getBiMonthlyFullyPaidBillDetailSuccess(bimonthlyfullypaidbill));
          })
        .catch(err => {
          dispatch(getBiMonthlyFullyPaidBillDetailFail(err));
        });
    };
};

//monthly unverified bills
export const getMonthlyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getMonthlyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(monthlyunverifiedbillsURL, headers)
        .then(res => {
          const monthlyunverifiedbills = res.data;
          dispatch(getMonthlyUnverifiedBillListSuccess(monthlyunverifiedbills));
          })
        .catch(err => {
          dispatch(getMonthlyUnverifiedBillListStart(err));
        });
    };
};

export const getMonthlyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getMonthlyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${monthlyunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const monthlyunverifiedbill = res.data;
          dispatch(getMonthlyUnverifiedBillDetailSuccess(monthlyunverifiedbill));
          })
        .catch(err => {
          dispatch(getMonthlyUnverifiedBillDetailFail(err));
        });
    };
};

export const addMonthlyUnverifiedBill = (monthlyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createMonthlyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(monthlyunverifiedbillsURL, monthlyunverifiedbill, headers)
        .then(res => {
          dispatch(createMonthlyUnverifiedBillSuccess(monthlyunverifiedbill));
        })
        .catch(err => {
          dispatch(createMonthlyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editMonthlyUnverifiedBill = (id, monthlyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${monthlyunverifiedbillsURL}${id}/`, monthlyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_MONTHLY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//monthly fully paid bills
export const getMonthlyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getMonthlyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(monthlyfullypaidbillsURL, headers)
        .then(res => {
          const monthlyfullypaidbills = res.data;
          dispatch(getMonthlyFullyPaidBillListSuccess(monthlyfullypaidbills));
          })
        .catch(err => {
          dispatch(getMonthlyFullyPaidBillListStart(err));
        });
    };
};

export const getMonthlyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getMonthlyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${monthlyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const monthlyfullypaidbill = res.data;
          dispatch(getMonthlyFullyPaidBillDetailSuccess(monthlyfullypaidbill));
          })
        .catch(err => {
          dispatch(getMonthlyFullyPaidBillDetailFail(err));
        });
    };
};

//quarterly unverified bills
export const getQuarterlyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getQuarterlyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(quarterlyunverifiedbillsURL, headers)
        .then(res => {
          const quarterlyunverifiedbills = res.data;
          dispatch(getQuarterlyUnverifiedBillListSuccess(quarterlyunverifiedbills));
          })
        .catch(err => {
          dispatch(getQuarterlyUnverifiedBillListStart(err));
        });
    };
};

export const getQuarterlyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getQuarterlyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${quarterlyunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const quarterlyunverifiedbill = res.data;
          dispatch(getQuarterlyUnverifiedBillDetailSuccess(quarterlyunverifiedbill));
          })
        .catch(err => {
          dispatch(getQuarterlyUnverifiedBillDetailFail(err));
        });
    };
};

export const addQuarterlyUnverifiedBill = (quarterlyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createQuarterlyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(quarterlyunverifiedbillsURL, quarterlyunverifiedbill, headers)
        .then(res => {
          dispatch(createQuarterlyUnverifiedBillSuccess(quarterlyunverifiedbill));
        })
        .catch(err => {
          dispatch(createQuarterlyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editQuarterlyUnverifiedBill = (id, quarterlyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${quarterlyunverifiedbillsURL}${id}/`, quarterlyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_QUARTERLY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//quarterly fully paid bills
export const getQuarterlyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getQuarterlyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(quarterlyfullypaidbillsURL, headers)
        .then(res => {
          const quarterlyfullypaidbills = res.data;
          dispatch(getQuarterlyFullyPaidBillListSuccess(quarterlyfullypaidbills));
          })
        .catch(err => {
          dispatch(getQuarterlyFullyPaidBillListStart(err));
        });
    };
};

export const getQuarterlyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getQuarterlyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${quarterlyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const quarterlyfullypaidbill = res.data;
          dispatch(getQuarterlyFullyPaidBillDetailSuccess(quarterlyfullypaidbill));
          })
        .catch(err => {
          dispatch(getQuarterlyFullyPaidBillDetailFail(err));
        });
    };
};

//biannually unverified bills
export const getBiAnnuallyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getBiAnnuallyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(biannuallyunverifiedbillsURL, headers)
        .then(res => {
          const biannuallyunverifiedbills = res.data;
          dispatch(getBiAnnuallyUnverifiedBillListSuccess(biannuallyunverifiedbills));
          })
        .catch(err => {
          dispatch(getBiAnnuallyUnverifiedBillListStart(err));
        });
    };
};

export const getBiAnnuallyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getBiAnnuallyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${biannuallyunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const biannuallyunverifiedbill = res.data;
          dispatch(getBiAnnuallyUnverifiedBillDetailSuccess(biannuallyunverifiedbill));
          })
        .catch(err => {
          dispatch(getBiAnnuallyUnverifiedBillDetailFail(err));
        });
    };
};

export const addBiAnnuallyUnverifiedBill = (biannuallyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createBiAnnuallyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(biannuallyunverifiedbillsURL, biannuallyunverifiedbill, headers)
        .then(res => {
          dispatch(createBiAnnuallyUnverifiedBillSuccess(biannuallyunverifiedbill));
        })
        .catch(err => {
          dispatch(createBiAnnuallyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editBiAnnuallyUnverifiedBill = (id, biannuallyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${biannuallyunverifiedbillsURL}${id}/`, biannuallyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_BIANNUALLY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//biannually fully paid bills
export const getBiAnnuallyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getBiAnnuallyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(biannuallyfullypaidbillsURL, headers)
        .then(res => {
          const biannuallyfullypaidbills = res.data;
          dispatch(getBiAnnuallyFullyPaidBillListSuccess(biannuallyfullypaidbills));
          })
        .catch(err => {
          dispatch(getBiAnnuallyFullyPaidBillListStart(err));
        });
    };
};

export const getBiAnnuallyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getBiAnnuallyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${biannuallyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const biannuallyfullypaidbill = res.data;
          dispatch(getBiAnnuallyFullyPaidBillDetailSuccess(biannuallyfullypaidbill));
          })
        .catch(err => {
          dispatch(getBiAnnuallyFullyPaidBillDetailFail(err));
        });
    };
};

//annually unverified bills
export const getAnnuallyUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getAnnuallyUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(annuallyunverifiedbillsURL, headers)
        .then(res => {
          const annuallyunverifiedbills = res.data;
          dispatch(getAnnuallyUnverifiedBillListSuccess(annuallyunverifiedbills));
          })
        .catch(err => {
          dispatch(getAnnuallyUnverifiedBillListStart(err));
        });
    };
};

export const getAnnuallyUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getAnnuallyUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${annuallyunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const annuallyunverifiedbill = res.data;
          dispatch(getAnnuallyUnverifiedBillDetailSuccess(annuallyunverifiedbill));
          })
        .catch(err => {
          dispatch(getAnnuallyUnverifiedBillDetailFail(err));
        });
    };
};

export const addAnnuallyUnverifiedBill = (annuallyunverifiedbill, token) => {
  return dispatch => {
      dispatch(createAnnuallyUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(annuallyunverifiedbillsURL, annuallyunverifiedbill, headers)
        .then(res => {
          dispatch(createAnnuallyUnverifiedBillSuccess(annuallyunverifiedbill));
        })
        .catch(err => {
          dispatch(createAnnuallyUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAnnuallyUnverifiedBill = (id, annuallyunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${annuallyunverifiedbillsURL}${id}/`, annuallyunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_ANNUALLY_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//annually fully paid bills
export const getAnnuallyFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getAnnuallyFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(annuallyfullypaidbillsURL, headers)
        .then(res => {
          const annuallyfullypaidbills = res.data;
          dispatch(getAnnuallyFullyPaidBillListSuccess(annuallyfullypaidbills));
          })
        .catch(err => {
          dispatch(getAnnuallyFullyPaidBillListStart(err));
        });
    };
};

export const getAnnuallyFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getAnnuallyFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${annuallyfullypaidbillsURL}${id}`, headers)
        .then(res => {
          const annuallyfullypaidbill = res.data;
          dispatch(getAnnuallyFullyPaidBillDetailSuccess(annuallyfullypaidbill));
          })
        .catch(err => {
          dispatch(getAnnuallyFullyPaidBillDetailFail(err));
        });
    };
};

//onceoff unverified bills
export const getOnceOffUnverifiedBills = (token) => {
  return dispatch => {
      dispatch(getOnceOffUnverifiedBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(onceoffunverifiedbillsURL, headers)
        .then(res => {
          const onceoffunverifiedbills = res.data;
          dispatch(getOnceOffUnverifiedBillListSuccess(onceoffunverifiedbills));
          })
        .catch(err => {
          dispatch(getOnceOffUnverifiedBillListStart(err));
        });
    };
};

export const getOnceOffUnverifiedBill = (id, token) => {
  return dispatch => {
      dispatch(getOnceOffUnverifiedBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${onceoffunverifiedbillsURL}${id}`, headers)
        .then(res => {
          const onceoffunverifiedbill = res.data;
          dispatch(getOnceOffUnverifiedBillDetailSuccess(onceoffunverifiedbill));
          })
        .catch(err => {
          dispatch(getOnceOffUnverifiedBillDetailFail(err));
        });
    };
};

export const addOnceOffUnverifiedBill = (onceoffunverifiedbill, token) => {
  return dispatch => {
      dispatch(createOnceOffUnverifiedBillStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(onceoffunverifiedbillsURL, onceoffunverifiedbill, headers)
        .then(res => {
          dispatch(createOnceOffUnverifiedBillSuccess(onceoffunverifiedbill));
        })
        .catch(err => {
          dispatch(createOnceOffUnverifiedBillFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editOnceOffUnverifiedBill = (id, onceoffunverifiedbill, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${onceoffunverifiedbillsURL}${id}/`, onceoffunverifiedbill, headers)
    .then(res => {
        dispatch({
            type: EDIT_ONCE_OFF_UNVERIFIED_BILL,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//onceoff fully paid bills
export const getOnceOffFullyPaidBills = (token) => {
  return dispatch => {
      dispatch(getOnceOffFullyPaidBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(onceofffullypaidbillsURL, headers)
        .then(res => {
          const onceofffullypaidbills = res.data;
          dispatch(getOnceOffFullyPaidBillListSuccess(onceofffullypaidbills));
          })
        .catch(err => {
          dispatch(getOnceOffFullyPaidBillListStart(err));
        });
    };
};

export const getOnceOffFullyPaidBill = (id, token) => {
  return dispatch => {
      dispatch(getOnceOffFullyPaidBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${onceofffullypaidbillsURL}${id}`, headers)
        .then(res => {
          const onceofffullypaidbill = res.data;
          dispatch(getOnceOffFullyPaidBillDetailSuccess(onceofffullypaidbill));
          })
        .catch(err => {
          dispatch(getOnceOffFullyPaidBillDetailFail(err));
        });
    };
};

//bill lines
export const getBillLines = (id, token) => {
  return dispatch => {
      dispatch(getBillLineListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${billlinesURL}?id=${id}`, headers)
        .then(res => {
          const billlines = res.data;
          dispatch(getBillLineListSuccess(billlines));
          })
        .catch(err => {
          dispatch(getBillLineListStart(err));
        });
    };
};






//daily pending payment bills
export const getDailyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getDailyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(dailypendingpaymentbillsURL, headers)
        .then(res => {
          const dailypendingpaymentbills = res.data;
          dispatch(getDailyPendingPaymentBillListSuccess(dailypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getDailyPendingPaymentBillListStart(err));
        });
    };
};

export const getDailyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getDailyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${dailypendingpaymentbillsURL}${id}/`, headers)
        .then(res => {
          const dailypendingpaymentbill = res.data;
          dispatch(getDailyPendingPaymentBillDetailSuccess(dailypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getDailyPendingPaymentBillDetailFail(err));
        });
    };
};

//weekly pending payment bills
export const getWeeklyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getWeeklyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(weeklypendingpaymentbillsURL, headers)
        .then(res => {
          const weeklypendingpaymentbills = res.data;
          dispatch(getWeeklyPendingPaymentBillListSuccess(weeklypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getWeeklyPendingPaymentBillListStart(err));
        });
    };
};

export const getWeeklyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getWeeklyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${weeklypendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const weeklypendingpaymentbill = res.data;
          dispatch(getWeeklyPendingPaymentBillDetailSuccess(weeklypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getWeeklyPendingPaymentBillDetailFail(err));
        });
    };
};

//bimonthly pending payment bills
export const getBiMonthlyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getBiMonthlyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(bimonthlypendingpaymentbillsURL, headers)
        .then(res => {
          const bimonthlypendingpaymentbills = res.data;
          dispatch(getBiMonthlyPendingPaymentBillListSuccess(bimonthlypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getBiMonthlyPendingPaymentBillListStart(err));
        });
    };
};

export const getBiMonthlyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getBiMonthlyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${bimonthlypendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const bimonthlypendingpaymentbill = res.data;
          dispatch(getBiMonthlyPendingPaymentBillDetailSuccess(bimonthlypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getBiMonthlyPendingPaymentBillDetailFail(err));
        });
    };
};

//monthly pending payment bills
export const getMonthlyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getMonthlyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(monthlypendingpaymentbillsURL, headers)
        .then(res => {
          const monthlypendingpaymentbills = res.data;
          dispatch(getMonthlyPendingPaymentBillListSuccess(monthlypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getMonthlyPendingPaymentBillListStart(err));
        });
    };
};

export const getMonthlyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getMonthlyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${monthlypendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const monthlypendingpaymentbill = res.data;
          dispatch(getMonthlyPendingPaymentBillDetailSuccess(monthlypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getMonthlyPendingPaymentBillDetailFail(err));
        });
    };
};

//quarterly pending payment bills
export const getQuarterlyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getQuarterlyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(quarterlypendingpaymentbillsURL, headers)
        .then(res => {
          const quarterlypendingpaymentbills = res.data;
          dispatch(getQuarterlyPendingPaymentBillListSuccess(quarterlypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getQuarterlyPendingPaymentBillListStart(err));
        });
    };
};

export const getQuarterlyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getQuarterlyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${quarterlypendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const quarterlypendingpaymentbill = res.data;
          dispatch(getQuarterlyPendingPaymentBillDetailSuccess(quarterlypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getQuarterlyPendingPaymentBillDetailFail(err));
        });
    };
};

//biannually pending payment bills
export const getBiAnnuallyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getBiAnnuallyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(biannuallypendingpaymentbillsURL, headers)
        .then(res => {
          const biannuallypendingpaymentbills = res.data;
          dispatch(getBiAnnuallyPendingPaymentBillListSuccess(biannuallypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getBiAnnuallyPendingPaymentBillListStart(err));
        });
    };
};

export const getBiAnnuallyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getBiAnnuallyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${biannuallypendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const biannuallypendingpaymentbill = res.data;
          dispatch(getBiAnnuallyPendingPaymentBillDetailSuccess(biannuallypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getBiAnnuallyPendingPaymentBillDetailFail(err));
        });
    };
};

//annually pending payment bills
export const getAnnuallyPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getAnnuallyPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(annuallypendingpaymentbillsURL, headers)
        .then(res => {
          const annuallypendingpaymentbills = res.data;
          dispatch(getAnnuallyPendingPaymentBillListSuccess(annuallypendingpaymentbills));
          })
        .catch(err => {
          dispatch(getAnnuallyPendingPaymentBillListStart(err));
        });
    };
};

export const getAnnuallyPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getAnnuallyPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${annuallypendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const annuallypendingpaymentbill = res.data;
          dispatch(getAnnuallyPendingPaymentBillDetailSuccess(annuallypendingpaymentbill));
          })
        .catch(err => {
          dispatch(getAnnuallyPendingPaymentBillDetailFail(err));
        });
    };
};

//onceoff pending payment bills
export const getOnceOffPendingPaymentBills = (token) => {
  return dispatch => {
      dispatch(getOnceOffPendingPaymentBillListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(onceoffpendingpaymentbillsURL, headers)
        .then(res => {
          const onceoffpendingpaymentbills = res.data;
          dispatch(getOnceOffPendingPaymentBillListSuccess(onceoffpendingpaymentbills));
          })
        .catch(err => {
          dispatch(getOnceOffPendingPaymentBillListStart(err));
        });
    };
};

export const getOnceOffPendingPaymentBill = (id, token) => {
  return dispatch => {
      dispatch(getOnceOffPendingPaymentBillDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${onceoffpendingpaymentbillsURL}${id}`, headers)
        .then(res => {
          const onceoffpendingpaymentbill = res.data;
          dispatch(getOnceOffPendingPaymentBillDetailSuccess(onceoffpendingpaymentbill));
          })
        .catch(err => {
          dispatch(getOnceOffPendingPaymentBillDetailFail(err));
        });
    };
};



//bill mobile payments
export const getBillMobilePayments = (id, token) => {
  return dispatch => {
      dispatch(getBillMobilePaymentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${billmobilepaymentsURL}?id=${id}`, headers)
        .then(res => {
          const billmobilepayments = res.data;
          dispatch(getBillMobilePaymentListSuccess(billmobilepayments));
          })
        .catch(err => {
          dispatch(getBillMobilePaymentListStart(err));
        });
    };
};


export const getBillDebitCardPayments = (id, token) => {
  return dispatch => {
      dispatch(getBillDebitCardPaymentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${billdebitcardpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const billdebitcardpayments = res.data;
          dispatch(getBillDebitCardPaymentListSuccess(billdebitcardpayments));
          })
        .catch(err => {
          dispatch(getBillDebitCardPaymentListStart(err));
        });
    };
};

//unverified bill payments
export const getUnverifiedBillPayments = (id, token) => {
  return dispatch => {
      dispatch(getUnverifiedBillPaymentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${unverifiedbillpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const unverifiedbillpayments = res.data;
          dispatch(getUnverifiedBillPaymentListSuccess(unverifiedbillpayments));
          })
        .catch(err => {
          dispatch(getUnverifiedBillPaymentListStart(err));
        });
    };
};

//bill cash payments
export const getBillCashPayments = (id, token) => {
  return dispatch => {
      dispatch(getBillCashPaymentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${billcashpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const billcashpayments = res.data;
          dispatch(getBillCashPaymentListSuccess(billcashpayments));
          })
        .catch(err => {
          dispatch(getBillCashPaymentListStart(err));
        });
    };
};

//bill transfer payments
export const getBillTransferPayments = (id, token) => {
  return dispatch => {
      dispatch(getBillTransferPaymentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${billtransferpaymentsURL}?id=${id}`, headers)
        .then(res => {
          const billtransferpayments = res.data;
          dispatch(getBillTransferPaymentListSuccess(billtransferpayments));
          })
        .catch(err => {
          dispatch(getBillTransferPaymentListStart(err));
        });
    };
};
