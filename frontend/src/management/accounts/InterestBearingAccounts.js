import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles
}
from '@material-ui/core';
import { getAccounts, getInterestBearingAccounts, addInterestBearingAccount, editInterestBearingAccount } from '../../actions/accounts/accounts';
import LinearProgress from '@material-ui/core/LinearProgress';
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



const InterestBearingAccounts = (props) => {

    let emptyProduct = {
        name: '',
        balance: '',
        type: '',
        description: '',
        control_account: '',
        parent_account: '',
        balance_sheet_category: '',
        status: '',
        interest_rate: '',
        interest_interval: '',
        interest_method: '',
        last_interest_earned_date: ''
    };

    const interestintervalOptions = [
      {key: 'monthly', value: 'MONTHLY'},
      {key: 'annually', value:'ANNUALLY'}
    ]

    const statusOptions = [
      {key: 'yes', value: 'YES'},
      {key: 'no', value:'NO'}
    ]

    const controlaccountOptions = [
      {key: 'yes', value: 'YES'},
      {key: 'no', value:'NO'}
    ]

    const interestmethodOptions = [
      {key: 'Simple', value: 'SIMPLE'},
      {key: 'Complex', value:'COMPLEX'}
    ]

    const balancesheetcategoryOptions = [
      {key: 'current-assets', value: 'Current Asset'},
      {key: 'non-current-assets', value:'Non Current Asset'},
      {key: 'current-liabilites', value: 'Current Liabilities'},
      {key: 'long-term-liabilites', value:'Long Term Liabilities'},
      {key: 'equity', value: 'Equity'},
    ]

    const accounttypeOptions = [
      {key: 'expense', value: 'Expense'},
      {key: 'asset', value:'Asset'},
      {key: 'liability', value: 'Liability'},
      {key: 'equity', value:'Equity'},
      {key: 'income', value: 'Income'},
      {key: 'cost-of-sales', value: 'Cost of Sales'},
    ]

    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
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
          props.getInterestBearingAccounts(token);
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

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = (e) => {
        setSubmitted(true);
        e.preventDefault();
        let _records = [...records];
        let _record = {...record};
        if (record.id) {
            props.editInterestBearingAccount(record.id, record, token);
            setNewRecord(_record)
            props.getInterestBearingAccounts(token);
            setProductDialog(true);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'INTEREST BEARING ACCOUNT UPDATED', life: 3000 });
        }
        else {
            props.addInterestBearingAccount(_record, token)
            setNewRecord(_record)
            props.getInterestBearingAccounts(token);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'INTEREST BEARING ACCOUNT CREATED', life: 3000 });
        }
        setProductDialog(false);
        setRecord(emptyProduct);
    }

    const editProduct = (record) => {
        setRecord({...record});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (record) => {
        setRecord(record);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _records = records.filter(val => val.id !== record.id);
        setRecord(_records);
        setDeleteProductDialog(false);
        setRecord(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < records.length; i++) {
            if (records[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }



    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _records = records.filter(val => !selectedProducts.includes(val));
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _record = {...record};
        _record['category'] = e.value;
        setRecord(_record);
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

    const onStatusChange = (e) => {
        let _record = {...record };
        _record['status'] = e.value;
        setRecord(_record);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ADD NEW" className="p-button-info p-mr-2" onClick={openNew}/>
            </React.Fragment>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info p-mr-2"
                >
                </Button>
                <Button
                  icon="pi pi-sign-in"
                  className="p-button-rounded p-button-info"
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
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
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
        <Paper className='bg-royal card-box-hover-rise'>
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} INTEREST BEARING ACCOUNTS"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                        className="p-datatable-gridlines"
                      >
                        <Column
                          selectionMode="multiple"
                          headerStyle={{ width: '3rem' }}
                        />
                        <Column
                          field="id"
                          header="ID"
                          sortable
                          filter
                        />
                        <Column
                          field="account_number"
                          header="ACCOUNT NUMBER"
                          sortable
                          filter
                        />
                        <Column
                          field="type"
                          header="TYPE"
                          sortable
                          filter
                        />
                        <Column
                          field="balance"
                          header="BALANCE"
                          sortable
                          filter
                        />
                        <Column
                          field="interest_interval"
                          header="INTEREST INTERVAL"
                          sortable
                          filter
                        />
                        <Column
                          field="interest_method"
                          header="INTEREST METHOD"
                          sortable
                          filter
                        />
                        <Column
                          field="balance_sheet_category"
                          header="BALANCE SHEET CATEGORY"
                          sortable
                          filter
                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>
                <Dialog
                  visible={productDialog}
                  style={{ width: '800px' }}
                  header="INTEREST BEARING ACCOUNT FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >
                  <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">NAME</label>
                            <span className="p-float-label p-input-icon-right">
                                <InputText
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={record.name}
                                    onChange={(e) => onInputChange(e, 'name')}
                                    tooltip="Choose Name"
                                />
                                {submitted && !record.name && <small className="p-error">Name is required.</small>}
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">DESCRIPTION</label>
                            <span className="p-float-label p-input-icon-right">
                                <InputTextarea
                                    id="description"
                                    name="description"
                                    label="Description"
                                    value={record.description}
                                    onChange={(e) => onInputChange(e, 'description')}
                                    tooltip="Choose Description"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="address">BALANCE</label>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-spin pi-spinner" />
                                <InputNumber
                                    id="balance"
                                    value={record.balance}
                                    onChange={(e) => onInputNumberChange(e, 'balance')}
                                    autoFocus
                                    decrementButtonClassName="p-button-danger"
                                    incrementButtonClassName="p-button-success"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus"
                                    showButtons
                                    buttonLayout="horizontal"
                                    tooltip="Choose Balance"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="address">INTEREST RATE</label>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-spin pi-spinner" />
                                <InputNumber
                                    id="interest_rate"
                                    value={record.interest_rate}
                                    onChange={(e) => onInputNumberChange(e, 'interest_rate')}
                                    autoFocus
                                    decrementButtonClassName="p-button-danger"
                                    incrementButtonClassName="p-button-success"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus"
                                    showButtons
                                    buttonLayout="horizontal"
                                    tooltip="Choose Interest Rate"
                                    step={0.05}
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT PARENT ACCOUNT</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.parent_account}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={record.parent_account}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'parent_account')}
                                    tooltip="Choose Parent Account"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT TYPE</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.type}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={accounttypeOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'type')}
                                    tooltip="Choose Type"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT STATUS</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.status}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={statusOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'status')}
                                    tooltip="Choose Status"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT CONTROL ACCOUNT</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.control_account}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={controlaccountOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'control_account')}
                                    tooltip="Choose Control Account"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT BALANCE SHEET CATEGORY</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.balance_sheet_category}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={balancesheetcategoryOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'balance_sheet_category')}
                                    tooltip="Choose Balance Sheet Category"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT INTEREST INTERVAL</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.interest_interval}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={interestintervalOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'interest_interval')}
                                    tooltip="Choose Interest Interval"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT INTEREST METHOD</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.interest_method}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={interestmethodOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'interest_method')}
                                    tooltip="Choose Interest Method"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12  p-md-6">
                            <label htmlFor="address">INTEREST EARNED DATE</label>
                            <Calendar
                                name='last_interest_earned_date'
                                showIcon
                                onChange={(e) => onInputChange(e, 'last_interest_earned_date')}
                                value={record.last_interest_earned_date}
                                dateFormat="yy-mm-dd"
                            />
                        </div>
                    </div>
                </Dialog>
                <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {record && <span>Are you sure you want to delete <b>{record.name}</b>?</span>}
                    </div>
                </Dialog>

                <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {record && <span>Are you sure you want to delete the selected products?</span>}
                    </div>
                </Dialog>
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    records: state.accounts.interestbearingaccounts,
    token: state.auth.token,
    userRole: state.auth.userRole,
})

export default connect(
  mapStateToProps,
  {getInterestBearingAccounts, getAccounts, addInterestBearingAccount, editInterestBearingAccount } )
  (InterestBearingAccounts);
