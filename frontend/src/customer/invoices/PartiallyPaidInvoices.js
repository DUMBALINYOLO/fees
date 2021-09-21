import React, { useEffect } from 'react';

import {Card } from '@material-ui/core';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {getCustomerPartiallyPaidInvoices} from '../../actions/invoicing/customers';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#424242',
    padding: '40px',
  },
});


function Payments(props) {
  const {email, token, invoices, userName } = props;


  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerPartiallyPaidInvoices(token);
    }
    console.log('mount it!');
  }, []);


  return (

          <Card
            className="mb-4 card-box-hover-rise "
            style={{padding: '30px'}}
          >

            <span className="ribbon-angle ribbon-angle--top-left ribbon-primary">
              <small>{userName}</small>
            </span>
            <span className="ribbon-angle ribbon-angle--bottom-right ribbon-success">
              <small>{email}</small>
            </span>

              <div className="table-responsive" style={{paddingTop : '20px'}}>
                <DataTable
                    value={invoices}
                    dataKey="id"
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    virtualScroll
                    virtualRowHeight={5}
                    className="p-datatable-gridlines bg-royal card-box-hover-rise"
                  >
                    <Column
                      field="id"
                      header="ID"
                      filter
                      sortable
                    />
                    <Column
                      field="due"
                      header="DUE DATE"
                      filter
                      sortable
                    />
                    <Column
                      field="date"
                      header="DATE"
                      filter
                      sortable
                    />
                    <Column
                      field="tax_amount"
                      header="TAX"
                      filter
                      sortable
                    />
                    <Column
                      field="subtotal"
                      header="SUBTOTAL"
                      filter
                      sortable
                    />
                    <Column
                      field="total"
                      header="TOTAL"
                      filter
                      sortable
                    />
                    <Column
                      field="total_due"
                      header="DUE"
                      filter
                      sortable

                    />
                </DataTable>
              </div>
        </Card>
  );
}

const mapStateToProps = state => ({
    invoices: state.customerinvoices.customerpartiallypaidinvoices,
    email : state.auth.email,
    token: state.auth.token,
    userName: state.auth.userName,
  });



const PaymentsMapped = connect(
    mapStateToProps,
    {
        getCustomerPartiallyPaidInvoices
    }
  )(Payments);


export default withStyles(styles)(PaymentsMapped);
