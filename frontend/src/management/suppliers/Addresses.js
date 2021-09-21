import React, { useState, useEffect, useRef } from 'react';
import {  Redirect } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Divider } from 'primereact/divider';
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


const addressTypeOptions = [
    {key: 'shipping', value: 'SHIPPING ADDRESS'},
    {key: 'billing', value: 'BILLING ADDRESS'}
]



const Addresses = (props) => {

    let emptyProduct = {
        owner: props.data.id,
        type: '',
        street_address: '',
        floor_number: '',
        city: '',
        postal_code: '',

    };



    
    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [record, setRecord] = useState(emptyProduct);
    const [submitted, setSubmitted] = useState(false);
    
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;
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
            props.editAddress(record.id, record, props.token);
            props.getAddresses(props.data.id, props.token);
            setProductDialog(true);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY UPDATED', life: 3000 });
        }
        else {
            props.addAddress(_record, props.token)
            props.getAddresses(props.data.id, props.token);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY CREATED', life: 3000 });
        }
        setProductDialog(false);

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
                <Button label="ADD NEW" className="p-button-info p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }

    

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                  <Button
                  style={{paddingBottom: '5px'}}
                  className="p-button-success p-mr-2 p-mb-2"
                  label='OPEN'
                />
                <Button
                  className="p-button-success p-mr-2 p-mb-2"
                  label='EDIT'
                  onClick={() => editProduct(rowData)}

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
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
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
                        value={props.addresses}
                        
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} CONSUMABLES"
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
                          field="street_address"
                          header="STREET"
                          sortable
                          filter
                        />
                        <Column
                          field="city"
                          header="CITY"
                          sortable
                          filter
                        />
                        <Column
                          field="postal_code"
                          header="POSTAL CODE"
                          sortable
                          filter
                        />
                        <Column
                          field="floor_number"
                          header="FLOOR NUMBER"
                          sortable
                          filter
                        />
                        <Column
                          field="type"
                          header="TYPE"
                          sortable
                          filter
                        />
                        
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '700px' }}
                  header="ADDRESS FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >

                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">STREET ADDRESS</label>
                        <span className="p-float-label p-input-icon-right">
                          
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="street_address"
                                name="street_address"
                                value={record.street_address}
                                onChange={(e) => onInputChange(e, 'street_address')}
                                tooltip="STREET ADRESS"
                            />
                            {submitted && !record.street_address && <small className="p-error">Name is required.</small>}
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">FLOOR NUMBER</label>
                        <span className="p-float-label p-input-icon-right">
                          
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="floor_number"
                                name="floor_number"
                                value={record.floor_number}
                                onChange={(e) => onInputChange(e, 'floor_number')}
                                tooltip="FLOOR NUMBER"
                            />
                            {submitted && !record.floor_number && <small className="p-error">Name is required.</small>}
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">CITY</label>
                        <span className="p-float-label p-input-icon-right">
                          
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="city"
                                name="city"
                                value={record.city}
                                onChange={(e) => onInputChange(e, 'city')}
                                tooltip="CITY"
                            />
                            {submitted && !record.city && <small className="p-error">Name is required.</small>}
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">POSTAL CODE</label>
                        <span className="p-float-label p-input-icon-right">
                          
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="postal_code"
                                name="postal_code"
                                value={record.postal_code}
                                onChange={(e) => onInputChange(e, 'postal_code')}
                                tooltip="POSTAL CODE"
                            />
                            {submitted && !record.postal_code && <small className="p-error">Name is required.</small>}
                        </span>
                      </div>
                      <Divider type="dashed"/>
                
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.type}
                            optionLabel="value"
                            optionValue="key"
                            options={addressTypeOptions}
                            onChange={(e) => onInputChange(e, 'type')}
                            filter
                            showClear
                            filterBy="value"
                            placeholder="Select Type"

                          />
                      </div>
                      
                      
                      
                      
                  </div>
                </Dialog>
                
            </div>
          </Paper>
        </>
    );
}


export default Addresses;

