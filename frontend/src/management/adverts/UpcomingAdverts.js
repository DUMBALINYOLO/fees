import React, { useEffect, useState, useRef } from "react"
import ManagementLayout from "../layout/ManagementLayout";
import { Dialog } from 'primereact/dialog';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { Toast } from 'primereact/toast';
import {Button} from 'primereact/button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  InputAdornment }
from '@material-ui/core';
import { Toolbar } from 'primereact/toolbar';
import CreateAdvert from './CreateAdvert';
import {
    getUpcomingAdverts,
    addUpcomingAdvert,
    editUpcomingAdvert
} from '../../actions/adverts/upcomingadverts';
import {Link} from 'react-router-dom';
import SearchAdvert from "./SearchAdvert";
import AdvertCard from "./AdvertCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

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


const options = {
  filterType: "checkbox"
};

const AdminUpcomingAdverts = props => {

  
  let emptyAdvert = {
    title: '',
    category: '',
    description: '',
    image: '',
    start_date: '',
    end_date: '',
  };

  const categories = [
    {key: 'publication', value: 'PUBLICATION'},
    {key: 'other', value:'OTHER'},
  ]



  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [record, setRecord] = useState(emptyAdvert);
  const [submitted, setSubmitted] = useState(false);
  const [newRecord, setNewRecord] = useState({});
  const [advertDialog, setAdvertDialog] = useState(false);
  const [openPopup, setOpenPopup] = useState(false)
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const [query, setQuery] = useState('')
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => {});
  const {token, records, userRole, email} =props;
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');





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
        props.getUpcomingAdverts(token);
    }
    console.log('mount it!');

  }, [newRecord]);


  // const addOrEdit = (fee, resetForm, token) => {
  //     if (fee.id > 0){
  //       props.editUpComingCourse(fee.id, fee, token)
  //       setNewCourse(fee)
  //       props.getAdminUpcomingCourses(query, token);
  //     }else{
  //       props.addUpComingCourse(fee, token)
  //       setNewCourse(fee)
  //       props.getAdminUpcomingCourses(query, token);
  //     }
  //     resetForm()
  //     setRecordForEdit(null)
  //     setOpenPopup(false)
  // }

  const saveAdvert = (e) => {
      setSubmitted(true);
      e.preventDefault();
      let _records = [...records];
      let _record = {...record};
      if (record.id) {
          const uploadData = new FormData();
          uploadData.append('title', title);
          uploadData.append('category', category);
          uploadData.append('description', description);
          uploadData.append('start_date', start_date);
          uploadData.append('end_date', end_date);
          uploadData.append('image', image, image.name);
          editUpcomingAdvert(record.id, uploadData, token)
          props.getUpcomingAdverts(token);
          setNewRecord(_record)
          setAdvertDialog(true);
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CATEGORY UPDATED', life: 3000 });
      }
      else {
          const uploadData = new FormData();
          uploadData.append('title', title);
          uploadData.append('category', category);
          uploadData.append('description', description);
          uploadData.append('start_date', start_date);
          uploadData.append('end_date', end_date);
          uploadData.append('image', image, image.name);
          props.addUpcomingAdvert(uploadData, token);
          setNewRecord(_record)
          props.getUpcomingAdverts(token);
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CATEGORY CREATED', life: 3000 });
      }
      setAdvertDialog(false);
      setRecord(emptyAdvert);
  }

  const openNew = () => {
      setRecord(emptyAdvert);
      setSubmitted(false);
      setAdvertDialog(true);
  }



  const hideDialog = () => {
      setSubmitted(false);
      setAdvertDialog(false);
  }

  const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
  }



  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/itdashboard/upcomingcourses/${id}`)
  }

  const leftToolbarTemplate = () => {
      return (
          <React.Fragment>
              <Button label="CREATE NEW ADVERT" className="p-button-info p-mr-2" onClick={openNew} />
          </React.Fragment>
      )
  }

  const advertDialogFooter = (
      <React.Fragment>
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-text"
            onClick={hideDialog}
          />
          <Button
            label="Save"
            icon="pi pi-check"
            className="p-button-text"
            onClick={saveAdvert}
          />
      </React.Fragment>
  );

  return (
    <ManagementLayout>

      <Paper className={classes.pageContent}>
      {props.loading ? (
          <div className={classes.rootaa}>
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress}/>
            <CircularProgress variant="determinate" value={progress} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          </div>
        ) : (
          <>
          <Toolbar className="p-mb-4" left={leftToolbarTemplate} />
            <Toast ref={toast} />


            <SearchAdvert
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
                  records.map((advert) => {
                    return (
                      <Grid item md={listView === 'list' ? 12 : 4} sm={listView === 'list' ? 12 : 6} xs={12} key={advert.id}>
                        <AdvertCard
                          list={listView === 'list'}
                          full_name={advert.title}
                          short_name={advert.category}
                          thumbnail={advert.image}
                          status={advert.end_date}
                          detailOpen={() => handleClick(advert.id)}
                          editItem={() => openInPopup(advert)}
                        />
                      </Grid>
                    );
                  })
                }
              </Grid>
          </>
        )}
      </Paper>
        <Dialog
          visible={advertDialog}
          style={{ width: '500px' }}
          header="CREATE ADVERT"
          modal
          className="p-fluid"
          footer={advertDialogFooter}
          onHide={hideDialog}
        >
          <CreateAdvert
              title ={title}
              category = {category}
              description = {description}
              image = {image}
              startDate = {start_date}
              endDate = {end_date}
              setTitle = {setTitle}
              setCategory = {setCategory}
              setDescription = {setDescription}
              setImage  = {setImage}
              setStartDate  = {setStartDate}
              setEndDate = {setEndDate}
              categories = {categories}
          />
      </Dialog>

    </ManagementLayout>
  );
};

const mapStateToProps = state =>({
    records: state.upcomingadverts.upcomingadverts,
    token: state.auth.token,
    userRole: state.auth.userRole,
    email: state.auth.email,

})

export default connect(
  mapStateToProps,
  {getUpcomingAdverts, addUpcomingAdvert, editUpcomingAdvert} )
  (AdminUpcomingAdverts);
