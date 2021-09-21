import React, {useState, useRef } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
 } from '@material-ui/core';
import SearchEbook from "./SearchSeries";
import EbookCard from "./SeriesCard";
import CreateSeries from './Create';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'


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




const AllSeries = props => {

  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [seriesDialog, setSeriesDialog] = useState(false);
  const [listView, setListView] = useState('grid')
  const [openPopup, setOpenPopup] = useState(false)
  const history = useHistory();
  const toast = useRef(null);
  const { records, data} = props;

  const openNew = () => {
    setSeriesDialog(true);
  }

  const hideDialog = () => {
      setSeriesDialog(false);
  }

  const leftToolbarTemplate = () => {
      return (
          <React.Fragment>
              <Button 
                  label="ADD SERIES" 
                  className="p-button-success" 
                  onClick={openNew}
              />
          </React.Fragment>
      )
  }












  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/managementdashboard/all-series/${id}`)
  }

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }



  return (
    <>

      <Paper className={classes.pageContent}>
        <Toast ref={toast} />
            <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
                <Dialog
                    visible={seriesDialog}
                    style={{ width: '800px' }}
                    header="SERIES FORM"
                    modal
                    className="p-fluid"
                    onHide={hideDialog}
                    >
                      <CreateSeries
                        id={data.id}
                        getSeries={props.getSeries}
                        seriesDialog={setSeriesDialog}
                    />

                </Dialog>


            <SearchEbook
                courseData={records}
                listView={listView}
                handleSwitchView={handleSwitchView}
              />
              <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
                direction="row"
                spacing={3}
              >
                {
                  records.map((series) => {
                    return (
                      <Grid
                        item
                        md={listView === 'list' ? 12 : 3}
                        sm={listView === 'list' ? 12 : 6}
                        xs={12}
                        key={series.id}
                      >
                        <EbookCard
                          list={listView === 'list'}
                          full_name={series.title}
                          short_name={series.genre}
                          thumbnail={series.cover}
                          status={series.version}
                          detailOpen={() => handleClick(series.id)}
                          editItem={() => openInPopup(series)}
                        />
                      </Grid>
                    );
                  })
                }
              </Grid>
        </Paper>

    </>
  );
};



export default AllSeries;
