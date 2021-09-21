import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from '../../api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import PublicLayout from '../layout/PublicLayout';
import Banner from '../../components/LandingPage/Banner';
import Feature from '../../components/LandingPage/Feature';
import Showcase from '../../components/LandingPage/Showcase';
import ShowcaseSlider from '../../components/LandingPage/ShowcaseSlider';
import Testimonials from '../../components/LandingPage/Testimonials';
import Technology from '../../components/LandingPage/Technology';
import Pricing from '../../components/LandingPage/Pricing';
import Contact from '../../components/LandingPage/Contact';



import styles from './dashboard-jss';


class InformationTechnologyHome extends PureComponent {
  render() {
    const title =  ' FLEXIBLE MEASUREMENTS AND CONTROL SYSTEMS ';
    const description = brand.desc;
    return (
      <PublicLayout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div>
        <section id="banner">
          <Banner />
        </section>
        
      </div>
      
      </PublicLayout>
    );
  }
}

InformationTechnologyHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationTechnologyHome);

