import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Corporate from '../../../containers/Templates/Operate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CountUp from 'react-countup';
import {
  Grid,
  Fab,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import {
  getCustomerSingleSeries,
  getSeriesLanguages,
} from '../../../actions/publications/publications';
import {
  getSeriesSubsriptionPlans,
} from '../../../actions/publications/seriessubscriptionplans';
import {
  getSeriesImages,
} from '../../../actions/publications/series';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AOS from "aos";
import 'aos/dist/aos.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '30px',
    paddingLeft: '40px',
    paddingRight: '20px',
    paddingBottom: '20px',
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

const Series = (props) => {
  const {
    classes,
    series,
    plans,
    images,
    languages,
  } = props;
  const [value, setValue] = React.useState(0);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);


  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerSingleSeries(props.match.params.id);
        props.getSeriesLanguages(props.match.params.id);
        props.getSeriesImages(props.match.params.id);
        props.getSeriesSubsriptionPlans(props.match.params.id);
    }
    console.log('mount it!');
  }, []);

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate >
      <div className={classes.root} data-aos="zoom-in-up">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={12}>
                <Card className="mb-4">
                  <div className="card-badges">
                    <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                      UBUNTU-AFRO PUBLISHERS
                    </span>
                  </div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="image-title-overlay"
                    title="...">
                    <div className="image-title-overlay--bottom">
                      <h3 className="display-4 font-weight-bold m-0 text-white">
                        {series.title}
                      </h3>
                    </div>
                    <img 
                      alt="..." className="card-img-top" 
                      src={series.cover}
                      style={{height: '400px'}}
                    />
                  </a>
                  <CardContent className="p-3">
                    <div className="d-flex justify-content-between mb-4">
                      <div>
                        <Button
                          variant="outlined"
                          color="secondary"
                          className="py-1 px-2 font-weight-bold">
                          <span className="text-success pr-1">${series.hardcopy_read_price}</span>
                        </Button>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between pt-3">
                      <Button
                        size="small"
                        variant="contained"
                        component={Link}
                        to='/login'
                        color="primary">
                        buy
                      </Button>
                      <Button size="small" color="primary">
                        AUTHOR : {series.author}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>


              <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                <span>LANGUAGES</span>
              </div>
              <div className="py-2">
                <Grid container spacing={4}>
                  {
                    languages.map((language) => {
                      return (

                        <Grid item xs={12} sm={6} md={12} key={language.id}>
                          <Card className="card-box mb-4 p-3">
                            <div>
                              <div className="align-box-row progress-bar--label mt-2 text-muted">
                                <div>Language</div>
                                <div className="ml-auto">{language.name}</div>
                              </div>
                            </div>
                          </Card>
                        </Grid>
                      );
                    })
                  }

                </Grid>
              </div>
              <div className="divider opacity-2 my-4" />
              <div className="py-2">
                <Card className="card-box mb-4">
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={4}>
                        <div className="divider-v divider-v-lg" />
                        <Grid container spacing={4}>
                          <Grid item xs={12}>
                            <div className="text-center py-3">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-xxl text-info"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg">GENRE</b>
                                <span className=" d-block">{series.genre}</span>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div className="divider-v divider-v-lg" />
                        <Grid container spacing={4}>
                          <Grid item xs={12}>
                            <div className="text-center py-3">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'lightbulb']}
                                  className="font-size-xxl text-success"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg">PUBLISHED</b>
                                <span className=" d-block">{series.published}</span>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Grid container spacing={4}>
                          <Grid item xs={12}>
                            <div className="text-center py-3">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'keyboard']}
                                  className="font-size-xxl text-danger"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg">VERSION</b>
                                <span className=" d-block">{series.version}</span>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
              </div>
              <div className="divider opacity-2 my-4" />
                <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                  <span>PRICING PLANS</span>
                </div>
                <div className="py-2">
                  <Grid container spacing={4}>
                    {
                      plans.map((plan) => {
                        return (

                          <Grid item xs={12} sm={6} md={6} key={plan.id}>
                            <Card className="card-box mb-4 p-3">
                              <div>
                                <div className="align-box-row progress-bar--label mt-2 text-muted">
                                  <div>{plan.durationability} DAYS</div>
                                  <div className="ml-auto">${plan.online_read_price}</div>
                                </div>
                              </div>
                            </Card>
                          </Grid>
                        );
                      })
                    }

                  </Grid>
                </div>
              <div className="divider opacity-3 my-4" />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="DESCRIPTION" />
              <Tab label="IMAGES" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
                <Grid item xs={12} lg={12}  data-aos="zoom-in-up">
                <Card className="mb-4">
                  <CardContent className="p-3">
                    
                    <p className="card-text">
                      {series.description}
                    </p>
                  </CardContent>
                </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="app-inner-content-layout--main" style={{paddingTop: '20px'}}>
                <PerfectScrollbar>
                  <Grid container spacing={4} data-aos="zoom-in-up">
                    { images.map((image) => {
                      return (
                        <Grid item xs={12} lg={6} key ={image.id} data-aos="zoom-in-up">
                          <Card className="mb-4">
                            <div className="card-badges">
                              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                                {series.title}
                              </span>
                            </div>
                              <img
                                alt="..."
                                className="card-img-top"
                                src={image.image}
                                style={{height: '500px'}}
                              />
                          </Card>
                        </Grid>
                        );
                        })
                      }
                  </Grid>
                </PerfectScrollbar>
              </div>
              <div
                onClick={toggleSidebarMenu2}
                className={clsx('sidebar-inner-layout-overlay', {
                  active: isSidebarMenuOpen2
                })}
              />

            </TabPanel>
          </Grid>
        </Grid>
        <div className="sidebar-inner-layout-overlay" />
      </div>
    </Corporate>
  );
};

const mapStateToProps = state => ({
    series: state.publications.customersingleseries,
    plans: state.seriessubsriptionplans.seriessubsriptionplans,
    images: state.series.seriesimages,
    languages: state.publications.serieslanguages,
  });



const SeriesMapped = connect(
    mapStateToProps,
    {
      getCustomerSingleSeries,
      getSeriesLanguages,
      getSeriesImages,
      getSeriesSubsriptionPlans,
    }
  )(Series);


export default withStyles(styles)(SeriesMapped);
