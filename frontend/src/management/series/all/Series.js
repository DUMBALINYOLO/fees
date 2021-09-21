import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../../layout/ManagementLayout'
import {
  Card, 
} from '@material-ui/core';
import { 
  getSeriesImages,
  unlockSeries
} from '../../../actions/publications/series';
import { 
  getSeriesLanguages, 
  addSeriesLanguage,
  
} from '../../../actions/publications/publications';
import {
  getSeriesSubsriptionPlans,
  addSeriesSubsriptionPlan,
  editSeriesSubsriptionPlan ,
} from '../../../actions/publications/seriessubscriptionplans';
import {getLanguages} from '../../../actions/publications/languages';
import {getSeries} from  '../../../actions/publications/allseries';
import Detail from './Detail';
import Languages from './Languages';
import Images from './Images';
import Plans from './Plans';






function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollIconTabs extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getSeries(this.props.match.params.id, this.props.token);
      this.props.getSeriesImages(this.props.match.params.id, this.props.token);
      this.props.getLanguages(this.props.token);
      this.props.getSeriesLanguages(this.props.match.params.id);  
      this.props.getSeriesSubsriptionPlans(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getSeries(this.props.match.params.id, newProps.token);
        this.props.getSeriesImages(this.props.match.params.id, newProps.token);
        this.props.getSeriesLanguages(this.props.match.params.id);
        this.props.getSeriesSubsriptionPlans(this.props.match.params.id);      
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { 
        classes
    } = this.props;
    const { value } = this.state;


    return (
      <ManagementLayout>
        <div className={classes.root}>
          <Card className="card-box mb-4">
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={this.handleChange}
                variant="fullWidth"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="secondary"
              >
                <Tab label="DETAILS" />
                <Tab label="LANGUAGES" />
                <Tab label="IMAGES" />
                <Tab label="SUBSCIRPTION PLANS" />
              </Tabs>
            </AppBar>
          </Card>
          {value === 0 && <TabContainer><Detail token={this.props.token} unlockSeries={this.props.unlockSeries} data={this.props.series}/></TabContainer>}
          {value === 1 && <TabContainer><Languages getLanguages={this.props.getSeriesLanguages} addLanguage={this.props.addSeriesLanguage} serieslanguages={this.props.serieslanguages} languages={this.props.languages} token={this.props.token} data={this.props.series}/></TabContainer>}
          {value === 2 && <TabContainer><Images data={this.props.series} getImages={this.props.getSeriesImages} images={this.props.images}/></TabContainer>}
          {value === 3 && <TabContainer><Plans token={this.props.token} addPlan={this.props.addSeriesSubsriptionPlan} getPlans={this.props.getSeriesSubsriptionPlans} plans={this.props.plans} data={this.props.series}/></TabContainer>}
          
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    series: state.allseries.series,
    plans: state.seriessubsriptionplans.seriessubsriptionplans,
    images: state.series.seriesimages,
    serieslanguages: state.publications.serieslanguages,
    languages: state.languages.languages,
    token: state.auth.token,
    loading: state.series.loading,
  });
  
  
  
const SingleAccountMapped = connect(
    mapStateToProps,
    {
      getSeries,
      getSeriesImages,
      getSeriesLanguages, 
      addSeriesLanguage,
      getSeriesSubsriptionPlans,
      addSeriesSubsriptionPlan,
      editSeriesSubsriptionPlan,
      getLanguages,
      unlockSeries
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
