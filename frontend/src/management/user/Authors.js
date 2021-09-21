import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from '../../api/dummy/brand';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import styles from './contact-jss';
import { getAuthor } from '../../actions/users/authors';
import ManagementLayout from '../layout/ManagementLayout'

class Authors extends React.Component {
  componentDidMount() {
    this.props.getAuthor(this.props.match.params.id);
  }

  render() {
    const description = brand.desc;
    const {author} = this.props;
    const { id } = author;

    const {
      classes,
      itemSelected,
      showDetail,
      hideDetail,
      showMobileDetail,
    } = this.props;

    return (
      <ManagementLayout>
        <Helmet>
          <title>{author.title}</title>
          <meta name="description" content={author.description} />
          <meta property="og:title" content={author.title} />
          <meta property="og:description" content={author.description} />
          <meta property="twitter:title" content={author.title} />
          <meta property="twitter:description" content={author.description} />
        </Helmet>
        <div className={classes.root}>
          <ContactList
            total={getAuthor.size}
            itemSelected={itemSelected}
            getAuthor={getAuthor}
            showDetail={showDetail}
          />
          <ContactDetail
            showMobileDetail={showMobileDetail}
            hideDetail={hideDetail}
            getAuthor={getAuthor}
            itemSelected={itemSelected}
          />
        </div>
      </ManagementLayout>
    );
  }
}

Authors.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state,
  author: state.authors.author,
});


const AuthorsMapped = connect(
  mapStateToProps,
  {getAuthor}
)(Authors);

export default withStyles(styles)(AuthorsMapped);