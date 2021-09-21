import axios from 'axios';
import {
  GET_WORKBOOKS_START,
  GET_WORKBOOKS_SUCCESS,
  GET_WORKBOOKS_FAIL,
  CREATE_WORKBOOK_START,
  CREATE_WORKBOOK_SUCCESS,
  CREATE_WORKBOOK_FAIL,
  GET_WORKBOOK_START,
  GET_WORKBOOK_SUCCESS,
  GET_WORKBOOK_FAIL,
  EDIT_WORKBOOK,
  GET_DELETED_WORKBOOKS_START,
  GET_DELETED_WORKBOOKS_SUCCESS,
  GET_DELETED_WORKBOOKS_FAIL,
  GET_JOURNALS_START,
  GET_JOURNALS_SUCCESS,
  GET_JOURNALS_FAIL,
  GET_JOURNAL_START,
  GET_JOURNAL_SUCCESS,
  GET_JOURNAL_FAIL,
  GET_DELETED_JOURNALS_START,
  GET_DELETED_JOURNALS_SUCCESS,
  GET_DELETED_JOURNALS_FAIL,
  GET_LEDGERS_START,
  GET_LEDGERS_SUCCESS,
  GET_LEDGERS_FAIL,
  GET_LEDGER_START,
  GET_LEDGER_SUCCESS,
  GET_LEDGER_FAIL,
  GET_DELETED_LEDGERS_START,
  GET_DELETED_LEDGERS_SUCCESS,
  GET_DELETED_LEDGERS_FAIL,
  GET_ACCOUNTING_POSTS_START,
  GET_ACCOUNTING_POSTS_SUCCESS,
  GET_ACCOUNTING_POSTS_FAIL,
  GET_ACCOUNTING_POST_START,
  CREATE_ACCOUNTING_POST_START,
  CREATE_ACCOUNTING_POST_SUCCESS,
  CREATE_ACCOUNTING_POST_FAIL,
  GET_ACCOUNTING_POST_SUCCESS,
  EDIT_ACCOUNTING_POST,
  GET_ACCOUNTING_POST_FAIL,
  GET_DELETED_POSTS_START,
  GET_DELETED_POSTS_SUCCESS,
  GET_DELETED_POSTS_FAIL,
  GET_ACCOUNTING_ADJUSTMENTS_START,
  GET_ACCOUNTING_ADJUSTMENTS_SUCCESS,
  GET_ACCOUNTING_ADJUSTMENTS_FAIL,
  CREATE_ACCOUNTING_ADJUSTMENT_START,
  CREATE_ACCOUNTING_ADJUSTMENT_SUCCESS,
  CREATE_ACCOUNTING_ADJUSTMENT_FAIL,
  GET_ACCOUNTING_ADJUSTMENT_START,
  GET_ACCOUNTING_ADJUSTMENT_SUCCESS,
  GET_ACCOUNTING_ADJUSTMENT_FAIL,
  EDIT_ACCOUNTING_ADJUSTMENT,
  GET_DELETED_ADJUSTMENTS_START,
  GET_DELETED_ADJUSTMENTS_SUCCESS,
  GET_DELETED_ADJUSTMENTS_FAIL,
  DELETE_JOURNAL_START,
  DELETE_JOURNAL_SUCCESS,
  DELETE_JOURNAL_FAIL,
  DELETE_LEDGER_START,
  DELETE_LEDGER_SUCCESS, 
  DELETE_LEDGER_FAIL ,
  DELETE_WORKBOOK_START ,
  DELETE_WORKBOOK_SUCCESS, 
  DELETE_WORKBOOK_FAIL,
  CREATE_LEDGER_START,
  CREATE_LEDGER_SUCCESS,
  CREATE_LEDGER_FAIL,
  EDIT_LEDGER,
  GET_POSTED_JOURNAL_ENTRIES_START,
  GET_POSTED_JOURNAL_ENTRIES_SUCCESS,
  GET_POSTED_JOURNAL_ENTRIES_FAIL,
  GET_POSTED_JOURNAL_ENTRY_START,
  GET_POSTED_JOURNAL_ENTRY_SUCCESS,
  GET_POSTED_JOURNAL_ENTRY_FAIL,
  GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_START,
  GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_SUCCESS,
  GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_FAIL,
  GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_START,
  GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_SUCCESS,
  GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_FAIL,
  GET_UNPOSTED_JOURNAL_ENTRIES_START,
  GET_UNPOSTED_JOURNAL_ENTRIES_SUCCESS,
  GET_UNPOSTED_JOURNAL_ENTRIES_FAIL,
  GET_UNPOSTED_JOURNAL_ENTRY_START,
  GET_UNPOSTED_JOURNAL_ENTRY_SUCCESS,
  GET_UNPOSTED_JOURNAL_ENTRY_FAIL,
  GET_DEBITS_START,
  GET_DEBITS_SUCCESS,
  GET_DEBITS_FAIL,
  GET_CREDITS_START,
  GET_CREDITS_SUCCESS,
  GET_CREDITS_FAIL,
  GET_UNADJUSTED_JOURNAL_ENTRIES_START,
  GET_UNADJUSTED_JOURNAL_ENTRIES_SUCCESS,
  GET_UNADJUSTED_JOURNAL_ENTRIES_FAIL,
  GET_UNADJUSTED_JOURNAL_ENTRY_START,
  GET_UNADJUSTED_JOURNAL_ENTRY_SUCCESS,
  GET_UNADJUSTED_JOURNAL_ENTRY_FAIL,
} from '../../types/bookTypes';




