import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section py-3">
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: 'gold'}}>FERTILIZER MANUFACTURING</h3>
                <p className=" mt-3" style={{color: 'gold'}}>
                  The company is putting up in place systems to produce at least 200,000 tonnes of agricultural grade 
                   fertiliser per year. 
                  It has future plans to increase installed capacity while making use of modern and clean technologies to 
                  guarantee food security in Africa .
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'gem']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: 'gold'}}>
                  PRECISION AGRICULTUE & AUTOMATION
                </h3>
                <p className=" mt-3" style={{color: 'gold'}}>
                  We provide technologies for precision agriculture. We are invested towards offering
                  our clients technologies commonly used in precision agriculture
                  applications for crop, root, and soil monitoring etc 
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'eye']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: 'gold'}}>PRECAST CONCRETE</h3>
                <p className="mt-3" style={{color: 'gold'}}>
                We specialise in manufacturing and supplying of precast concrete 
                products mainly used in civil engineering. We exist to mould precast concrete 
                in a way that address our clients’ needs and deliver it with a professional 
                touch commensurate to our high quality product standards.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'building']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: 'gold'}}>PREFABRICATED BUILDINGS</h3>
                <p className=" mt-3" style={{color: 'gold'}}>
                  We are working torwards modular prefab buildings designs and manufactures advanced modular 
                  buildings for a selection of markets including education, schools, classrooms, hospitals, 
                  healthcare, residential and student accommodation, offices, 
                  commercial spaces, medical labs and commercial
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
