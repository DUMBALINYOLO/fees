import React, { Fragment, useEffect } from 'react';
import Corporate from '../../containers/Templates/Corporate';

import { Grid, Card, Button } from '@material-ui/core';
// import stock1 from '../../assets/images/stock-photos/stock-1.jpg';
import svgImage1 from '../../assets/images/illustrations/business_plan.svg';
import { connect } from 'react-redux';
import {getInstrumentationSystems} from '../../actions/services';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import 'aos/dist/aos.css';

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


function Software(props) {
  const { classes, records } = props;
  const history = useHistory();

  useEffect(() => {
    if(!props.fetched) {
        props.getInstrumentationSystems();
    }
    console.log('mount it!');

  }, []);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);

  const handleClick = id =>{
    history.push(`/instrumentationsystems/${id}`)
  }

  return (
    <Corporate>
      <div className={classes.root} data-aos="zoom-in-up">
        <Card className="card-box mb-4">
        { records.map((service) => {
            return (
              <Grid container spacing={4} key={service.id} data-aos="flip-left">
                <Grid item xs={12} lg={5}>
                  <img
                    alt="..."
                    className="rounded-left img-fit-container"
                    src={service.photo}
                    style={{height: '450px'}}
                  />
                </Grid>
                <Grid item xs={12} lg={7}>
                  <div className="p-5">
                    <img
                      alt="..."
                      className="w-25 d-block img-fluid"
                      src={svgImage1}
                    />
                    <h1 className="display-4 my-3 font-weight-bold">
                      {service.name}
                    </h1>
                    <p className="font-size-lg text-black">
                      {service.description}
                    </p>
                    <p className="font-size-sm mb-3">

                    </p>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => handleClick(service.id)}
                    >
                      CONTINUE TO VIEW PROJECTS & IMAGE GALLERY
                    </Button>
                  </div>
                </Grid>
              </Grid>
              );
            })
        }
        </Card>
      </div>
    </Corporate>
  );
}

const mapStateToProps = state =>({
  records: state.services.instrumentationsystems,
})

const MappedServices = connect(
mapStateToProps,
{getInstrumentationSystems} )
(Software);


export default withStyles(styles)(MappedServices);
