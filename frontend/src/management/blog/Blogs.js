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
import { getBlogs, addBlog  } from '../../actions/blogs';


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
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);





    useEffect(() => {
      if(!props.fetched) {
          props.getBlogs();
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
            title,
            image,
            content,
            author,
        }
        props.addBlog(service)
        props.getBlogs();
            
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
        setImage(base64)
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
                          field="title"
                          header="TITLE"
                          sortable
                          filter
                        />
                        <Column
                          field="author"
                          header="AUTHOR"
                          sortable
                          filter
                        />
                        <Column
                          field="content"
                          header="CONTENT"
                          sortable
                          filter
                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '600px' }}
                  header="BLOG FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >
                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-6">
                        <span className="p-float-label p-input-icon-right">
                            <label htmlFor="righticon">TITLE</label>
                            <InputText
                                id="name"
                                value={title}
                                name='name'
                                onChange={(evt) => setTitle(evt.target.value)}
                            />                        
                        </span>
                      </div>
                      <div className="p-field p-col-12 p-md-6">
                        <span className="p-float-label p-input-icon-right">
                            <label htmlFor="righticon">AUTHOR</label>
                            <InputText
                                id="author"
                                value={author}
                                name='author'
                                onChange={(evt) => setAuthor(evt.target.value)}
                            />                        
                        </span>
                      </div>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="zip">CONTENT</label>
                        <InputTextarea
                            value={content}
                            onChange={(evt) => setContent(evt.target.value)}
                            rows={5}
                            cols={30}
                            autoResize
                        />
                    </div>
                      <div className="p-field p-col-12 p-md-12">
                        <input
                        accept="image/*"
                        type="file"
                        name='image'
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
    records: state.blogs.blogs,

})

export default connect(
  mapStateToProps,
  {getBlogs, addBlog } )
  (Services);
