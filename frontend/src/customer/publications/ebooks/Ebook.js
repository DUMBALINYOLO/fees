import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Corporate from '../../../containers/Templates/CustomerWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {
  getCustomerEbook,
  getEbookLanguages,
} from '../../../actions/publications/publications';
import {
  getEbookSubsriptionPlans,
} from '../../../actions/publications/ebooksubscriptionplans';

import {
  getEbookImages,
} from '../../../actions/publications/ebooks';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Buy from './Buy';
import { Dialog } from 'primereact/dialog';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#424242',
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
    ebook,
    plans,
    images,
    languages,
    token,
  } = props;
  const [value, setValue] = React.useState(0);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);
  const [seriesDialog, setSeriesDialog] = useState(false);


  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerEbook(props.match.params.id);
        props.getEbookLanguages(props.match.params.id);
        props.getEbookSubsriptionPlans(props.match.params.id);
        props.getEbookImages(props.match.params.id);
    }
    console.log('mount it!');
  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openNew = () => {
    setSeriesDialog(true);
  }

  const hideDialog = () => {
      setSeriesDialog(false);
  }

  return (
    <>
      {token !== null ?

        <Corporate >
          <div className={classes.root}>
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
                            {ebook.title}
                          </h3>
                        </div>
                        <img
                          style={{height: '400px'}}
                          alt="..."
                          className="card-img-top"
                          src={ebook.cover}
                        />
                      </a>
                      <CardContent className="p-3">
                        <Dialog
                            visible={seriesDialog}
                            style={{ width: '400px' }}
                            header="IMAGE FORM"
                            modal
                            className="p-fluid"
                            onHide={hideDialog}
                            >
                                <Buy
                                    id={ebook.id}
                                    ebookDialog={setSeriesDialog}
                                />
                        </Dialog>

                        <div className="d-flex justify-content-between pt-3">
                          <Button
                            size="small"
                            variant="contained"
                            onClick={openNew}
                            color="primary">
                            SUBSCRIBE
                          </Button>
                          <Button size="small" color="primary">
                            AUTHOR : {ebook.author}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>


                  <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                    <span>LANGUAGES</span>
                  </div>
                  <div className="py-2 card-box-hover-rise">
                    <Grid container spacing={4}>
                      {
                        languages.map((language) => {
                          return (

                            <Grid item xs={12} sm={6} md={12} key={language.id}>
                              <Card className="card-box mb-4 p-3  card-box-hover-rise">
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
                    <Card className="card-box mb-4 card-box-hover-rise">
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
                                    <span className=" d-block">{ebook.genre}</span>
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
                                    <span className=" d-block">{ebook.published}</span>
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
                                    <span className=" d-block">{ebook.version}</span>
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
                                <Card className="card-box mb-4 p-3 card-box-hover-rise">
                                  <div>
                                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                                      <div>{plan.durationability} DAYS</div>
                                      <div className="ml-auto">${plan.price}</div>
                                    </div>
                                  </div>
                                </Card>
                              </Grid>
                            );
                          })
                        }

                      </Grid>
                    </div>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={12}>
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
                          {ebook.description}
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
                                    {ebook.title}
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
        : <Redirect to='/login'/>
      }
    </>
  );
};



const mapStateToProps = state => ({
    ebook: state.publications.customerebook,
    plans: state.ebooksubsriptionplans.ebooksubsriptionplans,
    images: state.ebooks.ebookimages,
    languages: state.publications.ebooklanguages,
    token: state.auth.token,
});



const SeriesMapped = connect(
    mapStateToProps,
    {
      getCustomerEbook,
      getEbookLanguages,
      getEbookSubsriptionPlans,
      getEbookImages
    }
  )(Series);


export default withStyles(styles)(SeriesMapped);
