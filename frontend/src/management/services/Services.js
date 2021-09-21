import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import ManagementLayout from "../layout/ManagementLayout";
import {
  Paper,
  makeStyles,

} from '@material-ui/core';
import { getServices, addService  } from '../../actions/services';


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



const Services = (props) => {





    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [newRecord, setNewRecord] = useState({});
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [photo, setPhoto] = useState(null);




    useEffect(() => {
      if(!props.fetched) {
          props.getServices();
      }
      console.log('mount it!');


    }, []);



    const openNew = () => {
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
        const service ={
            name,
            photo,
            description,
        }
        props.addService(service)
        props.getServices();
            
        setProductDialog(false);
    }


    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
  
  
      const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setPhoto(base64)
      }










    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ADD NEW" className="p-button-warning p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }





    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-warning p-mr-2"
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
      <ManagementLayout>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.records}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} RECORDS"
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
                          field="description"
                          header="DESCRIPTION"
                          sortable
                          filter
                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '600px' }}
                  header="SERVICE FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >
                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-6">
                        <span className="p-float-label p-input-icon-right">
                            <label htmlFor="righticon">NAME</label>
                            <InputText
                                id="name"
                                value={name}
                                name='name'
                                onChange={(evt) => setName(evt.target.value)}
                            />                        
                        </span>
                      </div>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="zip">DESCRIPTION</label>
                        <InputTextarea
                            value={description}
                            onChange={(evt) => setDescription(evt.target.value)}
                            rows={5}
                            cols={30}
                            autoResize
                        />
                    </div>
                      <div className="p-field p-col-12 p-md-12">
                        <input
                        accept="image/*"
                        type="file"
                        name='photo'
                        onChange={(evt) => handleFileRead(evt)}
                        />
                    </div>
                  </div>

                </Dialog>
                
            </div>
          </Paper>
        </ManagementLayout>
    );
}

const mapStateToProps = state =>({
    records: state.services.services,

})

export default connect(
  mapStateToProps,
  {getServices, addService } )
  (Services);
