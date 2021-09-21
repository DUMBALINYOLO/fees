// const localhost = "http://192.168.1.107:8000"
const localhost = "http://localhost:8000"
export const mocalhost = "http://192.168.1.107:8000"

const apiURL = "/api"

const endpoint = `${localhost}${apiURL}`

//adverts
export const expiredadvertsURL = `${endpoint}/adverts/expired-adverts/`
export const upcomingadvertsURL = `${endpoint}/adverts/upcoming-adverts/`



export const ongoingadvertsURL = `${endpoint}/adverts/ongoing-adverts/`

//users
export const customersURL = `${endpoint}/users/customers/`
export const authorsURL = `${endpoint}/users/authors/`
export const adminsURL = `${endpoint}/users/admins/`
export const itstaffsURL = `${endpoint}/users/it-staffs/`
export const editorsURL = `${endpoint}/users/editors/`
export const accountantsURL = `${endpoint}/users/accountants/`
export const salesrepresantativesURL = `${endpoint}/users/sales-represantatives/`
export const loginURL = `${endpoint}/users/login/`
export const createaccountantURL = `${endpoint}/users/create-accountant/`
export const createsalesrepURL = `${endpoint}/users/create-sales-rep/`
export const createcustomerURL = `${endpoint}/users/create-customer/`
export const createauthorURL = `${endpoint}/users/create-author/`
export const createadminURL = `${endpoint}/users/create-admin/`
export const createitstaffURL = `${endpoint}/users/create-it-staff/`
export const createeditorURL = `${endpoint}/users/create-editor/`
export const createuserURL = `${endpoint}/users/register-user/`
export const activateuserURL = `${endpoint}/users/activate-user/`
export const usersURL = `${endpoint}/users/users/`
export const resetpasswordURL = `${endpoint}/users/reset-password/`
export const forgotpasswordURL = `${endpoint}/users/forgot-password/`


//publications
export const bookimagesURL = `${endpoint}/publications/book-images/`
export const bookcontentsURL = `${endpoint}/publications/book-contents/`
export const lockedtopicsURL = `${endpoint}/publications/locked-topics/`
export const unlockedtopicsURL = `${endpoint}/publications/unlocked-topics/`
export const lockedchaptersURL = `${endpoint}/publications/locked-chapters/`
export const unlockedchaptersURL = `${endpoint}/publications/unlocked-chapters/`
export const pendingbookreviewsURL = `${endpoint}/publications/pending-book-reviews/`
export const approvedbookreviewsURL = `${endpoint}/publications/approved-book-reviews/`
export const negativebookreviewsURL = `${endpoint}/publications/negative-book-reviews/`
export const languagesURL = `${endpoint}/publications/languages/`
export const genresURL = `${endpoint}/publications/genres/`
export const publishersURL = `${endpoint}/publications/publishers/`
export const publishercitiesURL = `${endpoint}/publications/publisher-cities/`
export const onceoffsURL = `${endpoint}/publications/once-offs/`
export const seriessubsriptionplansURL = `${endpoint}/publications/series-subsription-plans/`
export const ebookURL = `${endpoint}/publications/locked-ebooks/`

export const seriesURL = `${endpoint}/publications/locked-series/`
export const ebooksubsriptionplansURL = `${endpoint}/publications/ebook-subsription-plans/`
export const seriesimagesURL = `${endpoint}/publications/series-images/`
export const ebookimagesURL = `${endpoint}/publications/ebook-images/`
export const hardcopyimagesURL = `${endpoint}/publications/hardcopy-images/`
export const ebookcoversURL = `${endpoint}/publications/ebook-covers/`
export const hardcopycoversURL = `${endpoint}/publications/hardcopy-covers/`
export const seriescoversURL = `${endpoint}/publications/series-covers/`
export const publishedseriesURL = `${endpoint}/publications/published-series/`

export const publishedhardcopiesURL = `${endpoint}/publications/published-hardcopies/`
export const lockedhardcopiesURL = `${endpoint}/publications/locked-hardcopies/`
export const publishedebooksURL = `${endpoint}/publications/published-ebooks/`
export const allseriesURL = `${endpoint}/publications/all-series/`
export const allebooksURL = `${endpoint}/publications/all-ebooks/`

