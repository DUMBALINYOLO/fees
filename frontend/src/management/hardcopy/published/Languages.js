import React, { useState, useRef } from 'react';
import {  Redirect } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';


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



const Languages = (props) => {

    let emptyProduct = {
      hardcopy: props.data.id,
      language: '',
    };






    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [record, setRecord] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);





    const openNew = () => {
        setRecord(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }


    const saveProduct = (e) => {
        setSubmitted(true);
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            // const index = findIndexById(record.id);
            // _record[index] = _record;
            return;
        }
        else {
            props.addLanguage(_record, props.token)
            props.getLanguages(props.data.id, props.token);
        }
        setProductDialog(false);
        setRecord(emptyProduct);

    }

    const editProduct = (record) => {
        setRecord({...record});
        setProductDialog(true);
    }







    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ADD NEW" className="p-button-success p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }




    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    label='EDIT'
                  className="p-button-warning p-mr-2"
                >
                </Button>
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
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );


    if (!props.token){
      return <Redirect  to="/login" />;
    }

    return (
      <>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
                    <DataTable
                        ref={dt}
                        value={props.hardcopylanguages}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} CURRENCIES"
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

                <Dialog
                  visible={productDialog}
                  style={{ width: '600px' }}
                  header="LANGUAGE FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >

                  <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="authors">LANGUAGE</label>
                        <Dropdown
                            value={record.language}
                            optionLabel="name"
                            optionValue="id"
                            name="author"
                            options={props.languages}
                            onChange={(e) => onInputChange(e, 'language')}
                            filter
                            showClear
                            filterBy="username"
                            placeholder="Select an Author"
                        />

                    </div>
                  </div>
                </Dialog>
            </div>
          </Paper>
        </>
    );
}



export default Languages;