import { 
  workbooksURL, 
  deletedworkbooksURL,
  journalsURL, 
  deletedjournalsURL,
  ledgersURL, 
  deletedledgersURL,
  accountingpostsURL, 
  deletedpostsURL,
  accountingadjustmentsURL, 
  deletedadjustmentsURL ,
  creditsURL,
  debitsURL,
  unadjustedjournalentriesURL,
  unpostedandunadjustedjournalentriesURL,
  unpostedjournalentriesURL,
  postedjournalentriesURL,
} from '../../constants';
import { returnErrors } from '../messages';


//journals
const getUnadjustedEntryListStart = () => {
  return {
    type: GET_UNADJUSTED_JOURNAL_ENTRIES_START
  };
};

const getUnadjustedEntryListSuccess = unadjustedentries => {
  return {
    type: GET_UNADJUSTED_JOURNAL_ENTRIES_SUCCESS,
    unadjustedentries
  };
};

const getUnadjustedEntryListFail = error => {
  return {
    type: GET_UNADJUSTED_JOURNAL_ENTRIES_FAIL,
    error: error
  };
};

const getUnadjustedEntryDetailStart = () => {
  return {
    type: GET_UNADJUSTED_JOURNAL_ENTRY_START
  };
};

const getUnadjustedEntryDetailSuccess = unadjustedentry => {
  return {
    type: GET_UNADJUSTED_JOURNAL_ENTRY_SUCCESS,
    unadjustedentry
  };
};

const getUnadjustedEntryDetailFail = error => {
  return {
    type: GET_UNADJUSTED_JOURNAL_ENTRY_FAIL,
    error: error
  };
};


const getUnpostedEntryListStart = () => {
  return {
    type: GET_UNPOSTED_JOURNAL_ENTRIES_START
  };
};

const getUnpostedEntryListSuccess = unpostedentries => {
  return {
    type: GET_UNPOSTED_JOURNAL_ENTRIES_SUCCESS,
    unpostedentries
  };
};

const getUnpostedEntryListFail = error => {
  return {
    type: GET_UNPOSTED_JOURNAL_ENTRIES_FAIL,
    error: error
  };
};

const getUnpostedEntryDetailStart = () => {
  return {
    type: GET_UNPOSTED_JOURNAL_ENTRY_START
  };
};

const getUnpostedEntryDetailSuccess = unpostedentry => {
  return {
    type: GET_UNPOSTED_JOURNAL_ENTRY_SUCCESS,
    unpostedentry
  };
};