export const customerhardcopiesURL = `${endpoint}/publications/customer-hardcopies/`
export const customerseriesURL = `${endpoint}/publications/customer-series/`
export const customerebooksURL = `${endpoint}/publications/customer-ebooks/`
export const hardcopygenresURL = `${endpoint}/publications/hardcopy-genres/`
export const ebookgenresURL = `${endpoint}/publications/ebook-genres/`
export const seriesgenresURL = `${endpoint}/publications/series-genres/`
export const serieslanguagequeriesURL = `${endpoint}/publications/series-language-queries/`
export const serieslanguagesURL = `${endpoint}/publications/series-languages/`
export const hardcopylanguagequeriesURL = `${endpoint}/publications/hardcopy-language-queries/`
export const hardcopylanguagesURL = `${endpoint}/publications/hardcopy-languages/`

export const ebooklanguagequeriesURL = `${endpoint}/publications/ebook-language-queries/`
export const ebooklanguagesURL = `${endpoint}/publications/ebook-languages/`



//accounting
export const accountsURL = `${endpoint}/accounting/accounts/`
export const interestbearingaccountsURL = `${endpoint}/accounting/interest-bearing-accounts/`
export const journalsURL = `${endpoint}/accounting/journals/`
export const ledgersURL = `${endpoint}/accounting/ledgers/`
export const accountingpostsURL = `${endpoint}/accounting/accounting-posts/`
export const workbooksURL = `${endpoint}/accounting/workbooks/`
export const accountingadjustmentsURL = `${endpoint}/accounting/accounting-adjustments/`
export const debitsURL = `${endpoint}/accounting/debits/`
export const creditsURL = `${endpoint}/accounting/credits/`
export const fullypaidnotverifiedbillsURL = `${endpoint}/accounting/fully-paid-not-verified-bills/`
export const fullypaidbillsURL = `${endpoint}/accounting/fully-paid-bills/`
export const unpostedandunadjustedjournalentriesURL = `${endpoint}/accounting/unposted-and-unadjusted-journal-entries/`
export const unadjustedjournalentriesURL = `${endpoint}/accounting/unadjusted-journal-entries/`
export const unpostedjournalentriesURL = `${endpoint}/accounting/unposted-journal-entries/`
export const postedjournalentriesURL = `${endpoint}/accounting/posted-journal-entries/`
export const journalentriesURL = `${endpoint}/accounting/journal-entries/`
export const inactiveaccountsURL = `${endpoint}/accounting/in-active-accounts/`
export const assetsURL = `${endpoint}/accounting/assets/`
export const taxesURL = `${endpoint}/accounting/taxes/`
export const currenciesURL = `${endpoint}/accounting/currencies/`
export const billsURL = `${endpoint}/accounting/bills/`
export const billpaymentsURL = `${endpoint}/accounting/bill-payments/`

export const unverifiedbillpaymentsURL = `${endpoint}/accounting/unverified-bill-payments/`
export const billcashpaymentsURL = `${endpoint}/accounting/bill-cash-payments/`
export const billtransferpaymentsURL = `${endpoint}/accounting/bill-transfer-payments/`
export const billdebitcardpaymentsURL = `${endpoint}/accounting/bill-debitcard-payments/`
export const billmobilepaymentsURL = `${endpoint}/accounting/bill-mobile-payments/`
export const dailyunverifiedbillsURL = `${endpoint}/accounting/daily-unverified-bills/`
export const dailyfullypaidbillsURL = `${endpoint}/accounting/daily-fully-paid-bills/`

