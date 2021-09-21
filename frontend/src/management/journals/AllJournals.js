import React, { useState, useEffect, useRef } from 'react';
import {  Redirect } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,

}
from '@material-ui/core';
import { getJournals, deleteJournal } from '../../actions/accounts/books';
import {   useHistory } from 'react-router-dom';



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



const AllJournals = (props) => {

   




    const classes = useStyles();

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [newRecord, setNewRecord] = useState({});
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const progressRef = React.useRef(() => {});
    const history = useHistory();

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
          props.getJournals(token);
      }
      console.log('mount it!');

    }, [newRecord]);

    const removeJournal = (id, data, token) => {
      props.deleteJournal(id, data, token);
      props.getJournals(token);
      
    }

    const handleClick = id =>{
      history.push(`/managementdashboard/book-keeping/journals/${id}`)
    }


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  className=" p-button-danger p-mr-2"
                  label = 'DELETE'
                  onClick={() => removeJournal(rowData.id, rowData, token)}
                >
                </Button>
                <Button
                  label='OPEN'
                  className=" p-button-warning"
                  onClick={() => handleClick(rowData.id)}
                />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    
    
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} JOURNALS"
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
                          field="name"
                          header="NAME"
                          sortable
                          filter
                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>         
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    records: state.books.journals,
    token: state.auth.token,
    userRole: state.auth.userRole,
})

export default connect(
  mapStateToProps,
  {getJournals, deleteJournal} )
  (AllJournals);