const getUnpostedEntryDetailFail = error => {
  return {
    type: GET_UNPOSTED_JOURNAL_ENTRY_FAIL,
    error: error
  };
};


const getPostedEntryListStart = () => {
  return {
    type: GET_POSTED_JOURNAL_ENTRIES_START
  };
};

const getPostedEntryListSuccess = postedentries => {
  return {
    type: GET_POSTED_JOURNAL_ENTRIES_SUCCESS,
    postedentries
  };
};

const getPostedEntryListFail = error => {
  return {
    type: GET_POSTED_JOURNAL_ENTRIES_FAIL,
    error: error
  };
};

const getPostedEntryDetailStart = () => {
  return {
    type: GET_POSTED_JOURNAL_ENTRY_START
  };
};

const getPostedEntryDetailSuccess = postedentry => {
  return {
    type: GET_POSTED_JOURNAL_ENTRY_SUCCESS,
    postedentry
  };
};

const getPostedEntryDetailFail = error => {
  return {
    type: GET_POSTED_JOURNAL_ENTRY_FAIL,
    error: error
  };
};


const getUnPostedUnAdjustedEntryListStart = () => {
  return {
    type: GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_START
  };
};

const getUnPostedUnAdjustedEntryListSuccess = unpostedunadjustedentries => {
  return {
    type: GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_SUCCESS,
    unpostedunadjustedentries
  };
};

const getUnPostedUnAdjustedEntryListFail = error => {
  return {
    type: GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_FAIL,
    error: error
  };
};

const getUnPostedUnAdjustedEntryDetailStart = () => {
  return {
    type: GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_START
  };
};

const getUnPostedUnAdjustedEntryDetailSuccess = unpostedunadjustedentry => {
  return {
    type: GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_SUCCESS,
    unpostedunadjustedentry
  };
};

const getUnPostedUnAdjustedEntryDetailFail = error => {
  return {
    type: GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_FAIL,
    error: error
  };
};


const getCreditListStart = () => {
  return {
    type: GET_CREDITS_START
  };
};

const getCreditListSuccess = credits => {
  return {
    type: GET_CREDITS_SUCCESS,
    credits
  };
};

const getCreditListFail = error => {
  return {
    type: GET_CREDITS_FAIL,
    error: error
  };
};


const getDebitListStart = () => {
  return {
    type: GET_DEBITS_START
  };
};

const getDebitListSuccess = debits => {
  return {
    type: GET_DEBITS_SUCCESS,
    debits
  };
};

const getDebitListFail = error => {
  return {
    type: GET_DEBITS_FAIL,
    error: error
  };
};



const createLedgerStart = () => {
  return {
    type: CREATE_LEDGER_START
  };
};


const createLedgerSuccess = ledger => {
  return {
    type: CREATE_LEDGER_SUCCESS,
    ledger
  };
};

const createLedgerFail = error => {
  return {
    type: CREATE_LEDGER_FAIL,
    error: error
  };
};

const deleteJournalStart = () => {
  return {
    type: DELETE_JOURNAL_START
  };
};


const deleteJournalSuccess = journal => {
  return {
    type: DELETE_JOURNAL_SUCCESS,
    journal
  };
};

const deleteJournalFail = error => {
  return {
    type: DELETE_JOURNAL_FAIL,
    error: error
  };
};


const deleteLedgerStart = () => {
  return {
    type: DELETE_LEDGER_START
  };
};


const deleteLedgerSuccess = ledger => {
  return {
    type: DELETE_LEDGER_SUCCESS,
    ledger
  };
};

const deleteLedgerFail = error => {
  return {
    type: DELETE_LEDGER_FAIL,
    error: error
  };
};


const deleteWorkBookStart = () => {
  return {
    type: DELETE_WORKBOOK_START
  };
};


const deleteWorkBookSuccess = ledger => {
  return {
    type: DELETE_WORKBOOK_SUCCESS,
    ledger
  };
};

const deleteWorkBookFail = error => {
  return {
    type: DELETE_WORKBOOK_FAIL,
    error: error
  };
};


