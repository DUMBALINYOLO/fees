import React from 'react';
import { connect } from 'react-redux';
import {authCheckState} from './actions/auth';
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/luna-amber/theme.css';
import 'primeflex/primeflex.css';
import './grid.css';
import Alerts from "./Alerts";
import AlertMUITemplate from "react-alert-template-mui";
import {Switch, Route} from 'react-router-dom';
import ThemeWrapper, { AppContext } from './theme/ThemeWrapper';
import ManagementHome from './management/dashboard/ManagementHome';
import ManagementUpcomingAdverts from './management/adverts/UpcomingAdverts';
import ManagementTaxes from './management/taxes/Taxes';
import ManagementCurrencies from './management/currency/Currencies';
import ManagementAssets from './management/accounts/Assets';
import ManagementAdmin from './management/users/admin/Administrator';
import ManagementUserTab from './management/users/UserTab';
import ManagementAccountingConfigurationTab from './management/AccountConfigurations';
import ManagementInActiveAccounts from './management/accounts/InActiveAccounts';
import ManagementInterestBearingAccounts from './management/accounts/InterestBearingAccounts';
import ManagementLockedSeries from './management/series/LockedSeries';
import ManagementSingleLockedSeries from './management/series/locked/SingleLockedSeries';
import ManagementAccountsTab from './management/accounts/AccountsTab';
import ManagementSinglePublishedSeries from './management/series/published/Series';
import ManagementLockedEbook from './management/ebooks/locked/Series';
import ManagementPublishedEbook from './management/ebooks/published/Series';
import ManagementEbook from './management/ebooks/published/Series';
import Authors from './management/user/Authors';
import ManagementBookKeepingTab from './management/BookKeepingTab';
import ManagementBillsTab from './management/bills/BillsTab';
import ManagementAssetsTab from './management/assets/AssetsTab';
import ManagementInventoryOrderTab from './management/orders/OrdersTab';
import ManagementSuppliersTab from './management/suppliers/SuppliersTab';
import ManagementWareHousesTab from './management/warehouses/WareHousesTab';
import ManagementInventoryConfigurationsTab from './management/inventoryconfigurations/ConfigurationsTab';
import ManagementInventoryTab from './management/inventory/InventoryTab';
import ManagementDebitNoteTab from './management/debitnotes/DebitNotesTab';
import ManagementStockManagementTab from './management/stockmanagement/StockManagementTab';
import ManagementSingleAccount from './management/accounts/SingleAccount';
import ManagementPendingPaymentBill from './management/bills/daily/PendingPaymentBill';
import ManagementWeeklyPendingPaymentBill from './management/bills/weekly/PendingPaymentBill';
import ManagementBiMonthlyPendingPaymentBill from './management/bills/bimonthly/PendingPaymentBill';
import ManagementMonthlyPendingPaymentBill from './management/bills/monthly/PendingPaymentBill';
import ManagementQuarterlyPendingPaymentBill from './management/bills/quarterly/PendingPaymentBill';
import ManagementBiAnnuallyPendingPaymentBill from './management/bills/biannually/PendingPaymentBill';
import ManagementAnnuallyPendingPaymentBill from './management/bills/annually/PendingPaymentBill';
import ManagementOnceOffPendingPaymentBill from './management/bills/onceoff/PendingPaymentBill';
import ManagementConsumable from './management/inventory/Consumable';
import ManagementRawMaterial from './management/inventory/RawMaterial';
import ManagementActiveSupplier from './management/suppliers/ActiveSupplier';
import ManagementInActiveSupplier from './management/suppliers/InActiveSupplier';
import ManagementWareHouse from './management/warehouses/WareHouse';
import ManagementUnreceivedOrder from './management/orders/receipt/UnRececeivedOrder';
import ManagementPartiallyReceivedOrder from './management/orders/receipt/PartiallyReceivedOrder';
import ManagementFullyReceivedOrder from './management/orders/receipt/FullyRceivedOrder';
import ManagementUnpaidOrder from './management/orders/payment/UnpaidOrder';
import ManagementPartiallyPaidOrder from './management/orders/payment/PartiallyPaidOrder';
import ManagementFullyPaidOrder from './management/orders/payment/FullyPaidOrder';
import ManagementPublications from './management/genres/PublicationsTab';
import ManagementSeriesGenre from './management/genres/SeriesGenre';
import ManagementSeries from './management/series/all/Series';
import ManagementEbookGenre from './management/genres/EbookGenre';
import ManagementHardcopyGenre from './management/genres/HardcopyGenre';
import ManagementHardcopy from './management/hardcopy/all/Series';
import ManagementLockedHardcopy from './management/hardcopy/locked/Series';
import ManagementPublishedHardcopy from './management/hardcopy/published/Series';
import PublicPublications from './public/publications/Publications';
import PublicSeries from './public/publications/series/SingleSeries';
import PublicHardcopy from  './public/publications/hardcopy/Hardcopy';
import PublicEbook from './public/publications/ebooks/Ebook';
import CustomerPublications from './customer/publications/Publications';
import CustomerSeries from './customer/publications/series/SingleSeries';
import CustomerHardcopy from  './customer/publications/hardcopy/Hardcopy';
import CustomerEbook from './customer/publications/ebooks/Ebook';
import About from './public/about/AboutBag';
import CustomerCart from './customer/cart/Cart';
import ManagementInvoices from './management/invoices/InvoicesTab';
import ManagementPendingInvoice from './management/invoices/pending/Invoice';
import ManagementUnpaidInvoice from './management/invoices/unpaid/Invoice';
import ManagementPartiallyPaidInvoice from './management/invoices/partially/Invoice';
import ManagementFullyPaidInvoice from './management/invoices/paid/Invoice';
import ManagementCustomerOrders from './management/customerorders/CustomerOrders';
import CreateUser from './management/users/CreateUser';
import ActivateUser from './public/accounts/ActivateAccount';
import CustomerTickets from './customer/tickets/TicketsTab';
import CustomerOpenTicket from './customer/tickets/Ticket';
import CustomerReOpenedTickets from './customer/tickets/CustomerReOpenedTickets';
import CustomerClosedTickets from './customer/tickets/CustomerClosedTickets';
import ManagementTickets from './management/tickets/TicketsTab';
import ManagementOpenTicket from './management/tickets/open/Ticket';
import ManagementReOpenedTickets from './management/tickets/open/ManagementReOpenedTickets';
import ManagementClosedTickets from './management/tickets/open/ManagementClosedTickets';
import ManagementFullyPaidBill from './management/bills/daily/FullyPaidBill';

