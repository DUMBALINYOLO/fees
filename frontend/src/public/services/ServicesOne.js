import React, { Fragment } from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import svgImage1 from '../../assets/images/illustrations/business_plan.svg';

import svgImage13 from '../../assets/images/illustrations/businesswoman.svg';
import svgImage14 from '../../assets/images/illustrations/powerful.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section">
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage1}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{color: 'gold'}}>ASSET MANAGEMENT & TRACKING</h3>
                <p className="mb-3" style={{color: 'gold'}}>
                  We track  custody, location, and maintenance of organizational valued assets from acquisition to 
                  disposal and Improve visibility to lower overheads linked with missing or stolen.
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span >Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage13}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{color: 'gold'}}>
                  RENEWABLE ENERGY SYSTEMS
                </h3>
                <p className=" mb-3" style={{color: 'gold'}}>
                  We provide utility services, develop, construct, and operation of offer renewables service solutions to our clients
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage14}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{color: 'gold'}}>HYDROGEN & AMOMONIA PRODUCTION</h3>
                <p className=" mb-3" style={{color: 'gold'}}>
                  We intend to be a leading developer of NH3 (ammonia) & H2 (hydrogen) fuel and energy technologies in Africa. 
                  We are setting up systems in place for efficient NH3 (Ammonia) & H2 (hydrogen) fuel conversion systems and related 
                  technologies for automotive and power generation applications.
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