//accounting adjustments
const getAccountingAdjustmentListStart = () => {
  return {
    type: GET_ACCOUNTING_ADJUSTMENTS_START
  };
};

const getAccountingAdjustmentListSuccess = accountingadjustments => {
  return {
    type: GET_ACCOUNTING_ADJUSTMENTS_SUCCESS,
    accountingadjustments
  };
};

const getAccountingAdjustmentListFail = error => {
  return {
    type: GET_ACCOUNTING_ADJUSTMENTS_FAIL,
    error: error
  };
};

const createAccountingAdjustmentStart = () => {
  return {
    type: CREATE_ACCOUNTING_ADJUSTMENT_START
  };
};

const createAccountingAdjustmentSuccess = accountingadjustment => {
  return {
    type: CREATE_ACCOUNTING_ADJUSTMENT_SUCCESS,
    accountingadjustment
  };
};

const createAccountingAdjustmentFail = error => {
  return {
    type: CREATE_ACCOUNTING_ADJUSTMENT_FAIL,
    error: error
  };
};

const getAccountingAdjustmentDetailStart = () => {
  return {
    type: GET_ACCOUNTING_ADJUSTMENT_START
  };
};

const getAccountingAdjustmentDetailSuccess = accountingadjustment => {
  return {
    type: GET_ACCOUNTING_ADJUSTMENT_SUCCESS,
    accountingadjustment
  };
};

const getAccountingAdjustmentDetailFail = error => {
  return {
    type: GET_ACCOUNTING_ADJUSTMENT_FAIL,
    error: error
  };
};

const getDeletedAdjustmentListStart = () => {
  return {
    type: GET_DELETED_ADJUSTMENTS_START
  };
};

const getDeletedAdjustmentListSuccess = deletedadjustments => {
  return {
    type: GET_DELETED_ADJUSTMENTS_SUCCESS,
    deletedadjustments
  };
};

const getDeletedAdjustmentListFail = error => {
  return {
    type: GET_DELETED_ADJUSTMENTS_FAIL,
    error: error
  };
};

//accounting posts
const getAccountingPostListStart = () => {
  return {
    type: GET_ACCOUNTING_POSTS_START
  };
};

const getAccountingPostListSuccess = accountingposts => {
  return {
    type: GET_ACCOUNTING_POSTS_SUCCESS,
    accountingposts
  };
};

const getAccountingPostListFail = error => {
  return {
    type: GET_ACCOUNTING_POSTS_FAIL,
    error: error
  };
};

const createAccountingPostStart = () => {
  return {
    type: CREATE_ACCOUNTING_POST_START
  };
};


const createAccountingPostSuccess = accountingpost => {
  return {
    type: CREATE_ACCOUNTING_POST_SUCCESS,
    accountingpost
  };
};

const createAccountingPostFail = error => {
  return {
    type: CREATE_ACCOUNTING_POST_FAIL,
    error: error
  };
};

const getAccountingPostDetailStart = () => {
  return {
    type: GET_ACCOUNTING_POST_START
  };
};

const getAccountingPostDetailSuccess = accountingpost => {
  return {
    type: GET_ACCOUNTING_POST_SUCCESS,
    accountingpost
  };
};

const getAccountingPostDetailFail = error => {
  return {
    type: GET_ACCOUNTING_POST_FAIL,
    error: error
  };
};

const getDeletedPostListStart = () => {
  return {
    type: GET_DELETED_POSTS_START
  };
};

const getDeletedPostListSuccess = deletedposts => {
  return {
    type: GET_DELETED_POSTS_SUCCESS,
    deletedposts
  };
};

const getDeletedPostListFail = error => {
  return {
    type: GET_DELETED_POSTS_FAIL,
    error: error
  };
};

//ledgers
const getLedgerListStart = () => {
  return {
    type: GET_LEDGERS_START
  };
};

const getLedgerListSuccess = ledgers => {
  return {
    type: GET_LEDGERS_SUCCESS,
    ledgers
  };
};

const getLedgerListFail = error => {
  return {
    type: GET_LEDGERS_FAIL,
    error: error
  };
};

