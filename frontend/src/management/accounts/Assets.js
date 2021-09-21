import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
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
import { getAccounts } from '../../actions/accounts/accounts';
import { getAccountants } from '../../actions/users/accountants';
import { getAssets, addAsset, editAsset } from '../../actions/accounts/assets';
import { MultiSelect } from 'primereact/multiselect';
import  Controls  from "../../components/formcontrols/Controls";
import {Form } from "../../components/formcontrols/useForm";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
//import product from './product.jpg';
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
        created_by: ''
    };

    const categoryOptions = [
      {key: '0', value: 'Straight Line'},
      {key: '1', value:'Sum of years digits'},
      {key: '2', value: 'Double Declining balance'},
    ]

    const depreciationmethodOptions = [
      {key: '0', value: 'Land'},
      {key: '1', value:'Buildings'},
      {key: '2', value:'Vehicles'},
      {key: '3', value:'LeaseHold Improvements'},
      {key: '4', value:'Furniture and Fixtures'},
      {key: '5', value:'Equipment'}
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
    const {token, records, productcategories} =props;
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const progressRef = React.useRef(() => {});
    const [category, setCategory] = useState('');
    const [depreciationMethod, setDepreciationMethod] = useState('');

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
          props.getAssets(token);
          props.getAccounts(token);
          props.getAccountants(token);
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
                props.editAsset(record.id, record, token);
                setNewRecord(_record)
                props.getAssets(token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'ASSET UPDATED', life: 3000 });
            }
            else {
                props.addAsset(_record, token)
                setNewRecord(_record)
                props.getAssets(token);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'ASSET CREATED', life: 3000 });
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
                <Button label="ADD NEW" icon="pi pi-plus" className="p-button-info p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        return <img src='' onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }


    const selectedCategoryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img
                      alt={option.name}
                      src=''
                      onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                      />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const categoryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name}
                  src={category}
                  onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                  />
                <div>{option.name}</div>
            </div>
        );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info p-mr-2"
                  onClick={() => editAsset(rowData)}
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
            <h1 className="p-m-0">ASSETS</h1>
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

    return (
      <ManagementLayout>
        <Paper className={classes.pageContent}>
            <DumbalinyoloBreadCrumb path={props.history} />
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} ASSETS"
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
                            header="AVATAR"
                            body={imageBodyTemplate}
                        />
                        <Column
                          header="ID"
                          field="id"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY ID"
                        />
                        <Column
                          header="NAME"
                          field="name"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY NAME"
                        />
                        <Column
                          field="credit_account"
                          header="CRDIT ACCOUNT"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY CRDIT ACCOUNT"
                        />
                        <Column
                          header="INITIAL VALUE"
                          field="initial_value"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY VALUE"
                        />
                        <Column
                          header="CREATED BY"
                          field="created_by"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY ACCOUNTANT"
                        />
                        <Column
                          field="category"
                          header="CATEGORY"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY CATEGORY"
                        />
                      <Column body={actionBodyTemplate} header='ACTIONS'/>
                    </DataTable>
                </div>
                <Dialog
                  visible={productDialog}
                  style={{ width: '600px' }}
                  header="ASSET FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-6">
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
                              <label htmlFor="righticon">NAME</label>
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
                            <label htmlFor="address">INITIAL VALUE</label>
                            <span className="p-float-label p-input-icon-right">
                                <InputNumber
                                    id="initial_value"
                                    value={record.initial_value}
                                    onChange={(e) => onInputNumberChange(e, 'initial_value')}
                                    autoFocus
                                    decrementButtonClassName="p-button-danger"
                                    incrementButtonClassName="p-button-success"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus"
                                    showButtons
                                    buttonLayout="horizontal"
                                    tooltip="Choose Initial Value"
                                    step={0.05}
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="address">DEPRECIATION PERIOD</label>
                            <span className="p-float-label p-input-icon-right">
                                <InputNumber
                                    id="depreciation_period"
                                    value={record.depreciation_period}
                                    onChange={(e) => onInputNumberChange(e, 'depreciation_period')}
                                    autoFocus
                                    decrementButtonClassName="p-button-danger"
                                    incrementButtonClassName="p-button-success"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus"
                                    showButtons
                                    buttonLayout="horizontal"
                                    tooltip="Choose Depreciation Period"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="address">SALVAGE VALUE</label>
                            <span className="p-float-label p-input-icon-right">
                                <InputNumber
                                    id="salvage_value"
                                    value={record.salvage_value}
                                    onChange={(e) => onInputNumberChange(e, 'salvage_value')}
                                    autoFocus
                                    decrementButtonClassName="p-button-danger"
                                    incrementButtonClassName="p-button-success"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus"
                                    showButtons
                                    buttonLayout="horizontal"
                                    tooltip="Choose Salvage Value"
                                    step={0.05}
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT CATEGORY</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.category}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={record.categoryOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'category')}
                                    tooltip="Choose Category"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT DEPRECIATION METHOD</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.depreciation_method}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={record.depreciationmethodOptions}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'depreciation_method')}
                                    tooltip="Choose Depreciation Method"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT CREDIT ACCOUNT</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.credit_account}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={record.accounts}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'credit_account')}
                                    tooltip="Choose Credit Account"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="righticon">SELECT CREATED BY</label>
                            <span className="p-float-label p-input-icon-right">
                                <Dropdown
                                    value={record.created_by}
                                    optionLabel="value"
                                    optionValue="key"
                                    options={record.accountants}
                                    filter
                                    showClear
                                    filterBy="value"
                                    onChange={(e) => onInputChange(e, 'created_by')}
                                    tooltip="Choose Accountant"
                                />
                            </span>
                        </div>
                        <div className="p-field p-col-12  p-md-6">
                            <label htmlFor="address">START DATE</label>
                            <Calendar
                                name='init_date'
                                showIcon
                                onChange={(e) => onInputChange(e, 'init_date')}
                                value={record.init_date}
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
        </ManagementLayout>
    );
}

const mapStateToProps = state =>({
    records: state.assets.assets,
    token: state.auth.token,
    accounts: state.accounts.accounts,
    accountants: state.accountants.accountants,
})

export default connect(
  mapStateToProps,
  {getAccounts, getAccountants, getAssets, addAsset,editAsset} )
  (Assets);
