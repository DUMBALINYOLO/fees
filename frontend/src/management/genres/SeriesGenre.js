import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import {
    getSeriesGenre
    
} from '../../actions/publications/publications';
import { getSeries, getPublishedSeries } from '../../actions/publications/series';
import { getAllSeries } from '../../actions/publications/allseries';
import SupplierDetail from './SeriesDetail';
import AllSeries from '../series/AllSeries';
import LockedSeries from '../series/LockedSeries';
import PublishedSeries from '../series/PublishedSeries'





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
      this.props.getPublishedSeries(this.props.match.params.id, this.props.token);
      this.props.getSeriesGenre(this.props.match.params.id);  
      this.props.getAllSeries(this.props.match.params.id, this.props.token); 
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getSeries(this.props.match.params.id, newProps.token);
        this.props.getPublishedSeries(this.props.match.params.id, newProps.token);
        this.props.getSeriesGenre(this.props.match.params.id);
        this.props.getAllSeries(this.props.match.params.id, newProps.token);
      
        
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { 
        token,
        classes
    } = this.props;
    const { value } = this.state;


    return (
      <ManagementLayout>
        <div className={classes.root}>
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
              <Tab label="ALL" />
              <Tab label="LOCKED" />
              <Tab label="PUBLISHED" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><SupplierDetail data={this.props.seriesgenre}/></TabContainer>}
          {value === 1 && <TabContainer><AllSeries getSeries={this.props.getAllSeries} records={this.props.allseries} data={this.props.seriesgenre}/></TabContainer>}
          {value === 2 && <TabContainer><LockedSeries records={this.props.series}/></TabContainer>}
          {value === 3 && <TabContainer><PublishedSeries  records={this.props.publishedseries}/></TabContainer>}
          
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    seriesgenre: state.publications.seriesgenre,
    allseries: state.allseries.allseries,
    publishedseries: state.series.publishedseries,
    series: state.series.series,
    token: state.auth.token,
    loading: state.orders.loading,
  });
  
  
  
const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getSeries, 
        getPublishedSeries,
        getSeriesGenre,
        getAllSeries


    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
