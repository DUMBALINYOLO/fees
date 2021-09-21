import { combineReducers } from 'redux';
import uiReducer from './ui';
import auth from './auth';
import subMenuOpen from './itmenu';
import timelines from './timelines';
import expiredadverts from './adverts/expiredadverts';
import upcomingadverts from './adverts/upcomingadverts';
import ongoingadverts from './adverts/ongoingadverts';
import newsletters from './newsletters/newsletters';
import bookimages from './publications/bookimages';
import bookcontents from './publications/bookcontents';
import lockedtopics from './publications/lockedtopics';
import unlockedtopics from './publications/unlockedtopics';
import lockedchapters from './publications/lockedchapters';
import unlockedchapters from './publications/unlockedchapters';
import pendingbookreviews from './publications/pendingbookreviews';
import approvedbookreviews from './publications/approvedbookreviews';
import negativebookreviews from './publications/negativebookreviews';
import languages from './publications/languages';
import genres from './publications/genres';
import publishers from './publications/publishers';
import publishercities from './publications/publishercities';
import onceoffs from './publications/onceoffs';
import seriessubsriptionplans from './publications/seriessubsriptionplans';
import ebooks from './publications/ebooks';
import publishedhardcopies from './publications/publishedhardcopies';
import lockedhardcopies from './publications/lockedhardcopies';
import publishedebooks from './publications/publishedebooks';
import allseries from './publications/allseries';
import allebooks from './publications/allebooks';
import ebooksubsriptionplans from './publications/ebooksubsriptionplans';
import customers from './users/customers';
import authors from './users/authors';
import admins from './users/admins';
import itstaffs from './users/itstaffs';
import editors from './users/editors';
import accountants from './users/accountants';
import accounts from './accounts/accounts';
import assets from './accounts/assets';
import expenses from './accounts/expenses';
import books from './accounts/books';
import configs from './accounts/configs';
import creditnotes from './invoicing/creditnotes';
import errors from './errors'
import series from './publications/series';
import invoices from './invoicing/invoices';
import warehouses from './inventory/warehouses';
import orders from './inventory/orders';
import suppliers from './inventory/suppliers';
import settings from './inventory/inventoryconfigurations';
import stocktakes from './inventory/stocktakes';
import inventory from './inventory/inventory';
import publications from './publications/publications';
import customerinvoices from './invoicing/customerinvoices';
import reports from './reports';
import opentasks from './tasks/opentasks';
import closedtasks from './tasks/closedtasks';
import comments from './tickets/comments';
import opentickets from './tickets/opentickets';
import assignedopentickets from './tickets/assignedopentickets';
import closedtickets from './tickets/closedtickets';
import assignedclosedtickets from './tickets/assignedclosedtickets';
import reopenedtickets from './tickets/reopenedtickets';
import assignedreopenedtickets from './tickets/assignedreopenedtickets';
import unreadnotifications from './notifications/unreadnotifications';
import readnotifications from './notifications/readnotifications';
import users from './users/users';
import customertickets from './tickets/customertickets';
import services from './services';
import blogs from './blogs';
import messaging from './messaging';
import staffusers from './staffusers';


export default combineReducers({
    errors,
    ui: uiReducer,
    timelines,
    auth,
    subMenuOpen,
    services,
    blogs,
    messaging,
    staffusers,
    publishedhardcopies,
    lockedhardcopies,
    expenses,
    books,
    configs,
    publishedebooks,
    allseries,
    allebooks,
    expiredadverts,
    upcomingadverts,
    ongoingadverts,
    newsletters,
    bookimages,
    bookcontents,
    lockedtopics,
    unlockedtopics,
    lockedchapters,
    unlockedchapters,
    pendingbookreviews,
    approvedbookreviews,
    negativebookreviews,
    languages,
    genres,
    publishers,
    publishercities,
    onceoffs,
    seriessubsriptionplans,
    ebooks,
    series,
    ebooksubsriptionplans,
    customers,
    authors,
    admins,
    itstaffs,
    editors,
    accountants,
    accounts,
    assets,
    creditnotes,
    invoices,
    warehouses,
    suppliers,
    settings,
    orders,
    stocktakes,
    inventory,
    publications,
    customerinvoices,
    reports,
    opentasks,
    closedtasks,
    comments,
    opentickets,
    assignedopentickets,
    closedtickets,
    assignedclosedtickets,
    reopenedtickets,
    assignedreopenedtickets,
    unreadnotifications,
    readnotifications,
    users,
    customertickets
});
