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
import { updateObject } from "../../utility";

const initialState = {
  loading: false,
  error: null,
  workbooks: [], 
  deletedworkbooks: [],
  journals: [], 
  deletedjournals: [],
  ledgers: [],
  deletedledgers: [],
  accountingposts: [], 
  deletedposts: [],
  accountingadjustments: [],
  deletedadjustments: [],
  workbook: {},
  accountingpost: {},
  accountingadjustment: {},
  undjustedentries: [],
  undjustedentry: {},
  unpostedentries: [],
  unpostedentry: {},
  postedentries: [],
  postedentry: {},
  unpostedunadjustedentries: [],
  unpostedunadjustedentry: {},
  credits: [],
  debits: [],
  journal: {},
}


const getUnadjustedEntryListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnadjustedEntryListSuccess = (state, action) => {
  return updateObject(state, {
    undjustedentries: action.undjustedentries,
    error: null,
    loading: true
  });
};

const getUnadjustedEntryListFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnadjustedEntryDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnadjustedEntryDetailSuccess = (state, action) => {
  return updateObject(state, {
    undjustedentry: action.undjustedentry,
    error: null,
    loading: true
  });
};

const getUnadjustedEntryDetailFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const getUnpostedEntryListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnpostedEntryListSuccess = (state, action) => {
  return updateObject(state, {
    unpostedentries: action.unpostedentries,
    error: null,
    loading: true
  });
};

const getUnpostedEntryListFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnpostedEntryDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnpostedEntryDetailSuccess = (state, action) => {
  return updateObject(state, {
    unpostedentry: action.unpostedentry,
    error: null,
    loading: true
  });
};

const getUnpostedEntryDetailFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const getPostedEntryListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPostedEntryListSuccess = (state, action) => {
  return updateObject(state, {
    postedentries: action.postedentries,
    error: null,
    loading: true
  });
};

const getPostedEntryListFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPostedEntryDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPostedEntryDetailSuccess = (state, action) => {
  return updateObject(state, {
    postedentry: action.postedentry,
    error: null,
    loading: true
  });
};

const getPostedEntryDetailFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const getUnPostedUnAdjustedEntryListStart = (state, action) => {
  return updateObject(state, {
    unpostedunadjustedentries: action.unpostedunadjustedentries,
    error: null,
    loading: true
  });
};

const getUnPostedUnAdjustedEntryListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnPostedUnAdjustedEntryListFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnPostedUnAdjustedEntryDetailStart =(state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnPostedUnAdjustedEntryDetailSuccess = (state, action) => {
  return updateObject(state, {
    unpostedunadjustedentry: action.unpostedunadjustedentry,
    error: null,
    loading: true
  });
};

const getUnPostedUnAdjustedEntryDetailFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const getCreditListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCreditListSuccess = (state, action) => {
  return updateObject(state, {
    credits: action.credits,
    error: null,
    loading: true
  });
};

const getCreditListFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const getDebitListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDebitListSuccess = (state, action) => {
  return updateObject(state, {
    debits: action.debits,
    error: null,
    loading: true
  });
};

const getDebitListFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};



const createLedgerStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createLedgerSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createLedgerFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const deleteJournalStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const deleteJournalSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const deleteJournalFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const deleteLedgerStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const deleteLedgerSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const deleteLedgerFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const deleteWorkBookStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const deleteWorkBookSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const deleteWorkBookFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getAccountingAdjustmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountingAdjustmentListSuccess = (state, action) => {
  return updateObject(state, {
    accountingadjustments: action.accountingadjustments,
    error: null,
    loading: false
  });
};

const getAccountingAdjustmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAccountingAdjustmentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAccountingAdjustmentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAccountingAdjustmentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountingAdjustmentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountingAdjustmentDetailSuccess = (state, action) => {
  return updateObject(state, {
    accountingadjustment: action.accountingadjustment,
    error: null,
    loading: false
  });
};

const getAccountingAdjustmentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedAdjustmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedAdjustmentListSuccess = (state, action) => {
  return updateObject(state, {
    deletedadjustments: action.deletedadjustments,
    error: null,
    loading: false
  });
};

const getDeletedAdjustmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getWorkBookListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWorkBookListSuccess = (state, action) => {
  return updateObject(state, {
    workbooks: action.workbooks,
    error: null,
    loading: false
  });
};

const getWorkBookListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createWorkBookStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createWorkBookSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createWorkBookFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getWorkBookDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWorkBookDetailSuccess = (state, action) => {
  return updateObject(state, {
    workbook: action.workbook,
    error: null,
    loading: false
  });
};

const getWorkBookDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedWorkbookListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedWorkbookListSuccess = (state, action) => {
  return updateObject(state, {
    deletedworkbooks: action.deletedworkbooks,
    error: null,
    loading: false
  });
};

const getDeletedWorkbookListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getLedgerListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLedgerListSuccess = (state, action) => {
  return updateObject(state, {
    ledgers: action.ledgers,
    error: null,
    loading: false
  });
};

const getLedgerListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getLedgerDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLedgerDetailSuccess = (state, action) => {
  return updateObject(state, {
    ledger: action.ledger,
    error: null,
    loading: false
  });
};

const getLedgerDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedLedgerListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedLedgerListSuccess = (state, action) => {
  return updateObject(state, {
    deletedledgers: action.deletedledgers,
    error: null,
    loading: false
  });
};

const getDeletedLedgerListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getJournalListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getJournalListSuccess = (state, action) => {
  return updateObject(state, {
    journals: action.journals,
    error: null,
    loading: false
  });
};

const getJournalListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getJournalDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getJournalDetailSuccess = (state, action) => {
  return updateObject(state, {
    journal: action.journal,
    error: null,
    loading: false
  });
};

const getJournalDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedJournalListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedJournalListSuccess = (state, action) => {
  return updateObject(state, {
    deletedjournals: action.deletedjournals,
    error: null,
    loading: false
  });
};

const getDeletedJournalListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountingPostListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountingPostListSuccess = (state, action) => {
  return updateObject(state, {
    accountingposts: action.accountingposts,
    error: null,
    loading: false
  });
};

const getAccountingPostListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAccountingPostStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAccountingPostSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAccountingPostFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountingPostDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountingPostDetailSuccess = (state, action) => {
  return updateObject(state, {
    accountingpost: action.accountingpost,
    error: null,
    loading: false
  });
};

const getAccountingPostDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedPostListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedPostListSuccess = (state, action) => {
  return updateObject(state, {
    deletedposts: action.deletedposts,
    error: null,
    loading: false
  });
};

const getDeletedPostListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function books(state = initialState, action){
  switch(action.type){
    case GET_JOURNALS_START:
      return getJournalListStart(state, action);
    case GET_JOURNALS_SUCCESS:
      return getJournalListSuccess(state, action);
    case GET_JOURNALS_FAIL:
      return getJournalListFail(state, action);
    case GET_JOURNAL_START:
      return getJournalDetailStart(state, action);
    case GET_JOURNAL_SUCCESS:
      return getJournalDetailSuccess(state, action);
    case GET_JOURNAL_FAIL:
      return getJournalDetailFail(state, action);
    case GET_DELETED_JOURNALS_START:
      return getDeletedJournalListStart(state, action);
    case GET_DELETED_JOURNALS_SUCCESS:
      return getDeletedJournalListSuccess(state, action);
    case GET_DELETED_JOURNALS_FAIL:
      return getDeletedJournalListFail(state, action);
    case GET_LEDGERS_START:
      return getLedgerListStart(state, action);
    case GET_LEDGERS_SUCCESS:
      return getLedgerListSuccess(state, action);
    case GET_LEDGERS_FAIL:
      return getLedgerListFail(state, action);
    case GET_LEDGER_START:
      return getLedgerDetailStart(state, action);
    case GET_LEDGER_SUCCESS:
      return getLedgerDetailSuccess(state, action);
    case GET_LEDGER_FAIL:
      return getLedgerDetailFail(state, action);
    case GET_DELETED_LEDGERS_START:
      return getDeletedLedgerListStart(state, action);
    case GET_DELETED_LEDGERS_SUCCESS:
      return getDeletedLedgerListSuccess(state, action);
    case GET_DELETED_LEDGERS_FAIL:
      return getDeletedLedgerListFail(state, action);
    case CREATE_LEDGER_START:
      return createLedgerStart(state, action);
    case CREATE_LEDGER_SUCCESS:
      return createLedgerSuccess(state, action);
    case CREATE_LEDGER_FAIL:
      return createLedgerFail(state, action);
    case EDIT_LEDGER:
      const ledgerList = state.ledgers;
      ledgerList.splice(ledgerList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        ledgers: ledgerList,
      };
    case GET_WORKBOOKS_START:
      return getWorkBookListStart(state, action);
    case GET_WORKBOOKS_SUCCESS:
      return getWorkBookListSuccess(state, action);
    case GET_WORKBOOKS_FAIL:
      return getWorkBookListFail(state, action);
    case GET_WORKBOOK_START:
      return getWorkBookDetailStart(state, action);
    case GET_WORKBOOK_SUCCESS:
      return getWorkBookDetailSuccess(state, action);
    case GET_WORKBOOK_FAIL:
      return getWorkBookDetailFail(state, action);
    case CREATE_WORKBOOK_START:
      return createWorkBookStart(state, action);
    case CREATE_WORKBOOK_SUCCESS:
      return createWorkBookSuccess(state, action);
    case CREATE_WORKBOOK_FAIL:
      return createWorkBookFail(state, action);
    case EDIT_WORKBOOK:
      const arrayList = state.workbooks;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        workbooks: arrayList,
      };
    case GET_DELETED_WORKBOOKS_START:
      return getDeletedWorkbookListStart(state, action);
    case GET_DELETED_WORKBOOKS_SUCCESS:
      return getDeletedWorkbookListSuccess(state, action);
    case GET_DELETED_WORKBOOKS_FAIL:
      return getDeletedWorkbookListFail(state, action);
    case GET_ACCOUNTING_ADJUSTMENTS_START:
      return getAccountingAdjustmentListStart(state, action);
    case GET_ACCOUNTING_ADJUSTMENTS_SUCCESS:
      return getAccountingAdjustmentListSuccess(state, action);
    case GET_ACCOUNTING_ADJUSTMENTS_FAIL:
      return getAccountingAdjustmentListFail(state, action);
    case CREATE_ACCOUNTING_ADJUSTMENT_START:
      return createAccountingAdjustmentStart(state, action);
    case CREATE_ACCOUNTING_ADJUSTMENT_SUCCESS:
      return createAccountingAdjustmentSuccess(state, action);
    case CREATE_ACCOUNTING_ADJUSTMENT_FAIL:
      return createAccountingAdjustmentFail(state, action);
    case GET_ACCOUNTING_ADJUSTMENT_START:
      return getAccountingAdjustmentDetailStart(state, action);
    case GET_ACCOUNTING_ADJUSTMENT_SUCCESS:
      return getAccountingAdjustmentDetailSuccess(state, action);
    case GET_ACCOUNTING_ADJUSTMENT_FAIL:
      return getAccountingAdjustmentDetailFail(state, action);
    case EDIT_ACCOUNTING_ADJUSTMENT:
      const aarrayList = state.accountingadjustments;
      aarrayList.splice(aarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        accountingadjustments: aarrayList,
      };
    case GET_DELETED_ADJUSTMENTS_START:
      return getDeletedAdjustmentListStart(state, action);
    case GET_DELETED_ADJUSTMENTS_SUCCESS:
      return getDeletedAdjustmentListSuccess(state, action);
    case GET_DELETED_ADJUSTMENTS_FAIL:
      return getDeletedAdjustmentListFail(state, action);
    case GET_ACCOUNTING_POSTS_START:
      return getAccountingPostListStart(state, action);
    case GET_ACCOUNTING_POSTS_SUCCESS:
      return getAccountingPostListSuccess(state, action);
    case GET_ACCOUNTING_POSTS_FAIL:
      return getAccountingPostListFail(state, action);
    case CREATE_ACCOUNTING_POST_START:
      return createAccountingPostStart(state, action);
    case CREATE_ACCOUNTING_POST_SUCCESS:
      return createAccountingPostSuccess(state, action);
    case CREATE_ACCOUNTING_POST_FAIL:
      return createAccountingPostFail(state, action);
    case GET_ACCOUNTING_POST_START:
      return getAccountingPostDetailStart(state, action);
    case GET_ACCOUNTING_POST_SUCCESS:
      return getAccountingPostDetailSuccess(state, action);
    case GET_ACCOUNTING_POST_FAIL:
      return getAccountingPostDetailFail(state, action);
    case EDIT_ACCOUNTING_POST:
      const marrayList = state.accountingposts;
      marrayList.splice(marrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        accountingposts: marrayList,
      };
    case GET_DELETED_POSTS_START:
      return getDeletedPostListStart(state, action);
    case GET_DELETED_POSTS_SUCCESS:
      return getDeletedPostListSuccess(state, action);
    case GET_DELETED_POSTS_FAIL:
      return getDeletedPostListFail(state, action);
    case DELETE_JOURNAL_START:
      return deleteJournalStart(state, action);
    case DELETE_JOURNAL_SUCCESS:
      return deleteJournalSuccess(state, action);
    case DELETE_JOURNAL_FAIL:
      return deleteJournalFail(state, action);
    case DELETE_LEDGER_START:
      return deleteLedgerStart(state, action);
    case DELETE_LEDGER_SUCCESS:
      return deleteLedgerSuccess(state, action);
    case DELETE_LEDGER_FAIL:
      return deleteLedgerFail(state, action);
    case DELETE_WORKBOOK_START:
      return deleteWorkBookStart(state, action);
    case DELETE_WORKBOOK_SUCCESS:
      return deleteWorkBookSuccess(state, action);
    case DELETE_WORKBOOK_FAIL:
      return deleteWorkBookFail(state, action);
    case GET_UNADJUSTED_JOURNAL_ENTRIES_START:
      return getUnadjustedEntryListStart(state, action);
    case GET_UNADJUSTED_JOURNAL_ENTRIES_SUCCESS:
      return getUnadjustedEntryListSuccess(state, action);
    case GET_UNADJUSTED_JOURNAL_ENTRIES_FAIL:
      return getUnadjustedEntryListFail(state, action);
    case GET_UNADJUSTED_JOURNAL_ENTRY_START:
      return getUnadjustedEntryDetailStart(state, action);
    case GET_UNADJUSTED_JOURNAL_ENTRY_SUCCESS:
      return getUnadjustedEntryDetailSuccess(state, action);
    case GET_UNADJUSTED_JOURNAL_ENTRY_FAIL:
      return getUnadjustedEntryDetailFail(state, action);
    case GET_UNPOSTED_JOURNAL_ENTRIES_START:
      return getUnpostedEntryListStart(state, action);
    case GET_UNPOSTED_JOURNAL_ENTRIES_SUCCESS:
      return getUnpostedEntryListSuccess(state, action);
    case GET_UNPOSTED_JOURNAL_ENTRIES_FAIL:
      return getUnpostedEntryListFail(state, action);
    case GET_UNPOSTED_JOURNAL_ENTRY_START:
      return getUnpostedEntryDetailStart(state, action);
    case GET_UNPOSTED_JOURNAL_ENTRY_SUCCESS:
      return getUnpostedEntryDetailSuccess(state, action);
    case GET_UNPOSTED_JOURNAL_ENTRY_FAIL:
      return getUnpostedEntryDetailFail(state, action);
    case GET_POSTED_JOURNAL_ENTRIES_START:
      return getPostedEntryListStart(state, action);
    case GET_POSTED_JOURNAL_ENTRIES_SUCCESS:
      return getPostedEntryListSuccess(state, action);
    case GET_POSTED_JOURNAL_ENTRIES_FAIL:
      return getPostedEntryListFail(state, action);
    case GET_POSTED_JOURNAL_ENTRY_START:
      return getPostedEntryDetailStart(state, action);
    case GET_POSTED_JOURNAL_ENTRY_SUCCESS:
      return getPostedEntryDetailSuccess(state, action);
    case GET_POSTED_JOURNAL_ENTRY_FAIL:
      return getPostedEntryDetailFail(state, action);
    case GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_START:
      return getUnPostedUnAdjustedEntryListStart(state, action);
    case GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_SUCCESS:
      return getUnPostedUnAdjustedEntryListSuccess(state, action);
    case GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRIES_FAIL:
      return getUnPostedUnAdjustedEntryListFail(state, action);
    case GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_START:
      return getUnPostedUnAdjustedEntryDetailStart(state, action);
    case GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_SUCCESS:
      return getUnPostedUnAdjustedEntryDetailSuccess(state, action);
    case GET_UNPOSTED_AND_UNADJUSTED_JOURNAL_ENTRY_FAIL:
      return getUnPostedUnAdjustedEntryDetailFail(state, action);
    case GET_CREDITS_START:
      return getCreditListStart(state, action);
    case GET_CREDITS_SUCCESS:
      return getCreditListSuccess(state, action);
    case GET_CREDITS_FAIL:
      return getCreditListFail(state, action);
    case GET_DEBITS_START:
      return getDebitListStart(state, action);
    case GET_DEBITS_SUCCESS:
      return getDebitListSuccess(state, action);
    case GET_DEBITS_FAIL:
      return getDebitListFail(state, action);


    default:
      return state;
  }
}