export const dailypendingpaymentbillsURL = `${endpoint}/accounting/daily-pending-payment-bills/`
export const weeklyunverifiedbillsURL = `${endpoint}/accounting/weekly-unverified-bills/`
export const weeklyfullypaidbillsURL = `${endpoint}/accounting/weekly-fully-paid-bills/`
export const weeklypendingpaymentbillsURL = `${endpoint}/accounting/weekly-pending-payment-bills/`
export const bimonthlyunverifiedbillsURL = `${endpoint}/accounting/bimonthly-unverified-bills/`
export const bimonthlyfullypaidbillsURL = `${endpoint}/accounting/bimonthly-fully-paid-bills/`
export const bimonthlypendingpaymentbillsURL = `${endpoint}/accounting/bimonthly-pending-payment-bills/`
export const monthlyunverifiedbillsURL = `${endpoint}/accounting/monthly-unverified-bills/`
export const monthlyfullypaidbillsURL = `${endpoint}/accounting/monthly-fully-paid-bills/`
export const monthlypendingpaymentbillsURL = `${endpoint}/accounting/monthly-pending-payment-bills/`
export const quarterlyunverifiedbillsURL = `${endpoint}/accounting/quarterly-unverified-bills/`
export const quarterlyfullypaidbillsURL = `${endpoint}/accounting/quarterly-fully-paid-bills/`
export const quarterlypendingpaymentbillsURL = `${endpoint}/accounting/quarterly-pending-payment-bills/`
export const biannuallyunverifiedbillsURL = `${endpoint}/accounting/biannually-unverified-bills/`
export const biannuallyfullypaidbillsURL = `${endpoint}/accounting/biannually-fully-paid-bills/`
export const biannuallypendingpaymentbillsURL = `${endpoint}/accounting/biannually-pending-payment-bills/`
export const annuallyunverifiedbillsURL = `${endpoint}/accounting/annually-unverified-bills/`
export const annuallyfullypaidbillsURL = `${endpoint}/accounting/annually-fully-paid-bills/`
export const annuallypendingpaymentbillsURL = `${endpoint}/accounting/annually-pending-payment-bills/`
export const onceoffunverifiedbillsURL = `${endpoint}/accounting/onceoff-unverified-bills/`
export const onceofffullypaidbillsURL = `${endpoint}/accounting/onceoff-fully-paid-bills/`
export const onceoffpendingpaymentbillsURL = `${endpoint}/accounting/onceoff-pending-payment-bills/`
export const billlinesURL = `${endpoint}/accounting/bill-lines/`
export const deletedadjustmentsURL = `${endpoint}/accounting/deleted-adjustments/`
export const deletedworkbooksURL = `${endpoint}/accounting/deleted-workbooks/`
export const deletedpostsURL = `${endpoint}/accounting/deleted-posts/`
export const deletedledgersURL = `${endpoint}/accounting/deleted-ledgers/`
export const deletedjournalsURL = `${endpoint}/accounting/deleted-journals/`
export const deletedassetsURL = `${endpoint}/accounting/deleted-assets/`
export const verifiedassetsURL = `${endpoint}/accounting/verified-assets/`
export const unverifiedassetsURL = `${endpoint}/accounting/unverified-assets/`
export const accountdebitsURL = `${endpoint}/accounting/account-debits/`
export const accountcreditsURL = `${endpoint}/accounting/account-credits/`
export const deletedaccountsURL = `${endpoint}/accounting/deleted-accounts/`
export const deletedtaxesURL = `${endpoint}/accounting/deleted-taxes/`
export const deletedcurrenciesURL = `${endpoint}/accounting/deleted-currencies/`
export const billsuppliersURL = `${endpoint}/accounting/bill-suppliers/`

//invoicing
export const fullypaidinvoicesURL = `${endpoint}/invoicing/fully-paid-invoices/`
export const partiallypaidinvoicesURL = `${endpoint}/invoicing/partially-paid-invoices/`
export const unpaidinvoicesURL = `${endpoint}/invoicing/unpaid-invoices/`
export const customerordersURL = `${endpoint}/invoicing/customer-orders/`
export const pendingcustomerordersURL = `${endpoint}/invoicing/pending-customer-orders/`
export const rejectedcustomerordersURL = `${endpoint}/invoicing/rejected-customer-orders/`
export const completedcustomerordersURL = `${endpoint}/invoicing/completed-customer-orders/`
export const cancelledcustomerordersURL = `${endpoint}/invoicing/cancelled-customer-orders/`
export const refundedcustomerordersURL = `${endpoint}/invoicing/refunded-customer-orders/`
export const hardcopyorderitemsURL = `${endpoint}/invoicing/hardcopy-oder-items/`
export const ebookorderitemsURL = `${endpoint}/invoicing/ebook-oder-items/`
export const seriesorderitemsURL = `${endpoint}/invoicing/series-oder-items/`

export const transferinvoicepaymentsURL = `${endpoint}/invoicing/transfer-invoice-payments/`
export const debitcardinvoicepaymentsURL = `${endpoint}/invoicing/debitcard-invoice-payments/`
export const cashinvoicepaymentsURL = `${endpoint}/invoicing/cash-invoice-payments/`
export const mobileinvoicepaymentsURL = `${endpoint}/invoicing/mobile-invoice-payments/`
export const unverifiedinvoicepaymentsURL = `${endpoint}/invoicing/unverified-invoice-payments/`

export const customerunpaidinvoicesURL = `${endpoint}/invoicing/customer-unpaid-invoices/`
export const customerebookorderitemsURL = `${endpoint}/invoicing/customer-ebook-order-items/`
export const customerhardcopyorderitemsURL = `${endpoint}/invoicing/customer-hardcopy-order-items/`
export const customerpartialypaidinvoicesURL = `${endpoint}/invoicing/customer-partialy-paid-invoices/`
export const customerseriesorderitemsURL = `${endpoint}/invoicing/customer-series-order-items/`
export const customerfullypaidinvoicesURL = `${endpoint}/invoicing/customer-fully-paid-invoices/`