const getLedgerDetailStart = () => {
  return {
    type: GET_LEDGER_START
  };
};

const getLedgerDetailSuccess = ledger => {
  return {
    type: GET_LEDGER_SUCCESS,
    ledger
  };
};

const getLedgerDetailFail = error => {
  return {
    type: GET_LEDGER_FAIL,
    error: error
  };
};

const getDeletedLedgerListStart = () => {
  return {
    type: GET_DELETED_LEDGERS_START
  };
};

const getDeletedLedgerListSuccess = ledgers => {
  return {
    type: GET_DELETED_LEDGERS_SUCCESS,
    ledgers
  };
};

const getDeletedLedgerListFail = error => {
  return {
    type: GET_DELETED_LEDGERS_FAIL,
    error: error
  };
};

//workbooks
const getWorkbookListStart = () => {
  return {
    type: GET_WORKBOOKS_START
  };
};

const getWorkbookListSuccess = workbooks => {
  return {
    type: GET_WORKBOOKS_SUCCESS,
    workbooks
  };
};

const getWorkbookListFail = error => {
  return {
    type: GET_WORKBOOKS_FAIL,
    error: error
  };
};

const createWorkbookStart = () => {
  return {
    type: CREATE_WORKBOOK_START
  };
};

const createWorkbookSuccess = workbook => {
  return {
    type: CREATE_WORKBOOK_SUCCESS,
    workbook
  };
};

const createWorkbookFail = error => {
  return {
    type: CREATE_WORKBOOK_FAIL,
    error: error
  };
};

const getWorkbookDetailStart = () => {
  return {
    type: GET_WORKBOOK_START
  };
};

const getWorkbookDetailSuccess = workbook => {
  return {
    type: GET_WORKBOOK_SUCCESS,
    workbook
  };
};

const getWorkbookDetailFail = error => {
  return {
    type: GET_WORKBOOK_FAIL,
    error: error
  };
};

const getDeletedWorkbookListStart = () => {
  return {
    type: GET_DELETED_WORKBOOKS_START
  };
};

const getDeletedWorkbookListSuccess = deletedworkbooks => {
  return {
    type: GET_DELETED_WORKBOOKS_SUCCESS,
    deletedworkbooks
  };
};

const getDeletedWorkbookListFail = error => {
  return {
    type: GET_DELETED_WORKBOOKS_FAIL,
    error: error
  };
};

//journals
const getJournalListStart = () => {
  return {
    type: GET_JOURNALS_START
  };
};

const getJournalListSuccess = journals => {
  return {
    type: GET_JOURNALS_SUCCESS,
    journals
  };
};

const getJournalListFail = error => {
  return {
    type: GET_JOURNALS_FAIL,
    error: error
  };
};

const getJournalDetailStart = () => {
  return {
    type: GET_JOURNAL_START
  };
};

const getJournalDetailSuccess = journal => {
  return {
    type: GET_JOURNAL_SUCCESS,
    journal
  };
};

const getJournalDetailFail = error => {
  return {
    type: GET_JOURNAL_FAIL,
    error: error
  };
};

const getDeletedJournalListStart = () => {
  return {
    type: GET_DELETED_JOURNALS_START
  };
};

const getDeletedJournalListSuccess = deletedjournals => {
  return {
    type: GET_DELETED_JOURNALS_SUCCESS,
    deletedjournals
  };
};

const getDeletedJournalListFail = error => {
  return {
    type: GET_DELETED_JOURNALS_FAIL,
    error: error
  };
};


export const getPostedEntries = (id, token) => {
  return dispatch => {
      dispatch(getPostedEntryListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${postedjournalentriesURL}?id=${id}`, headers)
        .then(res => {
          const postedentries = res.data;
          dispatch(getPostedEntryListSuccess(postedentries));
          })
        .catch(err => {
          dispatch(getPostedEntryListFail(err));
        });
    };
};

export const getPostedEntry = (id, token) => {
  return dispatch => {
      dispatch(getPostedEntryDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${postedjournalentriesURL}${id}`, headers)
        .then(res => {
          const postedentry = res.data;
          dispatch(getPostedEntryDetailSuccess(postedentry));
          })
        .catch(err => {
          dispatch(getPostedEntryDetailFail(err));
        });
    };
};


