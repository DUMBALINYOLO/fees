import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import svgImage1 from '../../assets/images/illustrations/business_plan.svg';

import svgImage4 from '../../assets/images/illustrations/maps.svg';
import svgImage5 from '../../assets/images/illustrations/experience_design.svg';
import svgImage6 from '../../assets/images/illustrations/data_points.svg';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function LivePreviewExample() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <h1 style={{textAlign: 'center', color: 'teal'}}>FLEXIBLE MEASUREMENT & CONTROL SYSTEMS SERVICE CATEGORIES</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box p-4 mb-4" data-aos="zoom-in-up">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <h4 className="font-size-xl font-weight-bold mb-2">
                  COMMUNICATION & INDUSTRIAL NETWORKING SYSTEMS
                </h4>
                <Button color="primary" className="text-first">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/communicationsystems'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-25 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage1} />
              </div>
            </div>
          </Card>
          <Card className="card-box bg-midnight-bloom p-4 mb-4" data-aos="flip-left">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <h4 className="font-size-xl text-white font-weight-bold mb-2">
                  CONTROL & DATA ACQUISITION SYSTEMS
                </h4>
                <Button color="secondary" className="text-white">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/controlsystems'
                    >
                      see more ..
                    </Button>

                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage4} />
              </div>
            </div>
          </Card>
          <Card className="card-box p-4 mb-4" data-aos="flip-right">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'lightbulb']} />
                </div>
                <h4 className="font-size-xl font-weight-bold mb-2">
                  ELECTRICAL SWITCHGEAR & CABINETS
                </h4>
                <Button color="primary" className="text-warning">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/electricalsystems'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage5} />
              </div>
            </div>
          </Card>
          <Card className="card-box bg-neutral-danger border-danger p-4 mb-4" data-aos="flip-up">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <h4 className="font-size-xl text-danger font-weight-bold mb-2">
                  CYBER SECURITY  SYSTEMS
                </h4>
                <Button color="primary" className="text-danger">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/cybersecuritysystems'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage6} />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className="card-box bg-midnight-bloom p-4 mb-4" data-aos="flip-down">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <h4 className="font-size-xl text-white font-weight-bold mb-2">
                  INSTRUMENTATION SYSTEMS
                </h4>
                <Button color="secondary" className="text-white">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/instrumentationsystems'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage4} />
              </div>
            </div>
          </Card>
          <Card className="card-box p-4 mb-4" data-aos="zoom-in">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'lightbulb']} />
                </div>
                <h4 className="font-size-xl font-weight-bold mb-2">
                  SOFTWARE SYSTEMS
                </h4>
                <Button color="primary" className="text-warning">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/softwares'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage5} />
              </div>
            </div>
          </Card>
          <Card className="card-box bg-neutral-danger border-danger p-4 mb-4" data-aos="zoom-in-up">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <h4 className="font-size-xl text-danger font-weight-bold mb-2">
                  WEIGHING SYSTEMS
                </h4>
                <Button color="primary" className="text-danger">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/weighingsystems'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage6} />
              </div>
            </div>
          </Card>
          <Card className="card-box p-4 mb-4" data-aos="zoom-in-down">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <h4 className="font-size-xl font-weight-bold mb-2">
                  MOTORS & DRIVES
                </h4>
                <Button color="primary" className="text-first">
                  <span className="btn-wrapper--label">
                    <Button
                      color="inherit"
                      className="text-white px-4 py-2 text-capitalize"
                      component={Link}
                      to='/motorsanddrives'
                    >
                      see more ..
                    </Button>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-25 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage1} />
              </div>
            </div>
          </Card>


        </Grid>
      </Grid>
    </Fragment>
  );
}