export const invoicelinesURL = `${endpoint}/invoicing/invoice-lines/`
export const customercartURL = `${endpoint}/invoicing/customer-cart/`
export const customerpaymentsURL = `${endpoint}/invoicing/customer-payments/`

//inventory
export const stocktakesURL= `${endpoint}/inventory/stock-takes/`
export const stockadjustmentsURL= `${endpoint}/inventory/stock-adjustments/`
export const supplieraddressesURL= `${endpoint}/inventory/supplier-addresses/`
export const deactivedsuppliersURL= `${endpoint}/inventory/deactived-suppliers/`
export const activesuppliersURL= `${endpoint}/inventory/active-suppliers/`
export const deletedwarehousesURL= `${endpoint}/inventory/deleted-warehouses/`
export const warehousesURL= `${endpoint}/inventory/warehouses/`
export const storagemediasURL= `${endpoint}/inventory/storage-medias/`
export const warehouseitemsURL= `${endpoint}/inventory/warehouse-items/`
export const stockreceiptsURL= `${endpoint}/inventory/stock-receipts/`
export const stockreceiptlinesURL= `${endpoint}/inventory/stock-receipt-lines/`
export const orderitemsURL= `${endpoint}/inventory/order-items/`
export const mobileorderpaymentsURL= `${endpoint}/inventory/mobile-order-payments/`
export const debitcardorderpaymentsURL= `${endpoint}/inventory/debitcard-order-payments/`
export const cashorderpaymentsURL= `${endpoint}/inventory/cash-order-payments/`
export const transferorderpaymentsURL= `${endpoint}/inventory/transfer-order-payments/`
export const unverifiedorderpaymentsURL= `${endpoint}/inventory/unverified-order-payments/`
export const fullypaidordersURL= `${endpoint}/inventory/fully-paid-orders/`
export const partiallypaidordersURL= `${endpoint}/inventory/partially-paid-orders/`
export const unpaidordersURL= `${endpoint}/inventory/unpaid-orders/`
export const fullyreceivedordersURL= `${endpoint}/inventory/full-received-orders/`
export const partiallyreceivedordersURL= `${endpoint}/inventory/partially-received-orders/`
export const unreceivedordersURL= `${endpoint}/inventory/unreceived-orders/`

export const unverifiedordersURL= `${endpoint}/inventory/unverified-orders/`
export const debitnotelinesURL= `${endpoint}/inventory/debitnote-lines/`
export const verifieddebitnotesURL= `${endpoint}/inventory/verified-debitnotes/`
export const unverifieddebitnotesURL= `${endpoint}/inventory/unverified-debitnotes/`

export const inventorysettingsURL= `${endpoint}/inventory/inventory-settings/`
export const categoriesURL= `${endpoint}/inventory/categories/`
export const deletedcategoriesURL= `${endpoint}/inventory/deleted-categories/`

export const inventoryitemsURL= `${endpoint}/inventory/inventory-items/`
export const consumablesURL= `${endpoint}/inventory/consumables/`
export const rawmaterialsURL= `${endpoint}/inventory/raw-materials/`

//reports
export const statsURL= `${endpoint}/reports/stats/`

//tasks
export const opentasksURL= `${endpoint}/tasks/open-tasks/`
export const closedtasksURL= `${endpoint}/tasks/closed-tasks/`

//tickets
export const commentsURL= `${endpoint}/tickets/comments/`

export const openticketsURL= `${endpoint}/tickets/open-tickets/`
export const customeropenticketsURL= `${endpoint}/tickets/customer-open-tickets/`
export const assignedopenticketsURL= `${endpoint}/tickets/assigned-open-tickets/`
export const closedticketsURL= `${endpoint}/tickets/closed-tickets/`
export const customerclosedticketsURL= `${endpoint}/tickets/customer-closed-tickets/`
export const assignedclosedticketsURL= `${endpoint}/tickets/assigned-closed-tickets/`
export const reopenedticketsURL= `${endpoint}/tickets/reopened-tickets/`
export const customerreopenedticketsURL= `${endpoint}/tickets/customer-reopened-tickets/`
export const assignedreopenedticketsURL= `${endpoint}/tickets/assigned-reopened-tickets/`

//notifications
export const unreadnotificationsURL= `${endpoint}/notifications/unread-notifications/`
export const readnotificationsURL= `${endpoint}/notifications/read-notifications/`

//services
export const servicesURL = `${endpoint}/services/services/`
export const staffusersURL = `${endpoint}/staff/staff-users/`
export const newslettersURL = `${endpoint}/blog/newsletters/`

//MESSAGING
export const enquiriesURL = `${endpoint}/messaging/enquiries/`
