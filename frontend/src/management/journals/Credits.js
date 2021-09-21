import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import {
  Paper,

}

from '@material-ui/core';





const Credits = (props) => {


    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);


    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );



   
    return (
      <>
        <Paper className='bg-royal card-box-hover-rise'>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">

                    <DataTable
                        ref={dt}
                        value={props.records}
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
                          field="date"
                          header="DATE"
                          sortable
                          filter

                        />
                        <Column
                          field="account"
                          header="ACCOUNT"
                          sortable
                          filter

                        />
                        <Column
                          field="amount"
                          header="AMOUNT"
                          sortable
                          filter

                        />

                    </DataTable>
                </div>
            </div>
          </Paper>
        </>
    );
}



export default Credits;
