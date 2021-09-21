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
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import { 
    getActiveSuppliers,
    addActiveSupplier,
    editActiveSupplier,
    deactivateSupplier,
} from '../../actions/inventory/suppliers';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Divider } from 'primereact/divider';



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




const Suppliers = (props) => {

    let emptyProduct = {
        name: '',
        website: '',
        bp_number: '',
        email: '',
        phone: '',
        contact_person: '',

    };

    
    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [record, setRecord] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
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
          props.getActiveSuppliers(token);
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
        if (record.name.trim()) {
            let _record = {...record};
            if (record.id) {
                // const index = findIndexById(record.id);
                // _record[index] = _record;
                props.editActiveSupplier(record.id, record, token);
                setNewRecord(_record)
                props.getActiveSuppliers(token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY UPDATED', life: 3000 });
            }
            else {
                props.addActiveSupplier(_record, token)
                setNewRecord(_record)
                props.getActiveSuppliers(token);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY CREATED', life: 3000 });
            }
            setProductDialog(false);
            setRecord(emptyProduct);
        }
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

    const handleClick = id =>{
      history.push(`/managementdashboard/inventory/activesuppliers/${id}`)
    }

    const changeSupplier = (id, data, token) => {
      props.deactivateSupplier(id, data, token);
      props.getActiveSuppliers(token);     
    }


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                  <Button
                  style={{paddingBottom: '5px'}}
                  className="p-button-success p-mr-2 p-mb-2"
                  label='OPEN'
                  onClick={() => handleClick(rowData.id)}
                />
                <Button
                  className="p-button-success p-mr-2 p-mb-2"
                  label='EDIT'
                  onClick={() => editProduct(rowData)}

                />
                <Button
                  className="p-button-danger p-mr-2 p-mb-2"
                  label='DE ACTIVATE'
                  onClick={() => changeSupplier(rowData.id, rowData, token)}

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
                          field="name"
                          header="NAME"
                          sortable
                          filter
                        />
                        <Column
                          field="phone"
                          header="PHONE"
                          sortable
                          filter
                        />
                        <Column
                          field="email"
                          header="EMAIL"
                          sortable
                          filter
                        />
                        
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '700px' }}
                  header="CURRENCY FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >

                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">NAME</label>
                        <span className="p-float-label p-input-icon-right">
                          
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="name"
                                name="name"
                                value={record.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                tooltip="Choose Currency Name"
                            />
                            {submitted && !record.name && <small className="p-error">Name is required.</small>}
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">BP NUMBER</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="bp_number"
                                name="bp_number"
                                value={record.bp_number}
                                onChange={(e) => onInputChange(e, 'bp_number')}
                                tooltip="Choose Maximum Stock Lvel"
                            />
                            {submitted && !record.bp_number && <small className="p-error"> Number Level Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">EMAIL</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="email"
                                name="email"
                                value={record.email}
                                onChange={(e) => onInputChange(e, 'email')}
                                tooltip="EMAIL"
                            />
                            {submitted && !record.email && <small className="p-error"> Email Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">CONTACT PERSON</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="contact_person"
                                name="contact_person"
                                value={record.contact_person}
                                onChange={(e) => onInputChange(e, 'contact_person')}
                                tooltip="CONTACT PERSON"
                            />
                            {submitted && !record.contact_person && <small className="p-error"> Contact Person Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">PHONE</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="phone"
                                name="phone"
                                value={record.phone}
                                onChange={(e) => onInputChange(e, 'phone')}
                                tooltip="CONTACT PHONE"
                            />
                            {submitted && !record.phone && <small className="p-error"> Contact Phone Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">WEBSITE</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="website"
                                name="website"
                                value={record.website}
                                onChange={(e) => onInputChange(e, 'website')}
                                tooltip="WEBSITE"
                            />
                            {submitted && !record.website && <small className="p-error"> Website Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      
                      
                      
                      
                  </div>
                </Dialog>
                
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    records: state.suppliers.activesuppliers,
    token: state.auth.token,
    userRole: state.auth.userRole,
    email: state.auth.email,
})

export default connect(
  mapStateToProps,
  {
    getActiveSuppliers,
    addActiveSupplier,
    editActiveSupplier,
    deactivateSupplier,
    } )
  (Suppliers);
