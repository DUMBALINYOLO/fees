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
  getHardCopyImages,
  unlockHardcopy,
} from '../../../actions/publications/onceoffs';
import { 
  getHardcopyLanguages, 
  addHardcopyLanguage,
  
} from '../../../actions/publications/publications';
import { getLockedHardCopy } from '../../../actions/publications/lockedhardcopies';
import {getLanguages} from '../../../actions/publications/languages';
import Detail from './Detail';
import Languages from './Languages';
import Images from './Images';







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
      this.props.getLockedHardCopy(this.props.match.params.id, this.props.token);
      this.props.getHardCopyImages(this.props.match.params.id, this.props.token);
      this.props.getLanguages(this.props.token);
      this.props.getHardcopyLanguages(this.props.match.params.id); 
      
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getLockedHardCopy(this.props.match.params.id, newProps.token);
        this.props.getHardCopyImages(this.props.match.params.id, newProps.token);
        this.props.getHardcopyLanguages(this.props.match.params.id);

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
              </Tabs>
            </AppBar>
          </Card>
          {value === 0 && <TabContainer><Detail token={this.props.token} unlockHardcopy={this.props.unlockHardcopy} data={this.props.hardcopy}/></TabContainer>}
          {value === 1 && <TabContainer><Languages getLanguages={this.props.getHardcopyLanguages} addLanguage={this.props.addHardcopyLanguage} hardcopylanguages={this.props.hardcopylanguages} languages={this.props.languages} token={this.props.token} data={this.props.hardcopy}/></TabContainer>}
          {value === 2 && <TabContainer><Images data={this.props.hardcopy} getImages={this.props.getHardCopyImages} images={this.props.images}/></TabContainer>}
        
          
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    hardcopy: state.lockedhardcopies.lockedhardcopy,
    images: state.onceoffs.hardcopyimages,
    hardcopylanguages: state.publications.hardcopylanguages,
    languages: state.languages.languages,
    token: state.auth.token,
    loading: state.series.loading,
  });
  
  
  
const SingleAccountMapped = connect(
    mapStateToProps,
    {
      unlockHardcopy,
      getHardCopyImages,
      getLockedHardCopy,
      getLanguages,
      getHardcopyLanguages, 
      addHardcopyLanguage,
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);

