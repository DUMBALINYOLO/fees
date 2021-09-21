import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ManagementLayout from '../layout/ManagementLayout'
import Sales from './sales/Sales';
import {connect} from 'react-redux';
import {getStats} from '../../actions/reports/stats';
import Crm from './crm/Crm';
import CrmOne from './crm/CrmOne';
import Crypto from './crypto/Crypto';
import SalesOne from './sales/SalesOne';
import CrmThree  from './crm/CrmThree';
import CrmSeven from './crm/CrmSeven';
import CrmEight from './crm/CrmEight';



const ManagementHome = (props) => {

    const title = ' - Ubuntu-Afro Publishers Dashboard';
    const {
      token,
      stats
    } = props;

    const {
      authors,
      customers,
      staff_users,
      ebooks,
      hardcopy,
      inactive_accounts,
      partially_paid_customer_orders,

      partially_paid_orders,
      partially_received_orders,

      pending_customer_orders,
      pending_payment_anually_bills,
      pending_payment_biannually_bills,
      pending_payment_bimonthly_bills,

      pending_payment_daily_bills,
      unverified_dailly_bills,

      pending_payment_monthly_bills,
      pending_payment_onceoff_bills,
      pending_payment_quarterly_bills,
      pending_payment_weekly_bills,

      series,
      unpaid_customer_orders,
      unpaid_orders,
      unreceived_orders,
      unverified_assets,
      unverified_anually_bills,
      unverified_biannually_bills,
      unverified_bill_payments,
      unverified_bimonthly_bills,

      unverified_inventory_orders,
      unverified_monthly_bills,
      unverified_onceoff_bills,
      unverified_order_payment,
      unverified_payments,
      unverified_quaterly_bills,
      unverified_weekly_bills,
      pending_invoices,

    } = stats;


    useEffect(() => {
      if(!props.fetched) {
          props.getStats(token);
      }
      console.log('mount it!');
    }, []);

    console.log(stats)


    return (
      <ManagementLayout>
        <Helmet>
          <title>{title}</title>

        </Helmet>
        <CrmOne
          authors ={authors}
          customers={customers}
          staff_users={staff_users}
        />
        <SalesOne
          series={series}
          hardcopy={hardcopy}
          ebooks={ebooks}
        />

        <CrmThree
          inactive_accounts={inactive_accounts}
          unverified_assets ={unverified_assets}
          unverified_payments = {unverified_payments}
        />

        <CrmSeven
          partially_paid_customer_orders = {partially_paid_customer_orders}
          pending_customer_orders = {pending_customer_orders}
          unpaid_customer_orders = {unpaid_customer_orders}
          pending_invoices ={pending_invoices}
        />
        <CrmEight

            pending_payment_anually_bills = {pending_payment_anually_bills}
            pending_payment_biannually_bills = {pending_payment_biannually_bills}
            pending_payment_bimonthly_bills = {pending_payment_bimonthly_bills}
            pending_payment_daily_bills = {pending_payment_daily_bills}
            unverified_dailly_bills = {unverified_dailly_bills}
            pending_payment_monthly_bills = {pending_payment_monthly_bills}
            pending_payment_onceoff_bills = {pending_payment_onceoff_bills }
            pending_payment_quarterly_bills = {pending_payment_quarterly_bills}
            pending_payment_weekly_bills = {pending_payment_weekly_bills}
            unverified_anually_bills = {unverified_anually_bills}
            unverified_biannually_bills = {unverified_biannually_bills}
            unverified_bill_payments = {unverified_bill_payments}
            unverified_bimonthly_bills = {unverified_bimonthly_bills}
            unverified_monthly_bills = {unverified_monthly_bills}
            unverified_onceoff_bills = {unverified_onceoff_bills}
            unverified_quaterly_bills = {unverified_quaterly_bills}
            unverified_weekly_bills = {unverified_weekly_bills}

        />



      </ManagementLayout>
  );

}


const mapStateToProps = state => ({
  stats: state.reports.stats,
  token: state.auth.token,
});



export default connect(
  mapStateToProps,
  {
    getStats
  }
)(ManagementHome);
