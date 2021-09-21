import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}

from '@material-ui/core';
import { Dropdown } from 'primereact/dropdown';

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



const SeriesSubscriptionPlans = (props) => {

    let emptyProduct = {
        ebook: props.data.id,
        price: '',
        durationability: '',
    };

    

    const durationChoices = [
      {key:15, value:'FIFTEEN DAYS'},
      {key:30, value:'THIRTY DAYS'},
      {key:60, value:'SIXTY DAYS'},
      {key:90, value:'NINETY DAYS'},
      {key:120, value:'ONE  HUNDRED AND TWENTY DAYS'},
      {key:240, value:'TWO HUNDRED AND FORTY DAYS'},
      {key:365, value:'THREE HUNDRED AND SIXTY FIVE DAYS'},

    ]


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
            return;
        }
        else {
            props.addPlan(_record, props.token)
            props.getPlans(props.data.id, props.token);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'PLAN CREATED', life: 3000 });
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

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _record = {...record };
        _record[`${name}`] = val;

        setRecord(_record);
    }


    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ADD NEW"  className="p-button-rounded p-button-warning" onClick={openNew} />
            </React.Fragment>
        )
    }


    

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-warning"
                  onClick={() => editProduct(rowData)}
                >
                </Button>
                <Button
                  icon="pi pi-sign-in"
                  className="p-button-rounded p-button-warning"
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
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    

    return (
      <>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.plans}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={25} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} PLANS"
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
                          field="durationability"
                          header="DURATION"
                          sortable
                          filter
                        />
                        <Column
                          field="price"
                          header="PRICE"
                          sortable
                          filter

                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '600px' }}
                  header="PLAN FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >
                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.durationability}
                            optionLabel="value"
                            optionValue="key"
                            name="durationability"
                            options={durationChoices}
                            onChange={(e) => onInputChange(e, 'durationability')}
                            filter
                            showClear
                            filterBy="value"
                            placeholder="DURATION"
                          />
                      </div>
                        <div className="p-field p-col-12 p-md-12">
                          <span className="p-float-label p-input-icon-right">
                              <i className="pi pi-spin pi-spinner" />
                              <InputNumber
                                id="rate"
                                value={record.price}
                                onChange={(e) => onInputNumberChange(e, 'price')}
                                autoFocus
                                decrementButtonClassName="p-button-danger"
                                incrementButtonClassName="p-button-success"
                                incrementButtonIcon="pi pi-plus"
                                decrementButtonIcon="pi pi-minus"
                                showButtons
                                buttonLayout="horizontal"
                                step={0.05}
                              />
                              {submitted && !record.price && <small className="p-error">Name is required.</small>}
                            </span>
                        </div>
                  </div>

                </Dialog>

                
            </div>
          </Paper>
        </>
    );
}



export default SeriesSubscriptionPlans;
