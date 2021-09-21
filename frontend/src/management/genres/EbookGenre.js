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
    getEbookGenre

} from '../../actions/publications/publications';
import { getEbooks,  } from '../../actions/publications/ebooks';
import { getPublishedEbooks } from '../../actions/publications/publishedebooks';
import { getAllEbooks } from '../../actions/publications/allebooks';
import Detail from './EbookDetail';
import AllEbooks from '../ebooks/AllEbooks';
import LockedEbooks from '../ebooks/LockedSeries';
import PublishedEbooks from '../ebooks/PublishedEbooks'





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
      this.props.getEbookGenre(this.props.match.params.id, this.props.token);
      this.props.getEbooks(this.props.match.params.id, this.props.token);
      this.props.getPublishedEbooks(this.props.match.params.id, this.props.token);
      this.props.getAllEbooks(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getEbookGenre(this.props.match.params.id, newProps.token);
        this.props.getEbooks(this.props.match.params.id, newProps.token);
        this.props.getPublishedEbooks(this.props.match.params.id, newProps.token);
        this.props.getAllEbooks(this.props.match.params.id, newProps.token);
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
          {value === 0 && <TabContainer><Detail data={this.props.ebookgenre}/></TabContainer>}
          {value === 1 && <TabContainer><AllEbooks getEbooks={this.props.getAllEbooks} records={this.props.allebooks} data={this.props.ebookgenre}/></TabContainer>}
          {value === 2 && <TabContainer><LockedEbooks records={this.props.ebooks}/></TabContainer>}
          {value === 3 && <TabContainer><PublishedEbooks  records={this.props.publishedebooks}/></TabContainer>}

        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    ebookgenre: state.publications.ebookgenre,
    allebooks: state.allebooks.allebooks,
    publishedebooks: state.publishedebooks.publishedebooks,
    ebooks: state.ebooks.ebooks,
    token: state.auth.token,
    loading: state.orders.loading,
  });



const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getEbookGenre,
        getEbooks,
        getPublishedEbooks,
        getAllEbooks,


    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
