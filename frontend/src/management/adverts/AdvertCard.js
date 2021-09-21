import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import styles from './cardStyles-jss'
import four from './four.jpg';
import {mocalhost} from '../../constants';



class AdvertCard extends React.Component {
  render() {
    const {
      classes,
      thumbnail,
      full_name,
      short_name,
      id,
      description,
      status,
      start_date,
      end_date,
      list,
      detailOpen,
      width,
      editItem,
      handleClick
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <div className={classes.status}>
          {status}
        </div>
        <CardMedia
          className={classes.mediaProduct}

          image={thumbnail} 
          title={full_name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
            {full_name}
          </Typography>
          <Typography component="p" className={classes.desc}>
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.price}>
          <Typography variant="h5">
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={editItem}
            >
              Edit
            </Button>
          </Typography>
          <div className={classes.rightAction}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={detailOpen}
            >
              See More
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}


const AdvertCardResponsive = withWidth()(AdvertCard);
export default withStyles(styles)(AdvertCardResponsive);