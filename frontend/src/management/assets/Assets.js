import React, { useState, useEffect, useRef } from 'react';
import {  Redirect } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import {InputTextarea} from 'primereact/inputtextarea';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import { 
    getAccounts
} from '../../actions/accounts/accounts';
import {
    getAssets,
    addAsset,
    editAsset,
} from '../../actions/accounts/assets'
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



const Assets = (props) => {

    let emptyProduct = {
        name: '',
        description: '',
        category: '',
        initial_value: '',
        credit_account: '',
        depreciation_period: '',
        init_date: '',
        depreciation_method: '',
        salvage_value: '',
    };

    const depreciationMethodChoices = [
        {key: 1, value:'Sum of years digits'},
        {key: 2, value: 'Double Declining balance'},
        {key: 3, value: 'Straight Line'},
    ]

    const assetTypeChoices = [
        {key: 0, value: 'Land'},
        {key: 1, value:'Buildings'},
        {key: 2, value: 'Vehicles'},
        {key: 3, value: 'LeaseHold Improvements'},
        {key: 4, value: 'Furniture and Fixtures'},
        {key: 5, value: 'Equipment'},
    ]





    

    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [record, setRecord] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [newRecord, setNewRecord] = useState({});
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token, records} =props;
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
          props.getAccounts(token);
          props.getAssets(token);
      }
      console.log('mount it!');

    }, [newRecord]);


    

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
            props.editAssets(record.id, record, token);
            setNewRecord(_record)
            props.getAssets(token);
            setProductDialog(true);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY UPDATED', life: 3000 });
        }
        else {
            props.addAsset(_record, token)
            setNewRecord(_record)
            props.getAssets(token);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY CREATED', life: 3000 });
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
                <Button label="ADD NEW" className="p-button-info p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }

    
    

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info p-mr-2"
                  onClick={() => editProduct(rowData)}
                >
                </Button>
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-danger"

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
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
                    <DataTable
                        ref={dt}
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} LEDGERS"
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
                        <Column
                          field="init_date"
                          header="INITIAL DATE"
                          sortable
                          filter
                        />
                        <Column
                          field="initial_value"
                          header="INITIAL VALUE"
                          sortable
                          filter
                        />
                        
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '800px' }}
                  header="ASSET FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >

                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="righticon">NAME</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="name"
                                name="name"
                                label="Name"
                                value={record.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                tooltip="Choose Ledger Name"
                            />
                            {submitted && !record.name && <small className="p-error">Name is required.</small>}
                          
                        </span>
                      </div>

                      <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="righticon">INITIAL VALUE</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="initial_value"
                                name="initial_value"
                                label="INITIAL VALUE"
                                value={record.init_value}
                                onChange={(e) => onInputChange(e, 'initial_value')}
                                tooltip="Choose Initial Value"
                                type='number'
                            />
                            {submitted && !record.init_value && <small className="p-error">Name is required.</small>}
                          
                        </span>
                      </div>
                      <Divider type='dashed'/>
                      <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="righticon">SALVAGE VALUE</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="salvage_value"
                                name="salvage_value"
                                type='number'
                                label="SALVAGE VALUE"
                                value={record.salvage_value}
                                onChange={(e) => onInputChange(e, 'salvage_value')}
                                tooltip="Choose Initial Value"
                            />
                            {submitted && !record.salvage_value && <small className="p-error">Name is required.</small>}
                          <label htmlFor="righticon">SALVAGE VALUE</label>
                        </span>
                      </div>
                      <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="righticon">DEBIT ACCOUNT</label>
                        <span className="p-float-label p-input-icon-right">
                            <Dropdown
                                value={record.credit_account}
                                optionLabel="name"
                                optionValue="id"
                                options={props.accounts}
                                filter
                                showClear
                                filterBy="name"
                                onChange={(e) => onInputChange(e, 'credit_account')}
                                tooltip="Debit Account"
                            />
                        </span>
                    </div>
                    <Divider type='dashed'/>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="righticon">DEPRICIATION METHOD</label>
                        <span className="p-float-label p-input-icon-right">
                        <Dropdown
                              value={record.depreciation_method}
                              optionLabel="value"
                              optionValue="key"
                              options={depreciationMethodChoices}
                              filter
                              showClear
                              filterBy="value"
                              onChange={(e) => onInputChange(e, 'depreciation_method')}
                              tooltip="Category"
                        />
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="righticon">CATEGORY</label>
                        <span className="p-float-label p-input-icon-right">
                            <Dropdown
                                value={record.category}
                                optionLabel="value"
                                optionValue="key"
                                options={assetTypeChoices}
                                filter
                                showClear
                                filterBy="value"
                                onChange={(e) => onInputChange(e, 'category')}
                                tooltip="Category"
                            />
                        </span>
                    </div>
                    <Divider type='dashed'/>
                    <div className="p-field p-col-12 p-md-6">
                      <label htmlFor="righticon">DEPRECIATION PERIOD</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="salvage_value"
                                name="salvage_value"
                                type='number'
                                label="DEPRECIATION PERIOD"
                                value={record.depreciation_period}
                                onChange={(e) => onInputChange(e, 'depreciation_period')}
                                tooltip="Choose Initial Value"
                            />
                            {submitted && !record.depreciation_period && <small className="p-error">Name is required.</small>}
                            
                        </span>
                    </div>
                    
                    <div className="p-field p-col-12  p-md-6">
                        <label htmlFor="address">INITIAL DATE</label>
                        <Calendar
                            name='init_date'
                            showIcon
                            onChange={(e) => onInputChange(e, 'init_date')}
                            value={record.init_date}
                            dateFormat="yy-mm-dd"
                        />
                    </div>
                    <Divider type='dashed'/>
                    <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="zip">DESCRIPTION</label>
                        <InputTextarea
                        value={record.description}
                        onChange={(e) => onInputChange(e, 'description')}
                        rows={5}
                        autoResize
                        />
                    </div>

                  </div>
                </Dialog>
                
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    records: state.assets.assets,
    accounts: state.accounts.accounts,
    token: state.auth.token,
    userRole: state.auth.userRole,
})

export default connect(
  mapStateToProps,
  {getAssets, editAsset, addAsset, getAccounts} )
  (Assets);
