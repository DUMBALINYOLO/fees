import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Corporate from '../../containers/Templates/Corporate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import 'aos/dist/aos.css';
import {getInstrumentationSystem, getImages, getProjects} from '../../actions/services';
import {
  Grid,
  InputAdornment,
  Avatar,
  IconButton,
  Box,
  Typography,
  Checkbox,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField,
  Divider
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../assets/images/avatars/avatar6.jpg';

import people1 from '../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../assets/images/stock-photos/people-3.jpg';

import Trend from 'react-trend';
import CountUp from 'react-countup';

import { Users, Layers } from 'react-feather';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '65px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Service = (props) => {
  const [value, setValue] = React.useState(0);
  const { classes, projects, images, service } = props;



  useEffect(() => {
    if(!props.fetched) {
      props.getInstrumentationSystem(props.match.params.id);
      props.getImages(props.match.params.id);
      props.getProjects(props.match.params.id);
    }
    console.log('mount it!');

  }, []);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate>
      <div className={classes.root} data-aos="zoom-in-up">
        <Card className="card-box mb-4">
          <div>
            <div className="d-block p-3 d-md-flex justify-content-between align-items-center text-center text-md-left">
              <div className="d-flex flex-md-row flex-column align-items-center">
                <div className="mx-3 d-none d-md-block">
                  <div className="divider-v position-relative" />
                  <div className="divider-v position-relative" />
                </div>
                <div>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </div>
              <div className="d-block d-md-flex align-items-center">
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="font-weight-bold px-3">
                  {service.name}
                </Button>
              </div>
            </div>
            <Divider />
            <Tabs
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="ABOUT" />
              <Tab label="GALLERY" />
              <Tab label="PROJECTS" />
            </Tabs>
          </div>
        </Card>
        <TabPanel value={value} index={0}>
          <Grid container spacing={4} data-aos="zoom-in-up">
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4 pt-4" data-aos="zoom-in-up">
                <div className="card-tr-actions">
                  <Checkbox />
                </div>
                <div className="d-flex flex-wrap mb-1 mx-2">
                  <div className="w-50 p-3">
                    <Button
                      color="primary"
                      className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                      <div>

                        <div className="font-size-sm mb-1 opacity-8">
                          {service.name}
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4 pt-4" data-aos="zoom-in-up">
                <div className="d-flex align-items-center px-4 mb-3">
                  <div className="w-100">
                    <Button
                        color="primary"
                        className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">

                        <span className=" d-block pb-1">
                          {service.description}
                        </span>
                      </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>

          <Grid container spacing={4} data-aos="zoom-in-up">
            { images.map((image) => {
              return (
                <Grid item xs={12} lg={6} key ={image.id} data-aos="zoom-in-up">
                  <Card className="mb-4">
                    <div className="card-badges">
                      <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                        {service.name}
                      </span>
                    </div>
                      <img
                        alt="..."
                        className="card-img-top"
                        src={image.photo}
                        style={{height: '700px'}}
                      />
                  </Card>
                </Grid>
                );
                })
              }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card className="card-box p-2 mb-4" data-aos="zoom-in-up">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered text-nowrap mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center" style={{ width: '5%' }}></th>
                    <th>TITLE</th>
                    <th>DATE</th>
                    <th className="text-center" style={{ width: '20%' }}>
                      STATUS
                    </th>
                    <th>LOCATION</th>
                    <th className="text-center">URL LINK</th>
                  </tr>
                </thead>
                <tbody>
                  { projects.map((project) => {
                      return (
                        <tr data-aos="zoom-in-up" key={project.id}>
                          <td className="text-center" >
                            <Checkbox
                              id="CustomCheckbox5"
                              className="align-self-start"
                            />
                          </td>
                          <td>
                            <div className="d-flex align-items-center">

                              <div>
                                <span className="text-black-50 d-block">
                                  {project.title}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="align-box-row text-danger">
                              <div className="text-info ml-2 badge badge-neutral-info">
                                {project.date}
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="badge badge-success h-auto py-0 px-3">
                              Completed
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">

                              <div>
                                <span className=" d-block">
                                  {project.location}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <IconButton size="small" color="primary">
                              {project.url_link}
                            </IconButton>
                          </td>
                        </tr>
                        );
                      })
                  }
                </tbody>
              </table>
            </div>
            <Divider />
          </Card>

        </TabPanel>
      </div>
    </Corporate>
  );
};
const mapStateToProps = state =>({
  service: state.services.instrumentationsystem,
  images: state.services.images,
  projects: state.services.projects,
})

const MappedServices = connect(
mapStateToProps,
{getInstrumentationSystem, getImages, getProjects} )
(Service);


export default withStyles(styles)(MappedServices);
