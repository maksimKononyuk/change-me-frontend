import coverImg from 'dan-images/petal_bg.svg';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './users-jss';

function UserPage(props) {
  const { classes, children } = props;
  return (
    <div
      className={classes.cover}
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      {children}
    </div>
  );
}
UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.bool.isRequired,
};

export default withStyles(styles)(UserPage);