export const getUnpostedEntries = (id, token) => {
  return dispatch => {
      dispatch(getUnpostedEntryListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unpostedjournalentriesURL}?id=${id}`, headers)
        .then(res => {
          const unpostedentries = res.data;
          dispatch(getUnpostedEntryListSuccess(unpostedentries));
          })
        .catch(err => {
          dispatch(getUnpostedEntryListFail(err));
        });
    };
};

export const getUnpostedEntry = (id, token) => {
  return dispatch => {
      dispatch(getUnpostedEntryDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unpostedjournalentriesURL}${id}`, headers)
        .then(res => {
          const unpostedentry = res.data;
          dispatch(getUnpostedEntryDetailSuccess(unpostedentry));
          })
        .catch(err => {
          dispatch(getUnpostedEntryDetailFail(err));
        });
    };
};



export const getUnadjustedEntries = (id, token) => {
  return dispatch => {
      dispatch(getUnadjustedEntryListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unadjustedjournalentriesURL}?id=${id}`, headers)
        .then(res => {
          const unadjustedentries = res.data;
          dispatch(getUnadjustedEntryListSuccess(unadjustedentries));
          })
        .catch(err => {
          dispatch(getUnadjustedEntryListFail(err));
        });
    };
};

export const getUnadjustedEntry = (id, token) => {
  return dispatch => {
      dispatch(getUnadjustedEntryDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unadjustedjournalentriesURL}${id}`, headers)
        .then(res => {
          const unadjustedentry = res.data;
          dispatch(getUnadjustedEntryDetailSuccess(unadjustedentry));
          })
        .catch(err => {
          dispatch(getUnadjustedEntryDetailFail(err));
        });
    };
};



export const getUnPostedUnAdjustedEntries = (id, token) => {
  return dispatch => {
      dispatch(getUnPostedUnAdjustedEntryListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unpostedandunadjustedjournalentriesURL}?id=${id}`, headers)
        .then(res => {
          const unpostedunadjustedentries = res.data;
          dispatch(getUnPostedUnAdjustedEntryListSuccess(unpostedunadjustedentries));
          })
        .catch(err => {
          dispatch(getUnPostedUnAdjustedEntryListFail(err));
        });
    };
};

export const getUnPostedUnAdjustedEntry = (id, token) => {
  return dispatch => {
      dispatch(getUnPostedUnAdjustedEntryDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unpostedandunadjustedjournalentriesURL}${id}`, headers)
        .then(res => {
          const unpostedunadjustedentry = res.data;
          dispatch(getUnPostedUnAdjustedEntryDetailSuccess(unpostedunadjustedentry));
          })
        .catch(err => {
          dispatch(getUnPostedUnAdjustedEntryDetailFail(err));
        });
    };
};


export const getCredits = (id, token) => {
  return dispatch => {
      dispatch(getCreditListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${creditsURL}?id=${id}`, headers)
        .then(res => {
          const credits = res.data;
          dispatch(getCreditListSuccess(credits));
          })
        .catch(err => {
          dispatch(getCreditListFail(err));
        });
    };
};

export const getDebits = (id, token) => {
  return dispatch => {
      dispatch(getDebitListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${debitsURL}?id=${id}`, headers)
        .then(res => {
          const debits = res.data;
          dispatch(getDebitListSuccess(debits));
          })
        .catch(err => {
          dispatch(getDebitListFail(err));
        });
    };
};





