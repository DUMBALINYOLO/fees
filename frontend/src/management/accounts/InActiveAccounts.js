import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './table.css';
import ManagementLayout from "../layout/ManagementLayout";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  InputAdornment,
  Grid,
}

from '@material-ui/core';
import { Divider } from 'primereact/divider';
import { getInActiveAccounts, activateAccount } from '../../actions/accounts/accounts';
import { MultiSelect } from 'primereact/multiselect';
import  Controls  from "../../components/formcontrols/Controls";
import {Form } from "../../components/formcontrols/useForm";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Dropdown } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';
import DumbalinyoloBreadCrumb from '../../components/dumba/DumbalinyoloBreadCrumb';


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



const InActiveAccounts = (props) => {

    let emptyProduct = {
      name: '',
      rate: '',
    };

    const statusOptions = [
      {key: 'yes', value: 'YES'},
      {key: 'no', value:'NO'}
    ]




    const classes = useStyles();
    const [products, setProducts] = useState(null);
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
    const {token, records, productcategories, userName} =props;
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
          props.getInActiveAccounts(userName, token);
      }
      console.log('mount it!');
    }, [newRecord]);


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

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
        if (record.name.trim()) {
            let _records = [...records];
            let _record = {...record};
            if (record.id) {
                props.editTax(record.id, record, token);
                setNewRecord(_record)
                props.getTaxes(token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'TAX UPDATED', life: 3000 });
            }
            else {
                props.addTax(_record, token)
                setNewRecord(_record)
                props.getTaxes(token);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'TAX CREATED', life: 3000 });
            }
            setProductDialog(false);
            setRecord(emptyProduct);
        }
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




    const exportCSV = () => {
        dt.current.exportCSV();
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
                <Button label="ADD NEW" className="p-button-warning p-mr-2"  />
            </React.Fragment>
        )
    }



    const changeAccount = (id, data, token) => {
      props.activateAccount(id, userName, data, token);
      props.getInActiveAccounts(token);

    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  style={{paddingBottom: '5px'}}
                  className="p-button-warning p-mr-2 p-mb-2"
                  label='VERIFY'
                  onClick={() => changeAccount(rowData.id, rowData, token)}
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
                          field="name"
                          header="NAME"
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
                          field="type"
                          header="TYPE"
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
                  style={{ width: '600px' }}
                  header="TAX FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >
                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-6">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="name"
                                name="name"
                                label="Name"
                                value={record.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                tooltip="Choose Tax Name"
                            />
                            {submitted && !record.name && <small className="p-error">Name is required.</small>}
                          <label htmlFor="righticon">NAME</label>
                        </span>
                      </div>
                        <div className="p-field p-col-12 p-md-6">
                          <span className="p-float-label p-input-icon-right">
                              <i className="pi pi-spin pi-spinner" />
                              <InputNumber
                                id="rate"
                                value={record.rate}
                                onChange={(e) => onInputNumberChange(e, 'rate')}
                                autoFocus
                                decrementButtonClassName="p-button-danger"
                                incrementButtonClassName="p-button-success"
                                incrementButtonIcon="pi pi-plus"
                                decrementButtonIcon="pi pi-minus"
                                showButtons
                                buttonLayout="horizontal"
                                tooltip="Choose Tax Rate"
                                step={0.05}
                              />
                              {submitted && !record.rate_per_kg && <small className="p-error">Name is required.</small>}
                            </span>
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
    records: state.accounts.inactiveaccounts,
    token: state.auth.token,
    userRole: state.auth.userRole,
    userName: state.auth.userName,
})

export default connect(
  mapStateToProps,
  {getInActiveAccounts, activateAccount } )
  (InActiveAccounts);
