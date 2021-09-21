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
import {InputTextarea} from 'primereact/inputtextarea';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import { 
    getRawMaterials,
    addRawMaterial,
    editRawMaterial,
} from '../../actions/inventory/inventory';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
    getBillSuppliers
} from '../../actions/accounts/expenses';
import { 
    getCategories,
} from '../../actions/inventory/configurations';
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

const unitOfMeasureOptions = [
  {key: "pouch", value: "POUCH"},
  {key: "bottle", value:"BOTTLE"},
  {key: 'Ounce', value:'OUNCE'},
  {key:'Pound', value: 'POUND'},
  {key: 'Ton', value: 'TON'},
  {key: 'Gram', value:'GRAM'},
  {key:'Kilogram', value:'KILOGRAM'},
  {key: 'FluidOunce', value: 'FLUIDOUNCE'},
  {key: 'Pint', value: 'PINT'},
  {key: 'Quart', value: 'QUART'},
  {key: 'Gallon', value: 'GALLON'},
  {key: 'Milliliter', value: 'MILLILITER'},
  {key: 'Metercubed', value: 'CUBICMETER'},
  {key: 'MiliGram', value: 'MILIGRAM'},
  {key: 'Liter', value: 'LITER'},
  {key: 'Dozen', value: 'DOZEN'},
  {key: 'Count', value: 'COUNT'},
  {key:'Cartoon', value: 'CARTOON'},
]



const Consumables = (props) => {

    let emptyProduct = {
        name: '',
        description: '',
        unit_of_measure: '',
        minimum_order_level: '',
        maximum_stock_level: '',
        supplier: '',
        created_by: props.email,
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
          props.getRawMaterials(token);
          props.getBillSuppliers(token);
          props.getCategories(token);
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
                props.editRawMaterial(record.id, record, token);
                setNewRecord(_record)
                props.getRawMaterials(token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CURRENCY UPDATED', life: 3000 });
            }
            else {
                props.addRawMaterial(_record, token)
                setNewRecord(_record)
                props.getRawMaterials(token);
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
      history.push(`/managementdashboard/inventory/rawmaterials/${id}`)
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
                          field="unit_of_measure"
                          header="UNIT OF MEASURE"
                          sortable
                          filter
                        />
                        <Column
                          field="category"
                          header="CATEGORY"
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
                        <label htmlFor="righticon">MAXIMUM STOCK LEVEL</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="maximum_stock_level"
                                name="maximum_stock_level"
                                type='number'
                                value={record.maximum_stock_level}
                                onChange={(e) => onInputChange(e, 'maximum_stock_level')}
                                tooltip="Choose Maximum Stock Lvel"
                            />
                            {submitted && !record.maximum_stock_level && <small className="p-error"> Maximum Stock Level Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">MINIMUM STOCK LEVEL</label>
                        <span className="p-float-label p-input-icon-right">
                            
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="minimum_stock_level"
                                name="minimum_stock_level"
                                type='number'
                                value={record.minimum_order_level}
                                onChange={(e) => onInputChange(e, 'minimum_order_level')}
                                tooltip="Choose Minimum Stock Lvel"
                            />
                            {submitted && !record.minimum_order_level && <small className="p-error"> Maximum Stock Level Required.</small>}
                          
                        </span>
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.unit_of_measure}
                            optionLabel="value"
                            optionValue="key"
                            options={unitOfMeasureOptions}
                            onChange={(e) => onInputChange(e, 'unit_of_measure')}
                            filter
                            showClear
                            filterBy="value"
                            placeholder="Select Unit of Measure"

                          />
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.category}
                            optionLabel="name"
                            optionValue="id"
                            options={props.categories}
                            onChange={(e) => onInputChange(e, 'category')}
                            filter
                            showClear
                            filterBy="name"
                            placeholder="Select Category"

                          />
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.supplier}
                            optionLabel="name"
                            optionValue="id"
                            options={props.billsuppliers}
                            onChange={(e) => onInputChange(e, 'supplier')}
                            filter
                            showClear
                            filterBy="name"
                            placeholder="Select Supplier"

                          />
                      </div>
                      <Divider type="dashed"/>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="zip">DESCRIPTION</label>
                        <InputTextarea
                            value={record.description}
                            onChange={(e) => onInputChange(e, 'description')}
                            rows={5}
                            cols={30}
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
    records: state.inventory.rawmaterials,
    billsuppliers: state.expenses.billsuppliers,
    categories: state.settings.categories,
    token: state.auth.token,
    userRole: state.auth.userRole,
    email: state.auth.email,
})

export default connect(
  mapStateToProps,
  {
    getRawMaterials,
    addRawMaterial,
    editRawMaterial, 
    getBillSuppliers,
    getCategories
    } )
  (Consumables);