export const getWorkbooks = (token) => {
  return dispatch => {
      dispatch(getWorkbookListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(workbooksURL, headers)
        .then(res => {
          const workbooks = res.data;
          dispatch(getWorkbookListSuccess(workbooks));
          })
        .catch(err => {
          dispatch(getWorkbookListFail(err));
        });
    };
};

export const getWorkbook = (id, token) => {
  return dispatch => {
      dispatch(getWorkbookDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${workbooksURL}${id}`, headers)
        .then(res => {
          const workbook = res.data;
          dispatch(getWorkbookDetailSuccess(workbook));
          })
        .catch(err => {
          dispatch(getWorkbookDetailFail(err));
        });
    };
};

export const addWorkbook = (workbook, token) => {
  return dispatch => {
      dispatch(createWorkbookStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(workbooksURL, workbook, headers)
        .then(res => {
          dispatch(createWorkbookSuccess(workbook));
        })
        .catch(err => {
          dispatch(createWorkbookFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editWorkbook = (id, workbook, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${workbooksURL}${id}/`, workbook, headers)
    .then(res => {
        dispatch({
            type: EDIT_WORKBOOK,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getDeletedWorkbooks = (token) => {
  return dispatch => {
      dispatch(getDeletedWorkbookListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(deletedworkbooksURL, headers)
        .then(res => {
          const deletedworkbooks = res.data;
          dispatch(getDeletedWorkbookListSuccess(deletedworkbooks));
          })
        .catch(err => {
          dispatch(getDeletedWorkbookListFail(err));
        });
    };
};

//accounting post
export const getAccountingPosts = (token) => {
  return dispatch => {
      dispatch(getAccountingPostListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(accountingadjustmentsURL, headers)
        .then(res => {
          const accountingposts = res.data;
          dispatch(getAccountingPostListSuccess(accountingposts));
          })
        .catch(err => {
          dispatch(getAccountingPostListFail(err));
        });
    };
};

export const getAccountingPost = (id, token) => {
  return dispatch => {
      dispatch(getAccountingPostDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${accountingadjustmentsURL}${id}`, headers)
        .then(res => {
          const accountingpost = res.data;
          dispatch(getAccountingPostDetailSuccess(accountingpost));
          })
        .catch(err => {
          dispatch(getAccountingPostDetailFail(err));
        });
    };
};

export const addAccountingPost = (accountingpost, token) => {
  return dispatch => {
      dispatch(createAccountingPostStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(accountingadjustmentsURL, accountingpost, headers)
        .then(res => {
          dispatch(createAccountingPostSuccess(accountingpost));
        })
        .catch(err => {
          dispatch(createAccountingPostFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAccountingPost = (id, accountingpost, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${accountingadjustmentsURL}${id}/`, accountingpost, headers)
    .then(res => {
        dispatch({
            type: EDIT_ACCOUNTING_POST,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getDeletedPosts = (token) => {
  return dispatch => {
      dispatch(getDeletedPostListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(deletedpostsURL, headers)
        .then(res => {
          const deletedposts = res.data;
          dispatch(getDeletedPostListSuccess(deletedposts));
          })
        .catch(err => {
          dispatch(getDeletedPostListFail(err));
        });
    };
};

//accounting adjustment
export const getAccountingAdjustments = (token) => {
  return dispatch => {
      dispatch(getAccountingAdjustmentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(accountingadjustmentsURL, headers)
        .then(res => {
          const accountingadjustments = res.data;
          dispatch(getAccountingAdjustmentListSuccess(accountingadjustments));
          })
        .catch(err => {
          dispatch(getAccountingAdjustmentListFail(err));
        });
    };
};

export const getAccountingAdjustment = (id, token) => {
  return dispatch => {
      dispatch(getAccountingAdjustmentDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${accountingadjustmentsURL}${id}`, headers)
        .then(res => {
          const accountingadjustment = res.data;
          dispatch(getAccountingAdjustmentDetailSuccess(accountingadjustment));
          })
        .catch(err => {
          dispatch(getAccountingAdjustmentDetailFail(err));
        });
    };
};

export const addAccountingAdjustment = (accountingadjustment, token) => {
  return dispatch => {
      dispatch(createAccountingAdjustmentStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(accountingadjustmentsURL, accountingadjustment, headers)
        .then(res => {
          dispatch(createAccountingAdjustmentSuccess(accountingadjustment));
        })
        .catch(err => {
          dispatch(createAccountingAdjustmentFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAccountingAdjustment = (id, accountingadjustment, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${accountingadjustmentsURL}${id}/`, accountingadjustment, headers)
        .then(res => {
            dispatch({
                type: EDIT_ACCOUNTING_ADJUSTMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getDeletedAdjustments = (token) => {
  return dispatch => {
      dispatch(getDeletedAdjustmentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(deletedadjustmentsURL, headers)
        .then(res => {
          const deletedadjustments = res.data;
          dispatch(getDeletedAdjustmentListSuccess(deletedadjustments));
          })
        .catch(err => {
          dispatch(getDeletedAdjustmentListFail(err));
        });
    };
};

//ledgers
export const getLedgers = (token) => {
  return dispatch => {
      dispatch(getLedgerListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(ledgersURL, headers)
        .then(res => {
          const ledgers = res.data;
          dispatch(getLedgerListSuccess(ledgers));
          })
        .catch(err => {
          dispatch(getLedgerListFail(err));
        });
    };
};

export const getLedger = (id, token) => {
  return dispatch => {
      dispatch(getLedgerDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${ledgersURL}${id}`, headers)
        .then(res => {
          const ledger = res.data;
          dispatch(getLedgerDetailSuccess(ledger));
          })
        .catch(err => {
          dispatch(getLedgerDetailFail(err));
        });
    };
};

export const getDeletedLedgers = (token) => {
  return dispatch => {
      dispatch(getDeletedLedgerListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(deletedledgersURL, headers)
        .then(res => {
          const deletedledgers = res.data;
          dispatch(getDeletedLedgerListSuccess(deletedledgers));
          })
        .catch(err => {
          dispatch(getDeletedLedgerListFail(err));
        });
    };
};



export const addLedger = (ledger, token) => {
  return dispatch => {
      dispatch(createLedgerStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(ledgersURL, ledger, headers)
        .then(res => {
          dispatch(createLedgerSuccess(ledger));
        })
        .catch(err => {
          dispatch(createLedgerFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editLedger = (id, ledger, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${ledgersURL}${id}/`, ledger, headers)
    .then(res => {
        dispatch({
            type: EDIT_LEDGER,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

//journals
export const getJournals = (token) => {
  return dispatch => {
      dispatch(getJournalListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(journalsURL, headers)
        .then(res => {
          const journals = res.data;
          dispatch(getJournalListSuccess(journals));
          })
        .catch(err => {
          dispatch(getJournalListFail(err));
        });
    };
};

export const getJournal = (id, token) => {
  return dispatch => {
      dispatch(getJournalDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${journalsURL}${id}`, headers)
        .then(res => {
          const journal = res.data;
          dispatch(getJournalDetailSuccess(journal));
          })
        .catch(err => {
          dispatch(getJournalDetailFail(err));
        });
    };
};

export const getDeletedJournals = (token) => {
  return dispatch => {
      dispatch(getDeletedJournalListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(deletedjournalsURL, headers)
        .then(res => {
          const deletedjournals = res.data;
          dispatch(getDeletedJournalListSuccess(deletedjournals));
          })
        .catch(err => {
          dispatch(getDeletedJournalListFail(err));
        });
    };
};



export const deleteWorkbook = (id, workbook, token) => {
  return dispatch => {
      dispatch(deleteWorkBookStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${workbooksURL}${id}/remove/`, workbook, headers)
        .then(res => {
          dispatch(deleteWorkBookSuccess(workbook));
        })
        .catch(err => {
          dispatch(deleteWorkBookFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const deleteJournal = (id, journal, token) => {
  return dispatch => {
      dispatch(deleteJournalStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${journalsURL}${id}/remove/`, journal, headers)
        .then(res => {
          dispatch(deleteJournalSuccess(journal));
        })
        .catch(err => {
          dispatch(deleteJournalFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const deleteLedger = (id, ledger, token) => {
  return dispatch => {
      dispatch(deleteLedgerStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${ledgersURL}${id}/remove/`, ledger, headers)
        .then(res => {
          dispatch(deleteLedgerSuccess(ledger));
        })
        .catch(err => {
          dispatch(deleteLedgerFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};