import ManagementWeeklyFullyPaidBill from './management/bills/weekly/FullyPaidBill';
import ManagementQuarterlyFullyPaidBill from './management/bills/quarterly/FullyPaidBill';
import ManagementOnceOffFullyPaidBill from './management/bills/onceoff/FullyPaidBill';
import ManagementMonthlyFullyPaidBill from './management/bills/monthly/FullyPaidBill';
import ManagementBiMonthlyFullyPaidBill from './management/bills/bimonthly/FullyPaidBill';
import ManagementBiAnnuallyFullyPaidBill from './management/bills/biannually/FullyPaidBill';
import ManagementAnnuallyFullyPaidBill from './management/bills/annually/FullyPaidBill';
import ManagementJournal from './management/journals/SingleJournal';
import ManagementPostedEntry from './management/journals/posted/SingleEntry';
import ManagementUnAdjustedEntry from './management/journals/unadjusted/SingleEntry';
import ManagementUnPostedEntry from './management/journals/unposted/SingleEntry';
import ManagementUnPostedUnAdjustedEntry from './management/journals/unposted_n/SingleEntry';
import CustomerPayments from './customer/payments/Payments';
import CustomerInvoices from './customer/invoices/Invoices';
import CustomerClosedTicket from './customer/tickets/ClosedTicket';
import CustomerReopenedTicket from  './customer/tickets/ReopenedTicket'

