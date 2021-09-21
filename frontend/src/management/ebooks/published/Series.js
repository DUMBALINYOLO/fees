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
  getEbookImages,
  unlockEbook
} from '../../../actions/publications/ebooks';

import { 
  getEbookLanguages, 
  addEbookLanguage,
  
} from '../../../actions/publications/publications';
import {
  getEbookSubsriptionPlans,
  addEbookSubsriptionPlan,
  editEbookSubsriptionPlan,
} from '../../../actions/publications/ebooksubscriptionplans';
import {getLanguages} from '../../../actions/publications/languages';
import {getPublishedEbook} from  '../../../actions/publications/publishedebooks';
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
      this.props.getPublishedEbook(this.props.match.params.id, this.props.token);
      this.props.getEbookImages(this.props.match.params.id, this.props.token);
      this.props.getLanguages(this.props.token);
      this.props.getEbookLanguages(this.props.match.params.id);  
      this.props.getEbookSubsriptionPlans(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getPublishedEbook(this.props.match.params.id, newProps.token);
        this.props.getEbookImages(this.props.match.params.id, newProps.token);
        this.props.getEbookLanguages(this.props.match.params.id);
        this.props.getEbookSubsriptionPlans(this.props.match.params.id);      
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
          {value === 0 && <TabContainer><Detail token={this.props.token} unlockEbook={this.props.unlockEbook} data={this.props.ebook}/></TabContainer>}
          {value === 1 && <TabContainer><Languages getLanguages={this.props.getEbookLanguages} addLanguage={this.props.addEbookLanguage} ebooklanguages={this.props.ebooklanguages} languages={this.props.languages} token={this.props.token} data={this.props.ebook}/></TabContainer>}
          {value === 2 && <TabContainer><Images data={this.props.ebook} getImages={this.props.getEbookImages} images={this.props.images}/></TabContainer>}
          {value === 3 && <TabContainer><Plans token={this.props.token} addPlan={this.props.addEbookSubsriptionPlan} getPlans={this.props.getEbookSubsriptionPlans} plans={this.props.plans} data={this.props.ebook}/></TabContainer>}
          
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    ebook: state.publishedebooks.publishedebook,
    plans: state.ebooksubsriptionplans.ebooksubsriptionplans,
    images: state.ebooks.ebookimages,
    ebooklanguages: state.publications.ebooklanguages,
    languages: state.languages.languages,
    token: state.auth.token,
    loading: state.series.loading,
  });
  
  
  
const SingleAccountMapped = connect(
    mapStateToProps,
    {
      getEbookImages,
      unlockEbook,
      getLanguages,
      getEbookLanguages, 
      addEbookLanguage,
      getEbookSubsriptionPlans,
      addEbookSubsriptionPlan,
      editEbookSubsriptionPlan,
      getPublishedEbook,
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
