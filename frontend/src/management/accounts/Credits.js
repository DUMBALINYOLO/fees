import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import './table.css';
import {
  Paper,
  makeStyles,

}

from '@material-ui/core';

import { getAccountCredits } from '../../actions/accounts/accounts';



const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))



const Credits = (props) => {


    const classes = useStyles();

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token, data} =props;
    const {id} = data;
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const progressRef = React.useRef(() => {});

    useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });

    useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    useEffect(() => {
      if(!props.fetched) {
          props.getAccountCredits(id, token);
      }
      console.log('mount it!');
    }, []);



    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ADD NEW" className="p-button-info p-mr-2"  />
            </React.Fragment>
        )
    }





    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );



    if (!props.token){
      return <Redirect  to="/login" />;
    }
    if(props.token !== null){
      if (props.userRole !== 'admin'){
        if (props.userRole === 'it'){
          return <Redirect to="/itdashboard" />
        }else if(props.userRole === 'author'){
          return <Redirect to="/authordashboard" />
        }else if(props.userRole === 'customer'){
          return <Redirect to="/customerdashboard" />
        }else if(props.userRole === 'editor'){
          return <Redirect to="/editordashboard" />
        }else if(props.userRole === 'sales_rep'){
          return <Redirect to="/salesrepdashboard" />
        }
        else if(props.userRole === 'accountant'){
          return <Redirect to="/accountantdashboard" />
        }
      }
    }
    return (
      <>
        <Paper className='bg-royal card-box-hover-rise'>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <DataTable
                        ref={dt}
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} TAXES"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                        className="p-datatable-gridlines"
                      >
                        <Column
                          field="id"
                          header="ID"
                          sortable
                          filter
                        />
                        <Column
                          field="date"
                          header="DATE"
                          sortable
                          filter

                        />
                        <Column
                          field="amount"
                          header="AMOUNT"
                          sortable
                          filter

                        />

                    </DataTable>
                </div>
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    records: state.accounts.accountcredits,
    token: state.auth.token,
    userRole: state.auth.userRole,
})

export default connect(
  mapStateToProps,
  {getAccountCredits } )
  (Credits);