import ResetPassword from './public/accounts/ResetPassword';
import RegisterAccount from './public/accounts/RegisterAccount';
import Login from './public/accounts/Auth';
import Team from './public/team/Team';
import PublicServices from './public/services/Services';
import PublicService from './public/services/Service';
import PublicBlogs from './public/blog/Blogs';
import ContactUs from './components/landing/ContactUs';
import Error from './errors/Error';
import ManagementUser from './management/users/User';

import AdminOpenTicket from './management/tickets/open/Ticket';
import AdminClosedTicket from './management/tickets/open/ClosedTicket';
import AdminReOpenedTicket from './management/tickets/open/ReOpenedTicket';
import AdminAssignedOpenTicket from './management/assignedtickets/open/Ticket';
import AdminAssignedClosedTicket from './management/assignedtickets/open/ClosedTicket';
import AdminAssignedReOpenedTicket from './management/assignedtickets/open/ReOpenedTicket';
import AdminAssignedTickets from './management/assignedtickets/TicketsTab';
import ManagementServices from './management/services/Services';
import ManagementBlogs from './management/blog/Blogs';
import ManagementStaffUsers from './management/staffusers/StaffUsers';
import ManagementEnquiries from './management/enquiries/Enquiries';

import { library } from '@fortawesome/fontawesome-svg-core';
import './assets/base.scss';
import {
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons';


library.add(
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
);
library.add(
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
);
library.add(
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
);


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const options = {
  position: positions.MIDDLE,
	timeout: 10000,
  transition: transitions.SCALE
};


class App extends React.Component {
	constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <ThemeWrapper>
        <AlertProvider template={AlertMUITemplate} {...options}>
          <Alerts/>
          <AppContext.Consumer>
              {(changeMode) => (
              <Switch>
                <Route
                  exact
                  path='/'
                  component={PublicPublications}
                />
                <Route
                  exact
                  path='/login'
                  component={Login}
                />
                <Route
                  exact
                  path='/reset'
                  component={ResetPassword}
                />
                <Route
                  exact
                  path='/register'
                  component={RegisterAccount}
                />
                <Route
                  exact
                  path='/create-user'
                  component={CreateUser}
                />
                <Route
                  exact
                  path='/services'
                  component={PublicServices}
                />
                <Route
                  exact
                  path='/contact-us'
                  component={ContactUs}
                />
                <Route
                  exact
                  path='/services/:id'
                  component={PublicService}
                />
                <Route
                  exact
                  path='/newsletter'
                  component={PublicBlogs}
                />
                <Route
                  exact
                  path='/activate'
                  component={ActivateUser}
                />
                <Route
                  exact
                  path='/about'
                  component={About}
                />
                <Route
                  exact
                  path='/managementdashboard/staff-users'
                  component={ManagementStaffUsers}
                />
                <Route
                  exact
                  path='/managementdashboard/services'
                  component={ManagementServices}
                />
                <Route
                  exact
                  path='/managementdashboard/blogs'
                  component={ManagementBlogs}
                />
                <Route
                  exact
                  path='/managementdashboard/enquiries'
                  component={ManagementEnquiries}
                />
                <Route
                  exact
                  path='/managementdashboard/open-tickets/:id'
                  component={AdminOpenTicket}
                />
                <Route
                  exact
                  path='/managementdashboard/closed-tickets/:id'
                  component={AdminClosedTicket}
                />
                <Route
                  exact
                  path='/team'
                  component={Team}
                />

                <Route
                  exact
                  path='/managementdashboard/assigned-reopened-tickets/:id'
                  component={AdminAssignedReOpenedTicket}
                />

                <Route
                  exact
                  path='/managementdashboard/assigned-open-tickets/:id'
                  component={AdminAssignedOpenTicket}
                />
                <Route
                  exact
                  path='/managementdashboard/assigned-closed-tickets/:id'
                  component={AdminAssignedClosedTicket}
                />
                <Route
                  exact
                  path='/managementdashboard/reopened-tickets/:id'
                  component={AdminReOpenedTicket}
                />

                <Route
                  exact
                  path='/managementdashboard/accounting/dailypendingpaymentbills/:id'
                  component={ManagementPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/weeklypendingpaymentbills/:id'
                  component={ManagementWeeklyPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/bimonthlypendingpaymentbills/:id'
                  component={ManagementBiMonthlyPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/monthlypendingpaymentbills/:id'
                  component={ManagementMonthlyPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/quarterlypendingpaymentbills/:id'
                  component={ManagementQuarterlyPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/biannuallypendingpaymentbills/:id'
                  component={ManagementBiAnnuallyPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/annuallypendingpaymentbills/:id'
                  component={ManagementAnnuallyPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/accounting/onceoffpendingpaymentbills/:id'
                  component={ManagementOnceOffPendingPaymentBill}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/rawmaterials/:id'
                  component={ManagementRawMaterial}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/consumables/:id'
                  component={ManagementConsumable}
                />

                <Route
                  exact
                  path='/managementdashboard/inventory/activesuppliers/:id'
                  component={ManagementActiveSupplier}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/inactivesuppliers/:id'
                  component={ManagementInActiveSupplier}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/warehouses/:id'
                  component={ManagementWareHouse}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/unreceived-orders/:id'
                  component={ManagementUnreceivedOrder}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/partiallyreceived-orders/:id'
                  component={ManagementPartiallyReceivedOrder}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/fullyreceived-orders/:id'
                  component={ManagementFullyReceivedOrder}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/unpaid-orders/:id'
                  component={ManagementUnpaidOrder}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/partiallypaid-orders/:id'
                  component={ManagementPartiallyPaidOrder}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory/fullypaid-orders/:id'
                  component={ManagementFullyPaidOrder}
                />

                <Route
                  exact
                  path='/managementdashboard/author'
                  component={Authors}
                />
                <Route
                  exact
                  path='/managementdashboard/users/:id'
                  component={ManagementUser}
                />
                <Route
                  exact
                  path='/managementdashboard/configurations/taxes'
                  component={ManagementTaxes}
                />
                <Route
                  exact
                  path='/managementdashboard/configurations/currencies'
                  component={ManagementCurrencies}
                />
                <Route
                  exact
                  path='/managementdashboard/accounts/inactiveaccounts'
                  component={ManagementInActiveAccounts}
                />
                <Route
                  exact
                  path='/managementdashboard/accounts/assets'
                  component={ManagementAssets}
                />
                <Route
                  exact
                  path='/managementdashboard/accounts/interestbearingaccounts'
                  component={ManagementInterestBearingAccounts}
                />
                <Route
                  exact
                  path='/managementdashboard/users/admins/:id'
                  component={ManagementAdmin}
                />

                <Route
                  exact
                  path='/managementdashboard/users'
                  component={ManagementUserTab}
                />

                <Route exact path='/managementdashboard/configurations' component={ManagementAccountingConfigurationTab} />


                <Route
                  exact
                  path='/managementdashboard/book-keeping'
                  component={ManagementBookKeepingTab}
                />
                <Route
                  exact
                  path='/managementdashboard/bills'
                  component={ManagementBillsTab}
                />
                <Route
                  exact
                  path='/managementdashboard/assets'
                  component={ManagementAssetsTab}
                />
                <Route
                  exact
                  path='/managementdashboard/accounts'
                  component={ManagementAccountsTab}
                />

                <Route
                  exact
                  path='/managementdashboard/accounts/active-accounts/:id'
                  component={ManagementSingleAccount}
                />
                <Route
                  exact
                  path='/managementdashboard/publications/locked-series'
                  component={ManagementLockedSeries}
                />
                <Route
                  exact
                  path='/managementdashboard/locked-series/:id'
                  component={ManagementSingleLockedSeries}
                />

                <Route
                  exact
                  path='/managementdashboard/published-series/:id'
                  component={ManagementSinglePublishedSeries}
                />

                <Route
                  exact
                  path='/managementdashboard'
                  component={ManagementHome}
                />

                <Route
                  exact
                  path='/managementdashboard/locked-ebooks/:id'
                  component={ManagementLockedEbook}
                />
                <Route
                  exact
                  path='/managementdashboard/published-ebooks/:id'
                  component={ManagementPublishedEbook}
                />
                <Route
                  exact
                  path='/managementdashboard/all-ebooks/:id'
                  component={ManagementEbook}
                />
                <Route
                  exact
                  path='/managementdashboard/adverts/upcomingadverts'
                  component={ManagementUpcomingAdverts}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory-orders'
                  component={ManagementInventoryOrderTab}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory-configurations'
                  component={ManagementInventoryConfigurationsTab}
                />
                <Route
                  exact
                  path='/managementdashboard/suppliers'
                  component={ManagementSuppliersTab}
                />
                <Route
                  exact
                  path='/managementdashboard/inventory'
                  component={ManagementInventoryTab}
                />
                <Route
                  exact
                  path='/managementdashboard/debit-notes'
                  component={ManagementDebitNoteTab}
                />
                <Route
                  exact
                  path='/managementdashboard/warehouses'
                  component={ManagementWareHousesTab}
                />
                <Route
                  exact
                  path='/managementdashboard/stock-management'
                  component={ManagementStockManagementTab}
                />
                <Route
                  exact
                  path='/managementdashboard/publications'
                  component={ManagementPublications}
                />
                <Route
                  exact
                  path='/managementdashboard/series-genres/:id'
                  component={ManagementSeriesGenre}
                />
                <Route
                  exact
                  path='/managementdashboard/ebook-genres/:id'
                  component={ManagementEbookGenre}
                />
                <Route
                  exact
                  path='/managementdashboard/all-series/:id'
                  component={ManagementSeries}
                />
                <Route
                  exact
                  path='/managementdashboard/hardcopy-genres/:id'
                  component={ManagementHardcopyGenre}
                />
                <Route
                  exact
                  path='/managementdashboard/hardcopies/:id'
                  component={ManagementHardcopy}
                />
                <Route
                  exact
                  path='/managementdashboard/locked-hardcopies/:id'
                  component={ManagementLockedHardcopy}
                />
                <Route
                  exact
                  path='/managementdashboard/published-hardcopies/:id'
                  component={ManagementPublishedHardcopy}
                />
                <Route
                  exact
                  path='/series/:id'
                  component={PublicSeries}
                />
                <Route
                  exact
                  path='/ebooks/:id'
                  component={PublicEbook}
                />
                <Route
                  exact
                  path='/hardcopies/:id'
                  component={PublicHardcopy}
                />
                <Route
                  exact
                  path='/customers/'
                  component={CustomerPublications}
                />

                <Route
                  exact
                  path='/customers/series/:id'
                  component={CustomerSeries}
                />
                <Route
                  exact
                  path='/customers/ebooks/:id'
                  component={CustomerEbook}
                />
                <Route
                  exact
                  path='/customers/hardcopies/:id'
                  component={CustomerHardcopy}
                />
                <Route
                  exact
                  path='/customers/cart'
                  component={CustomerCart}
                />
                <Route
                  exact
                  path='/managementdashboard/invoices'
                  component={ManagementInvoices}
                />
                <Route
                  exact
                  path='/managementdashboard/pending-invoices/:id'
                  component={ManagementPendingInvoice}
                />

                <Route
                  exact
                  path='/managementdashboard/unpaid-invoices/:id'
                  component={ManagementUnpaidInvoice}
                />
                <Route
                  exact
                  path='/managementdashboard/partiallypaid-invoices/:id'
                  component={ManagementPartiallyPaidInvoice}
                />
                <Route
                  exact
                  path='/managementdashboard/fullypaid-invoices/:id'
                  component={ManagementFullyPaidInvoice}
                />
                <Route
                  exact
                  path='/managementdashboard/customer-orders'
                  component={ManagementCustomerOrders}
                />
                <Route
                  exact
                  path='/customers/tickets'
                  component={CustomerTickets}
                />
                <Route
                  exact
                  path='/customers/customer-closed-tickets'
                  component={CustomerClosedTickets}
                />
                <Route
                  exact
                  path='/customers/customer-reopened-tickets'
                  component={CustomerReOpenedTickets}
                />
                <Route
                  exact
                  path='/customer-open-tickets/:id'
                  component={CustomerOpenTicket}
                />
                <Route
                  exact
                  path='/customer-closed-tickets/:id'
                  component={CustomerClosedTicket}
                />
                <Route
                  exact
                  path='/customer-reopened-tickets/:id'
                  component={CustomerReopenedTicket}
                />
                <Route
                  exact
                  path='/managementdashboard/tickets'
                  component={ManagementTickets}
                />
                <Route
                  exact
                  path='/managementdashboard/assigned-tickets'
                  component={AdminAssignedTickets}
                />
                <Route
                  exact
                  path='/managementdashboard/closed-tickets'
                  component={ManagementClosedTickets}
                />
                <Route
                  exact
                  path='/managementdashboard/reopened-tickets'
                  component={ManagementReOpenedTickets}
                />
                <Route
                  exact
                  path='/managementdashboard/open-tickets/:id'
                  component={ManagementOpenTicket}
                />
                <Route
                  exact
                  path='/managementdashboard/daily-fully-paid-bills/:id'
                  component={ManagementFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/weekly-fully-paid-bills/:id'
                  component={ManagementWeeklyFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/quarterly-fully-paid-bills/:id'
                  component={ManagementQuarterlyFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/onceoff-fully-paid-bills/:id'
                  component={ManagementOnceOffFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/monthly-fully-paid-bills/:id'
                  component={ManagementMonthlyFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/bimonthly-fully-paid-bills/:id'
                  component={ManagementBiMonthlyFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/biannually-fully-paid-bills/:id'
                  component={ManagementBiAnnuallyFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/annually-fully-paid-bills/:id'
                  component={ManagementAnnuallyFullyPaidBill}
                />
                <Route
                  exact
                  path='/managementdashboard/book-keeping/journals/:id'
                  component={ManagementJournal}
                />
                <Route
                  exact
                  path='/managementdashboard/book-keeping/posted-entries/:id'
                  component={ManagementPostedEntry}
                />
                <Route
                  exact
                  path='/managementdashboard/book-keeping/unadjusted-entries/:id'
                  component={ManagementUnAdjustedEntry}
                />
                <Route
                  exact
                  path='/managementdashboard/book-keeping/unposted-entries/:id'
                  component={ManagementUnPostedEntry}
                />
                <Route
                  exact
                  path='/managementdashboard/book-keeping/unposted-and-unadjusted-entries/:id'
                  component={ManagementUnPostedUnAdjustedEntry}
                />
                <Route
                  exact
                  path='/customers/payments'
                  component={CustomerPayments}
                />
                <Route
                  exact
                  path='/customers/invoices'
                  component={CustomerInvoices}
                />
                <Route component={Error} />

              </Switch>
            )}
          </AppContext.Consumer>
        </AlertProvider>
      </ThemeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
		user: state.auth.user,
		email: state.auth.email,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
